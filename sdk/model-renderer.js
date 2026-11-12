import { THREE, GLTFLoader, SVGLoader } from './three-bundle.js';

const gltfLoader = new GLTFLoader();
const svgLoader = new SVGLoader();
const textureLoader = new THREE.TextureLoader();
const DEFAULT_SVG_CURVE_SEGMENTS = 24;

const _quat1 = new THREE.Quaternion();
const _quat2 = new THREE.Quaternion();
const _euler = new THREE.Euler();
const _v3 = new THREE.Vector3();

// Compute local bounding box corners for hover detection
function computeLocalBoxCorners(state) {
  const innerModel = state.model.children[0];
  if (!innerModel) return;

  // Reset parent transform temporarily to get true local-space bounds
  const savedRotation = state.model.rotation.clone();
  const savedPosition = state.model.position.clone();
  const savedScale = state.model.scale.clone();
  state.model.rotation.set(0, 0, 0);
  state.model.position.set(0, 0, 0);
  state.model.scale.set(1, 1, 1);
  state.model.updateMatrixWorld(true);

  const localBox = new THREE.Box3().setFromObject(innerModel);

  // Store 8 corners of the bounding box in local space
  state.model.userData.localBoxCorners = [
    new THREE.Vector3(localBox.min.x, localBox.min.y, localBox.max.z),
    new THREE.Vector3(localBox.max.x, localBox.min.y, localBox.max.z),
    new THREE.Vector3(localBox.max.x, localBox.min.y, localBox.min.z),
    new THREE.Vector3(localBox.min.x, localBox.min.y, localBox.min.z),
    new THREE.Vector3(localBox.min.x, localBox.max.y, localBox.max.z),
    new THREE.Vector3(localBox.max.x, localBox.max.y, localBox.max.z),
    new THREE.Vector3(localBox.max.x, localBox.max.y, localBox.min.z),
    new THREE.Vector3(localBox.min.x, localBox.max.y, localBox.min.z),
  ];

  // Restore transform
  state.model.rotation.copy(savedRotation);
  state.model.position.copy(savedPosition);
  state.model.scale.copy(savedScale);
  state.model.updateMatrixWorld(true);
}

// Custom glass shader with physically-based refraction
// Mirrors the lighting calculations from the Curtains fragment shader
const glassVertexShader = `
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;
  varying vec4 vClipPosition;
  
  void main() {
    vWorldNormal = normalize((modelMatrix * vec4(normal, 0.0)).xyz);
    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    vec4 clipPos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vClipPosition = clipPos;
    gl_Position = clipPos;
  }
`;

const glassFragmentShader = `
  uniform sampler2D uBackgroundTexture;
  uniform sampler2D uEnvMap;
  uniform float uEnvMapIntensity;
  uniform vec2 uResolution;
  uniform float uIOR;
  uniform float uThickness;
  uniform float uBlur;
  uniform vec3 uTint;
  uniform float uDispersion;
  uniform vec3 uCameraPosition;
  
  uniform vec3 uLightPosition;
  uniform float uMetalness;
  uniform float uRoughness;
  uniform float uLightIntensity;
  uniform float uAmbientLightIntensity;
  
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;
  varying vec4 vClipPosition;
  
  #define PI 3.14159265359
  
  vec3 sampleBackground(vec2 screenUV, vec2 offset) {
    vec2 uv = clamp(screenUV + offset, 0.001, 0.999);
    return texture2D(uBackgroundTexture, uv).rgb;
  }
  
  vec3 sampleEnvMap(vec3 direction) {
    float phi = atan(direction.z, direction.x);
    float theta = asin(clamp(direction.y, -1.0, 1.0));
    vec2 uv = vec2(phi / (2.0 * PI) + 0.5, theta / PI + 0.5);
    return texture2D(uEnvMap, uv).rgb;
  }
  
  void main() {
    vec3 normal = normalize(vWorldNormal);
    vec3 viewDir = normalize(uCameraPosition - vWorldPosition);
    
    float facing = gl_FrontFacing ? 1.0 : -1.0;
    normal *= facing;
    
    vec2 screenUV = (vClipPosition.xy / vClipPosition.w) * 0.5 + 0.5;
    
    float eta = gl_FrontFacing ? (1.0 / uIOR) : uIOR;
    vec3 refractDir = refract(-viewDir, normal, eta);
    
    float iorStrength = abs(uIOR - 1.0) * 0.5;
    float refractStrength = iorStrength * (0.3 + uThickness * 0.4);
    vec2 refractOffset = refractDir.xy * refractStrength;
    
    vec3 refractedColor;
    if (uDispersion > 0.001) {
      float dispersionAmount = uDispersion * 0.05;
      float etaR = gl_FrontFacing ? (1.0 / (uIOR * (1.0 - dispersionAmount))) : (uIOR * (1.0 - dispersionAmount));
      float etaG = eta;
      float etaB = gl_FrontFacing ? (1.0 / (uIOR * (1.0 + dispersionAmount))) : (uIOR * (1.0 + dispersionAmount));
      
      vec3 redRefract = refract(-viewDir, normal, etaR);
      vec3 greenRefract = refract(-viewDir, normal, etaG);
      vec3 blueRefract = refract(-viewDir, normal, etaB);
      
      float r = sampleBackground(screenUV, redRefract.xy * refractStrength).r;
      float g = sampleBackground(screenUV, greenRefract.xy * refractStrength).g;
      float b = sampleBackground(screenUV, blueRefract.xy * refractStrength).b;
      refractedColor = vec3(r, g, b);
    } else {
      refractedColor = sampleBackground(screenUV, refractOffset);
    }
    
    if (uBlur > 0.001) {
      float blurAmount = uBlur * 0.02;
      vec3 blurred = refractedColor;
      blurred += sampleBackground(screenUV, refractOffset + vec2(blurAmount, 0.0));
      blurred += sampleBackground(screenUV, refractOffset + vec2(-blurAmount, 0.0));
      blurred += sampleBackground(screenUV, refractOffset + vec2(0.0, blurAmount));
      blurred += sampleBackground(screenUV, refractOffset + vec2(0.0, -blurAmount));
      refractedColor = blurred / 5.0;
    }
    
    refractedColor = mix(refractedColor, refractedColor * uTint, 0.5 + uThickness * 0.3);
    
    float F0 = pow((uIOR - 1.0) / (uIOR + 1.0), 2.0);
    float fresnel = F0 + (1.0 - F0) * pow(1.0 - max(dot(normal, viewDir), 0.0), 5.0);
    
    vec3 reflectedColor = refractedColor;
    if (uEnvMapIntensity > 0.001) {
      vec3 reflectDir = reflect(-viewDir, normal);
      vec3 envColor = sampleEnvMap(reflectDir) * uEnvMapIntensity;
      reflectedColor = mix(refractedColor, envColor, fresnel * uEnvMapIntensity);
    }
        
    vec3 lightDir = normalize(vec3(uLightPosition.xy * 2.0 - 1.0, uLightPosition.z * 2.0 - 1.0));
    float shininess = mix(2.0, 64.0, 1.0 - uRoughness);
    vec3 reflectVec = reflect(-lightDir, normal);
    float spec = pow(max(dot(reflectVec, viewDir), 0.0), shininess);
    
    vec3 specularColor = mix(vec3(1.0), reflectedColor, uMetalness) * uLightIntensity;
    
    float ndotv = max(dot(normal, viewDir), 0.0);
    float rimFresnel = pow(1.0 - ndotv, 3.0);
    float silhouetteFade = smoothstep(0.08, 0.22, ndotv);
    float rimDerivative = fwidth(ndotv);
    float stabilityFade = 1.0 - smoothstep(0.01, 0.08, rimDerivative);
    float rimVisibility = silhouetteFade * stabilityFade;
    
    vec3 litColor = reflectedColor * (1.0 + uAmbientLightIntensity * 0.5);
    litColor += specularColor * spec;
    float rimAmount = uEnvMapIntensity > 0.001 ? 0.3 : 1.0;
    litColor += rimFresnel * rimVisibility * uAmbientLightIntensity * rimAmount;
    
    gl_FragColor = vec4(litColor, 1.0);
  }
`;

function createGlassMaterial(layer) {
  const lightPos = layer.getProp('lightPosition');

  const material = new THREE.ShaderMaterial({
    uniforms: {
      uBackgroundTexture: { value: null },
      uEnvMap: { value: null },
      uEnvMapIntensity: { value: layer.getProp('environmentMapIntensity') ?? 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uIOR: { value: layer.getProp('glassIOR') ?? 1.5 },
      uThickness: { value: layer.getProp('glassThickness') ?? 0.5 },
      uBlur: { value: layer.getProp('glassRoughness') ?? 0 },
      uTint: { value: new THREE.Color(layer.getProp('glassTint') || '#ffffff') },
      uDispersion: { value: layer.getProp('glassDispersion') ?? 0 },
      uCameraPosition: { value: new THREE.Vector3(0, 0, 5) },
      // Lighting uniforms (from model properties)
      uLightPosition: { value: new THREE.Vector3(lightPos?.x ?? 0.75, lightPos?.y ?? 0.75, lightPos?.z ?? 0.75) },
      uMetalness: { value: layer.getProp('materialMetalness') ?? 0.5 },
      uRoughness: { value: layer.getProp('materialRoughness') ?? 0.5 },
      uLightIntensity: { value: layer.getProp('lightIntensity') ?? 0.2 },
      uAmbientLightIntensity: { value: layer.getProp('ambientLightIntensity') ?? 0.75 },
    },
    vertexShader: glassVertexShader,
    fragmentShader: glassFragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
    extensions: {
      derivatives: true,
    },
  });
  return material;
}

const layerStates = new WeakMap();

function getState(layer) {
  if (!layerStates.has(layer)) {
    layerStates.set(layer, {
      scene: null,
      camera: null,
      renderer: null,
      model: null,
      ambientLight: null,
      directionalLight: null,
      fillLight: null,
      customNormalMap: null,
      customEnvMap: null,
      envMap: null,
      customColorMap: null,
      glassMaterial: null,
      matcapMaterial: null,
      matcapTexture: null,
      backgroundTexture: null,
      animationMixer: null,
      animationClips: null,
      activeAnimationClip: null,
      lastAnimationTime: null,
    });
  }
  return layerStates.get(layer);
}

function getSelectedAnimationClipValue(layer, state) {
  const clipCount = state.animationClips?.length || 0;
  if (!clipCount) return null;

  const selectedValue = layer.getProp('selectedAnimationClip');
  const selectedIndex = Number.parseInt(selectedValue, 10);
  if (Number.isInteger(selectedIndex) && selectedIndex >= 0 && selectedIndex < clipCount) {
    return String(selectedIndex);
  }

  return '0';
}

function syncAnimationClip(layer, state) {
  if (!state.animationMixer || !state.animationClips?.length) return;

  const selectedValue = getSelectedAnimationClipValue(layer, state);
  if (selectedValue == null || state.activeAnimationClip === selectedValue) return;

  const clip = state.animationClips[Number.parseInt(selectedValue, 10)];
  if (!clip) return;

  state.animationMixer.stopAllAction();
  state.animationMixer.clipAction(clip).reset().play();
  state.activeAnimationClip = selectedValue;
}

function getMaterialMode(props) {
  return props.materialMode || (props.renderNormals ? 'glass' : 'standard');
}

function convertToPBR(m) {
  const n = new THREE.MeshStandardMaterial();
  n.color.copy(m.color);
  n.map = m.map;
  n.normalMap = m.normalMap;
  n.emissiveMap = m.emissiveMap;
  n.aoMap = m.aoMap;
  n.emissive.copy(m.emissive || new THREE.Color(0, 0, 0));
  n.opacity = m.opacity ?? 1;
  n.transparent = m.transparent ?? false;
  n.side = m.side ?? THREE.FrontSide;
  if (!m.userData) m.userData = {};
  n.userData = m.userData;
  n.userData.converted = true;
  return n;
}

function applyQualitySettings(state, isHigh) {
  if (!state.renderer) return;
  state.renderer.toneMapping = isHigh ? THREE.ACESFilmicToneMapping : THREE.NoToneMapping;
  state.renderer.toneMappingExposure = isHigh ? 1.5 : 1.0;
  state.renderer.physicallyCorrectLights = isHigh;
}

function syncSceneLights(state, layer, materialMode) {
  if (!state.scene) return;
  const usesSceneLights = materialMode !== 'matcap';

  if (!usesSceneLights) {
    if (state.ambientLight) {
      state.scene.remove(state.ambientLight);
      state.ambientLight = null;
    }
    if (state.directionalLight) {
      state.scene.remove(state.directionalLight);
      state.directionalLight = null;
    }
    if (state.fillLight) {
      state.scene.remove(state.fillLight);
      state.fillLight = null;
    }
    return;
  }

  const ambientLightColor = layer.getProp('ambientLightColor') || '#777777';
  const ambientLightIntensity = layer.getProp('ambientLightIntensity') ?? 0.75;
  const lightColor = layer.getProp('lightColor') || '#777777';
  const lightIntensity = layer.getProp('lightIntensity') ?? 0.2;
  const fillLightColor = layer.getProp('fillLightColor') || '#777777';
  const fillLightIntensity = layer.getProp('fillLightIntensity') ?? 0.2;
  const lightPosition = layer.getProp('lightPosition') || { x: 0.75, y: 0.75, z: 0.75 };

  if (!state.ambientLight) {
    state.ambientLight = new THREE.AmbientLight(ambientLightColor, ambientLightIntensity * 2);
    state.scene.add(state.ambientLight);
  }
  if (!state.directionalLight) {
    state.directionalLight = new THREE.DirectionalLight(lightColor, lightIntensity * 5 * 2);
    state.scene.add(state.directionalLight);
  }
  if (!state.fillLight) {
    state.fillLight = new THREE.DirectionalLight(fillLightColor, fillLightIntensity * 5 * 2);
    state.scene.add(state.fillLight);
  }

  state.ambientLight.color.set(ambientLightColor);
  state.ambientLight.intensity = ambientLightIntensity * 2;
  state.directionalLight.color.set(lightColor);
  state.directionalLight.intensity = lightIntensity * 5 * 2;
  state.fillLight.color.set(fillLightColor);
  state.fillLight.intensity = fillLightIntensity * 5 * 2;

  const worldX = (lightPosition.x - 0.5) * 10;
  const worldY = (lightPosition.y - 0.5) * 10;
  const worldZ = (lightPosition.z - 0.5) * 10;
  state.directionalLight.position.set(worldX, -worldY, worldZ);
  state.fillLight.position.set(-worldX * 0.8, worldY * 0.8, -worldZ * 0.8);
}

function loadTextureWithSettings(url, isEnvMap = false, isNormalMap = false) {
  return new Promise(resolve => {
    textureLoader.load(url, tex => {
      if (isEnvMap) {
        tex.mapping = THREE.EquirectangularReflectionMapping;
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = false;
      } else {
        tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
        tex.flipY = true;
      }
      resolve(tex);
    });
  });
}

function loadMatcapTexture(url) {
  return new Promise(resolve => {
    textureLoader.load(url, tex => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      tex.wrapS = THREE.ClampToEdgeWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      tex.flipY = false;
      resolve(tex);
    });
  });
}

function createMatcapMaterial(layer) {
  const material = new THREE.MeshMatcapMaterial({ color: new THREE.Color('#ffffff') });
  material.onBeforeCompile = shader => {
    shader.uniforms.uMatcapIntensity = { value: Math.max(0, layer.getProp('matcapIntensity') ?? 0.5) };
    shader.uniforms.uMatcapRotation = { value: (layer.getProp('matcapRotation') ?? 0) * Math.PI * 2 };

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        '#include <common>\nuniform float uMatcapIntensity;\nuniform float uMatcapRotation;'
      )
      .replace(
        'vec4 matcapColor = texture2D( matcap, uv );',
        [
          'vec2 centeredUv = uv - 0.5;',
          'float matcapCos = cos(uMatcapRotation);',
          'float matcapSin = sin(uMatcapRotation);',
          'vec2 rotatedUv = vec2(',
          '  centeredUv.x * matcapCos - centeredUv.y * matcapSin,',
          '  centeredUv.x * matcapSin + centeredUv.y * matcapCos',
          ') + 0.5;',
          'vec4 matcapColor = texture2D( matcap, rotatedUv );',
          'float matcapExposure = exp2((uMatcapIntensity - 0.5) * 4.0);',
          'matcapColor.rgb *= matcapExposure;',
        ].join('\n')
      );

    material.userData.shader = shader;
  };
  material.customProgramCacheKey = () => 'unicorn-matcap-v2';
  return material;
}

function updateMatcapMaterial(layer, state, rotationOverride = null) {
  if (!state.matcapMaterial) return;
  const intensity = Math.max(0, layer.getProp('matcapIntensity') ?? 0.5);
  const rotationNormalized = rotationOverride ?? layer.getProp('matcapRotation') ?? 0;
  const rotation = rotationNormalized * Math.PI * 2;
  state.matcapMaterial.color.set('#ffffff');

  if (state.matcapMaterial.matcap !== (state.matcapTexture || null)) {
    state.matcapMaterial.matcap = state.matcapTexture || null;
    state.matcapMaterial.needsUpdate = true;
  }

  const shader = state.matcapMaterial.userData.shader;
  if (shader?.uniforms) {
    shader.uniforms.uMatcapIntensity.value = intensity;
    shader.uniforms.uMatcapRotation.value = rotation;
  }
}

function applyMaterialModeToMeshes(layer, state) {
  if (!state.model?.userData?.meshes) return;
  const mode = getMaterialMode(layer);

  if (mode === 'glass') {
    if (!state.glassMaterial) {
      state.glassMaterial = createGlassMaterial(layer);
    }
    state.model.userData.meshes.forEach(child => {
      if (!child.userData.originalMaterial) child.userData.originalMaterial = child.material;
      child.material = state.glassMaterial;
    });
    return;
  }

  if (mode === 'matcap') {
    if (!state.matcapMaterial) {
      state.matcapMaterial = createMatcapMaterial(layer);
    }
    updateMatcapMaterial(layer, state);
    state.model.userData.meshes.forEach(child => {
      if (!child.userData.originalMaterial) child.userData.originalMaterial = child.material;
      child.material = state.matcapMaterial;
    });
    return;
  }

  state.model.userData.meshes.forEach(child => {
    if (child.userData.originalMaterial) {
      child.material = child.userData.originalMaterial;
    }
  });
}

function applyTextureToMaterials(
  state,
  tex,
  scale,
  position,
  mapType = 'map',
  normalIntensity = 1,
  colorIntensity = 1
) {
  tex.repeat.setScalar(scale);
  const offset = -(scale - 1) / 2;
  const posX = (position?.x ?? 0.5) - 0.5;
  const posY = (position?.y ?? 0.5) - 0.5;
  tex.offset.set(offset + posX, offset + posY);
  state.model.traverse(child => {
    if (child.isMesh) {
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach(m => {
        if (m.isMeshStandardMaterial || m.isMeshPhongMaterial || m.isMeshLambertMaterial) {
          if (mapType === 'map') {
            m.map = tex;
            if (m.color) {
              m.color.setScalar(colorIntensity);
            }
          } else if (mapType === 'normalMap' && m.normalMap !== undefined) {
            m.normalMap = tex;
            if (m.normalScale) {
              m.normalScale.set(normalIntensity, -normalIntensity);
            }
          }
          m.needsUpdate = true;
        }
      });
    }
  });
}

function applyEnvMapToMaterials(state, envTexture, intensity, flipY = false) {
  if (!envTexture || !state.model) return;

  state.model.userData.materials?.forEach(m => {
    if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) {
      m.envMap = envTexture;
      m.envMapIntensity = intensity;
      m.envMapRotation.x = flipY ? Math.PI : 0;
      m.needsUpdate = true;
    }
  });
}

function createSVGMeshes(paths, extrudeSettings, layer) {
  const group = new THREE.Group();

  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    const fillColor = path.userData.style.fill;

    if (fillColor !== undefined && fillColor !== 'none') {
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setStyle(fillColor),
        metalness: layer.getProp('materialMetalness') ?? 0.5,
        roughness: layer.getProp('materialRoughness') ?? 0.5,
        side: THREE.DoubleSide,
      });

      const shapes = SVGLoader.createShapes(path);

      for (let j = 0; j < shapes.length; j++) {
        const shape = shapes[j];
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

        // Calculate UVs based on shape bounds
        const posAttribute = geometry.attributes.position;
        const uvAttribute = geometry.attributes.uv;

        // Compute bounding box of the geometry
        geometry.computeBoundingBox();
        const min = geometry.boundingBox.min;
        const max = geometry.boundingBox.max;
        const rangeX = max.x - min.x;
        const rangeY = max.y - min.y;

        const updateUVs = (start, count, isSide) => {
          for (let k = start; k < start + count; k++) {
            let idx = k;
            if (geometry.index) {
              idx = geometry.index.getX(k);
            }

            if (!isSide) {
              const x = posAttribute.getX(idx);
              const y = posAttribute.getY(idx);
              uvAttribute.setXY(idx, (x - min.x) / rangeX, (y - min.y) / rangeY);
            } else {
              const u = uvAttribute.getX(idx);
              const v = uvAttribute.getY(idx);
              const scale = 1 / Math.max(rangeX, rangeY);
              uvAttribute.setXY(idx, u * scale, v * scale);
            }
          }
        };

        if (geometry.groups && geometry.groups.length > 0) {
          geometry.groups.forEach(g => {
            updateUVs(g.start, g.count, g.materialIndex === 1);
          });
        } else {
          updateUVs(0, geometry.index ? geometry.index.count : posAttribute.count, false);
        }
        uvAttribute.needsUpdate = true;

        // Scale mesh Y to flip coordinate system (SVG is y-down, Three.js is y-up)
        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(1, -1, 1);
        group.add(mesh);
      }
    }
  }

  return group;
}

// Shared post-load setup for both GLTF and SVG models
function finalizeModelSetup(state, layer) {
  const materialMode = getMaterialMode(layer);
  const isStandardMode = materialMode === 'standard';

  applyMaterialModeToMeshes(layer, state);

  // Load color map if provided and not in glass mode
  if (layer.colorMapUrl?.trim() && isStandardMode) {
    loadTextureWithSettings(layer.colorMapUrl, false).then(tex => {
      state.customColorMap = tex;
      const scale = Math.max(0.001, layer.getProp('colorMapScale') ?? 1);
      const intensity = layer.getProp('colorMapIntensity') ?? 1;
      applyTextureToMaterials(state, tex, scale, layer.getProp('colorMapPosition'), 'map', 1, intensity);
    });
  }

  // Load normal map if provided and not in glass mode
  if (layer.normalMapUrl?.trim() && isStandardMode) {
    loadTextureWithSettings(layer.normalMapUrl, false, true).then(tex => {
      state.customNormalMap = tex;
      const scale = Math.max(0.001, layer.getProp('normalMapScale') ?? 1);
      applyTextureToMaterials(
        state,
        tex,
        scale,
        layer.getProp('normalMapPosition'),
        'normalMap',
        layer.getProp('normalMapIntensity')
      );
    });
  }

  // Load environment map if URL provided and intensity > 0
  const environmentMapIntensity = layer.getProp('environmentMapIntensity');
  if (environmentMapIntensity > 0 && layer.environmentMapUrl?.trim() && materialMode !== 'matcap') {
    loadTextureWithSettings(layer.environmentMapUrl, true).then(tex => {
      state.customEnvMap = tex;
      if (isStandardMode) {
        applyEnvMapToMaterials(state, state.customEnvMap, environmentMapIntensity);
      }
    });
  }

  state.scene.add(state.model);
  layer.handleModelLoaded(state.model);
}

function updateEnvMapFromWebGL(state, gl, webglTexture, width, height, intensity) {
  if (!webglTexture || !gl) {
    state.model?.userData.materials?.forEach(m => {
      if (m.envMap) {
        m.envMap = null;
        m.needsUpdate = true;
      }
    });
    return;
  }

  if (!state.envMap) {
    state.envMap = new THREE.Texture();
    state.envMap.mapping = THREE.EquirectangularReflectionMapping;
    state.envMap.colorSpace = THREE.SRGBColorSpace;
    state.envMap.minFilter = THREE.LinearFilter;
    state.envMap.magFilter = THREE.LinearFilter;
    state.envMap.generateMipmaps = false;
    state.envMap.flipY = false;
    state.envMap.image = { width, height };

    const props = state.renderer.properties.get(state.envMap);
    props.__webglTexture = webglTexture;
    props.__webglInit = true;

    const info = state.renderer.info.memory;
    if (info) info.textures++;

    applyEnvMapToMaterials(state, state.envMap, intensity, true);
  } else if (state.model.userData.lastEnvMapIntensity !== intensity) {
    state.model.userData.materials?.forEach(m => {
      if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) {
        m.envMapIntensity = intensity;
      }
    });
    state.model.userData.lastEnvMapIntensity = intensity;
  }
}

function updateBackgroundTexture(state, bgTextureInfo, width, height) {
  if (!bgTextureInfo || !bgTextureInfo.webglTexture) return;

  if (!state.backgroundTexture) {
    state.backgroundTexture = new THREE.Texture();
    state.backgroundTexture.minFilter = THREE.LinearFilter;
    state.backgroundTexture.magFilter = THREE.LinearFilter;
    state.backgroundTexture.wrapS = THREE.ClampToEdgeWrapping;
    state.backgroundTexture.wrapT = THREE.ClampToEdgeWrapping;
    state.backgroundTexture.generateMipmaps = false;
    state.backgroundTexture.flipY = false;
    state.backgroundTexture.image = { width, height };

    const props = state.renderer.properties.get(state.backgroundTexture);
    props.__webglTexture = bgTextureInfo.webglTexture;
    props.__webglInit = true;
  } else {
    const props = state.renderer.properties.get(state.backgroundTexture);
    if (props.__webglTexture !== bgTextureInfo.webglTexture) {
      props.__webglTexture = bgTextureInfo.webglTexture;
    }
    if (state.backgroundTexture.image.width !== width || state.backgroundTexture.image.height !== height) {
      state.backgroundTexture.image = { width, height };
    }
  }
}

export function initialize(ctx, layer) {
  const state = getState(layer);
  const w = ctx.canvas ? ctx.canvas.width : ctx.drawingBufferWidth;
  const h = ctx.canvas ? ctx.canvas.height : ctx.drawingBufferHeight;
  if (w === 0 || h === 0) return;

  state.scene = new THREE.Scene();
  state.camera = new THREE.PerspectiveCamera(35, w / h, 0.1, 100);
  state.camera.position.set(0, 0, 5);

  state.renderer = new THREE.WebGLRenderer({
    canvas: ctx.canvas,
    context: ctx,
    alpha: true,
    preserveDrawingBuffer: false,
    premultipliedAlpha: true,
    logarithmicDepthBuffer: true,
    antialias: layer.quality === 'high',
  });
  state.renderer.setClearColor(0x000000, 0);
  state.renderer.outputColorSpace = THREE.SRGBColorSpace;
  applyQualitySettings(state, layer.quality === 'high');
  // The shared Curtains canvas is already allocated at the scene DPI.
  state.renderer.setPixelRatio(1);
  state.renderer.setSize(w, h, false);
  syncSceneLights(state, layer, getMaterialMode(layer));
}

export function loadModel(layer) {
  const state = getState(layer);

  if (state.animationMixer) {
    state.animationMixer.stopAllAction();
    state.animationMixer = null;
  }
  state.animationClips = null;
  state.activeAnimationClip = null;
  state.lastAnimationTime = null;
  layer.local.animationClipOptions = [];

  // Reset loading flags
  layer.local.modelLoaded = false;
  layer.local.modelLoading = false;
  layer.local.modelObject = null;

  // Check for SVG by file extension or data URL mime type
  // Note: Blob URLs are only used in the editor, production always receives data URLs
  const modelUrlLower = layer.modelUrl.toLowerCase();
  const isSVGDataUrl = modelUrlLower.startsWith('data:image/svg+xml');
  const isSVG = modelUrlLower.split('?')[0].endsWith('.svg') || isSVGDataUrl;

  if (isSVG) {
    // Helper function to process SVG data once loaded/parsed
    const processSVGData = data => {
      const paths = data.paths;
      const extrudeSettings = {
        depth: layer.getProp('extrudeDepth') ?? 10,
        bevelEnabled: layer.getProp('bevelEnabled') ?? false,
        bevelThickness: layer.getProp('bevelThickness') ?? 1,
        bevelSize: layer.getProp('bevelSize') ?? 1,
        bevelSegments: layer.getProp('bevelSegments') ?? 2,
        curveSegments: DEFAULT_SVG_CURVE_SEGMENTS,
      };
      const group = createSVGMeshes(paths, extrudeSettings, layer);

      state.model = group;
      state.model.userData.isSVG = true;
      state.model.userData.svgPaths = paths;

      const box = new THREE.Box3().setFromObject(state.model);
      const center = box.getCenter(new THREE.Vector3());
      state.model.position.copy(center).multiplyScalar(-1);

      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const baseScale = maxDim > 0 ? 1 / maxDim : 1;

      const modelGroup = new THREE.Group();
      modelGroup.add(state.model);
      state.model = modelGroup;
      state.model.userData.baseScale = baseScale;
      state.model.userData.isSVGWrapper = true;

      state.model.userData.materials = [];
      state.model.userData.textureMaterials = [];
      state.model.userData.meshes = [];

      state.model.traverse(child => {
        if (child.isMesh) {
          state.model.userData.meshes.push(child);
          state.model.userData.materials.push(child.material);
          state.model.userData.textureMaterials.push(child.material);

          if (!child.material.userData) child.material.userData = {};
          child.material.userData.originalMap = null;
          child.material.userData.originalNormalMap = null;
        }
      });

      finalizeModelSetup(state, layer);
    };

    // Handle SVG data URLs by parsing directly, regular URLs can be loaded
    if (isSVGDataUrl) {
      try {
        // Decode base64 data URL to SVG string
        const base64Data = layer.modelUrl.split(',')[1];
        const svgString = decodeURIComponent(escape(atob(base64Data)));
        const data = svgLoader.parse(svgString);
        processSVGData(data);
      } catch (error) {
        console.error('An error occurred while parsing the SVG data URL:', error);
        layer.local.modelLoading = false;
      }
    } else {
      // Regular SVG URLs can be loaded directly
      svgLoader.load(
        layer.modelUrl,
        processSVGData,
        xhr => {
          if (xhr.total > 0) {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
          }
        },
        error => {
          console.error('An error occurred while loading the SVG:', error);
          layer.local.modelLoading = false;
        }
      );
    }
  } else {
    gltfLoader.load(
      layer.modelUrl,
      gltf => {
        state.model = gltf.scene;
        if (gltf.animations?.length) {
          state.animationMixer = new THREE.AnimationMixer(gltf.scene);
          state.animationClips = gltf.animations;
          layer.local.animationClipOptions = gltf.animations.map((clip, index) => ({
            value: String(index),
            label: clip.name?.trim() || `Animation ${index + 1}`,
          }));
          syncAnimationClip(layer, state);
        } else {
          layer.local.animationClipOptions = [];
        }

        const box = new THREE.Box3().setFromObject(state.model);
        const center = box.getCenter(new THREE.Vector3());
        state.model.position.copy(center).multiplyScalar(-1);

        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const baseScale = maxDim > 0 ? 1 / maxDim : 1;
        const modelGroup = new THREE.Group();
        modelGroup.add(state.model);
        state.model = modelGroup;
        state.model.userData.baseScale = baseScale;

        state.model.userData.materials = [];
        state.model.userData.meshes = [];
        state.model.traverse(child => {
          if (child.isMesh) {
            state.model.userData.meshes.push(child);
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            const materialMetalness = layer.getProp('materialMetalness');
            const materialRoughness = layer.getProp('materialRoughness');

            mats.forEach((m, idx) => {
              if ((m.isMeshPhongMaterial || m.isMeshLambertMaterial) && !m.userData?.converted) {
                const newMat = convertToPBR(m);
                if (Array.isArray(child.material)) {
                  child.material[idx] = newMat;
                } else {
                  child.material = newMat;
                }
                m = newMat;
              }
              state.model.userData.materials.push(m);
              if (m.metalness !== undefined) {
                if (m.metalnessMap) {
                  m.metalnessMap = null;
                  m.needsUpdate = true;
                }
                m.metalness = materialMetalness ?? m.metalness;
              }
              if (m.roughness !== undefined) {
                if (m.roughnessMap) {
                  m.roughnessMap = null;
                  m.needsUpdate = true;
                }
                m.roughness = materialRoughness ?? m.roughness;
              }
              if (m.isMeshStandardMaterial || m.isMeshPhysicalMaterial) {
                m.envMapIntensity = m.envMapIntensity ?? 1.0;
              }
              if (m.isMeshPhysicalMaterial && m.transmission) {
                m.transmission = 0;
              }
            });
          }
        });

        // Clear existing color maps if custom color map is provided (GLTF may have embedded textures)
        if (layer.colorMapUrl?.trim() && getMaterialMode(layer) === 'standard') {
          state.model.traverse(child => {
            if (child.isMesh) {
              const mats = Array.isArray(child.material) ? child.material : [child.material];
              mats.forEach(m => {
                if (m.isMeshStandardMaterial || m.isMeshPhongMaterial || m.isMeshLambertMaterial) {
                  m.map = null;
                  m.needsUpdate = true;
                }
              });
            }
          });
        }

        finalizeModelSetup(state, layer);
      },
      undefined,
      error => {
        console.error('An error occurred while loading the model:', error);
        layer.local.modelLoading = false;
      }
    );
  }

  layer.local.modelLoading = true;
}

export function isLoading(layer) {
  return layer.local.modelLoading && !layer.local.modelLoaded;
}

export function draw(ctx, t, layer) {
  const state = getState(layer);
  if (!layer.local.modelLoaded) return;

  if (!state.renderer || !state.renderer.getContext() || state.renderer.getContext().isContextLost()) {
    console.warn('Three.js renderer context lost, reinitializing...');
    layer.local.initialized = false;
    return;
  }

  const w = ctx.canvas ? ctx.canvas.width : ctx.drawingBufferWidth;
  const h = ctx.canvas ? ctx.canvas.height : ctx.drawingBufferHeight;
  if (w === 0 || h === 0) return;

  const materialMode = getMaterialMode(layer);
  const isGlassMode = materialMode === 'glass';
  const isStandardMode = materialMode === 'standard';

  if (state.animationMixer) {
    syncAnimationClip(layer, state);
    if (state.lastAnimationTime == null) {
      state.lastAnimationTime = t;
    } else {
      const deltaSeconds = Math.max(0, (t - state.lastAnimationTime) * 0.001);
      state.animationMixer.update(deltaSeconds);
      state.lastAnimationTime = t;
    }
  }

  syncSceneLights(state, layer, materialMode);

  // Load env map from render target - needed for glass/standard when custom env map is not set
  const environmentMapIntensity = layer.getProp('environmentMapIntensity');

  if (environmentMapIntensity > 0 && !layer.environmentMapUrl?.trim() && materialMode !== 'matcap') {
    const envTexture = layer.local.envTexture;
    const intensityChanged = state.model?.userData.lastEnvMapIntensity !== environmentMapIntensity;

    if (envTexture && (intensityChanged || !state.envMap)) {
      updateEnvMapFromWebGL(
        state,
        envTexture.gl,
        envTexture.webglTexture,
        envTexture.width,
        envTexture.height,
        environmentMapIntensity
      );
    }
  }

  let mouseX = 0,
    mouseY = 0,
    mouseRotX = 0,
    mouseRotY = 0,
    mouseLightX = 0,
    mouseLightY = 0;
  let mouseOffsetXRaw = 0,
    mouseOffsetYRaw = 0;

  const trackMouse = layer.getProp('trackMouse');
  const rotationTracking = layer.getProp('rotationTracking');
  const lightTracking = layer.getProp('lightTracking');

  if (trackMouse != 0 || rotationTracking != 0 || lightTracking != 0) {
    const mouse = layer.local.mouse || { x: 0.5, y: 0.5 };
    const mouseOffsetX = mouse.x - 0.5;
    const mouseOffsetY = mouse.y - 0.5;
    mouseOffsetXRaw = mouseOffsetX;
    mouseOffsetYRaw = mouseOffsetY;

    if (trackMouse != 0) {
      mouseX = mouseOffsetX * trackMouse;
      mouseY = -mouseOffsetY * trackMouse;
    }
    if (rotationTracking != 0) {
      mouseRotX = -mouseOffsetY * rotationTracking;
      mouseRotY = mouseOffsetX * rotationTracking;
    }
    if (lightTracking != 0) {
      mouseLightX = mouseOffsetX * lightTracking;
      mouseLightY = -mouseOffsetY * lightTracking;
    }
  }

  if (!state.camera.userData.dim) state.camera.userData.dim = {};
  if (state.camera.userData.dim.w !== w || state.camera.userData.dim.h !== h) {
    state.camera.aspect = w / h;
    state.camera.updateProjectionMatrix();
    state.renderer.setSize(w, h, false);
    state.camera.userData.dim = { w, h };
  }

  const lp = (state.scene.userData.lp = state.scene.userData.lp || {});

  // Skip Three.js light updates when using non-lit material modes
  if (isStandardMode) {
    const ambientLightIntensity = layer.getProp('ambientLightIntensity');
    const ambientLightColor = layer.getProp('ambientLightColor');
    const lightIntensity = layer.getProp('lightIntensity');
    const lightColor = layer.getProp('lightColor');
    const fillLightIntensity = layer.getProp('fillLightIntensity');
    const fillLightColor = layer.getProp('fillLightColor');

    if (state.ambientLight && (lp.ai !== ambientLightIntensity || lp.ac !== ambientLightColor)) {
      if (lp.ai !== ambientLightIntensity) state.ambientLight.intensity = (ambientLightIntensity ?? 0.75) * 2;
      if (lp.ac !== ambientLightColor) state.ambientLight.color.set(ambientLightColor || '#777777');
      lp.ai = ambientLightIntensity;
      lp.ac = ambientLightColor;
    }

    if (state.directionalLight && (lp.li !== lightIntensity || lp.lc !== lightColor)) {
      state.directionalLight.intensity = (lightIntensity ?? 0.2) * 5 * 2;
      state.directionalLight.color.set(lightColor || '#777777');
      lp.li = lightIntensity;
      lp.lc = lightColor;
    }

    if (state.fillLight && (lp.fli !== fillLightIntensity || lp.flc !== fillLightColor)) {
      state.fillLight.intensity = (fillLightIntensity ?? 0.2) * 5 * 2;
      state.fillLight.color.set(fillLightColor || '#777777');
      lp.fli = fillLightIntensity;
      lp.flc = fillLightColor;
    }

    const lightPosition = layer.getProp('lightPosition');
    const hasLightTracking = lightTracking != 0;

    if (
      state.directionalLight &&
      lightPosition &&
      (hasLightTracking || lp.lx !== lightPosition.x || lp.ly !== lightPosition.y || lp.lz !== lightPosition.z)
    ) {
      const wx = (lightPosition.x + mouseLightX - 0.5) * 10;
      const wy = (lightPosition.y + mouseLightY - 0.5) * 10;
      const wz = (lightPosition.z - 0.5) * 10;
      state.directionalLight.position.set(wx, -wy, wz);
      state.fillLight.position.set(-wx * 0.8, wy * 0.8, -wz * 0.8);
      if (!hasLightTracking) {
        lp.lx = lightPosition.x;
        lp.ly = lightPosition.y;
        lp.lz = lightPosition.z;
      }
    }
  }

  if (state.model) {
    const mp = (state.model.userData.mp = state.model.userData.mp || {});

    // Skip standard material and texture updates when using non-standard material modes
    if (isStandardMode) {
      const materialMetalness = layer.getProp('materialMetalness');
      const materialRoughness = layer.getProp('materialRoughness');

      if (mp.mm !== materialMetalness || mp.mr !== materialRoughness) {
        state.model.userData.materials?.forEach(m => {
          if (mp.mm !== materialMetalness && m.metalness !== undefined) {
            if (m.metalnessMap) {
              m.metalnessMap = null;
              m.needsUpdate = true;
            }
            m.metalness = materialMetalness;
          }
          if (mp.mr !== materialRoughness && m.roughness !== undefined) {
            if (m.roughnessMap) {
              m.roughnessMap = null;
              m.needsUpdate = true;
            }
            m.roughness = materialRoughness;
          }
        });
        mp.mm = materialMetalness;
        mp.mr = materialRoughness;
      }

      const colorMapScale = layer.getProp('colorMapScale');
      const colorMapPosition = layer.getProp('colorMapPosition');
      const colorMapIntensity = layer.getProp('colorMapIntensity');
      if (
        state.customColorMap &&
        (mp.cms !== colorMapScale ||
          mp.cmpx !== colorMapPosition?.x ||
          mp.cmpy !== colorMapPosition?.y ||
          mp.cmi !== colorMapIntensity)
      ) {
        const scale = Math.max(0.001, colorMapScale);
        state.customColorMap.repeat.setScalar(scale);
        const offset = -(scale - 1) / 2;
        const posX = (colorMapPosition?.x ?? 0.5) - 0.5;
        const posY = (colorMapPosition?.y ?? 0.5) - 0.5;
        state.customColorMap.offset.set(offset + posX, offset + posY);
        const intensity = colorMapIntensity ?? 1;
        state.model.userData.materials?.forEach(m => {
          if (m.isMeshStandardMaterial || m.isMeshPhongMaterial || m.isMeshLambertMaterial) {
            if (m.color) {
              m.color.setScalar(intensity);
            }
          }
        });
        mp.cms = colorMapScale;
        mp.cmpx = colorMapPosition?.x;
        mp.cmpy = colorMapPosition?.y;
        mp.cmi = colorMapIntensity;
      }

      const normalMapScale = layer.getProp('normalMapScale');
      const normalMapPosition = layer.getProp('normalMapPosition');
      const normalMapIntensity = layer.getProp('normalMapIntensity');
      if (
        state.customNormalMap &&
        (mp.nms !== normalMapScale ||
          mp.nmpx !== normalMapPosition?.x ||
          mp.nmpy !== normalMapPosition?.y ||
          mp.nmi !== normalMapIntensity)
      ) {
        const scale = Math.max(0.001, normalMapScale);
        state.customNormalMap.repeat.setScalar(scale);
        const offset = -(scale - 1) / 2;
        const posX = (normalMapPosition?.x ?? 0.5) - 0.5;
        const posY = (normalMapPosition?.y ?? 0.5) - 0.5;
        state.customNormalMap.offset.set(offset + posX, offset + posY);
        const intensity = normalMapIntensity ?? 1;
        state.model.userData.materials?.forEach(m => {
          if (m.normalMap !== undefined && m.normalScale) {
            m.normalScale.set(intensity, -intensity);
          }
        });
        mp.nms = normalMapScale;
        mp.nmpx = normalMapPosition?.x;
        mp.nmpy = normalMapPosition?.y;
        mp.nmi = normalMapIntensity;
      }

      const envMapIntensity = layer.getProp('environmentMapIntensity');
      if (state.customEnvMap && mp.emi !== envMapIntensity) {
        applyEnvMapToMaterials(state, state.customEnvMap, envMapIntensity);
        mp.emi = envMapIntensity;
      }
    }

    const baseScale = state.model.userData.baseScale || 1;
    const pos = layer.getProp('pos');
    const scale = layer.getProp('scale');

    if (mp.s !== scale) {
      const s = scale * 10 * baseScale;
      state.model.scale.set(s, s, s);
      mp.s = scale;
    }

    const hasMouse = mouseX !== 0 || mouseY !== 0;
    if (pos && (hasMouse || mp.px !== pos.x || mp.py !== pos.y || mp.pz !== pos.z)) {
      const ox = (pos.x - 0.5 + mouseX) * 8;
      const oy = (pos.y - 0.5 + mouseY) * 8;
      const oz = (pos.z - 0.5) * 8;
      state.model.position.set(ox, -oy, oz);
      if (!hasMouse) {
        mp.px = pos.x;
        mp.py = pos.y;
        mp.pz = pos.z;
      }
    }

    const modelRotation = layer.getProp('modelRotation');
    const speed = layer.getProp('speed');
    const animationAxis = layer.getProp('animationAxis');
    const hasRotMouse = mouseRotX !== 0 || mouseRotY !== 0;
    const hasAnim = speed > 0 && layer.animating;
    const animStateChanged = mp.wasAnimating !== undefined && mp.wasAnimating !== hasAnim;
    mp.wasAnimating = hasAnim;

    if (
      modelRotation &&
      (hasRotMouse ||
        hasAnim ||
        animStateChanged ||
        mp.rx !== modelRotation.x ||
        mp.ry !== modelRotation.y ||
        mp.rz !== modelRotation.z)
    ) {
      let rx = (modelRotation.y - 0.5 + mouseRotX) * Math.PI * 2 + Math.PI;
      let ryOffset = state.model.userData.isSVGWrapper ? Math.PI : 0;
      let ry = (modelRotation.x - 0.5 + mouseRotY) * Math.PI * 2 + ryOffset;
      let rz = (modelRotation.z - 0.5) * Math.PI * 2;

      if (hasAnim) {
        _euler.set(rx, ry, rz);
        _quat1.setFromEuler(_euler);

        const rs = speed * t * 0.001;
        const animX = animationAxis.x > 0 ? rs * animationAxis.x : 0;
        const animY = animationAxis.y > 0 ? rs * animationAxis.y : 0;
        const animZ = animationAxis.z > 0 ? rs * animationAxis.z : 0;

        _euler.set(animX, animY, animZ);
        _quat2.setFromEuler(_euler);
        _quat1.multiply(_quat2);

        state.model.quaternion.copy(_quat1);
      } else {
        state.model.rotation.set(rx, ry, rz);
      }

      if (!hasRotMouse && !hasAnim) {
        mp.rx = modelRotation.x;
        mp.ry = modelRotation.y;
        mp.rz = modelRotation.z;
      }
    }

    if (mp.mode !== materialMode) {
      applyMaterialModeToMeshes(layer, state);
      mp.mode = materialMode;
    }

    if (materialMode === 'matcap' && mp.mcu !== layer.matcapUrl) {
      if (layer.matcapUrl?.trim()) {
        loadMatcapTexture(layer.matcapUrl).then(tex => {
          if (state.matcapTexture) state.matcapTexture.dispose();
          state.matcapTexture = tex;
          updateMatcapMaterial(layer, state);
        });
      } else {
        if (state.matcapTexture) {
          state.matcapTexture.dispose();
          state.matcapTexture = null;
        }
        updateMatcapMaterial(layer, state);
      }
      mp.mcu = layer.matcapUrl;
    }

    const matcapIntensity = layer.getProp('matcapIntensity') ?? 0.5;
    const matcapRotation = layer.getProp('matcapRotation') ?? 0;
    let trackedMatcapRotation = matcapRotation;
    if (materialMode === 'matcap' && lightTracking !== 0) {
      const trackingInfluence = Math.min(1, Math.abs(lightTracking));
      const mouseAngle = Math.atan2(-mouseOffsetYRaw, mouseOffsetXRaw);
      if (mp._prevMouseAngle !== undefined) {
        let angleDiff = mouseAngle - mp._prevMouseAngle;
        if (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        if (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        mp._continuousAngle += angleDiff;
      } else {
        mp._continuousAngle = mouseAngle;
      }
      mp._prevMouseAngle = mouseAngle;
      const mouseAngleNormalized = mp._continuousAngle / (Math.PI * 2);
      trackedMatcapRotation = matcapRotation + mouseAngleNormalized * trackingInfluence;
      trackedMatcapRotation = ((trackedMatcapRotation % 1) + 1) % 1;
    }

    if (
      mp.mci !== matcapIntensity ||
      mp.mcr !== matcapRotation ||
      mp.mtr !== trackedMatcapRotation ||
      mp.mlt !== lightTracking
    ) {
      updateMatcapMaterial(layer, state, trackedMatcapRotation);
      mp.mci = matcapIntensity;
      mp.mcr = matcapRotation;
      mp.mtr = trackedMatcapRotation;
      mp.mlt = lightTracking;
    }

    // Update glass material uniforms every frame when glass mode is active
    if (isGlassMode && state.glassMaterial) {
      const bgTextureInfo = layer.local.backgroundTexture;
      if (bgTextureInfo) {
        updateBackgroundTexture(state, bgTextureInfo, bgTextureInfo.width, bgTextureInfo.height);
        state.glassMaterial.uniforms.uBackgroundTexture.value = state.backgroundTexture;
        state.glassMaterial.uniforms.uResolution.value.set(w, h);
      }

      state.glassMaterial.uniforms.uCameraPosition.value.copy(state.camera.position);

      const glassIOR = layer.getProp('glassIOR') ?? 1.5;
      const glassThickness = layer.getProp('glassThickness') ?? 0.5;
      const glassBlur = layer.getProp('glassRoughness') ?? 0; // "roughness" in UI = blur in shader
      const glassTint = layer.getProp('glassTint') || '#ffffff';
      const glassDispersion = layer.getProp('glassDispersion') ?? 0;

      if (mp.gior !== glassIOR) {
        state.glassMaterial.uniforms.uIOR.value = glassIOR;
        mp.gior = glassIOR;
      }
      if (mp.gth !== glassThickness) {
        state.glassMaterial.uniforms.uThickness.value = glassThickness;
        mp.gth = glassThickness;
      }
      if (mp.gbl !== glassBlur) {
        state.glassMaterial.uniforms.uBlur.value = glassBlur;
        mp.gbl = glassBlur;
      }
      if (mp.gti !== glassTint) {
        state.glassMaterial.uniforms.uTint.value.set(glassTint);
        mp.gti = glassTint;
      }
      if (mp.gdi !== glassDispersion) {
        state.glassMaterial.uniforms.uDispersion.value = glassDispersion;
        mp.gdi = glassDispersion;
      }

      // Update lighting uniforms for glass (mirrors Curtains shader behavior)
      const glassLightPos = layer.getProp('lightPosition');
      const glassMetalness = layer.getProp('materialMetalness') ?? 0.5;
      const glassMatRoughness = layer.getProp('materialRoughness') ?? 0.5;
      const glassLightIntensity = layer.getProp('lightIntensity') ?? 0.2;
      const glassAmbientIntensity = layer.getProp('ambientLightIntensity') ?? 0.75;

      if (
        glassLightPos &&
        (mp.glpx !== glassLightPos.x || mp.glpy !== glassLightPos.y || mp.glpz !== glassLightPos.z)
      ) {
        state.glassMaterial.uniforms.uLightPosition.value.set(glassLightPos.x, glassLightPos.y, glassLightPos.z);
        mp.glpx = glassLightPos.x;
        mp.glpy = glassLightPos.y;
        mp.glpz = glassLightPos.z;
      }
      if (mp.gmet !== glassMetalness) {
        state.glassMaterial.uniforms.uMetalness.value = glassMetalness;
        mp.gmet = glassMetalness;
      }
      if (mp.gmro !== glassMatRoughness) {
        state.glassMaterial.uniforms.uRoughness.value = glassMatRoughness;
        mp.gmro = glassMatRoughness;
      }
      if (mp.gli !== glassLightIntensity) {
        state.glassMaterial.uniforms.uLightIntensity.value = glassLightIntensity;
        mp.gli = glassLightIntensity;
      }
      if (mp.gai !== glassAmbientIntensity) {
        state.glassMaterial.uniforms.uAmbientLightIntensity.value = glassAmbientIntensity;
        mp.gai = glassAmbientIntensity;
      }

      // Update environment map for glass reflections
      const glassEnvMapIntensity = layer.getProp('environmentMapIntensity') ?? 0;
      if (mp.gemi !== glassEnvMapIntensity) {
        state.glassMaterial.uniforms.uEnvMapIntensity.value = glassEnvMapIntensity;
        mp.gemi = glassEnvMapIntensity;
      }

      // Pass env map texture to glass material (custom or from render target)
      if (glassEnvMapIntensity > 0) {
        if (state.customEnvMap) {
          state.glassMaterial.uniforms.uEnvMap.value = state.customEnvMap;
        } else if (state.envMap) {
          state.glassMaterial.uniforms.uEnvMap.value = state.envMap;
        }
      }
    }
  }

  // Compute 2D bounding box for hover detection (only if needed)
  const hasElementHover =
    layer.states?.hover?.some(effect => effect.triggerOnElement) ||
    layer.local.hostLayer?.states?.hover?.some(effect => effect.triggerOnElement);
  if (hasElementHover && state.model) {
    // Compute local box corners once (lazy initialization)
    if (!state.model.userData.localBoxCorners) {
      computeLocalBoxCorners(state);
    }

    if (state.model.userData.localBoxCorners) {
      state.model.updateMatrixWorld(true);

      let minX = Infinity,
        minY = Infinity,
        maxX = -Infinity,
        maxY = -Infinity;
      state.model.userData.localBoxCorners.forEach(corner => {
        _v3.copy(corner).applyMatrix4(state.model.matrixWorld);
        _v3.project(state.camera);
        const x = (_v3.x + 1) / 2;
        const y = -(_v3.y - 1) / 2;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      });

      layer.local.boundingBox = {
        min: { x: minX, y: minY },
        max: { x: maxX, y: maxY },
      };
    }
  }

  state.renderer.render(state.scene, state.camera);
  if (state.renderer.resetState) state.renderer.resetState();
}

export function dispose(layer) {
  const state = getState(layer);

  if (state.animationMixer) {
    state.animationMixer.stopAllAction();
    state.animationMixer = null;
  }
  state.animationClips = null;
  state.activeAnimationClip = null;
  state.lastAnimationTime = null;
  layer.local.animationClipOptions = [];

  if (state.customColorMap) {
    state.customColorMap.dispose();
    state.customColorMap = null;
  }

  if (state.customNormalMap) {
    state.customNormalMap.dispose();
    state.customNormalMap = null;
  }

  if (state.customEnvMap) {
    state.customEnvMap.dispose();
    state.customEnvMap = null;
  }

  if (state.envMap) {
    state.envMap.dispose();
    state.envMap = null;
  }

  if (state.glassMaterial) {
    state.glassMaterial.dispose();
    state.glassMaterial = null;
  }

  if (state.matcapMaterial) {
    state.matcapMaterial.dispose();
    state.matcapMaterial = null;
  }

  if (state.matcapTexture) {
    state.matcapTexture.dispose();
    state.matcapTexture = null;
  }

  if (state.backgroundTexture) {
    // Clear the injected WebGL texture reference before disposing
    // to avoid Three.js trying to delete Curtains' texture
    const props = state.renderer?.properties?.get(state.backgroundTexture);
    if (props) {
      props.__webglTexture = null;
    }
    state.backgroundTexture.dispose();
    state.backgroundTexture = null;
  }

  if (state.model) {
    state.model.traverse(child => {
      if (child.isMesh) {
        if (child.geometry) child.geometry.dispose();
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else if (child.material) {
          child.material.dispose();
        }
      }
    });
    if (state.scene) state.scene.remove(state.model);
    state.model = null;
  }

  if (state.renderer) {
    state.renderer.dispose();
    state.renderer = null;
  }

  state.scene = null;
  state.camera = null;
  state.ambientLight = null;
  state.directionalLight = null;
  state.fillLight = null;

  layerStates.delete(layer);
}
