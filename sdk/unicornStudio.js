var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get2(target2, property2, receiver2) {
      var base = _superPropBase(target2, property2);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property2);
      if (desc.get) {
        return desc.get.call(receiver2);
      }
      return desc.value;
    };
  }
  return _get(target, property, receiver || target);
}
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  };
  return _getPrototypeOf(o);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) {
      if (it) o = it;
      var i = 0;
      var F = function F2() {
      };
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var normalCompletion = true, didErr = false, err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  return Constructor;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
const curtainsLite = {};
(function(exports) {
  var FALLBACK_PIXEL = new Uint8Array([0, 0, 0, 0]);
  var IDENTITY_MAT4 = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  function getTextureFormats(gl, floatingPoint) {
    if (gl instanceof WebGL2RenderingContext) {
      if (floatingPoint === "half-float") {
        return {
          internalFormat: gl.RGBA16F,
          format: gl.RGBA,
          type: gl.HALF_FLOAT
        };
      }
      if (floatingPoint === "float") {
        return {
          internalFormat: gl.RGBA32F,
          format: gl.RGBA,
          type: gl.FLOAT
        };
      }
      return {
        internalFormat: gl.RGBA8,
        format: gl.RGBA,
        type: gl.UNSIGNED_BYTE
      };
    }
    return {
      internalFormat: gl.RGBA,
      format: gl.RGBA,
      type: gl.UNSIGNED_BYTE
    };
  }
  var Texture = /* @__PURE__ */ function() {
    function Texture2(curtains) {
      var _ref;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, Texture2);
      this.curtains = curtains;
      this.gl = curtains === null || curtains === void 0 ? void 0 : curtains.gl;
      this.type = "Texture";
      this.userData = {};
      this.shouldUpdate = false;
      this._samplerName = options.sampler || "uTexture";
      this._source = options.source || null;
      this.source = this._source;
      this.sourceType = this._source ? "source" : options.fromTexture ? "copy" : "empty";
      this._copiedFrom = null;
      this._videoFrameCallbackID = null;
      this._videoFrameCallback = null;
      this._videoFallbackRAF = null;
      this._sourceLoaded = false;
      this._uploaded = false;
      this._canDraw = false;
      this._size = {
        width: 1,
        height: 1
      };
      this._globalParameters = this.gl ? getTextureFormats(this.gl, options.floatingPoint) : {
        internalFormat: 0,
        format: 0,
        type: 0
      };
      this._sampler = {
        texture: this.gl ? this.gl.createTexture() : null
      };
      this._premultiplyAlpha = (_ref = options.premultiplyAlpha) !== null && _ref !== void 0 ? _ref : false;
      if (this.gl && this._sampler.texture) {
        this._initState();
      }
      if (options.fromTexture) {
        this.copy(options.fromTexture);
      } else if (this._source) {
        this.setSource(this._source);
      } else {
        this._uploadFallback();
      }
    }
    _createClass(Texture2, [
      {
        key: "_bind",
        value: function _bind() {
          this.gl.bindTexture(this.gl.TEXTURE_2D, this._sampler.texture);
        }
      },
      {
        key: "_initState",
        value: function _initState() {
          var gl = this.gl;
          var filter = this._globalParameters.type === gl.FLOAT && !gl.getExtension("OES_texture_float_linear") ? gl.NEAREST : gl.LINEAR;
          this._bind();
          gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._premultiplyAlpha ? 1 : 0);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, filter);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, filter);
          gl.bindTexture(gl.TEXTURE_2D, null);
        }
      },
      {
        key: "_uploadFallback",
        value: function _uploadFallback() {
          if (!this.gl || !this._sampler.texture || this._copiedFrom) return;
          var gl = this.gl;
          this._bind();
          if (this._globalParameters.type === gl.UNSIGNED_BYTE) {
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              this._globalParameters.internalFormat,
              1,
              1,
              0,
              this._globalParameters.format,
              this._globalParameters.type,
              FALLBACK_PIXEL
            );
          } else {
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              this._globalParameters.internalFormat,
              1,
              1,
              0,
              this._globalParameters.format,
              this._globalParameters.type,
              null
            );
          }
          this._uploaded = true;
          this._canDraw = true;
          gl.bindTexture(gl.TEXTURE_2D, null);
        }
      },
      {
        // Only flags the upload, like the full build's _willUpdate. The host loop (editor rAF, SDK
        // renderScenes) already renders every frame while a video plays, so requesting a render
        // here drew the scene a second time per frame: uTime and ping-pong simulations ran at 2x
        // whenever any video texture in the scene was playing, even on a hidden plane.
        key: "_onVideoFrame",
        value: function _onVideoFrame() {
          if (!this.curtains || this._copiedFrom) return;
          this.shouldUpdate = true;
        }
      },
      {
        key: "_stopVideoFrameUpdates",
        value: function _stopVideoFrameUpdates() {
          var source = this._source;
          if (!source || !(source instanceof HTMLVideoElement)) return;
          if (this._videoFrameCallbackID !== null && typeof source.cancelVideoFrameCallback === "function") {
            source.cancelVideoFrameCallback(this._videoFrameCallbackID);
          }
          this._videoFrameCallbackID = null;
          this._videoFrameCallback = null;
          if (this._videoFallbackRAF !== null) {
            cancelAnimationFrame(this._videoFallbackRAF);
            this._videoFallbackRAF = null;
          }
        }
      },
      {
        key: "_startVideoFrameUpdates",
        value: function _startVideoFrameUpdates() {
          var _this = this;
          var source = this._source;
          if (!source || !(source instanceof HTMLVideoElement) || this._copiedFrom) return;
          this._stopVideoFrameUpdates();
          if (typeof source.requestVideoFrameCallback === "function") {
            this._videoFrameCallback = function() {
              _this._onVideoFrame();
              _this._videoFrameCallbackID = source.requestVideoFrameCallback(_this._videoFrameCallback);
            };
            this._videoFrameCallbackID = source.requestVideoFrameCallback(this._videoFrameCallback);
          } else {
            var fallbackTick = function fallbackTick2() {
              if (_this._source !== source) {
                _this._videoFallbackRAF = null;
                return;
              }
              if (!source.paused && !source.ended && source.readyState >= source.HAVE_CURRENT_DATA) {
                _this._onVideoFrame();
              }
              _this._videoFallbackRAF = requestAnimationFrame(fallbackTick2);
            };
            this._videoFallbackRAF = requestAnimationFrame(fallbackTick);
          }
        }
      },
      {
        key: "_uploadSource",
        value: function _uploadSource(source) {
          if (!this.gl || !this._sampler.texture || this._copiedFrom) return;
          var gl = this.gl;
          var width = source.videoWidth || source.naturalWidth || source.width || 1;
          var height = source.videoHeight || source.naturalHeight || source.height || 1;
          this._size = {
            width,
            height
          };
          this._bind();
          var isBitmap = typeof ImageBitmap !== "undefined" && source instanceof ImageBitmap;
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, isBitmap ? 0 : 1);
          gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !isBitmap && this._premultiplyAlpha ? 1 : 0);
          if (gl instanceof WebGL2RenderingContext) {
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              this._globalParameters.internalFormat,
              this._globalParameters.format,
              this._globalParameters.type,
              source
            );
          } else {
            gl.texImage2D(
              gl.TEXTURE_2D,
              0,
              this._globalParameters.format,
              this._globalParameters.format,
              this._globalParameters.type,
              source
            );
          }
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
          this._sourceLoaded = true;
          this._uploaded = true;
          this._canDraw = true;
          this.sourceType = source instanceof HTMLVideoElement ? "video" : source instanceof HTMLCanvasElement ? "canvas" : "image";
          gl.bindTexture(gl.TEXTURE_2D, null);
        }
      },
      {
        key: "setSource",
        value: function setSource(source) {
          this._stopVideoFrameUpdates();
          this._source = source;
          this.source = source;
          this._copiedFrom = null;
          this._uploadSource(source);
          if (source instanceof HTMLVideoElement) {
            this._startVideoFrameUpdates();
          }
          return this;
        }
      },
      {
        key: "copy",
        value: function copy(texture) {
          if (!texture) return this;
          this._stopVideoFrameUpdates();
          this._source = texture._source || null;
          this.source = this._source;
          this._copiedFrom = texture;
          this.sourceType = texture.sourceType || "copy";
          this._sourceLoaded = !!texture._sourceLoaded;
          this._uploaded = !!texture._uploaded;
          this._canDraw = texture._canDraw !== false;
          this._sampler.texture = texture._sampler.texture;
          this._size = _objectSpread({}, texture._size);
          this._globalParameters = _objectSpread({}, texture._globalParameters);
          this.shouldUpdate = !!texture.shouldUpdate;
          return this;
        }
      },
      {
        key: "update",
        value: function update() {
          if (!this._source || this._copiedFrom) return;
          this._uploadSource(this._source);
        }
      },
      {
        key: "needUpdate",
        value: function needUpdate() {
          if (this._copiedFrom) return;
          this.update();
          if (this.curtains && typeof this.curtains.requestRender === "function") {
            this.curtains.requestRender();
          } else if (this.curtains && typeof this.curtains.render === "function") {
            this.curtains.render();
          }
        }
      },
      {
        key: "remove",
        value: function remove() {
          this._stopVideoFrameUpdates();
          if (!this.gl || !this._sampler.texture || this._copiedFrom) return;
          this.gl.deleteTexture(this._sampler.texture);
        }
      }
    ]);
    return Texture2;
  }();
  var RenderTarget2 = /* @__PURE__ */ function() {
    function RenderTarget3(curtains) {
      var _curtains$canvas, _curtains$canvas2, _options$texturesOpti, _options$texturesOpti2, _options$texturesOpti3;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      _classCallCheck(this, RenderTarget3);
      this.curtains = curtains;
      this.gl = curtains === null || curtains === void 0 ? void 0 : curtains.gl;
      this.type = "RenderTarget";
      this.userData = {};
      this._depth = !!options.depth;
      this._clear = options.clear !== void 0 ? !!options.clear : true;
      var canvasWidth = (curtains === null || curtains === void 0 ? void 0 : (_curtains$canvas = curtains.canvas) === null || _curtains$canvas === void 0 ? void 0 : _curtains$canvas.width) || 1;
      var canvasHeight = (curtains === null || curtains === void 0 ? void 0 : (_curtains$canvas2 = curtains.canvas) === null || _curtains$canvas2 === void 0 ? void 0 : _curtains$canvas2.height) || 1;
      this._scaleWithCanvas = options.scaleWithCanvas !== void 0 ? !!options.scaleWithCanvas : true;
      this._widthScale = options.maxWidth !== void 0 && canvasWidth > 0 ? options.maxWidth / canvasWidth : null;
      this._heightScale = options.maxHeight !== void 0 && canvasHeight > 0 ? options.maxHeight / canvasHeight : null;
      this._baseMaxSize = {
        width: Math.max(1, Math.round(options.maxWidth || canvasWidth)),
        height: Math.max(1, Math.round(options.maxHeight || canvasHeight))
      };
      this._minSize = {
        width: Math.max(1, Math.round(options.minWidth || 1)),
        height: Math.max(1, Math.round(options.minHeight || 1))
      };
      this._maxSize = {
        width: this._baseMaxSize.width,
        height: this._baseMaxSize.height
      };
      this._size = {
        width: this._baseMaxSize.width,
        height: this._baseMaxSize.height
      };
      this._setSize();
      this.index = -1;
      this._frameBuffer = null;
      this._depthBuffer = null;
      var sampler = ((_options$texturesOpti = options.texturesOptions) === null || _options$texturesOpti === void 0 ? void 0 : _options$texturesOpti.sampler) || "uTexture";
      var floatingPoint = options.texturesOptions && options.texturesOptions.floatingPoint;
      this.textures = [
        new Texture(curtains, {
          sampler,
          premultiplyAlpha: (_options$texturesOpti2 = (_options$texturesOpti3 = options.texturesOptions) === null || _options$texturesOpti3 === void 0 ? void 0 : _options$texturesOpti3.premultiplyAlpha) !== null && _options$texturesOpti2 !== void 0 ? _options$texturesOpti2 : false,
          floatingPoint
        })
      ];
      if (curtains !== null && curtains !== void 0 && curtains.renderTargets && !curtains.renderTargets.includes(this)) {
        curtains.renderTargets.push(this);
        curtains.renderTargets.forEach(function(target, index) {
          target.index = index;
        });
      }
      this._initRenderTarget();
    }
    _createClass(RenderTarget3, [
      {
        key: "_setSize",
        value: function _setSize() {
          var _this$curtains$canvas, _this$curtains$canvas2;
          var canvasWidth = ((this.curtains === null || this.curtains === void 0 ? void 0 : (_this$curtains$canvas = this.curtains.canvas) === null || _this$curtains$canvas === void 0 ? void 0 : _this$curtains$canvas.width) || 1) * 1;
          var canvasHeight = ((this.curtains === null || this.curtains === void 0 ? void 0 : (_this$curtains$canvas2 = this.curtains.canvas) === null || _this$curtains$canvas2 === void 0 ? void 0 : _this$curtains$canvas2.height) || 1) * 1;
          var maxWidth = this._baseMaxSize.width;
          var maxHeight = this._baseMaxSize.height;
          if (this._scaleWithCanvas) {
            if (this._widthScale !== null) {
              maxWidth = Math.max(1, Math.round(canvasWidth * this._widthScale));
            }
            if (this._heightScale !== null) {
              maxHeight = Math.max(1, Math.round(canvasHeight * this._heightScale));
            }
          }
          this._maxSize = {
            width: maxWidth,
            height: maxHeight
          };
          this._size = this._scaleWithCanvas ? {
            width: Math.min(this._maxSize.width, Math.max(this._minSize.width, canvasWidth)),
            height: Math.min(this._maxSize.height, Math.max(this._minSize.height, canvasHeight))
          } : { width: maxWidth, height: maxHeight };
        }
      },
      {
        key: "_initRenderTarget",
        value: function _initRenderTarget() {
          if (!this.gl) return;
          var gl = this.gl;
          this._setSize();
          if (!this._frameBuffer) {
            this._frameBuffer = gl.createFramebuffer();
          }
          var texture = this.getTexture();
          if (!texture) return;
          gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer);
          gl.bindTexture(gl.TEXTURE_2D, texture._sampler.texture);
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            texture._globalParameters.internalFormat,
            this._size.width,
            this._size.height,
            0,
            texture._globalParameters.format,
            texture._globalParameters.type,
            null
          );
          texture._size = _objectSpread({}, this._size);
          texture._sourceLoaded = true;
          texture._uploaded = true;
          texture._canDraw = true;
          texture.sourceType = "fbo";
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture._sampler.texture, 0);
          if (this._depth) {
            if (!this._depthBuffer) {
              this._depthBuffer = gl.createRenderbuffer();
            }
            gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this._size.width, this._size.height);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this._depthBuffer);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
          }
          gl.bindTexture(gl.TEXTURE_2D, null);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
      },
      {
        key: "resize",
        value: function resize() {
          if (!this.gl) return;
          var previousWidth = this._size.width;
          var previousHeight = this._size.height;
          this._setSize();
          if (previousWidth === this._size.width && previousHeight === this._size.height && this._frameBuffer) {
            return;
          }
          if (!this._frameBuffer) {
            this._initRenderTarget();
            return;
          }
          var texture = this.getTexture();
          if (!texture) return;
          var gl = this.gl;
          gl.bindFramebuffer(gl.FRAMEBUFFER, this._frameBuffer);
          gl.bindTexture(gl.TEXTURE_2D, texture._sampler.texture);
          gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            texture._globalParameters.internalFormat,
            this._size.width,
            this._size.height,
            0,
            texture._globalParameters.format,
            texture._globalParameters.type,
            null
          );
          texture._size = _objectSpread({}, this._size);
          texture._sourceLoaded = true;
          texture._uploaded = true;
          texture._canDraw = true;
          texture.sourceType = "fbo";
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture._sampler.texture, 0);
          if (this._depth) {
            if (!this._depthBuffer) {
              this._depthBuffer = gl.createRenderbuffer();
            }
            gl.bindRenderbuffer(gl.RENDERBUFFER, this._depthBuffer);
            gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, this._size.width, this._size.height);
            gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, this._depthBuffer);
            gl.bindRenderbuffer(gl.RENDERBUFFER, null);
          }
          gl.bindTexture(gl.TEXTURE_2D, null);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          if (this.curtains && this.curtains.renderer) {
            this.curtains.renderer.state.frameBufferID = null;
          }
        }
      },
      {
        key: "getTexture",
        value: function getTexture() {
          return this.textures[0] || null;
        }
      },
      {
        key: "remove",
        value: function remove() {
          var _this$curtains, _this = this;
          if (!this.gl) return;
          if (this._depthBuffer) {
            this.gl.deleteRenderbuffer(this._depthBuffer);
            this._depthBuffer = null;
          }
          if (this._frameBuffer) {
            this.gl.deleteFramebuffer(this._frameBuffer);
            this._frameBuffer = null;
          }
          this.textures.forEach(function(texture) {
            return texture.remove();
          });
          if ((_this$curtains = this.curtains) !== null && _this$curtains !== void 0 && _this$curtains.planes) {
            this.curtains.planes.forEach(function(plane) {
              if (plane.target === _this) plane.target = null;
            });
          }
          if ((_this$curtains = this.curtains) !== null && _this$curtains !== void 0 && _this$curtains.renderTargets) {
            this.curtains.renderTargets = this.curtains.renderTargets.filter(function(target) {
              return target !== _this;
            });
            this.curtains.renderTargets.forEach(function(target, index) {
              target.index = index;
            });
          }
        }
      }
    ]);
    return RenderTarget3;
  }();
  function findContainer(container) {
    if (!container) return null;
    if (typeof container === "string") return document.querySelector(container);
    return container;
  }
  var Curtains2 = /* @__PURE__ */ function() {
    function Curtains3() {
      var _options$antialias, _options$premultiplie2, _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, Curtains3);
      this.type = "Curtains";
      this.options = _objectSpread({}, options);
      this.container = findContainer(options.container);
      this.canvas = options.canvas || document.createElement("canvas");
      this.canvas.style.display = "block";
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
      if (this.container && !this.container.contains(this.canvas)) {
        this.container.appendChild(this.canvas);
      }
      var contextAttributes = {
        alpha: true,
        antialias: (_options$antialias = options.antialias) !== null && _options$antialias !== void 0 ? _options$antialias : false,
        premultipliedAlpha: (_options$premultiplie2 = options.premultipliedAlpha) !== null && _options$premultiplie2 !== void 0 ? _options$premultiplie2 : true,
        preserveDrawingBuffer: false
      };
      this.gl = this.canvas.getContext("webgl2", contextAttributes) || this.canvas.getContext("webgl", contextAttributes);
      if (this.gl instanceof WebGL2RenderingContext) {
        this.gl.getExtension("EXT_color_buffer_float");
        this.gl.getExtension("OES_texture_float_linear");
      } else {
        this.gl.getExtension("OES_texture_half_float");
        this.gl.getExtension("OES_texture_half_float_linear");
        this.gl.getExtension("OES_texture_float");
        this.gl.getExtension("OES_texture_float_linear");
      }
      this.planes = [];
      this.renderTargets = [];
      this.pixelRatio = options.pixelRatio || 1;
      this.renderingScale = options.renderingScale || 1;
      this._renderRequestID = null;
      this._errorCallbacks = [];
      this._contextLostCallbacks = [];
      this._contextRestoredCallbacks = [];
      var rendererState = {
        currentProgramID: null,
        currentGeometryID: null,
        forceBufferUpdate: false,
        depthTest: null,
        blending: null,
        cullFace: null,
        frameBufferID: null,
        // The target the last plane drew into this frame (null for the screen).
        drawTarget: null,
        activeTexture: null,
        flipY: null,
        premultiplyAlpha: null
      };
      this.renderer = {
        gl: this.gl,
        premultipliedAlpha: contextAttributes.premultipliedAlpha,
        state: rendererState,
        // One-shot work deferred to the start of the next render. Draining a snapshot means a
        // callback that queues more work runs on the following render rather than recursing,
        // which matches the full build's deferred queue without its setTimeout.
        nextRender: {
          queue: [],
          add: function add(callback) {
            if (typeof callback === "function") this.queue.push(callback);
            return callback;
          },
          execute: function execute() {
            var pending = this.queue.splice(0, this.queue.length);
            pending.forEach(function(callback) {
              callback();
            });
          }
        },
        setDepthTest: function setDepthTest(depthTest) {
          if (!_this2.gl) return;
          if (depthTest && !rendererState.depthTest) {
            rendererState.depthTest = depthTest;
            _this2.gl.enable(_this2.gl.DEPTH_TEST);
          } else if (!depthTest && rendererState.depthTest) {
            rendererState.depthTest = depthTest;
            _this2.gl.disable(_this2.gl.DEPTH_TEST);
          }
        },
        setDepthFunc: function setDepthFunc() {
          if (!_this2.gl) return;
          _this2.gl.depthFunc(_this2.gl.LEQUAL);
        },
        setBlending: function setBlending() {
          var enableBlending = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
          if (!_this2.gl) return;
          if (enableBlending && !rendererState.blending) {
            rendererState.blending = enableBlending;
            _this2.gl.enable(_this2.gl.BLEND);
          } else if (!enableBlending && rendererState.blending) {
            rendererState.blending = enableBlending;
            _this2.gl.disable(_this2.gl.BLEND);
          }
        },
        setBlendFunc: function setBlendFunc() {
          if (!_this2.gl) return;
          _this2.gl.enable(_this2.gl.BLEND);
          if (this.premultipliedAlpha) {
            _this2.gl.blendFuncSeparate(
              _this2.gl.ONE,
              _this2.gl.ONE_MINUS_SRC_ALPHA,
              _this2.gl.ONE,
              _this2.gl.ONE_MINUS_SRC_ALPHA
            );
          } else {
            _this2.gl.blendFuncSeparate(
              _this2.gl.SRC_ALPHA,
              _this2.gl.ONE_MINUS_SRC_ALPHA,
              _this2.gl.ONE,
              _this2.gl.ONE_MINUS_SRC_ALPHA
            );
          }
        },
        setFaceCulling: function setFaceCulling(cullFace) {
          if (!_this2.gl || rendererState.cullFace === cullFace) return;
          rendererState.cullFace = cullFace;
          if (cullFace === "none") {
            _this2.gl.disable(_this2.gl.CULL_FACE);
          } else {
            var faceCulling = cullFace === "front" ? _this2.gl.FRONT : _this2.gl.BACK;
            _this2.gl.enable(_this2.gl.CULL_FACE);
            _this2.gl.cullFace(faceCulling);
          }
        },
        useProgram: function useProgram(program) {
          if (!_this2.gl || !program) return;
          var programId = program.id !== void 0 ? program.id : program;
          var glProgram = program.program || program;
          if (rendererState.currentProgramID === null || rendererState.currentProgramID !== programId) {
            _this2.gl.useProgram(glProgram);
            rendererState.currentProgramID = programId;
          }
        },
        bindFrameBuffer: function bindFrameBuffer(target) {
          var shouldInit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
          if (!_this2.gl) return;
          if (target && shouldInit && !target._frameBuffer) {
            target._initRenderTarget();
          }
          var bufferId = target ? target.index !== void 0 ? target.index : target._frameBuffer : null;
          if (bufferId !== rendererState.frameBufferID) {
            _this2.gl.bindFramebuffer(_this2.gl.FRAMEBUFFER, target ? target._frameBuffer : null);
            rendererState.frameBufferID = bufferId;
          }
        }
      };
      this.renderer.setBlendFunc();
      this.renderer.setDepthFunc();
      this.renderer.setDepthTest(false);
      this._onContextLost = function(event) {
        event.preventDefault();
        _this2._contextLostCallbacks.forEach(function(cb) {
          return cb(event);
        });
      };
      this._onContextRestored = function() {
        _this2._contextRestoredCallbacks.forEach(function(cb) {
          return cb();
        });
      };
      this.canvas.addEventListener("webglcontextlost", this._onContextLost, false);
      this.canvas.addEventListener("webglcontextrestored", this._onContextRestored, false);
      this.resize();
    }
    _createClass(Curtains3, [
      {
        key: "_emitError",
        value: function _emitError(error) {
          this._errorCallbacks.forEach(function(cb) {
            return cb(error);
          });
        }
      },
      {
        key: "onError",
        value: function onError(callback) {
          if (typeof callback === "function") this._errorCallbacks.push(callback);
          return this;
        }
      },
      {
        key: "onContextLost",
        value: function onContextLost(callback) {
          if (typeof callback === "function") this._contextLostCallbacks.push(callback);
          return this;
        }
      },
      {
        key: "onContextRestored",
        value: function onContextRestored(callback) {
          if (typeof callback === "function") this._contextRestoredCallbacks.push(callback);
          return this;
        }
      },
      {
        key: "restoreContext",
        value: function restoreContext() {
          return this;
        }
      },
      {
        key: "createRenderTarget",
        value: function createRenderTarget() {
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new RenderTarget2(this, options);
        }
      },
      {
        key: "requestRender",
        value: function requestRender() {
          var _this3 = this;
          if (!this.gl || this._renderRequestID !== null) return;
          this._renderRequestID = requestAnimationFrame(function() {
            _this3._renderRequestID = null;
            if (_this3.planes.some(function(plane) {
              return plane._isCompiling();
            })) {
              _this3.requestRender();
              return;
            }
            _this3.render();
          });
        }
      },
      {
        // Unlike the full build, this does not clamp to a minimum of 1: ratios below 1 are how the
        // renderer downsamples on low-end hardware. resize() already floors the canvas at 1px.
        key: "setPixelRatio",
        value: function setPixelRatio(pixelRatio) {
          var ratio = parseFloat(pixelRatio);
          this.pixelRatio = Number.isFinite(ratio) && ratio > 0 ? ratio : 1;
          this.resize();
          return this;
        }
      },
      {
        key: "resize",
        value: function resize() {
          if (!this.container) return;
          var width = Math.max(1, Math.round(this.container.clientWidth * this.pixelRatio * this.renderingScale));
          var height = Math.max(1, Math.round(this.container.clientHeight * this.pixelRatio * this.renderingScale));
          this.canvas.width = width;
          this.canvas.height = height;
          if (this.gl) {
            this.gl.viewport(0, 0, width, height);
          }
          this.renderTargets.slice().forEach(function(target) {
            if (target && typeof target.resize === "function") {
              target.resize();
            }
          });
        }
      },
      {
        key: "render",
        value: function render() {
          if (!this.gl) return;
          this.renderer.nextRender.execute();
          var gl = this.gl;
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
          var sortedPlanes = _toConsumableArray(this.planes).filter(function(plane) {
            return plane.visible !== false;
          }).sort(function(a, b) {
            return (a.renderOrder || 0) - (b.renderOrder || 0);
          });
          var pingPongPlanes = sortedPlanes.filter(function(plane) {
            return plane.type === "PingPongPlane";
          });
          var regularPlanes = sortedPlanes.filter(function(plane) {
            return plane.type !== "PingPongPlane";
          });
          var renderTargetPlanes = regularPlanes.filter(function(plane) {
            return !!plane.target;
          }).sort(function(a, b) {
            var aTargetIndex = a.target && a.target.index !== void 0 ? a.target.index : Number.MAX_SAFE_INTEGER;
            var bTargetIndex = b.target && b.target.index !== void 0 ? b.target.index : Number.MAX_SAFE_INTEGER;
            if (aTargetIndex !== bTargetIndex) {
              return aTargetIndex - bTargetIndex;
            }
            return (a.renderOrder || 0) - (b.renderOrder || 0);
          });
          var screenPlanes = regularPlanes.filter(function(plane) {
            return !plane.target;
          });
          gl.disable(gl.DEPTH_TEST);
          this.renderer.state.depthTest = false;
          gl.disable(gl.BLEND);
          this.renderer.state.blending = false;
          this.renderer.state.drawTarget = null;
          pingPongPlanes.forEach(function(plane) {
            if (plane._canDraw === false) return;
            plane._render();
          });
          gl.enable(gl.BLEND);
          this.renderer.state.blending = true;
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
          renderTargetPlanes.forEach(function(plane) {
            if (plane._canDraw === false) return;
            plane._render();
          });
          screenPlanes.forEach(function(plane) {
            if (plane._canDraw === false) return;
            plane._render();
          });
        }
      },
      {
        key: "dispose",
        value: function dispose() {
          if (this._renderRequestID !== null) {
            cancelAnimationFrame(this._renderRequestID);
            this._renderRequestID = null;
          }
          this.planes.slice().forEach(function(plane) {
            return plane.remove();
          });
          this.renderTargets.slice().forEach(function(target) {
            return target.remove();
          });
          if (this.canvas) {
            this.canvas.removeEventListener("webglcontextlost", this._onContextLost);
            this.canvas.removeEventListener("webglcontextrestored", this._onContextRestored);
          }
          this.planes = [];
          this.renderTargets = [];
        }
      }
    ]);
    return Curtains3;
  }();
  var DEFAULT_VERTEX_SHADER = "\nattribute vec3 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nvarying vec2 vTextureCoord;\n\nvoid main() {\n    gl_Position = vec4(aVertexPosition, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n";
  var DEFAULT_FRAGMENT_SHADER = "\nprecision mediump float;\n\nuniform sampler2D uTexture;\nvarying vec2 vTextureCoord;\n\nvoid main() {\n    gl_FragColor = texture2D(uTexture, vTextureCoord);\n}\n";
  function compileShader(gl, type, source) {
    var shader = gl.createShader(type);
    if (!shader) {
      throw new Error("Unable to create WebGL shader, the context may be lost");
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
  }
  function startProgram(gl, vertexSource, fragmentSource) {
    var vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
    var fragmentShader;
    try {
      fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    } catch (error) {
      gl.deleteShader(vertexShader);
      throw error;
    }
    var program = gl.createProgram();
    if (!program) {
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      throw new Error("Unable to create WebGL program, the context may be lost");
    }
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    return {
      program,
      vertexShader,
      fragmentShader
    };
  }
  function finishProgram(gl, pending) {
    var program = pending.program;
    var vertexShader = pending.vertexShader;
    var fragmentShader = pending.fragmentShader;
    var error = null;
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
        error = gl.getShaderInfoLog(vertexShader) || "Unknown shader compile error";
      } else if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
        error = gl.getShaderInfoLog(fragmentShader) || "Unknown shader compile error";
      } else {
        error = gl.getProgramInfoLog(program) || "Unknown program link error";
      }
    }
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    if (error) {
      gl.deleteProgram(program);
      throw new Error(error);
    }
    return program;
  }
  function createGridGeometry(gl) {
    var widthSegments = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var heightSegments = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    var independentGeometry = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    var wSeg = Math.max(1, Math.floor(widthSegments));
    var hSeg = Math.max(1, Math.floor(heightSegments));
    if (independentGeometry) {
      var independentPositions = [];
      var independentUvs = [];
      for (var independentY = 0; independentY < hSeg; independentY++) {
        var v0 = independentY / hSeg;
        var v1 = (independentY + 1) / hSeg;
        for (var independentX = 0; independentX < wSeg; independentX++) {
          var u0 = independentX / wSeg;
          var u1 = (independentX + 1) / wSeg;
          independentPositions.push(
            (u0 - 0.5) * 2,
            (v0 - 0.5) * 2,
            0,
            (u1 - 0.5) * 2,
            (v0 - 0.5) * 2,
            0,
            (u0 - 0.5) * 2,
            (v1 - 0.5) * 2,
            0,
            (u0 - 0.5) * 2,
            (v1 - 0.5) * 2,
            0,
            (u1 - 0.5) * 2,
            (v0 - 0.5) * 2,
            0,
            (u1 - 0.5) * 2,
            (v1 - 0.5) * 2,
            0
          );
          independentUvs.push(u0, v0, u1, v0, u0, v1, u0, v1, u1, v0, u1, v1);
        }
      }
      var independentPositionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, independentPositionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(independentPositions), gl.STATIC_DRAW);
      var independentUvBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, independentUvBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(independentUvs), gl.STATIC_DRAW);
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      return {
        positionBuffer: independentPositionBuffer,
        uvBuffer: independentUvBuffer,
        indexBuffer: null,
        vertexCount: wSeg * hSeg * 6
      };
    }
    var vertexCount = (wSeg + 1) * (hSeg + 1);
    var positions = new Float32Array(vertexCount * 3);
    var uvs = new Float32Array(vertexCount * 2);
    var p = 0;
    var u = 0;
    for (var y = 0; y <= hSeg; y++) {
      var v = y / hSeg;
      var py = 1 - v * 2;
      for (var x = 0; x <= wSeg; x++) {
        var s = x / wSeg;
        var px = s * 2 - 1;
        positions[p++] = px;
        positions[p++] = py;
        positions[p++] = 0;
        uvs[u++] = s;
        uvs[u++] = 1 - v;
      }
    }
    var indexCount = wSeg * hSeg * 6;
    var useUint32 = vertexCount > 65535;
    var indices = useUint32 ? new Uint32Array(indexCount) : new Uint16Array(indexCount);
    var i = 0;
    for (var _y = 0; _y < hSeg; _y++) {
      for (var _x = 0; _x < wSeg; _x++) {
        var tl = _y * (wSeg + 1) + _x;
        var tr = tl + 1;
        var bl = (_y + 1) * (wSeg + 1) + _x;
        var br = bl + 1;
        indices[i++] = tl;
        indices[i++] = bl;
        indices[i++] = tr;
        indices[i++] = tr;
        indices[i++] = bl;
        indices[i++] = br;
      }
    }
    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    var uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);
    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    return {
      positionBuffer,
      uvBuffer,
      indexBuffer,
      indexCount,
      indexType: useUint32 ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT
    };
  }
  function setUniform(gl, location, type, value) {
    if (location == null || value == null) return;
    var vec2 = value && _typeof(value) === "object" && "x" in value && "y" in value;
    var vec3 = vec2 && "z" in value;
    switch (type) {
      case "1f":
        gl.uniform1f(location, Number(value));
        break;
      case "2f":
        gl.uniform2f(location, vec2 ? value.x : value[0], vec2 ? value.y : value[1]);
        break;
      case "3f":
        gl.uniform3f(location, vec3 ? value.x : value[0], vec3 ? value.y : value[1], vec3 ? value.z : value[2]);
        break;
      case "4f":
        gl.uniform4f(location, value[0], value[1], value[2], value[3]);
        break;
      case "1i":
        gl.uniform1i(location, Number(value));
        break;
      case "2i":
        gl.uniform2i(location, value[0], value[1]);
        break;
      case "3i":
        gl.uniform3i(location, value[0], value[1], value[2]);
        break;
      case "4i":
        gl.uniform4i(location, value[0], value[1], value[2], value[3]);
        break;
      case "1fv":
        gl.uniform1fv(location, value);
        break;
      case "2fv":
        gl.uniform2fv(location, value);
        break;
      case "3fv":
        gl.uniform3fv(location, value);
        break;
      case "4fv":
        gl.uniform4fv(location, value);
        break;
      case "mat3":
        gl.uniformMatrix3fv(location, false, value);
        break;
      case "mat4":
        gl.uniformMatrix4fv(location, false, value);
        break;
      default:
        if (vec3) {
          gl.uniform3f(location, value.x, value.y, value.z);
        } else if (vec2) {
          gl.uniform2f(location, value.x, value.y);
        } else if (Array.isArray(value) || ArrayBuffer.isView(value)) {
          if (value.length === 16) {
            gl.uniformMatrix4fv(location, false, value);
          } else if (value.length === 9) {
            gl.uniformMatrix3fv(location, false, value);
          } else if (value.length === 4) {
            gl.uniform4fv(location, value);
          } else if (value.length === 3) {
            gl.uniform3fv(location, value);
          } else if (value.length === 2) {
            gl.uniform2fv(location, value);
          } else if (value.length === 1) {
            gl.uniform1f(location, value[0]);
          }
        } else {
          gl.uniform1f(location, Number(value));
        }
    }
  }
  function cloneUniforms() {
    var uniforms = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var cloned = {};
    Object.keys(uniforms).forEach(function(key) {
      var uniform = uniforms[key];
      var value = uniform.value && typeof uniform.value.clone === "function" ? uniform.value.clone() : uniform.value;
      cloned[key] = _objectSpread({}, uniform, { value });
    });
    return cloned;
  }
  var Plane2 = /* @__PURE__ */ function() {
    function Plane3(curtains, htmlElement) {
      var _this3 = this;
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      _classCallCheck(this, Plane3);
      this.type = "Plane";
      this.curtains = curtains;
      this.gl = curtains === null || curtains === void 0 ? void 0 : curtains.gl;
      this.htmlElement = htmlElement || (curtains === null || curtains === void 0 ? void 0 : curtains.container) || null;
      this.userData = {};
      this.visible = true;
      this.renderOrder = 0;
      this.target = null;
      this._depthTest = params.depthTest === true;
      this._canDraw = true;
      this._removed = false;
      this.textures = [];
      this.videos = [];
      this.uniforms = cloneUniforms(params.uniforms);
      this._readyCallbacks = [];
      this._renderCallbacks = [];
      this._afterRenderCallbacks = [];
      this._uniformLocations = /* @__PURE__ */ new Map();
      this._samplerLocations = /* @__PURE__ */ new Map();
      this._vertexShader = params.vertexShader || DEFAULT_VERTEX_SHADER;
      this._fragmentShader = params.fragmentShader || DEFAULT_FRAGMENT_SHADER;
      this._geometry = null;
      this._program = null;
      this._pendingProgram = null;
      this._parallelCompile = null;
      this._positionLocation = -1;
      this._uvLocation = -1;
      this._mvMatrixLocation = null;
      this._pMatrixLocation = null;
      this._init(params);
      curtains === null || curtains === void 0 ? void 0 : curtains.planes.push(this);
      var fireReady = function() {
        if (_this3._removed) return;
        if (!document.hidden && _this3._isCompiling()) {
          requestAnimationFrame(fireReady);
          return;
        }
        if (_this3._pendingProgram) _this3._finishProgram();
        _this3._readyCallbacks.forEach(function(callback) {
          return callback(_this3);
        });
      };
      if (typeof document !== "undefined" && document.hidden && typeof MessageChannel === "function") {
        var channel = new MessageChannel();
        channel.port1.onmessage = fireReady;
        channel.port2.postMessage(null);
      } else {
        requestAnimationFrame(fireReady);
      }
    }
    _createClass(Plane3, [
      {
        key: "_init",
        value: function _init(params) {
          if (!this.gl) return;
          var options = this.curtains && this.curtains.options;
          this._parallelCompile = options && options.parallelShaderCompile ? this.gl.getExtension("KHR_parallel_shader_compile") : null;
          try {
            this._geometry = createGridGeometry(
              this.gl,
              params.widthSegments,
              params.heightSegments,
              params.independentGeometry
            );
            this._pendingProgram = startProgram(this.gl, this._vertexShader, this._fragmentShader);
            if (!this._parallelCompile) this._finishProgram();
          } catch (error) {
            var _this$curtains2, _this$curtains2$_emit;
            (_this$curtains2 = this.curtains) === null || _this$curtains2 === void 0 ? void 0 : (_this$curtains2$_emit = _this$curtains2._emitError) === null || _this$curtains2$_emit === void 0 ? void 0 : _this$curtains2$_emit.call(_this$curtains2, error);
            this._canDraw = false;
          }
        }
      },
      {
        // Asking for completion doesn't block; any other query on a compiling program waits it out.
        key: "_isCompiling",
        value: function _isCompiling() {
          return !!this._pendingProgram && !this.gl.getProgramParameter(this._pendingProgram.program, this._parallelCompile.COMPLETION_STATUS_KHR);
        }
      },
      {
        // Runs from _init for a blocking compile, or from ready / the first draw for a parallel one,
        // so it reports its own errors the same way _init does.
        key: "_finishProgram",
        value: function _finishProgram() {
          var pending = this._pendingProgram;
          this._pendingProgram = null;
          try {
            this._program = finishProgram(this.gl, pending);
          } catch (error) {
            if (this.curtains && this.curtains._emitError) this.curtains._emitError(error);
            this._canDraw = false;
            return;
          }
          this._positionLocation = this.gl.getAttribLocation(this._program, "aVertexPosition");
          this._uvLocation = this.gl.getAttribLocation(this._program, "aTextureCoord");
          this._mvMatrixLocation = this.gl.getUniformLocation(this._program, "uMVMatrix");
          this._pMatrixLocation = this.gl.getUniformLocation(this._program, "uPMatrix");
          this._texMatrixLocation = this.gl.getUniformLocation(this._program, "uTextureMatrix");
        }
      },
      {
        key: "_bindAttributes",
        value: function _bindAttributes() {
          var gl = this.gl;
          var geometry = this._geometry;
          if (!geometry) return;
          if (this._positionLocation >= 0) {
            gl.bindBuffer(gl.ARRAY_BUFFER, geometry.positionBuffer);
            gl.enableVertexAttribArray(this._positionLocation);
            gl.vertexAttribPointer(this._positionLocation, 3, gl.FLOAT, false, 0, 0);
          }
          if (this._uvLocation >= 0) {
            gl.bindBuffer(gl.ARRAY_BUFFER, geometry.uvBuffer);
            gl.enableVertexAttribArray(this._uvLocation);
            gl.vertexAttribPointer(this._uvLocation, 2, gl.FLOAT, false, 0, 0);
          }
          if (geometry.indexBuffer) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, geometry.indexBuffer);
          }
        }
      },
      {
        key: "_bindUniforms",
        value: function _bindUniforms() {
          var _this4 = this;
          if (!this._program) return;
          var gl = this.gl;
          gl.useProgram(this._program);
          Object.keys(this.uniforms).forEach(function(key) {
            var uniform = _this4.uniforms[key];
            if (!uniform) return;
            var location = _this4._uniformLocations.get(key);
            if (location === void 0) {
              location = gl.getUniformLocation(_this4._program, uniform.name || key);
              _this4._uniformLocations.set(key, location);
            }
            setUniform(gl, location, uniform.type, uniform.value);
          });
        }
      },
      {
        key: "_bindTextures",
        value: function _bindTextures() {
          var gl = this.gl;
          var index = 0;
          var _iterator = _createForOfIteratorHelper(this.textures), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var _texture$_sampler;
              var texture = _step.value;
              if (!(texture !== null && texture !== void 0 && (_texture$_sampler = texture._sampler) !== null && _texture$_sampler !== void 0 && _texture$_sampler.texture))
                continue;
              gl.activeTexture(gl.TEXTURE0 + index);
              if (texture._copiedFrom) {
                texture.copy(texture._copiedFrom);
              }
              if (texture.shouldUpdate) {
                texture.update();
              }
              var location = this._samplerLocations.get(texture._samplerName);
              if (location === void 0) {
                location = gl.getUniformLocation(this._program, texture._samplerName);
                this._samplerLocations.set(texture._samplerName, location);
              }
              if (location == null) continue;
              gl.bindTexture(gl.TEXTURE_2D, texture._sampler.texture);
              gl.uniform1i(location, index);
              index++;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      },
      {
        key: "_prepareRenderTarget",
        value: function _prepareRenderTarget(target) {
          var _target$_size, _target$_size2;
          var rendererState = this.curtains.renderer.state;
          var switchesTarget = rendererState.drawTarget !== target;
          rendererState.drawTarget = target;
          if (!target || !this.gl) {
            this.curtains.renderer.bindFrameBuffer(null);
            this.gl.viewport(0, 0, this.curtains.canvas.width, this.curtains.canvas.height);
            return;
          }
          this.curtains.renderer.bindFrameBuffer(target, true);
          var width = ((_target$_size = target._size) === null || _target$_size === void 0 ? void 0 : _target$_size.width) || this.curtains.canvas.width;
          var height = ((_target$_size2 = target._size) === null || _target$_size2 === void 0 ? void 0 : _target$_size2.height) || this.curtains.canvas.height;
          this.gl.viewport(0, 0, width, height);
          if (target._clear !== false && switchesTarget) {
            this.gl.clearColor(0, 0, 0, 0);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | (target._depth ? this.gl.DEPTH_BUFFER_BIT : 0));
          }
        }
      },
      {
        key: "_render",
        value: function _render() {
          var _this5 = this;
          if (this._pendingProgram) this._finishProgram();
          if (!this.gl || !this._program || !this._geometry) return;
          this._renderCallbacks.forEach(function(callback) {
            return callback(_this5);
          });
          this._prepareRenderTarget(this.target);
          this.curtains.renderer.setDepthTest(this._depthTest);
          this.gl.useProgram(this._program);
          if (this._mvMatrixLocation) {
            this.gl.uniformMatrix4fv(this._mvMatrixLocation, false, IDENTITY_MAT4);
          }
          if (this._pMatrixLocation) {
            this.gl.uniformMatrix4fv(this._pMatrixLocation, false, IDENTITY_MAT4);
          }
          if (this._texMatrixLocation) {
            this.gl.uniformMatrix4fv(this._texMatrixLocation, false, IDENTITY_MAT4);
          }
          this._bindAttributes();
          this._bindUniforms();
          this._bindTextures();
          if (this._geometry.indexBuffer) {
            this.gl.drawElements(this.gl.TRIANGLES, this._geometry.indexCount, this._geometry.indexType, 0);
          } else {
            this.gl.drawArrays(this.gl.TRIANGLES, 0, this._geometry.vertexCount);
          }
          this.curtains.renderer.bindFrameBuffer(null);
          this.gl.viewport(0, 0, this.curtains.canvas.width, this.curtains.canvas.height);
          this._afterRenderCallbacks.forEach(function(callback) {
            return callback(_this5);
          });
        }
      },
      {
        key: "onReady",
        value: function onReady(callback) {
          if (typeof callback === "function") this._readyCallbacks.push(callback);
          return this;
        }
      },
      {
        key: "onRender",
        value: function onRender(callback) {
          if (typeof callback === "function") this._renderCallbacks.push(callback);
          return this;
        }
      },
      {
        key: "onAfterRender",
        value: function onAfterRender(callback) {
          if (typeof callback === "function") this._afterRenderCallbacks.push(callback);
          return this;
        }
      },
      {
        key: "setRenderOrder",
        value: function setRenderOrder() {
          var order = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          this.renderOrder = order;
          return this;
        }
      },
      {
        key: "setRenderTarget",
        value: function setRenderTarget(target) {
          var _this$curtains3;
          this.target = target;
          if (target && (_this$curtains3 = this.curtains) !== null && _this$curtains3 !== void 0 && _this$curtains3.renderTargets && !this.curtains.renderTargets.includes(target)) {
            this.curtains.renderTargets.push(target);
            this.curtains.renderTargets.forEach(function(entry, index) {
              entry.index = index;
            });
          }
          return this;
        }
      },
      {
        key: "createTexture",
        value: function createTexture() {
          var _ref2;
          var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          var sampler = options.sampler || "uTexture";
          var existing = this.textures.find(function(texture2) {
            return texture2._samplerName === sampler;
          });
          if (existing && options.fromTexture) {
            existing.copy(options.fromTexture);
            return existing;
          }
          var texture = new Texture(this.curtains, {
            sampler,
            premultiplyAlpha: (_ref2 = options.premultiplyAlpha) !== null && _ref2 !== void 0 ? _ref2 : false,
            fromTexture: options.fromTexture
          });
          if (existing) {
            var index = this.textures.indexOf(existing);
            this.textures[index] = texture;
            return texture;
          }
          this.textures.push(texture);
          return texture;
        }
      },
      {
        key: "addTexture",
        value: function addTexture(texture) {
          if (!texture) return null;
          var sampler = texture._samplerName || "uTexture";
          var existingIndex = this.textures.findIndex(function(entry) {
            return entry._samplerName === sampler;
          });
          if (existingIndex >= 0) {
            this.textures[existingIndex] = texture;
          } else {
            this.textures.push(texture);
          }
          return texture;
        }
      },
      {
        key: "loadCanvas",
        value: function loadCanvas(canvas) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var onSuccess = arguments.length > 2 ? arguments[2] : void 0;
          var onError = arguments.length > 3 ? arguments[3] : void 0;
          try {
            var _ref3;
            var texture = new Texture(this.curtains, {
              sampler: options.sampler || "uTexture",
              source: canvas,
              premultiplyAlpha: (_ref3 = options.premultiplyAlpha) !== null && _ref3 !== void 0 ? _ref3 : false
            });
            texture.shouldUpdate = true;
            this.addTexture(texture);
            if (typeof onSuccess === "function") onSuccess(texture);
            return texture;
          } catch (error) {
            if (typeof onError === "function") onError(error);
            return null;
          }
        }
      },
      {
        key: "loadVideo",
        value: function loadVideo(source) {
          var _this6 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var onSuccess = arguments.length > 2 ? arguments[2] : void 0;
          var onError = arguments.length > 3 ? arguments[3] : void 0;
          var video;
          if (source instanceof HTMLVideoElement) {
            video = source;
          } else {
            video = document.createElement("video");
            video.crossOrigin = "anonymous";
            video.src = source;
          }
          video.preload = "auto";
          video.muted = true;
          video.loop = true;
          video.setAttribute("playsinline", "");
          if (!video.crossOrigin) {
            video.crossOrigin = "anonymous";
          }
          var _ref4;
          var texture = new Texture(_this6.curtains, {
            sampler: options.sampler || "uVideoTexture",
            premultiplyAlpha: (_ref4 = options.premultiplyAlpha) !== null && _ref4 !== void 0 ? _ref4 : false
          });
          texture.shouldUpdate = true;
          _this6.addTexture(texture);
          var createFromVideo = function createFromVideo2() {
            try {
              texture.setSource(video);
              texture.shouldUpdate = true;
              _this6.videos.push(video);
              if (typeof onSuccess === "function") onSuccess(texture);
            } catch (error) {
              if (typeof onError === "function") onError(error);
            }
          };
          if (video.readyState >= video.HAVE_CURRENT_DATA) {
            createFromVideo();
          } else {
            video.addEventListener("loadeddata", createFromVideo, {
              once: true
            });
            video.addEventListener(
              "error",
              function(error) {
                if (typeof onError === "function") onError(error);
              },
              {
                once: true
              }
            );
            if (!(source instanceof HTMLVideoElement)) {
              video.load();
            }
          }
          return video;
        }
      },
      {
        key: "remove",
        value: function remove() {
          var _this$curtains4, _this7 = this;
          this._removed = true;
          if (!this.gl) return;
          this.textures.forEach(function(texture) {
            return texture.remove();
          });
          if (this._geometry) {
            this.gl.deleteBuffer(this._geometry.positionBuffer);
            this.gl.deleteBuffer(this._geometry.uvBuffer);
            this.gl.deleteBuffer(this._geometry.indexBuffer);
          }
          if (this._program) {
            this.gl.deleteProgram(this._program);
          }
          if (this._pendingProgram) {
            this.gl.deleteShader(this._pendingProgram.vertexShader);
            this.gl.deleteShader(this._pendingProgram.fragmentShader);
            this.gl.deleteProgram(this._pendingProgram.program);
            this._pendingProgram = null;
          }
          if ((_this$curtains4 = this.curtains) !== null && _this$curtains4 !== void 0 && _this$curtains4.planes) {
            this.curtains.planes = this.curtains.planes.filter(function(plane) {
              return plane !== _this7;
            });
          }
        }
      }
    ]);
    return Plane3;
  }();
  function canDecodeImageBitmaps() {
    if (typeof createImageBitmap !== "function" || typeof fetch !== "function") return false;
    var userAgent = navigator.userAgent;
    if (/^((?!chrome|android).)*safari/i.test(userAgent)) {
      var safari = userAgent.match(/version\/(\d+)/i);
      return !!safari && Number(safari[1]) >= 17;
    }
    var firefox = userAgent.match(/firefox\/(\d+)/i);
    return !firefox || Number(firefox[1]) >= 98;
  }
  function decodeImageBitmap(src) {
    return fetch(src).then(function(response) {
      if (!response.ok) throw new Error("Image request failed with status " + response.status);
      return response.blob();
    }).then(function(blob) {
      return createImageBitmap(blob, { imageOrientation: "flipY", premultiplyAlpha: "none" });
    });
  }
  var TextureLoader2 = /* @__PURE__ */ function() {
    function TextureLoader3(curtains) {
      _classCallCheck(this, TextureLoader3);
      this.curtains = curtains;
      this.cache = /* @__PURE__ */ new Map();
      this.bitmaps = /* @__PURE__ */ new Map();
    }
    _createClass(TextureLoader3, [
      {
        key: "loadImage",
        value: function loadImage(src) {
          var _this8 = this;
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var onSuccess = arguments.length > 2 ? arguments[2] : void 0;
          var onError = arguments.length > 3 ? arguments[3] : void 0;
          if (!src) {
            if (typeof onError === "function") onError(new Error("Missing image src"));
            return null;
          }
          var fromCache = this.cache.get(src);
          var buildTexture = function buildTexture2(image2) {
            var _ref5;
            var texture = new Texture(_this8.curtains, {
              sampler: options.sampler || "uTexture",
              source: image2,
              premultiplyAlpha: (_ref5 = options.premultiplyAlpha) !== null && _ref5 !== void 0 ? _ref5 : false
            });
            if (typeof onSuccess === "function") onSuccess(texture);
          };
          var curtainsOptions = this.curtains && this.curtains.options;
          var bitmapEntry = this.bitmaps.get(src);
          if (!options.premultiplyAlpha && curtainsOptions && curtainsOptions.imageBitmaps && canDecodeImageBitmaps() && !(bitmapEntry && bitmapEntry.failed)) {
            if (bitmapEntry && bitmapEntry.bitmap) {
              buildTexture(bitmapEntry.bitmap);
              return null;
            }
            if (!bitmapEntry) {
              bitmapEntry = { bitmap: null, failed: false, promise: decodeImageBitmap(src) };
              this.bitmaps.set(src, bitmapEntry);
            }
            bitmapEntry.promise.then(
              function(bitmap) {
                bitmapEntry.bitmap = bitmap;
                buildTexture(bitmap);
              },
              function() {
                bitmapEntry.failed = true;
                _this8.loadImage(src, options, onSuccess, onError);
              }
            );
            return null;
          }
          if (fromCache !== null && fromCache !== void 0 && fromCache.loaded && fromCache.image) {
            buildTexture(fromCache.image);
            return fromCache.image;
          }
          var image = (fromCache === null || fromCache === void 0 ? void 0 : fromCache.image) || new Image();
          image.crossOrigin = "anonymous";
          var cacheEntry = fromCache || {
            image,
            loaded: false
          };
          this.cache.set(src, cacheEntry);
          var onLoad = function onLoad2() {
            cacheEntry.loaded = true;
            buildTexture(image);
          };
          var onErr = function onErr2(error) {
            if (typeof onError === "function") onError(error);
          };
          if (image.complete && image.naturalWidth > 0) {
            onLoad();
            return image;
          }
          image.addEventListener("load", onLoad, {
            once: true
          });
          image.addEventListener("error", onErr, {
            once: true
          });
          if (!image.src) {
            image.src = src;
          }
          return image;
        }
      },
      {
        key: "loadCanvas",
        value: function loadCanvas(canvas) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          var onSuccess = arguments.length > 2 ? arguments[2] : void 0;
          var onError = arguments.length > 3 ? arguments[3] : void 0;
          try {
            var _ref6;
            var texture = new Texture(this.curtains, {
              sampler: options.sampler || "uTexture",
              source: canvas,
              premultiplyAlpha: (_ref6 = options.premultiplyAlpha) !== null && _ref6 !== void 0 ? _ref6 : false
            });
            texture.shouldUpdate = true;
            if (typeof onSuccess === "function") onSuccess(texture);
            return texture;
          } catch (error) {
            if (typeof onError === "function") onError(error);
            return null;
          }
        }
      }
    ]);
    return TextureLoader3;
  }();
  var Vec22 = /* @__PURE__ */ function() {
    function Vec23() {
      var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
      _classCallCheck(this, Vec23);
      this.type = "Vec2";
      this._x = Number.isFinite(x) ? x : 0;
      this._y = Number.isFinite(y) ? y : 0;
    }
    _createClass(Vec23, [
      {
        key: "x",
        get: function get() {
          return this._x;
        },
        set: function set(value) {
          this._x = Number.isFinite(value) ? value : this._x;
        }
      },
      {
        key: "y",
        get: function get() {
          return this._y;
        },
        set: function set(value) {
          this._y = Number.isFinite(value) ? value : this._y;
        }
      },
      {
        key: "equals",
        value: function equals(vector) {
          if (!vector) return false;
          return this._x === vector.x && this._y === vector.y;
        }
      },
      {
        key: "set",
        value: function set(x, y) {
          this.x = x;
          this.y = y;
          return this;
        }
      },
      {
        key: "copy",
        value: function copy(vector) {
          if (!vector) return this;
          this.x = vector.x;
          this.y = vector.y;
          return this;
        }
      },
      {
        key: "clone",
        value: function clone() {
          return new Vec23(this._x, this._y);
        }
      }
    ]);
    return Vec23;
  }();
  var Vec32 = /* @__PURE__ */ function() {
    function Vec33() {
      var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
      var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : x;
      _classCallCheck(this, Vec33);
      this.type = "Vec3";
      this._x = Number.isFinite(x) ? x : 0;
      this._y = Number.isFinite(y) ? y : 0;
      this._z = Number.isFinite(z) ? z : 0;
    }
    _createClass(Vec33, [
      {
        key: "x",
        get: function get() {
          return this._x;
        },
        set: function set(value) {
          this._x = Number.isFinite(value) ? value : this._x;
        }
      },
      {
        key: "y",
        get: function get() {
          return this._y;
        },
        set: function set(value) {
          this._y = Number.isFinite(value) ? value : this._y;
        }
      },
      {
        key: "z",
        get: function get() {
          return this._z;
        },
        set: function set(value) {
          this._z = Number.isFinite(value) ? value : this._z;
        }
      },
      {
        key: "equals",
        value: function equals(vector) {
          if (!vector) return false;
          return this._x === vector.x && this._y === vector.y && this._z === vector.z;
        }
      },
      {
        key: "set",
        value: function set(x, y, z) {
          this.x = x;
          this.y = y;
          this.z = z;
          return this;
        }
      },
      {
        key: "copy",
        value: function copy(vector) {
          if (!vector) return this;
          this.x = vector.x;
          this.y = vector.y;
          this.z = vector.z;
          return this;
        }
      },
      {
        key: "clone",
        value: function clone() {
          return new Vec33(this._x, this._y, this._z);
        }
      }
    ]);
    return Vec33;
  }();
  var PingPongPlane2 = /* @__PURE__ */ function(_Plane) {
    _inherits(PingPongPlane3, _Plane);
    var _super = _createSuper(PingPongPlane3);
    function PingPongPlane3(curtains, htmlElement) {
      var _this9;
      var params = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      _classCallCheck(this, PingPongPlane3);
      _this9 = _super.call(this, curtains, htmlElement, params);
      _this9.type = "PingPongPlane";
      var targetSize = params.targetSize || {};
      var pingPongTexturesOptions = Object.assign({}, params.texturesOptions, {
        sampler: params.sampler || "uPingPongTexture"
      });
      if (pingPongTexturesOptions.premultiplyAlpha === void 0) {
        pingPongTexturesOptions.premultiplyAlpha = false;
      }
      _this9._targets = [
        new RenderTarget2(curtains, {
          clear: false,
          scaleWithCanvas: !targetSize.width,
          maxWidth: targetSize.width || curtains.canvas.width,
          maxHeight: targetSize.height || curtains.canvas.height,
          texturesOptions: pingPongTexturesOptions
        }),
        new RenderTarget2(curtains, {
          clear: false,
          scaleWithCanvas: !targetSize.width,
          maxWidth: targetSize.width || curtains.canvas.width,
          maxHeight: targetSize.height || curtains.canvas.height,
          texturesOptions: pingPongTexturesOptions
        })
      ];
      _this9._readIndex = 0;
      _this9._sampler = params.sampler || "uPingPongTexture";
      _this9.createTexture({
        sampler: _this9._sampler,
        fromTexture: _this9._targets[_this9._readIndex].getTexture()
      });
      _this9.setRenderTarget(_this9._targets[_this9._readIndex]);
      return _this9;
    }
    _createClass(PingPongPlane3, [
      {
        key: "getTexture",
        value: function getTexture() {
          var texture = this.textures.find(function(entry) {
            return entry._samplerName === this._sampler;
          }, this);
          return texture || this._targets[this._readIndex].getTexture();
        }
      },
      {
        key: "_render",
        value: function _render() {
          var writeIndex = this._readIndex === 0 ? 1 : 0;
          this.setRenderTarget(this._targets[writeIndex]);
          _get(_getPrototypeOf(PingPongPlane3.prototype), "_render", this).call(this);
          this._readIndex = writeIndex;
          var outputTexture = this._targets[this._readIndex].getTexture();
          var pingPongTexture = this.textures.find(function(entry) {
            return entry._samplerName === this._sampler;
          }, this);
          if (pingPongTexture && outputTexture) {
            pingPongTexture.copy(outputTexture);
          }
        }
      },
      {
        key: "remove",
        value: function remove() {
          this._targets.forEach(function(target) {
            return target.remove();
          });
          _get(_getPrototypeOf(PingPongPlane3.prototype), "remove", this).call(this);
        }
      }
    ]);
    return PingPongPlane3;
  }(Plane2);
  exports.Curtains = Curtains2;
  exports.PingPongPlane = PingPongPlane2;
  exports.Plane = Plane2;
  exports.RenderTarget = RenderTarget2;
  exports.TextureLoader = TextureLoader2;
  exports.Vec2 = Vec22;
  exports.Vec3 = Vec32;
})(curtainsLite);
const { Curtains, PingPongPlane, Plane, RenderTarget, TextureLoader, Vec2, Vec3 } = curtainsLite;
function getLayerLookupIds(layer, { includeRuntimeLocalId = false, includeNames = true } = {}) {
  var _a;
  const ids = [layer == null ? void 0 : layer.id, layer == null ? void 0 : layer.publicId];
  if (includeNames) {
    ids.push(layer == null ? void 0 : layer.layerName, layer == null ? void 0 : layer.name);
  }
  if (includeRuntimeLocalId) ids.push((_a = layer == null ? void 0 : layer.local) == null ? void 0 : _a.id);
  return ids.filter((id) => id !== void 0 && id !== null && id !== "");
}
function layerMatchesIdentifier(layer, identifier, options = {}) {
  return getLayerLookupIds(layer, options).includes(identifier);
}
const TEXT_LAYOUT_MAX_GLYPHS = 2048;
const SPACE_CODE = 32;
const CAP_CODE = 72;
const TEXT_LAYOUT_ROW_GLYPHS = 0;
const TEXT_LAYOUT_ROW_LINE_STARTS = 1;
const TEXT_LAYOUT_ROW_SLOTS = 2;
const TEXT_LAYOUT_ROW_WORDS = 3;
const TEXT_LAYOUT_HEIGHT = 4;
const TEXT_LAYOUT_PEN_OFFSET = 1;
const TEXT_LAYOUT_PEN_SCALE = 3;
const FONT_ATLAS_SAMPLER = "uFontAtlas";
const FONT_METRICS_SAMPLER = "uFontMetrics";
const TEXT_LAYOUT_SAMPLER = "uTextLayout";
const TEXT_CODES_MAX = 64;
const TEXT_REVEAL_LOOK_PROPS = [
  "revealOrder",
  "revealMotion",
  "revealStyle",
  "revealSpread",
  "revealIntensity",
  "revealGlow",
  "revealGlowColor"
];
const getTextAnimationProp = (prop, id) => `${prop}_${id}`;
const getTextAnimationLook = (layer, id) => Object.fromEntries(TEXT_REVEAL_LOOK_PROPS.map((prop) => [prop, layer[getTextAnimationProp(prop, id)]]));
function resolveTextReveal(layer, getProgress) {
  let activeId = null;
  let revealProgress = 1;
  (layer.textAnimations || []).forEach((id) => {
    const progress = getProgress(getTextAnimationProp("revealProgress", id));
    if (activeId === null || progress < revealProgress) {
      activeId = id;
      revealProgress = progress;
    }
  });
  return activeId === null ? null : { ...getTextAnimationLook(layer, activeId), revealProgress };
}
const getFontMetricsSrc = (atlasSrc) => String(atlasSrc || "").replace(/atlas\.(?:png|webp)(\?|#|$)/, "metrics.png$1");
function encodeTextCodesDataUrl(text) {
  const canvas = document.createElement("canvas");
  canvas.width = TEXT_CODES_MAX;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(TEXT_CODES_MAX, 1);
  const codes = [...String(text || "")].slice(0, TEXT_CODES_MAX);
  for (let i = 0; i < codes.length; i += 1) {
    const code = codes[i].charCodeAt(0);
    const offset = i * 4;
    image.data[offset] = code >= 32 && code <= 126 ? code : 32;
    image.data[offset + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);
  return canvas.toDataURL("image/png");
}
const FONT_METRICS_HEIGHT = 11;
const FONT_METRICS_ROW_HEADER = 0;
const FONT_METRICS_ROW_CODE = 1;
const FONT_METRICS_ROW_GEOMETRY = 2;
const FONT_METRICS_FLAG_TRUE_SDF = 1;
const FONT_METRICS_PLANE_SCALE = 4;
const FONT_METRICS_PLANE_OFFSET = 2;
const metricsCache = /* @__PURE__ */ new Map();
function canLayoutText(text) {
  return String(text ?? "").length <= TEXT_LAYOUT_MAX_GLYPHS;
}
function decodeFontAtlasMetrics(data, width) {
  const offsetOf = (column, row) => ((FONT_METRICS_HEIGHT - 1 - row) * width + column) * 4;
  const int16 = (column, row) => data[offsetOf(column, row)] * 256 + data[offsetOf(column, row) + 1];
  const texel = (column, row) => {
    if (data[offsetOf(column, row) + 2] < 128) return null;
    return int16(column, row) / 65535 * FONT_METRICS_PLANE_SCALE - FONT_METRICS_PLANE_OFFSET;
  };
  const slots = /* @__PURE__ */ new Map();
  const advances = /* @__PURE__ */ new Map();
  let ascender = Infinity;
  let descender = -Infinity;
  let capTop = null;
  for (let slot = 0; slot < width; slot++) {
    const advance = texel(slot, FONT_METRICS_ROW_GEOMETRY);
    if (advance === null) continue;
    const codeOffset = offsetOf(slot, FONT_METRICS_ROW_CODE);
    const code = data[codeOffset] << 16 | data[codeOffset + 1] << 8 | data[codeOffset + 2];
    slots.set(code, slot);
    advances.set(code, advance);
    const top = texel(slot, FONT_METRICS_ROW_GEOMETRY + 2);
    const bottom = texel(slot, FONT_METRICS_ROW_GEOMETRY + 4);
    if (top === null || bottom === null) continue;
    ascender = Math.min(ascender, top);
    descender = Math.max(descender, bottom);
    if (code === CAP_CODE) capTop = top;
  }
  if (!slots.size || slots.get(SPACE_CODE) !== 0) return null;
  const flags = int16(2, FONT_METRICS_ROW_HEADER);
  return {
    slots,
    advances,
    ascender: Number.isFinite(ascender) ? ascender : -1,
    descender: Number.isFinite(descender) ? descender : 0.25,
    capTop: capTop ?? (Number.isFinite(ascender) ? ascender : -1),
    emPx: int16(0, FONT_METRICS_ROW_HEADER) || 120,
    pxRange: int16(1, FONT_METRICS_ROW_HEADER) || 10,
    trueSdf: (flags & FONT_METRICS_FLAG_TRUE_SDF) !== 0
  };
}
function getCachedFontAtlasMetrics(atlasSrc) {
  var _a;
  return ((_a = metricsCache.get(atlasSrc)) == null ? void 0 : _a.value) || null;
}
function loadFontAtlasMetrics(atlasSrc) {
  const metricsSrc = getFontMetricsSrc(atlasSrc);
  if (!metricsSrc) return Promise.resolve(null);
  let entry = metricsCache.get(atlasSrc);
  if (!entry) {
    entry = { value: null };
    entry.promise = new Promise((resolve) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.onload = () => {
        try {
          const width = image.naturalWidth;
          if (!width || image.naturalHeight !== FONT_METRICS_HEIGHT) {
            throw new Error(`unexpected metrics size ${width}x${image.naturalHeight}`);
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = FONT_METRICS_HEIGHT;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(image, 0, 0);
          entry.value = decodeFontAtlasMetrics(ctx.getImageData(0, 0, width, FONT_METRICS_HEIGHT).data, width);
        } catch (error) {
          console.warn("Failed to decode font atlas metrics:", metricsSrc, error);
        }
        resolve(entry.value);
      };
      image.onerror = () => {
        console.warn("Failed to load font atlas metrics:", metricsSrc);
        resolve(null);
      };
      image.src = metricsSrc;
    });
    metricsCache.set(atlasSrc, entry);
  }
  return entry.value ? Promise.resolve(entry.value) : entry.promise;
}
function advanceOf(metrics, code) {
  return metrics.advances.get(code) ?? 0.5;
}
function measureLine(line, metrics, fontSize, letterSpacing) {
  let width = 0;
  let count = 0;
  for (const char of line) {
    width += advanceOf(metrics, char.codePointAt(0)) * fontSize;
    count++;
  }
  return width + Math.max(count - 1, 0) * letterSpacing;
}
function wrapLines(textContent, boxWidth, metrics, fontSize, letterSpacing) {
  const measure = (line) => measureLine(line, metrics, fontSize, letterSpacing);
  const lines = textContent ? textContent.split("\n") : [""];
  let lineCount = lines.length;
  for (let i = 0; i < lineCount; i++) {
    let line = "";
    const words = lines[i].split(/(\s)/);
    for (let wordIdx = 0; wordIdx < words.length; wordIdx++) {
      const word = words[wordIdx];
      const potentialLine = line + word;
      if (measure(potentialLine) <= boxWidth) {
        line = potentialLine;
        if (wordIdx === words.length - 1) {
          lines[i] = line.trim();
        }
        continue;
      }
      if (line !== "") {
        lines[i] = line.trim();
        lines.splice(i + 1, 0, words.slice(wordIdx).join(""));
        lineCount++;
        break;
      }
      let remaining = word;
      let currentLine = i;
      while (remaining.length > 0) {
        let fragment = "";
        for (const char of remaining) {
          if (fragment && measure(fragment + char) > boxWidth) break;
          fragment += char;
        }
        remaining = remaining.slice(fragment.length);
        lines[currentLine] = fragment.trim();
        if (remaining.length > 0) {
          lines.splice(currentLine + 1, 0, remaining);
          currentLine++;
          lineCount++;
        }
      }
      const rest = words.slice(wordIdx + 1).join("");
      if (currentLine !== i) {
        lines[currentLine] += rest;
      } else if (rest.trimStart()) {
        lines.splice(i + 1, 0, rest.trimStart());
        lineCount++;
      }
      break;
    }
  }
  return lines;
}
function layoutText({ textContent, width, fontSize, lineHeight, letterSpacing, textAlign }, metrics) {
  const boxWidth = Math.max(Number(width) || 0, 1e-6);
  const spacing = Number(letterSpacing) || 0;
  const text = String(textContent ?? "");
  const lines = wrapLines(text, boxWidth, metrics, fontSize, spacing);
  const glyphs = [];
  const lineStarts = [];
  const words = text.match(/\S+/g) || [];
  const wordOf = words.flatMap((word2, index) => Array.from(word2, () => index));
  let next = 0;
  let word = 0;
  lines.forEach((line) => {
    lineStarts.push(glyphs.length);
    const lineWidth = measureLine(line, metrics, fontSize, spacing);
    let penX = textAlign === "center" ? (boxWidth - lineWidth) * 0.5 : textAlign === "right" ? boxWidth - lineWidth : 0;
    const lineGlyphs = [];
    for (const char of line) {
      const code = char.codePointAt(0);
      const slot = metrics.slots.get(code);
      if (!/\s/.test(char)) word = wordOf[next++];
      if (slot) {
        lineGlyphs.push({ code, slot, x: penX, word });
      }
      penX += advanceOf(metrics, code) * fontSize + spacing;
    }
    lineGlyphs.sort((a, b) => a.x - b.x);
    glyphs.push(...lineGlyphs.slice(0, TEXT_LAYOUT_MAX_GLYPHS - glyphs.length));
  });
  lineStarts.push(glyphs.length);
  return { lines, glyphs, lineStarts, wordCount: words.length, width: boxWidth, height: lineHeight * lines.length };
}
function writeTextLayoutCanvas(layout, canvas) {
  const width = Math.max(layout.glyphs.length, layout.lineStarts.length, 1);
  canvas.width = width;
  canvas.height = TEXT_LAYOUT_HEIGHT;
  const ctx = canvas.getContext("2d");
  const image = ctx.createImageData(width, TEXT_LAYOUT_HEIGHT);
  const write = (row, column, value, blue) => {
    const offset = ((TEXT_LAYOUT_HEIGHT - 1 - row) * width + column) * 4;
    image.data[offset] = value >> 8 & 255;
    image.data[offset + 1] = value & 255;
    image.data[offset + 2] = blue;
    image.data[offset + 3] = 255;
  };
  layout.glyphs.forEach((glyph, index) => {
    const pen = (glyph.x / layout.width + TEXT_LAYOUT_PEN_OFFSET) / TEXT_LAYOUT_PEN_SCALE;
    write(TEXT_LAYOUT_ROW_GLYPHS, index, Math.round(Math.min(Math.max(pen, 0), 1) * 65535), 255);
    write(TEXT_LAYOUT_ROW_SLOTS, index, Math.min(glyph.slot, 65535), 255);
    write(TEXT_LAYOUT_ROW_WORDS, index, Math.round(glyph.word / Math.max(layout.wordCount - 1, 1) * 65535), 255);
  });
  layout.lineStarts.forEach((start, index) => {
    write(TEXT_LAYOUT_ROW_LINE_STARTS, index, Math.min(start, 65535), 255);
  });
  ctx.putImageData(image, 0, 0);
  return canvas;
}
function cloneValue(value) {
  if (value && typeof value.clone === "function") {
    return value.clone();
  }
  if (value && typeof value === "object") {
    return JSON.parse(JSON.stringify(value));
  }
  return value;
}
function normalizeName(name) {
  return String(name || "").trim();
}
function makeId(prefix = "var") {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}
function nowIso() {
  return (/* @__PURE__ */ new Date()).toISOString();
}
function describeValue(value) {
  if (value === null) return "null";
  if (value === void 0) return "undefined";
  if (typeof value === "object") {
    try {
      return JSON.stringify(value);
    } catch (_error) {
      return Object.prototype.toString.call(value);
    }
  }
  return `${typeof value} ${JSON.stringify(value)}`;
}
function warnInvalidValue(definition, expected, value, warn) {
  warn == null ? void 0 : warn(
    `Invalid value for Unicorn Studio variable "${definition.name}". Expected ${expected}; received ${describeValue(
      value
    )}.`
  );
}
function getSourceValue(value) {
  return value && typeof value === "object" ? value.src : value;
}
function getNumber(value) {
  const nextValue = Number(value);
  return Number.isFinite(nextValue) ? nextValue : null;
}
function clampNumber(value, validation = {}) {
  const min = Number.isFinite(Number(validation.min)) ? Number(validation.min) : -Infinity;
  const max = Number.isFinite(Number(validation.max)) ? Number(validation.max) : Infinity;
  return Math.min(max, Math.max(min, value));
}
function normalizeVector(value, dimensions) {
  if (!value || typeof value !== "object") return null;
  const expectedType = dimensions === 2 ? "Vec2" : "Vec3";
  if (value.type && value.type !== expectedType) return null;
  const x = getNumber(value.x ?? value._x);
  const y = getNumber(value.y ?? value._y);
  const z = dimensions === 3 ? getNumber(value.z ?? value._z) : 0;
  if (x === null || y === null || dimensions === 3 && z === null) return null;
  return {
    type: expectedType,
    x,
    y,
    ...dimensions === 3 ? { z } : {}
  };
}
function isHexColor(value) {
  return typeof value === "string" && /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value);
}
function isHexColorArray(value) {
  return Array.isArray(value) && value.length > 0 && value.every((item) => isHexColor(item));
}
function normalizeValue(definition, value, warn) {
  const validation = definition.validation || {};
  const options = Array.isArray(validation.options) ? validation.options : null;
  if (options && !options.includes(value)) {
    warnInvalidValue(definition, `one of: ${options.join(", ")}`, value, warn);
    return { valid: false, value };
  }
  if (definition.type === "number") {
    const nextValue = getNumber(value);
    if (nextValue === null) {
      warnInvalidValue(definition, "a finite number", value, warn);
      return { valid: false, value };
    }
    const numericValue = validation.output === "integer" ? Math.round(nextValue) : nextValue;
    return {
      valid: true,
      value: clampNumber(numericValue, validation)
    };
  }
  if (definition.type === "boolean") {
    if (typeof value === "boolean") {
      return { valid: true, value };
    }
    if (value === "true" || value === "false") {
      return { valid: true, value: value === "true" };
    }
    warnInvalidValue(definition, "a boolean", value, warn);
    return { valid: false, value };
  }
  if (definition.type === "string") {
    if (typeof value === "string") {
      return { valid: true, value };
    }
    if (typeof value === "number" && Number.isFinite(value)) {
      return { valid: true, value: String(value) };
    }
    if (typeof value === "boolean") {
      return { valid: true, value: String(value) };
    }
    warnInvalidValue(definition, "a string", value, warn);
    return { valid: false, value };
  }
  if (definition.type === "color") {
    if (isHexColor(value)) {
      return { valid: true, value };
    }
    const vec3 = normalizeVector(value, 3);
    if (vec3) {
      return { valid: true, value: vec3 };
    }
    warnInvalidValue(definition, "a hex color or Vec3 color object", value, warn);
    return { valid: false, value };
  }
  if (definition.type === "vec2" || definition.type === "vec3") {
    const dimensions = definition.type === "vec2" ? 2 : 3;
    const vector = normalizeVector(value, dimensions);
    if (!vector) {
      warnInvalidValue(definition, `{ type: 'Vec${dimensions}', x, y${dimensions === 3 ? ", z" : ""} }`, value, warn);
      return { valid: false, value };
    }
    return { valid: true, value: vector };
  }
  if (definition.type === "texture") {
    if (typeof value === "string" && value.trim()) {
      return { valid: true, value };
    }
    if (value && typeof value === "object" && typeof value.src === "string" && value.src.trim()) {
      return { valid: true, value: cloneValue(value) };
    }
    warnInvalidValue(definition, "a texture URL string or object with a src", value, warn);
    return { valid: false, value };
  }
  return { valid: true, value };
}
function clonePresetValues(values = {}) {
  return Object.entries(values || {}).reduce((nextValues, [variableId, value]) => {
    const key = normalizeName(variableId);
    if (!key) return nextValues;
    nextValues[key] = cloneValue(value);
    return nextValues;
  }, {});
}
function withPresetRefs(preset) {
  const refs = Object.fromEntries(
    Object.entries(preset.refs || {}).filter(
      ([variableId, ref]) => ref && Object.prototype.hasOwnProperty.call(preset.values, variableId)
    )
  );
  const next = { ...preset, refs };
  if (!Object.keys(refs).length) delete next.refs;
  return next;
}
function normalizePreset(preset) {
  const name = normalizeName(preset == null ? void 0 : preset.name);
  if (!name) return null;
  return withPresetRefs({
    id: preset.id || makeId("preset"),
    name,
    description: preset.description || "",
    values: clonePresetValues(preset.values),
    createdAt: preset.createdAt || "",
    updatedAt: preset.updatedAt || preset.createdAt || "",
    refs: preset.refs
  });
}
function clonePreset(preset) {
  return preset ? withPresetRefs({
    ...preset,
    values: clonePresetValues(preset.values)
  }) : null;
}
function setDefinitionRef(definition, ref) {
  if (ref) definition.ref = ref;
  else delete definition.ref;
}
function filterPresetValuesByDefinitionIds(values = {}, definitionIds = /* @__PURE__ */ new Set()) {
  return Object.entries(values || {}).reduce((nextValues, [variableId, value]) => {
    if (definitionIds.has(variableId)) {
      nextValues[variableId] = cloneValue(value);
    }
    return nextValues;
  }, {});
}
function filterPresetsByDefinitionIds(presets = [], definitionIds = /* @__PURE__ */ new Set(), { keepEmpty = false } = {}) {
  return (presets || []).map((preset) => {
    const values = filterPresetValuesByDefinitionIds(preset.values, definitionIds);
    return keepEmpty || Object.keys(values).length ? withPresetRefs({ ...preset, values }) : null;
  }).filter(Boolean);
}
function inferVariableType(value) {
  if ((value == null ? void 0 : value.type) === "Vec2") return "vec2";
  if ((value == null ? void 0 : value.type) === "Vec3") return "vec3";
  if (typeof value === "number") return "number";
  if (typeof value === "boolean") return "boolean";
  if (typeof value === "string" && /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value)) return "color";
  if (isHexColorArray(value)) return "color";
  if (typeof value === "string") return "string";
  if (value && typeof value === "object" && (value.src || value.sampler)) return "texture";
  return "value";
}
const CREATE_VARIABLE_INTENT_TYPES = /* @__PURE__ */ new Set(["number", "boolean", "string", "color", "vec2", "vec3", "texture"]);
function encodeBase64Url(value) {
  if (typeof Buffer !== "undefined") {
    return Buffer.from(value, "utf8").toString("base64url");
  }
  const bytes = new TextEncoder().encode(value);
  const binary = Array.from(bytes, (byte) => String.fromCharCode(byte)).join("");
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function cleanIntentText(value, maxLength = 140) {
  const text = normalizeName(value);
  return text ? text.slice(0, maxLength) : "";
}
function getIntentType(type, defaultValue) {
  if (CREATE_VARIABLE_INTENT_TYPES.has(type)) return type;
  const inferred = inferVariableType(defaultValue);
  return CREATE_VARIABLE_INTENT_TYPES.has(inferred) ? inferred : "number";
}
function suggestVariableName(_layerNameOrId, target) {
  const words = `${target || "Value"}`.replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[^a-zA-Z0-9]+/g, " ").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return "Value";
  return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
function buildCreateVariableIntent(options = {}) {
  const layerId = cleanIntentText(options.layerId);
  const target = cleanIntentText(options.target || options.property || options.prop);
  const layerName = cleanIntentText(options.layerName);
  const defaultValue = options.defaultValue !== void 0 ? cloneValue(options.defaultValue) : 0;
  const type = getIntentType(options.type, defaultValue);
  const name = cleanIntentText(options.name) || suggestVariableName(layerName || layerId, target);
  const description = cleanIntentText(options.description, 500);
  return {
    version: 1,
    action: "createVariable",
    name,
    type,
    defaultValue,
    ...description ? { description } : {},
    ...layerId ? { layerId } : {},
    ...layerName ? { layerName } : {},
    ...target ? { target } : {},
    ...options.kind ? { kind: cleanIntentText(options.kind, 24) } : {},
    ...options.canvasId ? { canvasId: cleanIntentText(options.canvasId) } : {}
  };
}
function encodeCreateVariableIntent(intent) {
  return encodeBase64Url(JSON.stringify(buildCreateVariableIntent(intent)));
}
function buildCreateVariableUrl({ baseUrl = "https://unicorn.studio", designId, intent } = {}) {
  const cleanDesignId = cleanIntentText(designId);
  if (!cleanDesignId || !intent) return "";
  const url = new URL(`/edit/${cleanDesignId}`, baseUrl);
  const normalizedIntent = buildCreateVariableIntent(intent);
  url.searchParams.set("createVariable", encodeCreateVariableIntent(normalizedIntent));
  if (normalizedIntent.canvasId) {
    url.searchParams.set("canvasId", normalizedIntent.canvasId);
  }
  return url.toString();
}
function getLayerProperties(layer) {
  var _a, _b, _c;
  return (layer == null ? void 0 : layer.isModel) ? (_a = layer == null ? void 0 : layer.default) == null ? void 0 : _a.call(layer, layer) : (_c = (_b = layer == null ? void 0 : layer.getParams) == null ? void 0 : _b.call(layer)) == null ? void 0 : _c.properties;
}
function resolveTextureSampler(layer, target) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const currentSampler = (_a = layer == null ? void 0 : layer[target]) == null ? void 0 : _a.sampler;
  if (currentSampler) return currentSampler;
  const property = (_b = getLayerProperties(layer)) == null ? void 0 : _b[target];
  if (property == null ? void 0 : property.textureSampler) return property.textureSampler;
  if ((_c = property == null ? void 0 : property.value) == null ? void 0 : _c.sampler) return property.value.sampler;
  if ((property == null ? void 0 : property.type) === "video") return "uVideoTexture";
  const shaderSampler = ((_f = (_e = (_d = layer == null ? void 0 : layer.getParams) == null ? void 0 : _d.call(layer)) == null ? void 0 : _e.texture) == null ? void 0 : _f.sampler) || ((_h = (_g = layer == null ? void 0 : layer.data) == null ? void 0 : _g.texture) == null ? void 0 : _h.sampler);
  if (shaderSampler) return shaderSampler;
  if ((property == null ? void 0 : property.output) === "texture" || (property == null ? void 0 : property.type) === "media" || (property == null ? void 0 : property.type) === "image" || (property == null ? void 0 : property.type) === "svg" || target === "texture" && (((_i = layer == null ? void 0 : layer[target]) == null ? void 0 : _i.src) || ((_k = (_j = layer == null ? void 0 : layer.data) == null ? void 0 : _j.texture) == null ? void 0 : _k.src))) {
    return "uCustomTexture";
  }
  return null;
}
function isVariableBindingDisabledForProperty(property = null) {
  if (!property) return false;
  if (property.variableDisabled === true) return true;
  if (property.output === "texture" && property.type === "svg") return true;
  return !!property.options && !property.radio && !property.classic;
}
function canBindVariableToTarget(layer, target) {
  var _a;
  const property = (_a = getLayerProperties(layer)) == null ? void 0 : _a[target];
  if (isVariableBindingDisabledForProperty(property)) return false;
  if ((property == null ? void 0 : property.output) === "texture" && ((layer == null ? void 0 : layer.type) === "videoSequence" || (layer == null ? void 0 : layer.createdFrom) === "videoSequence")) {
    return false;
  }
  return true;
}
const DIMENSION_MODE_VALUES = ["relative", "fixed", "auto"];
function normalizeModeValue(value) {
  if (DIMENSION_MODE_VALUES.includes(value)) return value;
  return DIMENSION_MODE_VALUES[value] || value;
}
function getBoundPropertyOutput(layer, property) {
  const modeProp = property == null ? void 0 : property.mode;
  if (!modeProp) return property == null ? void 0 : property.output;
  const mode = normalizeModeValue(layer == null ? void 0 : layer[modeProp]);
  if (mode === "fixed") return "px";
  if (mode === "relative") return "percent";
  return property == null ? void 0 : property.output;
}
function normalizeNumberOutput(output) {
  if (output === "pixels") return "px";
  return output;
}
function inferBoundVariableValidation(layer, target) {
  var _a;
  const property = (_a = getLayerProperties(layer)) == null ? void 0 : _a[target];
  if (!property) return void 0;
  const output = normalizeNumberOutput(getBoundPropertyOutput(layer, property));
  return output ? { output } : void 0;
}
function isVariableOutputCompatibleWithTarget(definition, layer, target) {
  var _a, _b;
  const variableOutput = normalizeNumberOutput((_a = definition == null ? void 0 : definition.validation) == null ? void 0 : _a.output);
  if (!variableOutput) return true;
  const targetOutput = normalizeNumberOutput((_b = inferBoundVariableValidation(layer, target)) == null ? void 0 : _b.output);
  if (!targetOutput) return true;
  if (variableOutput === targetOutput) return true;
  return variableOutput === "integer" && targetOutput === "number";
}
function inferBoundVariableType(layer, target) {
  var _a;
  const property = (_a = getLayerProperties(layer)) == null ? void 0 : _a[target];
  if ((property == null ? void 0 : property.type) === "color" || (property == null ? void 0 : property.output) === "color") return "color";
  if (isHexColor(layer == null ? void 0 : layer[target]) || isHexColorArray(layer == null ? void 0 : layer[target])) return "color";
  return void 0;
}
function getHexColorVec3(value) {
  if (typeof value !== "string") return null;
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(value);
  if (!match) return null;
  let hex = match[1];
  if (hex.length === 3) {
    hex = hex.split("").map((character) => character + character).join("");
  } else if (hex.length === 8) {
    hex = hex.slice(0, 6);
  }
  return {
    type: "Vec3",
    x: parseInt(hex.slice(0, 2), 16) / 255,
    y: parseInt(hex.slice(2, 4), 16) / 255,
    z: parseInt(hex.slice(4, 6), 16) / 255
  };
}
function getVec3HexColor(value) {
  const vec3 = normalizeVector(value, 3);
  if (!vec3) return null;
  const channels = [vec3.x, vec3.y, vec3.z].map((channel) => {
    return Math.max(0, Math.min(255, Math.round(channel * 255))).toString(16).padStart(2, "0");
  });
  return `#${channels.join("")}`;
}
function coerceBindingValue(definition, layer, target, value) {
  var _a, _b, _c;
  if ((definition == null ? void 0 : definition.type) === "texture" && typeof (layer == null ? void 0 : layer[target]) === "string") {
    return getSourceValue(value);
  }
  if ((definition == null ? void 0 : definition.type) !== "color") return value;
  const currentValue = layer == null ? void 0 : layer[target];
  if (Array.isArray(currentValue)) {
    const color = Array.isArray(value) ? value[0] : getVec3HexColor(value) || value;
    return color === void 0 ? value : [color];
  }
  const targetExpectsVec3 = (currentValue == null ? void 0 : currentValue.type) === "Vec3" || ((_c = (_b = (_a = layer == null ? void 0 : layer.data) == null ? void 0 : _a.uniforms) == null ? void 0 : _b[target]) == null ? void 0 : _c.type) === "3f";
  if (targetExpectsVec3) {
    if ((value == null ? void 0 : value.type) === "Vec3") return value;
    const color = Array.isArray(value) ? value[0] : value;
    return getHexColorVec3(color) || value;
  }
  return Array.isArray(value) ? value[0] : value;
}
function getTextureNaturalSize(texture) {
  var _a, _b;
  const source = (texture == null ? void 0 : texture.source) || (texture == null ? void 0 : texture._source);
  const width = ((_a = texture == null ? void 0 : texture._size) == null ? void 0 : _a.width) || (source == null ? void 0 : source.naturalWidth) || (source == null ? void 0 : source.width) || (source == null ? void 0 : source.videoWidth) || 0;
  const height = ((_b = texture == null ? void 0 : texture._size) == null ? void 0 : _b.height) || (source == null ? void 0 : source.naturalHeight) || (source == null ? void 0 : source.height) || (source == null ? void 0 : source.videoHeight) || 0;
  return width && height ? { width, height } : null;
}
function setUniformValue(uniform, value, prop = "") {
  if (!uniform) return;
  if ((value == null ? void 0 : value.type) === "Vec2" || (value == null ? void 0 : value.type) === "Vec3") {
    uniform.value = uniform.value || {};
    uniform.value.x = value.x ?? value._x ?? 0;
    uniform.value.y = prop === "pos" || prop.endsWith("_pos") ? 1 - (value.y ?? value._y ?? 0) : value.y ?? value._y ?? 0;
    if (value.type === "Vec3") {
      uniform.value.z = value.z ?? value._z ?? 0;
    }
    return;
  }
  uniform.value = value;
}
function syncVariableTextureLoad(layer, binding, textureInfo) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  const state = (_a = layer == null ? void 0 : layer.state) == null ? void 0 : _a.call(layer);
  const texture = textureInfo == null ? void 0 : textureInfo.texture;
  const target = (textureInfo == null ? void 0 : textureInfo.target) || binding.target;
  const src = (textureInfo == null ? void 0 : textureInfo.src) || getSourceValue(textureInfo == null ? void 0 : textureInfo.value);
  const size = getTextureNaturalSize(texture);
  if (size && (layer == null ? void 0 : layer.layerType) === "image") {
    const naturalSize = {
      type: "Vec2",
      x: size.width,
      y: size.height,
      _x: size.width,
      _y: size.height
    };
    const aspectRatio = size.width / size.height;
    layer.naturalWidth = size.width;
    layer.naturalHeight = size.height;
    layer.imageNaturalSize = naturalSize;
    layer.aspectRatio = aspectRatio;
    setUniformValue((_c = (_b = textureInfo == null ? void 0 : textureInfo.plane) == null ? void 0 : _b.uniforms) == null ? void 0 : _c.imageNaturalSize, naturalSize, "imageNaturalSize");
    setUniformValue((_e = (_d = textureInfo == null ? void 0 : textureInfo.plane) == null ? void 0 : _d.uniforms) == null ? void 0 : _e.aspectRatio, aspectRatio, "aspectRatio");
  }
  if (layer == null ? void 0 : layer.isFlattened) {
    const texDef = (_g = (_f = layer.data) == null ? void 0 : _f.textures) == null ? void 0 : _g.find((item) => (item == null ? void 0 : item.sampler) === target);
    if (texDef) {
      texDef.src = src;
      if (Number.isInteger(texDef.sublayerIndex)) {
        layer.local.sourceTextures = layer.local.sourceTextures || {};
        layer.local.sourceTextures[texDef.sublayerIndex] = texture;
      }
    }
    const sublayer = (texDef == null ? void 0 : texDef.type) === "image" && Number.isInteger(texDef.sublayerIndex) ? (_h = layer.sublayers) == null ? void 0 : _h.find((item) => item.sublayerIndex === texDef.sublayerIndex) : null;
    if (size && (sublayer == null ? void 0 : sublayer.layerType) === "image") {
      const naturalSize = {
        type: "Vec2",
        x: size.width,
        y: size.height,
        _x: size.width,
        _y: size.height
      };
      const aspectRatio = size.width / size.height;
      const naturalSizeKey = `L${texDef.sublayerIndex}_imageNaturalSize`;
      const aspectRatioKey = `L${texDef.sublayerIndex}_aspectRatio`;
      sublayer.src = src;
      sublayer.imageNaturalSize = naturalSize;
      sublayer.aspectRatio = aspectRatio;
      if ((_j = (_i = layer.data) == null ? void 0 : _i.uniforms) == null ? void 0 : _j[naturalSizeKey]) {
        layer.data.uniforms[naturalSizeKey].value = naturalSize;
      }
      if ((_l = (_k = layer.data) == null ? void 0 : _k.uniforms) == null ? void 0 : _l[aspectRatioKey]) {
        layer.data.uniforms[aspectRatioKey].value = aspectRatio;
      }
      setUniformValue((_n = (_m = textureInfo == null ? void 0 : textureInfo.plane) == null ? void 0 : _m.uniforms) == null ? void 0 : _n[naturalSizeKey], naturalSize, naturalSizeKey);
      setUniformValue((_p = (_o = textureInfo == null ? void 0 : textureInfo.plane) == null ? void 0 : _o.uniforms) == null ? void 0 : _p[aspectRatioKey], aspectRatio, aspectRatioKey);
    }
  }
  if (typeof (state == null ? void 0 : state.requestLayerRender) === "function") {
    state.requestLayerRender(layer);
  } else {
    (_q = state == null ? void 0 : state.requestSceneRender) == null ? void 0 : _q.call(state);
  }
}
function normalizeVariables(value = {}) {
  value = value || {};
  const definitions = Array.isArray(value.definitions) ? value.definitions.map((definition) => {
    const name = normalizeName(definition.name);
    if (!name) return null;
    return {
      id: definition.id || makeId("var"),
      name,
      type: definition.type || inferVariableType(definition.defaultValue),
      defaultValue: cloneValue(definition.defaultValue),
      description: definition.description || "",
      validation: definition.validation || {},
      // The shared variable a scene variable links to. defaultValue keeps its value.
      ...definition.ref ? { ref: definition.ref } : {}
    };
  }).filter(Boolean) : [];
  const bindings = Array.isArray(value.bindings) ? value.bindings.map((binding) => {
    var _a;
    const layerId = normalizeName(binding.layerId);
    const target = normalizeName(binding.target || binding.prop || binding.property);
    const variableId = binding.variableId || ((_a = definitions.find((def) => def.name === binding.variableName)) == null ? void 0 : _a.id);
    if (!layerId || !target || !variableId) return null;
    return {
      id: binding.id || makeId("bind"),
      layerId,
      kind: ["source", "texture"].includes(binding.kind) ? binding.kind : "prop",
      target,
      variableId,
      enabled: binding.enabled !== false
    };
  }).filter(Boolean) : [];
  const definitionIds = new Set(definitions.map((definition) => definition.id));
  const presets = Array.isArray(value.presets) ? filterPresetsByDefinitionIds(value.presets.map(normalizePreset).filter(Boolean), definitionIds, {
    keepEmpty: true
  }) : [];
  return { definitions, bindings, presets };
}
class VariablesManager {
  constructor({ variables = {}, getLayer, onChange, warn = console.warn } = {}) {
    this.getLayer = getLayer || (() => null);
    this.onChange = onChange || (() => {
    });
    this.warn = warn;
    this.state = normalizeVariables(variables);
    this.values = {};
    this.state.definitions.forEach((definition) => {
      this.values[definition.name] = cloneValue(definition.defaultValue);
    });
  }
  serialize() {
    return normalizeVariables({
      definitions: this.getDefinitions(),
      bindings: this.state.bindings,
      presets: this.state.presets
    });
  }
  getDefinitions() {
    return this.state.definitions.map((definition) => ({
      ...definition,
      defaultValue: cloneValue(definition.defaultValue),
      validation: {
        ...this.getInferredValidation(definition),
        ...definition.validation
      }
    }));
  }
  getBindings() {
    return this.state.bindings.map((binding) => ({ ...binding }));
  }
  getPresets() {
    return this.state.presets.map(clonePreset);
  }
  has(name) {
    return !!this.getDefinition(name);
  }
  getDefinition(nameOrId) {
    return this.state.definitions.find((def) => def.id === nameOrId || def.name === nameOrId) || null;
  }
  getPreset(idOrName) {
    return clonePreset(this.state.presets.find((preset) => preset.id === idOrName || preset.name === idOrName) || null);
  }
  getInferredValidation(definition) {
    if (!definition) return {};
    return this.state.bindings.filter((binding) => binding.enabled !== false && binding.variableId === definition.id).map((binding) => inferBoundVariableValidation(this.getLayer(binding.layerId, binding), binding.target)).find((validation) => validation == null ? void 0 : validation.output) || {};
  }
  getValue(name) {
    const definition = this.getDefinition(name);
    if (!definition) return void 0;
    return cloneValue(this.values[definition.name]);
  }
  getValues() {
    return this.state.definitions.reduce((values, definition) => {
      values[definition.name] = cloneValue(this.values[definition.name]);
      return values;
    }, {});
  }
  add(name, layerId, target, kind = "prop", defaultValue = void 0, options = {}) {
    const bindingTarget = { kind, target };
    const layer = layerId && target ? this.getLayer(layerId, bindingTarget) : null;
    const resolvedTarget = bindingTarget.target;
    const definition = this.createVariable(name, {
      defaultValue,
      type: options.type || inferBoundVariableType(layer, resolvedTarget),
      description: options.description,
      validation: options.validation || inferBoundVariableValidation(layer, resolvedTarget),
      notify: false
    });
    this.bind(definition.id, layerId, target, kind, { notify: false });
    this.notify();
    return definition;
  }
  createVariable(name, options = {}) {
    const variableName = normalizeName(name);
    if (!variableName) {
      throw new Error("Variable name is required.");
    }
    if (this.state.definitions.some((definition2) => definition2.name === variableName)) {
      throw new Error(`Variable "${variableName}" already exists.`);
    }
    const definition = {
      id: options.id || makeId("var"),
      name: variableName,
      type: options.type || inferVariableType(options.defaultValue),
      defaultValue: cloneValue(options.defaultValue),
      description: options.description || "",
      validation: options.validation || {}
    };
    setDefinitionRef(definition, options.ref);
    this.state.definitions.push(definition);
    this.values[definition.name] = cloneValue(definition.defaultValue);
    if (options.notify !== false) this.notify();
    return definition;
  }
  getCurrentPresetValues() {
    return this.state.definitions.reduce((values, definition) => {
      values[definition.id] = cloneValue(this.values[definition.name]);
      return values;
    }, {});
  }
  createPreset(name, options = {}) {
    const presetName = normalizeName(name);
    if (!presetName) {
      throw new Error("Preset name is required.");
    }
    if (this.state.presets.some((preset2) => preset2.name === presetName)) {
      throw new Error(`Preset "${presetName}" already exists.`);
    }
    const timestamp = nowIso();
    const preset = {
      id: options.id || makeId("preset"),
      name: presetName,
      description: options.description || "",
      values: clonePresetValues(options.values || this.getCurrentPresetValues()),
      createdAt: options.createdAt || timestamp,
      updatedAt: options.updatedAt || timestamp,
      refs: {
        ...options.values ? options.refs : Object.fromEntries(this.state.definitions.filter((item) => item.ref).map((item) => [item.id, item.ref]))
      }
    };
    this.state.presets.push(preset);
    if (options.notify !== false) this.notify();
    return clonePreset(preset);
  }
  updatePreset(idOrName, options = {}) {
    const preset = this.state.presets.find((item) => item.id === idOrName || item.name === idOrName);
    if (!preset) return false;
    if (options.name !== void 0) {
      const nextName = normalizeName(options.name);
      if (!nextName) {
        throw new Error("Preset name is required.");
      }
      if (this.state.presets.some((item) => item.id !== preset.id && item.name === nextName)) {
        throw new Error(`Preset "${nextName}" already exists.`);
      }
      preset.name = nextName;
    }
    if (options.description !== void 0) {
      preset.description = options.description || "";
    }
    if (Object.prototype.hasOwnProperty.call(options, "values")) {
      preset.values = clonePresetValues(options.values);
    }
    if (Object.prototype.hasOwnProperty.call(options, "refs")) {
      preset.refs = { ...options.refs };
    }
    preset.updatedAt = options.updatedAt || nowIso();
    if (options.notify !== false) this.notify();
    return clonePreset(preset);
  }
  deletePreset(idOrName, options = {}) {
    const index = this.state.presets.findIndex((preset) => preset.id === idOrName || preset.name === idOrName);
    if (index === -1) return false;
    this.state.presets.splice(index, 1);
    if (options.notify !== false) this.notify();
    return true;
  }
  applyPreset(idOrName, options = {}) {
    var _a;
    const preset = this.state.presets.find((item) => item.id === idOrName || item.name === idOrName);
    if (!preset) {
      (_a = this.warn) == null ? void 0 : _a.call(this, `Unknown Unicorn Studio preset "${idOrName}".`);
      return [];
    }
    const changed = [];
    Object.entries(preset.values || {}).forEach(([variableId, value]) => {
      var _a2, _b;
      const definition = this.getDefinition(variableId);
      if (!definition) {
        (_a2 = this.warn) == null ? void 0 : _a2.call(this, `Preset "${preset.name}" references missing variable "${variableId}".`);
        return;
      }
      if (options.persistDefault) setDefinitionRef(definition, (_b = preset.refs) == null ? void 0 : _b[variableId]);
      if (this.setValue(definition.name, value, { persistDefault: !!options.persistDefault, notify: false })) {
        changed.push(definition.name);
      }
    });
    if (options.persistDefault && changed.length) this.notify();
    return changed;
  }
  bind(variableNameOrId, layerId, target, kind = "prop", options = {}) {
    var _a, _b, _c;
    const definition = this.getDefinition(variableNameOrId);
    if (!definition) {
      throw new Error(`Variable "${variableNameOrId}" does not exist.`);
    }
    const bindingKind = ["source", "texture"].includes(kind) ? kind : "prop";
    const bindingTarget = { kind: bindingKind, target };
    const layer = layerId && target ? this.getLayer(layerId, bindingTarget) : null;
    const resolvedTarget = bindingTarget.target;
    if (bindingKind === "prop" && !canBindVariableToTarget(layer, resolvedTarget)) {
      (_a = this.warn) == null ? void 0 : _a.call(this, `Variable binding is disabled for "${target}".`);
      return null;
    }
    const bindingDefinition = {
      ...definition,
      validation: {
        ...this.getInferredValidation(definition),
        ...definition.validation
      }
    };
    if (bindingKind === "prop" && !isVariableOutputCompatibleWithTarget(bindingDefinition, layer, resolvedTarget)) {
      const targetOutput = (_b = inferBoundVariableValidation(layer, resolvedTarget)) == null ? void 0 : _b.output;
      (_c = this.warn) == null ? void 0 : _c.call(
        this,
        `Unable to bind variable "${definition.name}" to "${target}". Expected ${bindingDefinition.validation.output}, target uses ${targetOutput}.`
      );
      return null;
    }
    const existingBinding = this.state.bindings.find(
      (binding2) => binding2.variableId === definition.id && binding2.layerId === layerId && binding2.kind === bindingKind && binding2.target === target
    );
    if (existingBinding) {
      return existingBinding;
    }
    const binding = {
      id: options.id || makeId("bind"),
      variableId: definition.id,
      layerId,
      kind: bindingKind,
      target,
      enabled: options.enabled !== false
    };
    this.state.bindings.push(binding);
    this.applyBinding(binding, this.values[definition.name]);
    if (options.notify !== false) this.notify();
    return binding;
  }
  unbind(bindingId, options = {}) {
    const index = this.state.bindings.findIndex((binding2) => binding2.id === bindingId);
    if (index === -1) return false;
    const [binding] = this.state.bindings.splice(index, 1);
    this.clearBinding(binding);
    if (options.notify !== false) this.notify();
    return true;
  }
  deleteVariable(nameOrId) {
    const definition = this.getDefinition(nameOrId);
    if (!definition) return false;
    this.state.bindings.filter((binding) => binding.variableId === definition.id).forEach((binding) => this.clearBinding(binding));
    this.state.definitions = this.state.definitions.filter((item) => item.id !== definition.id);
    this.state.bindings = this.state.bindings.filter((binding) => binding.variableId !== definition.id);
    this.state.presets = filterPresetsByDefinitionIds(
      this.state.presets,
      new Set(this.state.definitions.map((item) => item.id)),
      { keepEmpty: true }
    );
    delete this.values[definition.name];
    this.notify();
    return true;
  }
  renameVariable(nameOrId, nextName) {
    const definition = this.getDefinition(nameOrId);
    const variableName = normalizeName(nextName);
    if (!definition || !variableName || definition.name === variableName) return false;
    if (this.state.definitions.some((item) => item.id !== definition.id && item.name === variableName)) {
      throw new Error(`Variable "${variableName}" already exists.`);
    }
    const currentValue = this.values[definition.name];
    delete this.values[definition.name];
    definition.name = variableName;
    this.values[definition.name] = currentValue;
    this.notify();
    return true;
  }
  updateVariable(nameOrId, options = {}) {
    const definition = this.getDefinition(nameOrId);
    if (!definition) return false;
    const nextName = options.name !== void 0 ? normalizeName(options.name) : definition.name;
    if (!nextName) {
      throw new Error("Variable name is required.");
    }
    if (this.state.definitions.some((item) => item.id !== definition.id && item.name === nextName)) {
      throw new Error(`Variable "${nextName}" already exists.`);
    }
    const nextDefinition = {
      ...definition,
      name: nextName,
      type: options.type !== void 0 ? options.type : definition.type,
      description: options.description !== void 0 ? options.description || "" : definition.description,
      validation: options.validation !== void 0 ? options.validation || {} : definition.validation
    };
    const hasDefaultValue = Object.prototype.hasOwnProperty.call(options, "defaultValue");
    const nextValue = hasDefaultValue ? options.defaultValue : this.values[definition.name];
    const normalized = normalizeValue(nextDefinition, nextValue, this.warn);
    if (!normalized.valid) return false;
    if (definition.name !== nextName) {
      delete this.values[definition.name];
    }
    definition.name = nextName;
    definition.type = nextDefinition.type;
    definition.description = nextDefinition.description;
    definition.validation = nextDefinition.validation;
    if (Object.prototype.hasOwnProperty.call(options, "ref")) {
      setDefinitionRef(definition, options.ref);
    }
    if (hasDefaultValue) {
      definition.defaultValue = cloneValue(normalized.value);
    }
    this.values[definition.name] = cloneValue(normalized.value);
    this.applyVariable(definition);
    if (options.notify !== false) this.notify();
    return true;
  }
  setValue(name, value, options = {}) {
    var _a;
    const definition = this.getDefinition(name);
    if (!definition) {
      const available = this.state.definitions.map((def) => def.name).join(", ") || "none";
      (_a = this.warn) == null ? void 0 : _a.call(this, `Unknown Unicorn Studio variable "${name}". Available variables: ${available}.`);
      return false;
    }
    const normalized = normalizeValue(definition, value, this.warn);
    if (!normalized.valid) return false;
    this.values[definition.name] = cloneValue(normalized.value);
    this.applyVariable(definition);
    if (options.persistDefault) {
      definition.defaultValue = cloneValue(normalized.value);
      if (options.notify !== false) this.notify();
    }
    return true;
  }
  setValues(values = {}, options = {}) {
    const changed = [];
    Object.entries(values || {}).forEach(([name, value]) => {
      if (this.setValue(name, value, { ...options, notify: false })) {
        changed.push(name);
      }
    });
    if (options.persistDefault) this.notify();
    return changed;
  }
  applyInitialValues(values = {}) {
    Object.entries(values || {}).forEach(([name, value]) => this.setValue(name, value));
  }
  applyAll() {
    this.state.definitions.forEach((definition) => this.applyVariable(definition));
  }
  applyVariable(definition) {
    this.state.bindings.filter((binding) => binding.enabled !== false && binding.variableId === definition.id).forEach((binding) => this.applyBinding(binding, this.values[definition.name]));
  }
  applyBinding(binding, value) {
    var _a, _b, _c, _d, _e, _f, _g;
    const layer = this.getLayer(binding.layerId, binding);
    if (!layer) {
      const definition2 = this.getDefinition(binding.variableId);
      (_a = this.warn) == null ? void 0 : _a.call(
        this,
        `Unable to apply Unicorn Studio variable binding for "${(definition2 == null ? void 0 : definition2.name) || binding.variableId}". Layer "${binding.layerId}" was not found. Target: ${binding.kind || "prop"}:${binding.target}.`
      );
      return;
    }
    const definition = this.getDefinition(binding.variableId);
    if (!definition) {
      (_b = this.warn) == null ? void 0 : _b.call(
        this,
        `Unable to apply Unicorn Studio variable binding. Variable "${binding.variableId}" was not found for layer "${binding.layerId}" target "${binding.target}".`
      );
      return;
    }
    if ((binding.kind || "prop") === "prop" && !canBindVariableToTarget(layer, binding.target)) {
      (_c = this.warn) == null ? void 0 : _c.call(
        this,
        `Skipping variable binding for "${binding.target}" because variables are disabled for that property.`
      );
      return;
    }
    const bindingValue = coerceBindingValue(definition, layer, binding.target, value);
    if (binding.kind === "source") {
      const sourceValue = getSourceValue(bindingValue);
      if (typeof layer.setSource === "function") {
        layer.setSource(sourceValue, {
          onLoad: (textureInfo) => syncVariableTextureLoad(layer, binding, textureInfo)
        });
      } else if (typeof layer.replaceSource === "function") {
        const sourceThumb = bindingValue && typeof bindingValue === "object" ? bindingValue.thumb || bindingValue.src : sourceValue;
        (_d = layer.setRuntimeOverride) == null ? void 0 : _d.call(layer, binding.target || "src", sourceValue);
        layer.replaceSource(sourceValue, sourceThumb || layer.thumb, layer.naturalWidth, layer.naturalHeight);
      } else if (typeof layer.setProp === "function") {
        layer.setProp(binding.target || "src", sourceValue, { runtimeOverride: true });
      } else {
        (_e = this.warn) == null ? void 0 : _e.call(
          this,
          `Unable to apply source variable "${definition.name}". Layer "${binding.layerId}" does not support source updates.`
        );
      }
      return;
    }
    const textureSampler = binding.kind === "texture" ? binding.target : definition.type === "texture" ? resolveTextureSampler(layer, binding.target) : null;
    if (textureSampler) {
      const textureValue = definition.type === "string" ? { src: encodeTextCodesDataUrl(bindingValue), text: String(bindingValue ?? "") } : bindingValue;
      if (typeof layer.setTexture === "function") {
        layer.setTexture(textureSampler, textureValue, {
          onLoad: (textureInfo) => syncVariableTextureLoad(layer, binding, textureInfo)
        });
      } else if (typeof layer.setProp === "function") {
        layer.setProp(binding.target, textureValue, { runtimeOverride: true });
      } else {
        (_f = this.warn) == null ? void 0 : _f.call(
          this,
          `Unable to apply texture variable "${definition.name}". Layer "${binding.layerId}" does not support texture target "${binding.target}".`
        );
      }
      return;
    }
    if (typeof layer.setPropertySource === "function") {
      layer.setPropertySource(binding.target, "runtime", bindingValue, { owner: "variable" });
    } else if (typeof layer.setRuntimeOverride === "function") {
      layer.setRuntimeOverride(binding.target, bindingValue, { source: "variable" });
    } else if (typeof layer.setProp === "function") {
      layer.setProp(binding.target, bindingValue, { runtimeOverride: true });
    } else if (Object.prototype.hasOwnProperty.call(layer, binding.target)) {
      layer[binding.target] = bindingValue;
    } else {
      (_g = this.warn) == null ? void 0 : _g.call(
        this,
        `Unable to apply prop variable "${definition.name}". Layer "${binding.layerId}" does not expose target "${binding.target}".`
      );
    }
  }
  clearBinding(binding) {
    var _a;
    const layer = this.getLayer(binding.layerId, binding);
    if (!layer || typeof layer.clearRuntimeOverride !== "function") return;
    if (binding.kind === "source") {
      layer.clearRuntimeOverride(binding.target || "src");
      if (typeof layer.replaceSource === "function") {
        layer.replaceSource(layer.src, layer.thumb, layer.naturalWidth, layer.naturalHeight);
      }
      return;
    }
    if (binding.kind === "texture") {
      const prop = Object.keys(layer).find((key) => {
        var _a2;
        return ((_a2 = layer[key]) == null ? void 0 : _a2.sampler) === binding.target;
      });
      layer.clearRuntimeOverride(prop || "texture");
      if (prop) (_a = layer.reloadTexture) == null ? void 0 : _a.call(layer, binding.target, layer[prop]);
      return;
    }
    layer.clearRuntimeOverride(binding.target);
  }
  getManifest() {
    return this.getDefinitions().map((definition) => {
      const bindings = this.state.bindings.filter((binding) => binding.variableId === definition.id);
      return {
        ...definition,
        currentValue: cloneValue(this.values[definition.name]),
        bindingCount: bindings.length,
        bindings: bindings.map((binding) => ({
          layerId: binding.layerId,
          kind: binding.kind,
          target: binding.target,
          enabled: binding.enabled
        }))
      };
    });
  }
  notify() {
    this.onChange(this.serialize());
  }
}
const SOURCE_ORDER = ["base", "breakpoint", "runtime", "event", "preview"];
const SOURCE_BUCKETS = {
  runtime: "runtimeOverrides",
  event: "stateEffectProps",
  preview: "previewProps"
};
const DEFAULT_BREAKPOINT_ORDER = ["Desktop", "Tablet", "Mobile"];
function hasOwn(value, key) {
  return !!value && Object.prototype.hasOwnProperty.call(value, key);
}
function clonePropertyStateValue(value) {
  if (value && typeof value.clone === "function") {
    return value.clone();
  }
  if (Array.isArray(value)) {
    return value.map(clonePropertyStateValue);
  }
  if (value && typeof value === "object") {
    return JSON.parse(JSON.stringify(value));
  }
  return value;
}
function getBreakpoints(value) {
  if (Array.isArray(value)) return value;
  return Array.isArray(value == null ? void 0 : value.breakpoints) ? value.breakpoints : [];
}
function normalizeBreakpointOrder(breakpoints, breakpointOrder) {
  if (Array.isArray(breakpointOrder) && breakpointOrder.length) {
    return breakpointOrder.map((item) => typeof item === "string" ? item : item == null ? void 0 : item.name).filter(Boolean);
  }
  return breakpoints.map((bp) => bp == null ? void 0 : bp.name).filter(Boolean);
}
function filterProps(props, includeProps) {
  if (!Array.isArray(includeProps)) return props;
  return includeProps.reduce((filtered, prop) => {
    if (hasOwn(props, prop)) {
      filtered[prop] = props[prop];
    }
    return filtered;
  }, {});
}
function resolveBreakpointProps(value, context = {}) {
  const breakpoints = getBreakpoints(value);
  if (!breakpoints.length) return {};
  if (!context.breakpointName && !hasOwn(context, "width")) return {};
  const props = context.breakpointName ? resolveBreakpointPropsByName(breakpoints, context.breakpointName, context) : resolveBreakpointPropsByWidth(breakpoints, context.width, context);
  return filterProps(props, context.props);
}
function resolveBreakpointPropsByName(value, breakpointName, context = {}) {
  const breakpoints = getBreakpoints(value);
  const order = normalizeBreakpointOrder(breakpoints, context.breakpointOrder);
  const currentIndex = order.indexOf(breakpointName);
  if (currentIndex === -1) return {};
  const props = {};
  for (let i = currentIndex; i >= 0; i--) {
    const breakpoint = breakpoints.find((bp) => (bp == null ? void 0 : bp.name) === order[i]);
    if (!(breakpoint == null ? void 0 : breakpoint.props)) continue;
    Object.keys(breakpoint.props).forEach((prop) => {
      if (!hasOwn(props, prop)) {
        props[prop] = breakpoint.props[prop];
      }
    });
  }
  return props;
}
function resolveBreakpointPropsByWidth(value, width, context = {}) {
  const breakpoints = getBreakpoints(value);
  if (!breakpoints.length) return {};
  const viewportWidth2 = Number.isFinite(Number(width)) ? Number(width) : 0;
  const sortedBreakpoints = [...breakpoints].sort((a, b) => ((b == null ? void 0 : b.min) ?? 0) - ((a == null ? void 0 : a.min) ?? 0));
  const props = {};
  for (let i = sortedBreakpoints.length - 1; i >= 0; i--) {
    const breakpoint = sortedBreakpoints[i];
    if (!(breakpoint == null ? void 0 : breakpoint.props)) continue;
    if (breakpoint.max === null || viewportWidth2 <= breakpoint.max) {
      Object.keys(breakpoint.props).forEach((prop) => {
        if (!hasOwn(props, prop)) {
          props[prop] = breakpoint.props[prop];
        }
      });
    }
  }
  const desktopName = context.baseBreakpointName || "Desktop";
  const base = breakpoints.find((bp) => (bp == null ? void 0 : bp.name) === desktopName);
  if (base == null ? void 0 : base.props) {
    Object.keys(base.props).forEach((prop) => {
      if (!hasOwn(props, prop)) {
        props[prop] = base.props[prop];
      }
    });
  }
  return props;
}
function applyPropertyStateValue(target, prop, value) {
  const currentValue = target == null ? void 0 : target[prop];
  if (currentValue && (value == null ? void 0 : value.type)) {
    const x = value.x ?? value._x;
    const y = value.y ?? value._y;
    const z = value.z ?? value._z;
    if (x !== void 0) currentValue.x = x;
    if (y !== void 0) currentValue.y = y;
    if (z !== void 0) currentValue.z = z;
    if (x !== void 0) currentValue._x = x;
    if (y !== void 0) currentValue._y = y;
    if (z !== void 0) currentValue._z = z;
    return currentValue;
  }
  target[prop] = value;
  return value;
}
function setPropertySource(layer, prop, source, value, options = {}) {
  if (!layer || !prop) return false;
  const cloneValue2 = options.cloneValue || clonePropertyStateValue;
  if (source === "base") {
    applyPropertyStateValue(layer, prop, cloneValue2(value));
    return true;
  }
  if (source === "breakpoint") {
    const breakpointName = options.breakpointName;
    const breakpoint = getBreakpoints(layer).find((bp) => (bp == null ? void 0 : bp.name) === breakpointName);
    if (!breakpoint) return false;
    breakpoint.props = breakpoint.props || {};
    breakpoint.props[prop] = cloneValue2(value);
    return true;
  }
  const bucketName = SOURCE_BUCKETS[source];
  if (!bucketName) return false;
  layer.local = layer.local || {};
  layer.local[bucketName] = layer.local[bucketName] || {};
  if (source === "runtime") {
    layer.local.runtimeOverrideBaseValues = layer.local.runtimeOverrideBaseValues || {};
    if (!hasOwn(layer.local[bucketName], prop)) {
      const baseValue = hasOwn(options, "baseValue") ? options.baseValue : layer[prop];
      layer.local.runtimeOverrideBaseValues[prop] = cloneValue2(baseValue);
    }
  }
  layer.local[bucketName][prop] = cloneValue2(value);
  return true;
}
function clearPropertySource(layer, prop, source, options = {}) {
  if (!layer || !prop) return void 0;
  if (source === "breakpoint") {
    const breakpoint = getBreakpoints(layer).find((bp) => (bp == null ? void 0 : bp.name) === options.breakpointName);
    if (!(breakpoint == null ? void 0 : breakpoint.props) || !hasOwn(breakpoint.props, prop)) return void 0;
    const previousValue2 = breakpoint.props[prop];
    delete breakpoint.props[prop];
    return previousValue2;
  }
  if (!layer.local) return void 0;
  const bucketName = SOURCE_BUCKETS[source];
  if (!bucketName || !layer.local[bucketName] || !hasOwn(layer.local[bucketName], prop)) return void 0;
  const previousValue = layer.local[bucketName][prop];
  delete layer.local[bucketName][prop];
  if (source === "runtime" && layer.local.runtimeOverrideBaseValues) {
    const baseValue = layer.local.runtimeOverrideBaseValues[prop];
    delete layer.local.runtimeOverrideBaseValues[prop];
    return baseValue;
  }
  return previousValue;
}
function resolvePropertyState(layer, prop, context = {}) {
  var _a, _b, _c, _d, _e, _f;
  const breakpointProps = context.breakpointProps || resolveBreakpointProps(layer, context);
  const sources = {
    base: hasOwn(context, "baseValue") ? context.baseValue : layer == null ? void 0 : layer[prop],
    breakpoint: hasOwn(breakpointProps, prop) ? breakpointProps[prop] : void 0,
    runtime: (_b = (_a = layer == null ? void 0 : layer.local) == null ? void 0 : _a.runtimeOverrides) == null ? void 0 : _b[prop],
    event: (_d = (_c = layer == null ? void 0 : layer.local) == null ? void 0 : _c.stateEffectProps) == null ? void 0 : _d[prop],
    preview: (_f = (_e = layer == null ? void 0 : layer.local) == null ? void 0 : _e.previewProps) == null ? void 0 : _f[prop]
  };
  const enabledSources = context.sources || SOURCE_ORDER;
  for (let i = enabledSources.length - 1; i >= 0; i--) {
    const source = enabledSources[i];
    if (sources[source] !== void 0) {
      return {
        prop,
        source,
        value: sources[source],
        sources
      };
    }
  }
  return {
    prop,
    source: "base",
    value: sources.base,
    sources
  };
}
function getStateEffectPropertyValue(effect, prop, breakpointName, fallback = effect == null ? void 0 : effect[prop]) {
  if (!effect || !breakpointName) return fallback;
  const responsiveProps = effect.responsiveProps;
  const currentIndex = DEFAULT_BREAKPOINT_ORDER.indexOf(breakpointName);
  if (currentIndex === -1) {
    const props = responsiveProps == null ? void 0 : responsiveProps[breakpointName];
    return props && hasOwn(props, prop) ? props[prop] : fallback;
  }
  for (let i = currentIndex; i >= 0; i--) {
    const props = responsiveProps == null ? void 0 : responsiveProps[DEFAULT_BREAKPOINT_ORDER[i]];
    if (props && hasOwn(props, prop)) {
      return props[prop];
    }
  }
  return fallback;
}
const EVENT_TYPES = ["appear", "hover", "scroll", "mousemove"];
const TIMELINE_TRIGGERS = ["appear", "scroll"];
function isTimelineEvent(effect, type = effect.type) {
  return TIMELINE_TRIGGERS.includes(type) && effect.mode !== "whileScrolling";
}
function getTrackKey(effect) {
  return effect.mode === "whileScrolling" ? `${effect.prop} speed` : effect.prop;
}
const EPS$1 = 1e-3;
const VELOCITY_EPS = 1e-4;
const linear = (x) => x;
function weightedLerp(current, last, amount) {
  for (let i = 0; i < amount; i++) {
    current = (current + last) / 2;
  }
  return +((current + last) / 2).toFixed(4);
}
function springStep(current, target, velocity, momentum, spring) {
  const clampedMomentum = Math.max(0, Math.min(1, momentum ?? 0));
  const stiffness = 0.05 + (1 - clampedMomentum) * 0.35;
  const damping = 0.5 + spring * 0.32;
  velocity = (velocity + (target - current) * stiffness) * damping;
  return { value: current + velocity, velocity };
}
function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}
function isLooping(stage) {
  return !!stage.loop && stage.loop !== "none";
}
function getSpanProgress(stage, t) {
  const span = stage.end - stage.start;
  if (span > 0) return (t - stage.start) / span;
  return t < stage.start ? 0 : 1;
}
function getLoopProgress(stage, elapsed) {
  const duration = stage.end - stage.start;
  if (duration <= 0) return 1;
  const cycle = duration + (stage.loopDelay || 0);
  const progress = Math.min(1, elapsed % cycle / duration);
  return stage.loop === "reverse" && Math.floor(elapsed / cycle) % 2 === 1 ? 1 - progress : progress;
}
function getStageSpan(effect, type, scroll) {
  const transition = effect.transition;
  if (type === "scroll" && effect.mode !== "whileScrolling") {
    const { top, height, viewportHeight: viewportHeight2 } = scroll;
    const anchor = top - viewportHeight2 * effect.offset;
    if (!transition) {
      return { start: anchor, end: anchor + (viewportHeight2 + height) * effect.range };
    }
    const start2 = anchor + viewportHeight2 * (transition.delay || 0);
    return { start: start2, end: start2 + viewportHeight2 * transition.duration };
  }
  if (!transition) {
    return { start: 0, end: 1 };
  }
  const start = transition.delay || 0;
  return { start, end: start + transition.duration };
}
function getStage(effect, type, ctx, rest) {
  const breakpointName = ctx.breakpointName;
  const { start, end } = getStageSpan(effect, type, ctx.scroll);
  if (type === "appear") {
    return {
      effect,
      start,
      end,
      from: getStateEffectPropertyValue(effect, "value", breakpointName, effect.value),
      to: getStateEffectPropertyValue(effect, "endValue", breakpointName, effect.endValue ?? rest),
      ease: ctx.getEase(effect),
      loop: effect.loop,
      loopDelay: effect.loopDelay
    };
  }
  return {
    effect,
    start,
    end,
    from: getStateEffectPropertyValue(effect, "startValue", breakpointName, effect.startValue),
    to: getStateEffectPropertyValue(effect, "value", breakpointName, effect.value),
    ease: effect.transition ? ctx.getEase(effect) : linear
  };
}
function getTrackEnd(stages) {
  return stages.reduce((end, stage) => Math.max(end, stage.end), stages[0].end);
}
function getTrackValue(stages, t, rest, interpolate2, extrapolate = false) {
  let stage = stages[0];
  let from = stage.from ?? rest;
  for (let i = 1; i < stages.length && stages[i].start <= t; i++) {
    from = stages[i].from ?? stage.to;
    stage = stages[i];
  }
  const progress = getSpanProgress(stage, t);
  if (isLooping(stage) && progress > 0) {
    return interpolate2(from, stage.to, stage.ease(getLoopProgress(stage, t - stage.start)));
  }
  if (extrapolate && (progress < 0 && stage === stages[0] || progress > 1 && stage === stages[stages.length - 1])) {
    return interpolate2(from, stage.to, progress);
  }
  if (progress <= 0) return from;
  if (progress >= 1) return stage.to;
  return interpolate2(from, stage.to, stage.ease(progress));
}
function readAxis(value, axis) {
  return value[axis] ?? value[`_${axis}`] ?? 0;
}
function composeTrackValues(rest, values) {
  if (values.length === 1) return values[0];
  if (typeof rest === "number") {
    return values.reduce((sum, value) => sum + value - rest, rest);
  }
  if ((rest == null ? void 0 : rest.type) !== "Vec2" && (rest == null ? void 0 : rest.type) !== "Vec3") {
    return values[values.length - 1];
  }
  const axes = rest.type === "Vec3" ? ["x", "y", "z"] : ["x", "y"];
  const result = axes.map((axis) => {
    const base = readAxis(rest, axis);
    return values.reduce((sum, value) => sum + readAxis(value, axis) - base, base);
  });
  const sample = values[values.length - 1];
  if (typeof sample.clone === "function") {
    return new sample.constructor(...result);
  }
  return rest.type === "Vec3" ? { type: "Vec3", x: result[0], y: result[1], z: result[2] } : { type: "Vec2", x: result[0], y: result[1] };
}
function setStageProgress(stages, t) {
  stages.forEach((stage) => {
    stage.effect.progress = stage.ease(clamp01(getSpanProgress(stage, t)));
  });
}
function smoothScrollTrack(stages, leader, target, isSpeed, toPlayhead) {
  let value = target;
  if (leader.lastTick !== void 0) {
    if (leader.spring > 0) {
      const step = springStep(leader.lastTick, value, leader._velocity || 0, leader.momentum, leader.spring);
      value = step.value;
      leader._velocity = step.velocity;
    } else {
      value = weightedLerp(value, leader.lastTick, leader.momentum * 2);
    }
    const settled = isSpeed ? Math.abs(value) < EPS$1 : Math.abs(leader.lastTick - value) < EPS$1;
    if (settled && Math.abs(leader._velocity || 0) < VELOCITY_EPS) {
      return { playhead: toPlayhead(leader.lastTick), changed: false };
    }
  }
  leader.lastTick = value;
  return { playhead: toPlayhead(value), changed: true };
}
function getMousemoveTarget(leader, ctx, last, mouseDelta) {
  const { pos, width, height } = ctx.mouse;
  if (leader.mode === "proximity") {
    if (!pos || !width || !height) return null;
    let dx = pos.x - leader.point.x * width;
    let dy = pos.y - leader.point.y * height;
    let maxDist = Math.sqrt(width * width + height * height);
    if (leader.axisMode === "x") {
      dy = 0;
      maxDist = width;
    } else if (leader.axisMode === "y") {
      dx = 0;
      maxDist = height;
    }
    const proximity = 1 - Math.min(1, Math.sqrt(dx * dx + dy * dy) / maxDist);
    return Math.pow(proximity, 1 + leader.sensitivity * 4);
  }
  const timeSinceMove = leader.lastMoveTime ? ctx.now - leader.lastMoveTime : Infinity;
  if (timeSinceMove > leader.delay) return 0;
  return mouseDelta > 0 ? Math.min(1, last + mouseDelta * (leader.sensitivity / 500)) : last;
}
const PLAYHEADS = {
  appear(stages, ctx) {
    const t = ctx.appearTime(stages[0].effect);
    if (t === null) return { playhead: 0, changed: false };
    let changed = false;
    stages.forEach((stage) => {
      const effect = stage.effect;
      if (effect.complete) return;
      changed = true;
      const progress = clamp01(getSpanProgress(stage, t));
      if (isLooping(stage)) {
        effect.progress = stage.ease(t > stage.start ? getLoopProgress(stage, t - stage.start) : 0);
      } else if (progress >= 1) {
        effect.complete = true;
        effect.progress = 0;
      } else {
        effect.progress = stage.ease(progress);
      }
    });
    return { playhead: t, changed };
  },
  // The hover playhead runs forward while the target is hovered and back when it isn't. The frame
  // the hover starts doesn't advance, so a long gap since the last rendered frame can't skip ahead.
  hover(stages, ctx) {
    var _a;
    const leader = stages[0].effect;
    const active = ctx.isHovered(leader);
    const last = leader.playhead || 0;
    const dt = leader.lastTick === void 0 || active && !leader.wasActive ? 0 : ctx.now - leader.lastTick;
    let playhead;
    if (active) {
      playhead = Math.min(getTrackEnd(stages), last + dt);
    } else if ((_a = leader.transition) == null ? void 0 : _a.forwardsOnly) {
      playhead = 0;
    } else {
      playhead = Math.max(0, last - dt);
    }
    leader.playhead = playhead;
    leader.lastTick = ctx.now;
    leader.wasActive = active;
    setStageProgress(stages, playhead);
    return { playhead, changed: playhead !== last };
  },
  scroll(stages, ctx) {
    const leader = stages[0].effect;
    const { scrollTop: scrollTop2, viewportHeight: viewportHeight2, height, top } = ctx.scroll;
    if (leader.mode === "whileScrolling") {
      const delta = ctx.scroll.delta ?? scrollTop2 - (leader.lastScrollTop || 0);
      leader.lastScrollTop = scrollTop2;
      let target2 = delta * leader.delta;
      if (leader.absScrollValue) target2 = Math.abs(target2);
      return smoothScrollTrack(stages, leader, target2, true, (value) => value);
    }
    const start = stages[0].start;
    const end = getTrackEnd(stages);
    stages.forEach((stage) => {
      Object.assign(stage.effect, {
        progress: clamp01(getSpanProgress(stage, scrollTop2)),
        startScroll: stage.start / viewportHeight2,
        endScroll: stage.end / viewportHeight2,
        sceneHeight: height / viewportHeight2,
        sceneTop: top
      });
    });
    const target = end > start ? clamp01((scrollTop2 - start) / (end - start)) : scrollTop2 < start ? 0 : 1;
    return smoothScrollTrack(stages, leader, target, false, (value) => start + value * (end - start));
  },
  mousemove(stages, ctx) {
    const leader = stages[0].effect;
    const pos = ctx.mouse.pos;
    let mouseDelta = 0;
    if (leader.lastMousePos && pos) {
      const dx = pos.x - leader.lastMousePos.x;
      const dy = pos.y - leader.lastMousePos.y;
      mouseDelta = leader.axisMode === "x" ? Math.abs(dx) : leader.axisMode === "y" ? Math.abs(dy) : Math.sqrt(dx * dx + dy * dy);
      if (mouseDelta > 1e-4) leader.lastMoveTime = ctx.now;
    }
    if (pos) leader.lastMousePos = { x: pos.x, y: pos.y };
    const last = leader.playhead || 0;
    const target = getMousemoveTarget(leader, ctx, last, mouseDelta);
    if (target === null) return { playhead: last, changed: false };
    let value;
    if (leader.spring > 0) {
      const step = springStep(last, target, leader._velocity || 0, leader.momentum, leader.spring);
      value = step.value;
      leader._velocity = step.velocity;
    } else {
      value = weightedLerp(target, last, leader.momentum);
    }
    if (Math.abs(value - last) < VELOCITY_EPS && Math.abs(leader._velocity || 0) < VELOCITY_EPS) {
      if (Math.abs(value) < EPS$1 && last !== 0) {
        leader.playhead = 0;
        leader._velocity = 0;
        setStageProgress(stages, 0);
        return { playhead: 0, changed: true };
      }
      return { playhead: last, changed: false };
    }
    leader.playhead = value;
    setStageProgress(stages, value);
    return { playhead: value, changed: true };
  }
};
function getPlayheadOverride(type, stages, ctx) {
  const value = ctx.playhead && isTimelineEvent(stages[0].effect, type) ? ctx.playhead(type, stages[0].effect) : null;
  if (value === void 0 || value === null) return null;
  if (type === "scroll") {
    const { top, viewportHeight: viewportHeight2 } = ctx.scroll;
    const position = top + viewportHeight2 * value;
    return Math.min(Math.max(position, stages[0].start), getTrackEnd(stages));
  }
  return value;
}
function followsOvershoot(type, stages) {
  if (type === "scroll" && stages[0].effect.mode !== "whileScrolling") return true;
  if (type !== "scroll" && type !== "mousemove") return false;
  return stages[0].start <= 0 && getTrackEnd(stages) >= 1;
}
function updateEventTracks(layer, ctx) {
  var _a, _b, _c;
  const tracksByProp = {};
  const dirty = {};
  const rests = {};
  const inactiveProps = [];
  const breakpointChanged = layer.local.cachedBreakpoint !== ctx.breakpointName;
  layer.local.cachedBreakpoint = ctx.breakpointName;
  for (const type of EVENT_TYPES) {
    const effects = layer.states[type];
    if (!(effects == null ? void 0 : effects.length)) continue;
    const tracks = {};
    for (const effect of effects) {
      if (((_a = effect.breakpoints) == null ? void 0 : _a.length) && !effect.breakpoints.includes(ctx.breakpointName)) {
        inactiveProps.push(effect.prop);
        continue;
      }
      (tracks[_b = getTrackKey(effect)] || (tracks[_b] = [])).push(effect);
    }
    if (type === "scroll" && !ctx.scroll) continue;
    for (const key in tracks) {
      const prop = tracks[key][0].prop;
      if (!(prop in rests)) rests[prop] = ctx.getRest(prop);
      const rest = rests[prop];
      if (rest === void 0 && type !== "appear") continue;
      const stages = tracks[key].map((effect) => getStage(effect, type, ctx, rest)).sort((a, b) => a.start - b.start);
      if (stages.some((stage) => stage.to === void 0 || stage.to === null)) continue;
      const leader = stages[0].effect;
      const override = getPlayheadOverride(type, stages, ctx);
      const released = leader.held && override === null;
      leader.held = override !== null;
      if (leader.held) setStageProgress(stages, override);
      const { playhead, changed } = leader.held ? { playhead: override, changed: true } : PLAYHEADS[type](stages, ctx);
      (tracksByProp[prop] || (tracksByProp[prop] = [])).push({ stages, playhead, extrapolate: followsOvershoot(type, stages) });
      if (changed || released || breakpointChanged && ((_c = layer.local.stateEffectProps) == null ? void 0 : _c[prop]) !== void 0) {
        dirty[prop] = true;
      }
    }
  }
  inactiveProps.forEach((prop) => {
    if (!tracksByProp[prop]) ctx.clear(prop);
  });
  const updates = {};
  for (const prop in dirty) {
    const values = tracksByProp[prop].map(
      (track) => getTrackValue(track.stages, track.playhead, rests[prop], ctx.interpolate, track.extrapolate)
    );
    updates[prop] = composeTrackValues(rests[prop], values);
  }
  return updates;
}
let hidden, visibilityChange;
let eventsBound = false;
let viewportHeight = window.innerHeight || document.documentElement.clientHeight;
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
let virtualScrollTop = null;
let scrollTop = getScrollTop();
let lastScrollPos = 0;
let scrollDelta = 0;
let lastCheckTimeWindow = 0;
let lastViewportMeasurementTime = 0;
let scrollEndTimeout = null;
let rafId;
let debouncedHandleWindowResize;
let scrollActive = false;
let scenePrewarmScheduled = false;
let scenePrewarmQueue = [];
let webGL2Supported = null;
const EPS = 1e-3;
const FRAME_JITTER_TOLERANCE = 2;
const DIMENSION_MODES = ["relative", "fixed", "auto"];
const POSITION_MODES = ["relative", "fixed"];
const DEFAULT_STATE_MOUSE = {
  enterTime: null,
  movePos: { x: 0.5, y: 0.5 }
};
const ANIMATABLE_LIGHT_COLOR_PROPS = ["lightColor", "ambientLightColor", "fillLightColor"];
const TEXT_LAYOUT_PROPS = ["left", "top", "width", "height", "fontSize", "lineHeight", "letterSpacing", "rotation"];
let version = "2.5.3";
function getNativeScrollTop() {
  return window.scrollY || window.pageYOffset || 0;
}
function normalizeScrollTop(value) {
  if (value === null || value === void 0 || value === "") return null;
  if (typeof value === "string" && value.trim() === "") return null;
  const nextValue = Number(value);
  return Number.isFinite(nextValue) ? nextValue : null;
}
function getScrollTop() {
  return virtualScrollTop !== null ? virtualScrollTop : getNativeScrollTop();
}
function syncScrollPosition(nextScrollTop = getScrollTop()) {
  const normalizedScrollTop = normalizeScrollTop(nextScrollTop);
  if (normalizedScrollTop === null) {
    return false;
  }
  scrollTop = normalizedScrollTop;
  scrollDelta = scrollTop - lastScrollPos;
  lastScrollPos = scrollTop;
  return true;
}
if (typeof document.hidden !== "undefined") {
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
function hexToRgb(hex) {
  if (!hex || typeof hex !== "string") {
    return null;
  }
  if (hex.length === 9) {
    hex = hex.substring(0, 7);
  } else if (hex.length === 8 && hex[0] !== "#") {
    hex = "#" + hex.substring(0, 6);
  }
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
}
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function hexToVec3(hex) {
  const rgb = hexToRgb(hex);
  return rgb ? new Vec3(...rgb.map((channel) => channel / 255)) : null;
}
const GRADIENT_EFFECT_TYPES = /* @__PURE__ */ new Set(["gradient", "gradientMap", "gradientFill"]);
function getColorAlpha(hex) {
  if (hex === "transparent") return 0;
  if (typeof hex !== "string") return 1;
  const match = /^#(?:[0-9a-f]{6})([0-9a-f]{2})$/i.exec(hex);
  return match ? parseInt(match[1], 16) / 255 : 1;
}
function ds(s) {
  return window.atob(s);
}
function resolvePositionMode(mode) {
  if (POSITION_MODES.includes(mode)) return mode;
  return POSITION_MODES[mode ?? 0] ?? POSITION_MODES[0];
}
function generateUUID() {
  return "id-" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
function getShapeFill(fill) {
  return fill[0];
}
function getEaseFunction(ease) {
  const easings = {
    linear: (x) => x,
    easeInQuad: (x) => x * x,
    easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
    easeInOutQuad: (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
    easeInCubic: (x) => x * x * x,
    easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
    easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
    easeInQuart: (x) => x ** 4,
    easeOutQuart: (x) => 1 - Math.pow(1 - x, 4),
    easeInOutQuart: (x) => x < 0.5 ? 8 * x ** 4 : 1 - Math.pow(-2 * x + 2, 4) / 2,
    easeInQuint: (x) => x ** 5,
    easeOutQuint: (x) => 1 - Math.pow(1 - x, 5),
    easeInOutQuint: (x) => x < 0.5 ? 16 * x ** 5 : 1 - Math.pow(-2 * x + 2, 5) / 2,
    easeOutElastic: (x) => {
      const c4 = 2 * Math.PI / 3;
      return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInElastic: (x) => {
      const c4 = 2 * Math.PI / 3;
      return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
    },
    easeInOutElastic: (x) => {
      const c5 = 2 * Math.PI / 4.5;
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1;
    },
    easeOutSpringSoft: (x) => {
      if (x === 0 || x === 1) return x;
      return 1 - Math.exp(-5 * x) * Math.cos(x * 3 * Math.PI);
    },
    easeOutSpring: (x) => {
      if (x === 0 || x === 1) return x;
      return 1 - Math.exp(-6 * x) * Math.cos(x * 4.5 * Math.PI);
    },
    easeInSpring: (x) => {
      if (x === 0 || x === 1) return x;
      const t = 1 - x;
      return Math.exp(-6 * t) * Math.cos(t * 4.5 * Math.PI);
    },
    easeInOutSpring: (x) => {
      if (x === 0 || x === 1) return x;
      if (x < 0.5) {
        const t2 = 1 - 2 * x;
        return Math.exp(-6 * t2) * Math.cos(t2 * 4.5 * Math.PI) / 2;
      }
      const t = 2 * x - 1;
      return 1 - Math.exp(-6 * t) * Math.cos(t * 4.5 * Math.PI) / 2;
    },
    easeInSine: (x) => 1 - Math.cos(x * Math.PI / 2),
    easeOutSine: (x) => Math.sin(x * Math.PI / 2),
    easeInOutSine: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
    easeInCirc: (x) => 1 - Math.sqrt(1 - x ** 2),
    easeOutCirc: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
    easeInOutCirc: (x) => x < 0.5 ? (1 - Math.sqrt(1 - (2 * x) ** 2)) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
    easeInExpo: (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
    easeOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
    easeInOutExpo: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
    easeInBack: (x) => {
      const c1 = 1.70158;
      return (c1 + 1) * x * x * x - c1 * x * x;
    },
    easeOutBack: (x) => {
      const c1 = 1.70158;
      return 1 + (c1 + 1) * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    },
    easeInOutBack: (x) => {
      const c2 = 2.5949095;
      return x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    }
  };
  if (typeof ease === "string" && (ease.includes("=>") || ease.includes("function"))) {
    console.warn("Custom easing strings are deprecated. Please re-publish the project to update.", ease);
  } else if (easings[ease]) {
    return easings[ease];
  }
  return easings.easeInOutQuad;
}
function deserializeNestedArray(obj) {
  if (obj && typeof obj === "string") {
    obj = JSON.parse(obj);
  }
  return Object.values(obj);
}
let _isMobile = null;
function isMobile() {
  if (_isMobile === null) {
    _isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  return _isMobile;
}
function gatt(el, attr) {
  return el.getAttribute(attr);
}
const IN_PLACE_BLEND_FACTORS = { NORMAL: "ONE_MINUS_SRC_ALPHA", ADD: "ONE", SCREEN: "ONE_MINUS_SRC_COLOR" };
function getInPlaceBlendFactor(item) {
  return !item.displace && IN_PLACE_BLEND_FACTORS[item.blendMode || "NORMAL"];
}
function isAnimated(item) {
  var _a, _b, _c, _d, _e;
  if (item.isFlattened) {
    const hasTimeUniforms = Array.isArray((_a = item.data) == null ? void 0 : _a.timeUniforms) && item.data.timeUniforms.some((tu) => (tu == null ? void 0 : tu.animating) !== false && Math.abs(Number((tu == null ? void 0 : tu.speed) ?? 0)) > 1e-5);
    const hasVideoSublayers = !!((_b = item.data) == null ? void 0 : _b.hasVideoSublayers);
    const hasAnimatingSublayers = Array.isArray(item.sublayers) && item.sublayers.some((sub) => {
      if (!sub) return false;
      if (sub.type === "video") return true;
      if (sub.layerType !== "effect" && sub.layerType !== "model") return false;
      return !!sub.animating;
    });
    return hasTimeUniforms || hasVideoSublayers || hasAnimatingSublayers;
  }
  const isAnimatedEffect = (item.layerType === "effect" || item.isModel || ((_d = (_c = item.data) == null ? void 0 : _c.uniforms) == null ? void 0 : _d.time)) && (item.animating || item.usesPingPong);
  const isVideo = item.type === "video";
  const hasVideoTextures = Array.isArray((_e = item.data) == null ? void 0 : _e.textures) && item.data.textures.some((texture) => (texture == null ? void 0 : texture.type) === "video" && (texture == null ? void 0 : texture.src));
  return isAnimatedEffect || isVideo || hasVideoTextures;
}
function isDynamic(item) {
  var _a;
  if (item.local.isDynamicCache !== void 0) {
    return item.local.isDynamicCache;
  }
  const hasStateEvents = item.states && (item.states.appear.some((effect) => !effect.complete) || [...item.states.scroll, ...item.states.hover, ...item.states.mousemove].length > 0);
  const trackingProps = ["trackMouse", "axisTilt", "trackMouseMove", "rotationTracking", "lightTracking"];
  const isTrackingMouse = item.isFlattened ? !!((_a = item.data) == null ? void 0 : _a.hasMouseTracking) : trackingProps.some((prop) => item.hasOwnProperty(prop) && item[prop] !== 0);
  const result = hasStateEvents || isTrackingMouse || isAnimated(item);
  item.local.isDynamicCache = result;
  return result;
}
function unpackageLayers(layers, id, initOptions, modules) {
  const optionsWithModules = modules ? { ...initOptions, modules } : initOptions;
  const unpackagedLayers = [];
  layers.forEach((item) => {
    switch (item.layerType) {
      case "text":
        unpackagedLayers.push(new TextBox(item, id, optionsWithModules).unpackage());
        break;
      case "image":
        unpackagedLayers.push(new Img(item, id, optionsWithModules).unpackage());
        break;
      case "model":
        unpackagedLayers.push(new Model(item, id, optionsWithModules).unpackage());
        break;
      case "shape":
        unpackagedLayers.push(new Shape(item, id, optionsWithModules).unpackage());
        break;
      case "effect":
        unpackagedLayers.push(new Effect(item, id, optionsWithModules).unpackage());
        break;
      case "group":
        unpackagedLayers.push(new Group(item, id, optionsWithModules).unpackage());
        break;
      case "flattened": {
        const flatGroup = new FlattenedGroup(item, id, optionsWithModules).unpackage();
        unpackagedLayers.push(flatGroup);
        flatGroup.getChildEffectItems().forEach((effect) => {
          unpackagedLayers.push(effect);
        });
        break;
      }
    }
  });
  return unpackagedLayers;
}
function al(id, element) {
  const lc = document.createElement("a");
  lc.href = "https://unicorn.studio?utm_source=public-url";
  lc.style = "position: absolute; display: flex; bottom: 30px; left: 0; width: 190px; margin: 0 auto; right: 0rem; padding: 10px; border-radius: 6px; background-color: rgba(255, 255, 255, 1); box-shadow: 0 3px 9px 0 rgba(0, 0, 0, .2); z-index: 99999999; box-sizing: border-box;";
  lc.target = "_blank";
  const limg = document.createElement("img");
  limg.src = ds("aHR0cHM6Ly9hc3NldHMudW5pY29ybi5zdHVkaW8vbWVkaWEvbWFkZV9pbl91c19zbWFsbF93ZWIuc3Zn");
  limg.alt = ds("TWFkZSB3aXRoIHVuaWNvcm4uc3R1ZGlv");
  limg.style = "width: 170px; height: auto;";
  lc.appendChild(limg);
  element.appendChild(lc);
}
function addTextToScene(item, element) {
  var _a, _b, _c, _d, _e, _f;
  if (item.noTextAsHtml) return;
  if (!element) return;
  const href = normalizeTextHref(item.href);
  const leftMode = resolvePositionMode(item.leftMode);
  const topMode = resolvePositionMode(item.topMode);
  const widthMode = DIMENSION_MODES.includes(item.widthMode) ? item.widthMode : DIMENSION_MODES[item.widthMode ?? 1];
  let width = widthMode === "fixed" ? item.width : item.width * element.offsetWidth;
  let height = item.height;
  let fontSize = item.fontSizeMode === "fixed" ? item.fontSize : item.fontSize * element.offsetWidth;
  let lineHeight = item.fontSizeMode === "fixed" ? item.lineHeight : item.lineHeight * fontSize;
  let letterSpacing = item.fontSizeMode === "fixed" ? item.letterSpacing : item.letterSpacing * fontSize;
  let top = topMode === "fixed" ? item.top : item.top * element.offsetHeight;
  let left = leftMode === "fixed" ? item.left : item.left * element.offsetWidth;
  let anchorOffsets = getAnchorOffsets(item.anchorPoint);
  left -= anchorOffsets.x * width;
  top -= anchorOffsets.y * height;
  if (getComputedStyle(element).position === "static") {
    top += element.offsetTop;
    left += element.offsetLeft;
  }
  const existingNode = element.querySelector(`[data-us-text="${item.local.id}"]`);
  let text = existingNode;
  const tagName = href ? "a" : "div";
  let shouldAppendText = !text;
  if (text && text.tagName.toLowerCase() !== tagName) {
    text.remove();
    text = null;
    shouldAppendText = true;
  }
  text = text || document.createElement(tagName);
  const fill = Array.isArray(item.fill) ? item.fill : [];
  const cssBlendModeMap = {
    MULTIPLY: "multiply",
    SCREEN: "screen",
    OVERLAY: "overlay",
    DARKEN: "darken",
    LIGHTEN: "lighten",
    COLOR_DODGE: "color-dodge",
    COLOR_BURN: "color-burn",
    HARD_LIGHT: "hard-light",
    SOFT_LIGHT: "soft-light",
    DIFFERENCE: "difference",
    EXCLUSION: "exclusion"
  };
  const blendMode = !item.blendMode || item.blendMode === 0 ? "NORMAL" : String(item.blendMode).toUpperCase();
  const cssBlendMode = cssBlendModeMap[blendMode];
  const opacity = ((_b = (_a = item.local) == null ? void 0 : _a.stateEffectProps) == null ? void 0 : _b.opacity) ?? item.opacity ?? ((_c = item.data) == null ? void 0 : _c.elementOpacity) ?? 1;
  const showHtmlText = item.htmlOnly || ((_d = item.local) == null ? void 0 : _d.gpuTextFallback);
  let htmlTextStyle = "color:transparent;";
  if (showHtmlText) {
    htmlTextStyle = `color:${fill[0] || "#000000"};`;
  }
  const wrappedLines = item.isGpuElement && Array.isArray((_e = item.local) == null ? void 0 : _e.wrappedLines) ? item.local.wrappedLines : null;
  text.setAttribute("data-us-text", item.local.id);
  if (href) {
    text.setAttribute("href", href);
    text.setAttribute("target", "_blank");
    text.setAttribute("rel", "noopener noreferrer");
  } else {
    text.removeAttribute("href");
    text.removeAttribute("target");
    text.removeAttribute("rel");
  }
  text.style.cssText = `width:${width}px;top:${top}px;left:${left}px;font-size:${fontSize}px;line-height:${lineHeight}px;letter-spacing:${letterSpacing}px;font-family:${item.fontFamily};font-style:${((_f = item.fontStyle) == null ? void 0 : _f.includes("italic")) ? "italic" : "normal"};font-weight:${item.fontWeight};text-align:${item.textAlign};position:absolute;word-break:break-word;white-space:${wrappedLines ? "pre" : "pre-wrap"};transform:rotateZ(${Math.round(item.rotation * 360)}deg);opacity:${opacity};z-index:${showHtmlText ? 100 + (item.htmlRenderOrder ?? 0) : 2};display:block;text-decoration:none;pointer-events:${href ? "auto" : "inherit"};cursor:${href ? "pointer" : "inherit"};${cssBlendMode ? `mix-blend-mode:${cssBlendMode};` : ""}${htmlTextStyle}`;
  text.innerText = wrappedLines ? wrappedLines.join("\n") : item.textContent;
  if (shouldAppendText) {
    element.appendChild(text);
  }
}
function normalizeTextHref(href) {
  if (!href || typeof href !== "string") return "";
  const value = href.trim();
  if (!value || /[\u0000-\u001F\u007F]/.test(value)) return "";
  const protocolMatch = value.match(/^([a-z][a-z0-9+.-]*):/i);
  if (protocolMatch) {
    const protocol = protocolMatch[1].toLowerCase();
    return ["http", "https", "mailto", "tel"].includes(protocol) ? value : "";
  }
  if (value.startsWith("/") || value.startsWith("#") || value.startsWith("?") || value.startsWith("./") || value.startsWith("../")) {
    return value;
  }
  if (value.startsWith("//")) {
    return value;
  }
  return "";
}
function addTextFallbacksToScene(layers, element) {
  layers.forEach((item) => {
    var _a;
    if (item.layerType === "text") {
      item.htmlOnly = true;
      addTextToScene(item, element);
    }
    Object.values(((_a = item.local) == null ? void 0 : _a.textInstances) || {}).forEach((textItem) => {
      textItem.htmlOnly = true;
      addTextToScene(textItem, element);
    });
  });
}
function createFallbackScene({ id, element, layers }) {
  return {
    id,
    element,
    layers,
    destroyed: false,
    fallbackOnly: true,
    getMouse() {
      return {
        x: 0.5,
        y: 0.5,
        inBounds: false,
        moved: false
      };
    },
    getDynamicLayers() {
      return [];
    },
    destroy() {
      this.destroyed = true;
      if (this.element) {
        this.element.removeAttribute("data-us-initialized");
        this.element.removeAttribute("data-scene-id");
        this.element.querySelectorAll(`[data-us-text]`).forEach((node) => {
          node.remove();
        });
      }
    }
  };
}
function getBestVideoSource(sourceString) {
  const sources = sourceString.split(",").map((src) => src.trim());
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  if (isSafari || isIOS) {
    const hevcSource = sources.find((src) => src.endsWith(".mov") || src.endsWith(".mp4"));
    if (hevcSource) return hevcSource;
  }
  const webmSource = sources.find((src) => src.endsWith(".webm"));
  if (webmSource) return webmSource;
  return sources[0];
}
function cleanupScenes() {
  const scenesToRemove = scenes.filter((scene) => !document.body.contains(scene.element));
  scenesToRemove.forEach((scene) => {
    scene.destroy();
    const index = scenes.indexOf(scene);
    if (index !== -1) {
      scenes.splice(index, 1);
    }
  });
}
function isCurtainsValid(curtain) {
  return curtain && curtain.renderer && curtain.renderer.nextRender && typeof curtain.renderer.nextRender.execute === "function";
}
function renderScenes() {
  cancelAnimationFrame(rafId);
  let dynamicScenes = scenes.filter((scene) => !scene.destroyed && scene.getDynamicLayers().length > 0);
  scenes.forEach((scene) => {
    if (!dynamicScenes.includes(scene)) scene.rendering = false;
  });
  const animateCurtain = (now) => {
    let needsRaf = false;
    dynamicScenes.forEach((scene) => {
      if (scene.destroyed) {
        return;
      }
      if (scene.isInView && scene.initialized) {
        scene.rendering = true;
        const elapsed = now - (scene.lastTime || 0);
        if ((!scene.lastTime || elapsed >= scene.frameDuration - FRAME_JITTER_TOLERANCE) && !scene.paused) {
          scene.renderFrame(true);
          scene.lastTime = scene.lastTime && elapsed >= scene.frameDuration ? now - elapsed % scene.frameDuration : now;
        }
        needsRaf = true;
      } else {
        scene.rendering = false;
      }
    });
    if (!lastCheckTimeWindow || now - lastCheckTimeWindow > 64) {
      syncScrollPosition();
      lastCheckTimeWindow = now;
      if (scrollDelta > 1e3 || scrollDelta < 0 && !lastScrollPos && !scrollTop) {
        updateViewportMeasurements();
      }
    }
    if (needsRaf) {
      updateMouseMove();
      rafId = requestAnimationFrame(animateCurtain);
    } else {
      cancelAnimationFrame(rafId);
    }
  };
  if (dynamicScenes.length) {
    rafId = requestAnimationFrame(animateCurtain);
  } else {
    cancelAnimationFrame(rafId);
  }
}
function interpolate(start, end, progress) {
  if ((start == null ? void 0 : start.type) === "Vec3" && (end == null ? void 0 : end.type) === "Vec3") {
    return {
      type: "Vec3",
      x: start._x + (end._x - start._x) * progress,
      y: start._y + (end._y - start._y) * progress,
      z: start._z + (end._z - start._z) * progress
    };
  }
  if ((start == null ? void 0 : start.type) === "Vec2" && (end == null ? void 0 : end.type) === "Vec2") {
    return {
      type: "Vec2",
      x: start._x + (end._x - start._x) * progress,
      y: start._y + (end._y - start._y) * progress
    };
  }
  return start + (end - start) * progress;
}
function cloneVector(value, isPos) {
  if (value.type === "Vec2") {
    value = new Vec2(value._x, value._y);
  } else if (value.type === "Vec3") {
    value = new Vec3(value._x, value._y, value._z);
  }
  return value;
}
function updateUniformValues(value, uniform, prop) {
  const isVector = (value == null ? void 0 : value.type) && ((value == null ? void 0 : value.type) === "Vec2" || (value == null ? void 0 : value.type) === "Vec3");
  if (isVector) {
    const x = value.x ?? value._x ?? 0;
    const y = value.y ?? value._y ?? 0;
    const z = value.z ?? value._z ?? 0;
    uniform.value.x = x;
    if (prop === "pos" || prop.endsWith("_pos")) {
      uniform.value.y = 1 - y;
    } else {
      uniform.value.y = y;
    }
    if (value.type === "Vec3") {
      uniform.value.z = z;
    }
  } else {
    uniform.value = value;
  }
}
function cloneRuntimeValue(value) {
  if (value && typeof value.clone === "function") {
    return value.clone();
  }
  if (value && typeof value === "object") {
    return JSON.parse(JSON.stringify(value));
  }
  return value;
}
function assignRuntimeValue(target, prop, value) {
  const current = target[prop];
  if ((current == null ? void 0 : current.type) === "Vec2" && value && typeof value === "object") {
    current.x = value.x ?? value._x ?? current.x;
    current.y = value.y ?? value._y ?? current.y;
    return;
  }
  if ((current == null ? void 0 : current.type) === "Vec3" && value && typeof value === "object") {
    current.x = value.x ?? value._x ?? current.x;
    current.y = value.y ?? value._y ?? current.y;
    current.z = value.z ?? value._z ?? current.z;
    return;
  }
  target[prop] = value;
}
function exposeBreakpointProps(layer) {
  const props = {};
  (layer.breakpoints || []).forEach((breakpoint) => {
    Object.assign(props, breakpoint.props || {});
  });
  Object.keys(props).forEach((prop) => {
    if (!Object.prototype.hasOwnProperty.call(layer, prop)) {
      layer[prop] = cloneRuntimeValue(props[prop]);
    }
  });
}
function syncShapeColorUniforms(layer, plane, prop) {
  var _a, _b, _c, _d;
  if (layer.layerType !== "shape" && layer.layerType !== "text") return false;
  if (prop === "stroke") {
    const color = Array.isArray(layer.stroke) ? layer.stroke[0] : layer.stroke;
    const value = hexToVec3(color);
    if (value && ((_a = plane.uniforms) == null ? void 0 : _a.strokeColor)) {
      updateUniformValues(value, plane.uniforms.strokeColor, "strokeColor");
    }
    return true;
  }
  if (prop !== "fill") return false;
  const fill = Array.isArray(layer.fill) ? layer.fill : [layer.fill || "#777777"];
  const count = Math.min(fill.length, 16);
  if ((_b = plane.uniforms) == null ? void 0 : _b.count) {
    plane.uniforms.count.value = count;
  }
  if ((_c = plane.uniforms) == null ? void 0 : _c.fillAlpha) {
    const alphas = fill.map((color) => getColorAlpha(color));
    plane.uniforms.fillAlpha.value = alphas.length ? Math.max(...alphas) : 1;
  }
  for (let i = 0; i < 16; i++) {
    const uniform = (_d = plane.uniforms) == null ? void 0 : _d[`color${i}`];
    if (!uniform) continue;
    const value = i < count ? hexToVec3(fill[i]) : new Vec3(0);
    if (value) updateUniformValues(value, uniform, `color${i}`);
  }
  return true;
}
function syncGradientFillUniforms(layer, plane, prop) {
  var _a, _b, _c, _d;
  if (prop !== "fill" || !GRADIENT_EFFECT_TYPES.has(layer.type)) return false;
  const fill = Array.isArray(layer.fill) ? layer.fill : [layer.fill || "#777777"];
  const count = Math.min(fill.length, 16);
  const fallbackDivisor = Math.max(count - 1, 1);
  if ((_a = plane.uniforms) == null ? void 0 : _a.count) {
    plane.uniforms.count.value = count;
  }
  for (let i = 0; i < 16; i++) {
    const colorUniform = (_b = plane.uniforms) == null ? void 0 : _b[`color${i}`];
    if (colorUniform && i < count) {
      const color = hexToVec3(fill[i]);
      if (color) updateUniformValues(color, colorUniform, `color${i}`);
    }
    const stopUniform = (_c = plane.uniforms) == null ? void 0 : _c[`stop${i}`];
    if (stopUniform && i < count) {
      stopUniform.value = ((_d = layer.stops) == null ? void 0 : _d[i]) ?? i / fallbackDivisor;
    }
  }
  return true;
}
function parseInitialVariables(value) {
  if (!value) return {};
  if (typeof value === "object") return value;
  try {
    return JSON.parse(value);
  } catch (error) {
    console.warn("Unable to parse data-us-vars JSON.", error);
    return {};
  }
}
const CONTROLS_BUNDLE_URL = "https://assets.unicorn.studio/controls/controls.umd.js";
let controlsBundlePromise = null;
function shouldMountControlsFromUrl() {
  const value = new URLSearchParams(window.location.search).get("controls");
  return value === "1" || value === "true";
}
function getInitialPresetFromUrl() {
  return new URLSearchParams(window.location.search).get("preset") || "";
}
function isControlsEnabled(value) {
  return value === true || value === 1 || value === "1" || value === "true";
}
function getControlsOptions(params = {}) {
  return params.controls && typeof params.controls === "object" ? params.controls : {};
}
function getControlsTitle(scene, params = {}) {
  var _a;
  const controlsOptions = getControlsOptions(params);
  return controlsOptions.title || params.controlsTitle || ((_a = scene == null ? void 0 : scene.editMetadata) == null ? void 0 : _a.sceneName) || (scene == null ? void 0 : scene.name) || "Controls";
}
function shouldMountControls(element, params = {}) {
  if (params.controls === false) return false;
  const controlsOptions = getControlsOptions(params);
  if (Object.prototype.hasOwnProperty.call(controlsOptions, "enabled")) {
    return isControlsEnabled(controlsOptions.enabled);
  }
  const controls = gatt(element, "data-us-controls");
  return isControlsEnabled(params.controls) || shouldMountControlsFromUrl() || controls !== null && controls !== "false";
}
function loadControlsBundle(src) {
  var _a;
  if ((_a = window.UnicornStudioControls) == null ? void 0 : _a.initControls) {
    return Promise.resolve(window.UnicornStudioControls);
  }
  if (controlsBundlePromise) {
    return controlsBundlePromise;
  }
  controlsBundlePromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src || CONTROLS_BUNDLE_URL;
    script.async = true;
    script.onload = () => {
      var _a2;
      if ((_a2 = window.UnicornStudioControls) == null ? void 0 : _a2.initControls) {
        resolve(window.UnicornStudioControls);
      } else {
        reject(new Error("UnicornStudioControls loaded without initControls()."));
      }
    };
    script.onerror = () => reject(new Error(`Unable to load Unicorn Studio controls from ${script.src}.`));
    (document.head || document.body).appendChild(script);
  });
  return controlsBundlePromise;
}
function mountControlsForScene(element, scene, params = {}) {
  if (!shouldMountControls(element, params)) return;
  const controlsOptions = getControlsOptions(params);
  loadControlsBundle(controlsOptions.src || params.controlsSrc || gatt(element, "data-us-controls-src")).then(
    (controls) => controls.initControls({
      ...controlsOptions,
      scene,
      element,
      title: getControlsTitle(scene, params),
      draggable: controlsOptions.draggable ?? params.controlsDraggable ?? true
    })
  ).catch((error) => console.warn(error));
}
function syncTextureUnits(plane) {
  var _a;
  (_a = plane.textures) == null ? void 0 : _a.forEach((texture, index) => {
    var _a2;
    texture.index = index;
    if ((_a2 = plane._program) == null ? void 0 : _a2.compiled) {
      texture._setTextureUniforms();
    }
  });
}
function createTex(plane, sampler, from) {
  var _a, _b;
  if (from && ((_a = plane == null ? void 0 : plane.target) == null ? void 0 : _a.getTexture) && from === plane.target.getTexture()) {
    from = null;
  }
  const existing = (_b = plane.textures) == null ? void 0 : _b.find((texture) => texture._samplerName === sampler);
  if (existing) {
    if (from && existing._copiedFrom !== from) {
      existing.copy(from);
      return existing;
    }
    if (!from && existing._copiedFrom) {
      existing.remove();
      plane.textures = plane.textures.filter((texture2) => texture2 !== existing);
      const texture = plane.createTexture({
        sampler,
        premultiplyAlpha: true
      });
      syncTextureUnits(plane);
      return texture;
    }
    return existing;
  }
  return plane.createTexture({
    sampler,
    premultiplyAlpha: true,
    fromTexture: from
  });
}
function cloneResponsiveProps(responsiveProps) {
  if (!responsiveProps || typeof responsiveProps !== "object") return {};
  return JSON.parse(JSON.stringify(responsiveProps));
}
class StateEffectAppear {
  constructor({ prop, value, endValue, transition, breakpoints, uniformData, loop = "none", loopDelay = 0, responsiveProps }) {
    __publicField(this, "id", generateUUID());
    this.prop = prop;
    this.transition = transition;
    this.complete = false;
    this.progress = 0;
    this.uniformData = uniformData;
    this.value = cloneVector(value);
    this.endValue = endValue !== void 0 ? cloneVector(endValue || 0) : null;
    this.responsiveProps = cloneResponsiveProps(responsiveProps);
    this.startTime = null;
    this.breakpoints = breakpoints || [];
    this.loop = loop;
    this.loopDelay = loopDelay;
    this.easeFunction = getEaseFunction(this.transition.ease);
  }
  resetState() {
    this.progress = 0;
    this.complete = false;
  }
}
class StateEffectScroll {
  constructor({
    prop,
    value,
    startValue,
    range,
    offset,
    transition,
    momentum,
    spring,
    uniformData,
    mode = "scrollIntoView",
    delta = 0.01,
    absScrollValue = true,
    breakpoints = [],
    responsiveProps
  }) {
    __publicField(this, "id", generateUUID());
    this.prop = prop;
    this.progress = 0;
    this.momentum = momentum;
    this.spring = spring ?? 0;
    this._velocity = 0;
    this.range = range;
    this.offset = offset;
    this.transition = transition;
    this.mode = mode;
    this.delta = delta;
    this.absScrollValue = absScrollValue;
    this.uniformData = uniformData;
    this.value = cloneVector(value);
    this.startValue = startValue !== void 0 ? cloneVector(startValue) : void 0;
    this.responsiveProps = cloneResponsiveProps(responsiveProps);
    this.lastTick = void 0;
    this.breakpoints = breakpoints || [];
    if (transition) this.easeFunction = getEaseFunction(transition.ease);
  }
  resetState() {
    this.lastTick = void 0;
  }
}
class StateEffectHover {
  constructor({ prop, value, startValue, transition, breakpoints, uniformData, triggerOnElement, responsiveProps }) {
    __publicField(this, "id", generateUUID());
    this.prop = prop;
    this.transition = transition;
    this.progress = 0;
    this.value = cloneVector(value);
    this.startValue = startValue !== void 0 ? cloneVector(startValue) : void 0;
    this.responsiveProps = cloneResponsiveProps(responsiveProps);
    this.uniformData = uniformData;
    this.triggerOnElement = triggerOnElement !== void 0 ? triggerOnElement : 1;
    this.breakpoints = breakpoints || [];
    this.easeFunction = getEaseFunction(this.transition.ease);
  }
  resetState() {
    this.progress = 0;
    this.playhead = 0;
    this.lastTick = void 0;
  }
}
class StateEffectMousemove {
  constructor({
    prop,
    value,
    startValue,
    transition,
    sensitivity,
    momentum,
    spring,
    delay,
    mode,
    axisMode,
    point,
    breakpoints,
    uniformData,
    responsiveProps
  }) {
    __publicField(this, "id", generateUUID());
    this.prop = prop;
    this.progress = 0;
    this.sensitivity = sensitivity ?? 0.5;
    this.momentum = momentum ?? 0.25;
    this.spring = spring ?? 0;
    this._velocity = 0;
    this.delay = delay ?? 0;
    this.mode = mode ?? "velocity";
    this.axisMode = axisMode ?? "both";
    this.point = point ?? { x: 0.5, y: 0.5 };
    this.transition = transition;
    if (transition) this.easeFunction = getEaseFunction(transition.ease);
    this.value = cloneVector(value);
    this.startValue = startValue !== void 0 ? cloneVector(startValue) : void 0;
    this.responsiveProps = cloneResponsiveProps(responsiveProps);
    this.uniformData = uniformData;
    this.lastMousePos = null;
    this.lastMoveTime = null;
    this.breakpoints = breakpoints || [];
  }
  resetState() {
    this.progress = 0;
    this.playhead = 0;
    this._velocity = 0;
    this.lastMousePos = null;
    this.lastMoveTime = null;
  }
}
function unpackBreakpoints(bps) {
  bps.forEach((breakpoint) => {
    var _a, _b;
    for (let prop in breakpoint.props) {
      if (((_a = breakpoint.props[prop]) == null ? void 0 : _a.type) === "Vec2") {
        breakpoint.props[prop] = new Vec2(breakpoint.props[prop]._x, breakpoint.props[prop]._y);
      } else if (((_b = breakpoint.props[prop]) == null ? void 0 : _b.type) === "Vec3") {
        breakpoint.props[prop] = new Vec3(
          breakpoint.props[prop]._x,
          breakpoint.props[prop]._y,
          breakpoint.props[prop]._z
        );
      } else if (typeof breakpoint.props[prop] === "object") {
        breakpoint.props[prop] = deserializeNestedArray(breakpoint.props[prop]);
      }
    }
  });
  return bps;
}
class Layer {
  constructor(args, sceneId, initOptions) {
    __publicField(this, "local", { id: "", projectId: "", lastMousePos: { x: 0.5, y: 0.5 }, createdAt: null });
    this.initOptions = initOptions;
    this.aspectRatio = args.aspectRatio || 1;
    this.layerName = args.layerName || args.publicId || args.id;
    this.data = args.data || {};
    this.userDownsample = args.userDownsample || 1;
    this.visible = args.visible !== false;
    this.groupLayer = args.groupLayer || false;
    this.breakpoints = unpackBreakpoints(args.breakpoints || []);
    this.local.sceneId = sceneId;
    this.id = args.id || generateUUID();
    this.publicId = args.publicId || this.id;
    this.hasPublishedPublicId = Object.prototype.hasOwnProperty.call(args, "publicId");
    this.local.id = this.id;
    this.editorLayerId = args.editorLayerId;
    this.compiledFragmentShaders = args.compiledFragmentShaders || [];
    this.compiledVertexShaders = args.compiledVertexShaders || [];
    this.states = {
      appear: args.states && args.states.appear ? args.states.appear.map((n) => new StateEffectAppear(n)) : [],
      scroll: args.states && args.states.scroll ? args.states.scroll.map((n) => new StateEffectScroll(n)) : [],
      hover: args.states && args.states.hover ? args.states.hover.map((n) => new StateEffectHover(n)) : [],
      mousemove: args.states && args.states.mousemove ? args.states.mousemove.map((n) => new StateEffectMousemove(n)) : []
    };
    exposeBreakpointProps(this);
  }
  state() {
    return scenes.find((n) => n.id === this.local.sceneId) || this.initOptions;
  }
  getIndex() {
    return this.state().layers.map((n) => n.local.id).indexOf(this.local.id);
  }
  getPixelRatio() {
    const scene = this.state();
    return scene.dpi * scene.scale * this.userDownsample;
  }
  getPlane() {
    var _a, _b, _c;
    return (_c = (_b = (_a = this.state()) == null ? void 0 : _a.curtain) == null ? void 0 : _b.planes) == null ? void 0 : _c.find((n) => n.type !== "PingPongPlane" && n.userData.id === this.local.id);
  }
  getPlanes() {
    var _a, _b, _c;
    return ((_c = (_b = (_a = this.state()) == null ? void 0 : _a.curtain) == null ? void 0 : _b.planes) == null ? void 0 : _c.filter((n) => n.type !== "PingPongPlane" && n.userData.id === this.local.id)) || [];
  }
  getMaskedItem() {
    if (this.mask) {
      return this.state().layers.filter((n) => !n.parentLayer && !n.groupLayer)[this.getIndex() - 1];
    } else {
      return false;
    }
  }
  getChildEffectItems() {
    if (this.effects && this.effects.length) {
      const state = this.state();
      if (!state || !state.layers) {
        return [];
      }
      const childEffects = state.layers.filter((n) => this.effects.includes(n.parentLayer));
      const orderedChildEffects = this.effects.map((effectId) => childEffects.find((n) => n.parentLayer === effectId)).filter((effect) => effect !== void 0);
      return orderedChildEffects;
    } else {
      return [];
    }
  }
  getGroup() {
    var _a, _b;
    if (!this.groupLayer) return null;
    return ((_b = (_a = this.state()) == null ? void 0 : _a.layers) == null ? void 0 : _b.find((item) => {
      var _a2;
      return item.isGroup && ((_a2 = item.members) == null ? void 0 : _a2.includes(this.groupLayer));
    })) || null;
  }
  setVisible(visible = !this.visible) {
    var _a, _b;
    const nextVisible = visible !== false;
    if (this.visible === nextVisible) return this;
    this.visible = nextVisible;
    this.invalidatePerformanceCaches();
    (_b = (_a = this.state()) == null ? void 0 : _a.applyLayerVisibility) == null ? void 0 : _b.call(_a);
    return this;
  }
  show() {
    return this.setVisible(true);
  }
  hide() {
    return this.setVisible(false);
  }
  setAnimating(animating = !this.animating) {
    var _a, _b, _c, _d;
    const nextAnimating = animating !== false;
    if (this.animating === nextAnimating) return this;
    (_b = (_a = this.state()) == null ? void 0 : _a.requestLayerRender) == null ? void 0 : _b.call(_a, this);
    this.animating = nextAnimating;
    this.invalidatePerformanceCaches();
    (_d = (_c = this.state()) == null ? void 0 : _c.updateInPlacePlanes) == null ? void 0 : _d.call(_c);
    renderScenes();
    return this;
  }
  play() {
    return this.setAnimating(true);
  }
  pause() {
    return this.setAnimating(false);
  }
  setProp(prop, value, options = {}) {
    if (options.runtimeOverride) {
      return this.setRuntimeOverride(prop, value, options);
    }
    return this.applyRuntimeProp(prop, value);
  }
  hasRuntimePropTarget(prop) {
    var _a, _b;
    if (this.local.stateEffectProps && Object.prototype.hasOwnProperty.call(this.local.stateEffectProps, prop)) {
      return true;
    }
    if ((_b = (_a = this.data) == null ? void 0 : _a.uniforms) == null ? void 0 : _b[prop]) {
      return true;
    }
    if (this.getPlanes().some((plane) => {
      var _a2;
      return (_a2 = plane.uniforms) == null ? void 0 : _a2[prop];
    })) {
      return true;
    }
    return !!(this.isText && Object.prototype.hasOwnProperty.call(this, prop));
  }
  warnMissingRuntimeProp(prop, value) {
    var _a, _b;
    const scene = (_a = this.state) == null ? void 0 : _a.call(this);
    const repairUrl = (_b = scene == null ? void 0 : scene.getCreateVariableUrl) == null ? void 0 : _b.call(scene, {
      layer: this,
      target: prop,
      defaultValue: value,
      kind: "prop"
    });
    console.warn(
      `No corresponding variable or live uniform for property "${prop}" on layer "${this.id || this.layerName || this.name}".` + (repairUrl ? ` Create a variable here: ${repairUrl}` : "")
    );
  }
  setRuntimeOverride(prop, value, options = {}) {
    if (options.source === "scene.setProp" && !this.hasRuntimePropTarget(prop)) {
      this.warnMissingRuntimeProp(prop, value);
    }
    setPropertySource(this, prop, "runtime", value, {
      cloneValue: cloneRuntimeValue
    });
    return this.applyRuntimeProp(prop, value);
  }
  clearRuntimeOverride(prop) {
    if (!this.local.runtimeOverrides || !Object.prototype.hasOwnProperty.call(this.local.runtimeOverrides, prop)) {
      return this;
    }
    const baseValue = clearPropertySource(this, prop, "runtime");
    if (baseValue !== void 0) {
      this.applyRuntimeProp(prop, baseValue);
    }
    return this;
  }
  setPropertySource(prop, source, value) {
    if (source === "runtime") {
      return this.setRuntimeOverride(prop, value);
    }
    if (source === "event") {
      this.updateStateEffectProperty(prop, value);
      return this;
    }
    setPropertySource(this, prop, source, value, { cloneValue: cloneRuntimeValue });
    return this;
  }
  clearPropertySource(prop, source, options = {}) {
    if (source === "runtime") {
      return this.clearRuntimeOverride(prop);
    }
    if (source === "event") {
      clearPropertySource(this, prop, "event");
      return this;
    }
    clearPropertySource(this, prop, source, options);
    return this;
  }
  applyRuntimeOverrides() {
    Object.entries(this.local.runtimeOverrides || {}).forEach(([prop, value]) => {
      this.applyRuntimeProp(prop, value);
    });
  }
  applyRuntimeProp(prop, value) {
    if (prop === "visible") return this.setVisible(value);
    if (prop === "animating") return this.setAnimating(value);
    assignRuntimeValue(this, prop, cloneRuntimeValue(value));
    this.syncRuntimeProp(prop);
    return this;
  }
  syncRuntimeProp(prop) {
    var _a, _b, _c, _d;
    const state = this.state();
    if (this.local.stateEffectProps && Object.prototype.hasOwnProperty.call(this.local.stateEffectProps, prop)) {
      (_a = state == null ? void 0 : state.requestLayerRender) == null ? void 0 : _a.call(state, this);
      return;
    }
    this.getPlanes().forEach((plane) => {
      var _a2;
      syncShapeColorUniforms(this, plane, prop);
      syncGradientFillUniforms(this, plane, prop);
      if ((_a2 = plane.uniforms) == null ? void 0 : _a2[prop]) {
        updateUniformValues(this[prop], plane.uniforms[prop], prop);
      }
    });
    if (this.isText && typeof this.render === "function") {
      this.render();
      (_c = (_b = this.preloadedCanvasTexture) == null ? void 0 : _b.needUpdate) == null ? void 0 : _c.call(_b);
      addTextToScene(this, state == null ? void 0 : state.element);
    }
    (_d = state == null ? void 0 : state.requestLayerRender) == null ? void 0 : _d.call(state, this);
  }
  setSource(source, options = {}) {
    var _a, _b, _c;
    const src = source && typeof source === "object" ? source.src : source;
    if (!src) return this;
    this.setRuntimeOverride("src", src);
    const state = this.state();
    if (!state) return this;
    this.local.sourceTexture = null;
    this.local.sourceTextureLoading = false;
    if (this.layerType === "image") {
      const plane = (_a = this.getPlane) == null ? void 0 : _a.call(this);
      state.preloadImage(src, "uSourceImage", (texture) => {
        var _a2, _b2, _c2;
        if (!texture) return;
        this.local.sourceTexture = texture;
        this.local.imageReady = true;
        const existing = (_a2 = plane == null ? void 0 : plane.textures) == null ? void 0 : _a2.find((item) => item._samplerName === "uSourceImage");
        if (existing == null ? void 0 : existing.copy) {
          existing.copy(texture);
          (_b2 = existing.needUpdate) == null ? void 0 : _b2.call(existing);
        } else if (plane) {
          plane.addTexture(texture);
        }
        (_c2 = options.onLoad) == null ? void 0 : _c2.call(options, { layer: this, target: "uSourceImage", value: src, texture, plane, src });
        state.requestSceneRender();
      });
    } else if (this.type === "video") {
      const plane = (_b = this.getPlane) == null ? void 0 : _b.call(this);
      if (plane) {
        plane.videos = [];
        plane.textures = plane.textures.filter((texture) => texture.sourceType !== "video");
        const videoSrc = ((_c = src.includes) == null ? void 0 : _c.call(src, ", ")) ? getBestVideoSource(src) : src;
        plane.loadVideo(videoSrc, { sampler: "uVideoTexture", premultipliedAlpha: false }, () => state.requestSceneRender());
      }
    }
    return this;
  }
  setTexture(target, value, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    const knownSamplers = new Set([
      (_a = this.texture) == null ? void 0 : _a.sampler,
      (_c = (_b = this.data) == null ? void 0 : _b.texture) == null ? void 0 : _c.sampler,
      ...(((_d = this.data) == null ? void 0 : _d.textures) || []).map((texture) => texture == null ? void 0 : texture.sampler),
      ...this.getPlanes().flatMap((plane2) => (plane2.textures || []).map((texture) => texture._samplerName))
    ].filter(Boolean));
    if (!knownSamplers.has(target)) {
      console.warn(`Unable to set texture. Sampler "${target}" was not found on layer "${this.id}".`);
      return this;
    }
    const nextTexture = typeof value === "string" ? { src: value, sampler: target } : { ...value || {}, sampler: target };
    const prop = Object.keys(this).find((key) => {
      var _a2;
      return ((_a2 = this[key]) == null ? void 0 : _a2.sampler) === target;
    }) || "texture";
    this.setRuntimeOverride(prop, nextTexture);
    const src = nextTexture.src;
    const plane = this.getPlanes().find((item) => {
      var _a2;
      return (_a2 = item.textures) == null ? void 0 : _a2.some((t) => t._samplerName === target);
    }) || ((_e = this.getPlane) == null ? void 0 : _e.call(this));
    const state = this.state();
    if (!src || !plane || !(state == null ? void 0 : state.preloadImage)) return this;
    const current = plane.textures.find((item) => item._samplerName === target);
    if (current && (nextTexture.type === "video" || current.sourceType === "video")) {
      (_g = (_f = current.source) == null ? void 0 : _f.pause) == null ? void 0 : _g.call(_f);
      plane.videos = (plane.videos || []).filter((video) => video !== current.source);
      plane.textures = plane.textures.filter((item) => item !== current);
    }
    if (nextTexture.type === "video") {
      plane.loadVideo(state.preloadVideo(src), { sampler: target, premultipliedAlpha: true }, (videoTexture) => {
        var _a2;
        const video = videoTexture == null ? void 0 : videoTexture.source;
        if (video) {
          video.loop = nextTexture.loop ?? true;
          video.playbackRate = nextTexture.playbackRate || 1;
          state.playVideoTexture(plane, videoTexture, video);
        }
        (_a2 = options.onLoad) == null ? void 0 : _a2.call(options, { layer: this, target, value: nextTexture, texture: videoTexture, plane, src });
        state.requestSceneRender();
      });
      return this;
    }
    state.preloadImage(
      src,
      target,
      (texture) => {
        var _a2, _b2;
        if (!texture) return;
        const existing = plane.textures.find((item) => item._samplerName === target);
        if (existing == null ? void 0 : existing.copy) {
          existing.copy(texture);
          (_a2 = existing.needUpdate) == null ? void 0 : _a2.call(existing);
        } else {
          plane.addTexture(texture);
        }
        (_b2 = options.onLoad) == null ? void 0 : _b2.call(options, { layer: this, target, value: nextTexture, texture, plane, src });
        state.requestSceneRender();
      },
      false
    );
    return this;
  }
  setBreakpointValues(vWidth = null) {
    var _a, _b;
    const scene = (_a = this.state) == null ? void 0 : _a.call(this);
    const sceneWidth = ((_b = scene == null ? void 0 : scene.getBreakpointWidth) == null ? void 0 : _b.call(scene)) || (scene == null ? void 0 : scene.breakpointWidth);
    const ww = vWidth || sceneWidth || viewportWidth;
    const sortedbps = [...this.breakpoints].sort((a, b) => b.min - a.min);
    if (sortedbps.length === 1 && sortedbps[0].name === "Desktop") {
      return;
    }
    if (sortedbps.length >= 1 && !sortedbps.find((n) => n.name === "Desktop")) {
      throw new Error("Malfored breakpoint data, missing Desktop");
    }
    const applyBreakpointProps = (props2) => {
      for (let prop in props2) {
        if (Object.prototype.hasOwnProperty.call(this, prop)) {
          let value = props2[prop];
          if (value == null ? void 0 : value.type) {
            this[prop].x = value._x;
            this[prop].y = value._y;
            if (value._z !== void 0) {
              this[prop].z = value._z;
            }
          } else {
            this[prop] = value;
          }
        }
      }
    };
    const baseProps = resolveBreakpointProps(this, { breakpointName: "Desktop" });
    applyBreakpointProps(baseProps);
    const props = resolveBreakpointProps(this, { width: ww });
    applyBreakpointProps(props);
    this.local.bpProps = props;
    Object.keys(this.local.runtimeOverrides || {}).forEach((prop) => {
      this.local.runtimeOverrideBaseValues = this.local.runtimeOverrideBaseValues || {};
      this.local.runtimeOverrideBaseValues[prop] = cloneRuntimeValue(this[prop]);
    });
    this.applyRuntimeOverrides();
  }
  updateStateEffects() {
    var _a, _b, _c, _d, _e, _f, _g;
    const appearing = this.states.appear.some((effect) => !effect.complete);
    if (!appearing && !((_a = this.states) == null ? void 0 : _a.scroll.length) && !((_b = this.states) == null ? void 0 : _b.hover.length) && !((_c = this.states) == null ? void 0 : _c.mousemove.length) || this.isModel && !this.local.modelLoaded)
      return;
    const state = this.state() || {};
    const stateMouse = state.mouse || DEFAULT_STATE_MOUSE;
    const now = performance.now();
    if (state.isInView && this.local.createdAt === null) {
      this.local.createdAt = now;
    }
    const parent = (_d = this.getParent) == null ? void 0 : _d.call(this);
    const updates = updateEventTracks(this, {
      now,
      breakpointName: (_e = state.currentBreakpoint) == null ? void 0 : _e.name,
      interpolate,
      getEase: (effect) => effect.easeFunction,
      getRest: (prop) => this.getEventValue ? this.getEventValue(prop, this[prop]) : this[prop],
      clear: (prop) => clearPropertySource(this, prop, "event"),
      appearTime: (effect) => state.isInView ? now - (effect.startTime || this.local.createdAt) - Math.abs(state.pauseTime || 0) : null,
      isHovered: (effect) => {
        if (effect.triggerOnElement && (this.isElement || this.isModel || this.isFlattened || parent)) {
          return !!(parent || this).isHovered(effect.prop);
        }
        return stateMouse.enterTime !== null && stateMouse.enterTime !== void 0;
      },
      scroll: state.bbox ? {
        top: state.isFixed ? state.fixedTop || 0 : state.bbox.top + scrollTop,
        height: state.bbox.height / 2,
        scrollTop,
        viewportHeight,
        delta: scrollDelta
      } : null,
      mouse: {
        pos: stateMouse.movePos,
        width: (state.canvasWidth || 0) * 0.5,
        height: (state.canvasHeight || 0) * 0.5
      }
    });
    if (appearing && !this.states.appear.some((effect) => !effect.complete)) {
      this.invalidatePerformanceCaches();
      (_f = state.updateInPlacePlanes) == null ? void 0 : _f.call(state);
      (_g = state.requestLayerRender) == null ? void 0 : _g.call(state, this);
    }
    const updatedProps = Object.keys(updates);
    if (!updatedProps.length) return;
    for (const prop of updatedProps) {
      const value = updates[prop];
      if (value === void 0) continue;
      this.getPlanes().forEach((plane) => {
        if (plane.uniforms[prop]) {
          updateUniformValues(value, plane.uniforms[prop], prop);
        }
      });
      this.updateStateEffectProperty(prop, this.fromEventValue ? this.fromEventValue(prop, value) : value);
    }
    if (this.isText && TEXT_LAYOUT_PROPS.some((prop) => prop in updates) && this.local.stateEffectProps && Object.keys(this.local.stateEffectProps).length) {
      this.render();
    }
    return true;
  }
  updateStateEffectProperty(prop, value) {
    setPropertySource(this, prop, "event", value, {
      cloneValue: cloneRuntimeValue
    });
  }
  invalidatePerformanceCaches() {
    this.local.isDynamicCache = void 0;
    this.local.cachedBreakpoint = void 0;
    this.local.lastCalculatedMousePos = void 0;
    this.local.lastCalculatedMouseValues = void 0;
  }
  dispose() {
    this.invalidatePerformanceCaches();
  }
}
function getAnchorOffsets(anchorPoint) {
  const offsets = {
    topLeft: { x: 0, y: 0 },
    topCenter: { x: 0.5, y: 0 },
    topRight: { x: 1, y: 0 },
    rightCenter: { x: 1, y: 0.5 },
    bottomRight: { x: 1, y: 1 },
    bottomCenter: { x: 0.5, y: 1 },
    bottomLeft: { x: 0, y: 1 },
    leftCenter: { x: 0, y: 0.5 },
    center: { x: 0.5, y: 0.5 }
  };
  if (offsets[anchorPoint]) {
    return offsets[anchorPoint];
  } else {
    return Object.values(offsets)[anchorPoint];
  }
}
function hitTestRect(posX, posY, width, height, anchorPoint, mousePos) {
  const anchor = getAnchorOffsets(anchorPoint ?? "center");
  if (width < 0) width = Math.abs(width);
  if (height < 0) {
    posY += height;
    height = Math.abs(height);
  }
  const left = posX - anchor.x * width;
  const top = posY - anchor.y * height;
  return mousePos.x * 2 >= left && mousePos.x * 2 <= left + width && mousePos.y * 2 >= top && mousePos.y * 2 <= top + height;
}
function hitTestElementBounds(elem, canvasWidth, canvasHeight, mousePos) {
  const left = elem.left ?? 0.5;
  const top = elem.top ?? 0.5;
  const leftMode = resolvePositionMode(elem.leftMode);
  const topMode = resolvePositionMode(elem.topMode);
  const absX = leftMode === "fixed" ? left : left * canvasWidth;
  const absY = topMode === "fixed" ? top : top * canvasHeight;
  const wMode = DIMENSION_MODES.includes(elem.widthMode) ? elem.widthMode : DIMENSION_MODES[elem.widthMode ?? 1];
  const hMode = DIMENSION_MODES.includes(elem.heightMode) ? elem.heightMode : DIMENSION_MODES[elem.heightMode ?? 1];
  const ar = elem.aspectRatio || (elem.imageNaturalSize ? elem.imageNaturalSize._x / elem.imageNaturalSize._y : 1);
  let absW, absH;
  if (wMode === "auto" && hMode === "auto") {
    absW = elem.width ?? 0;
    absH = elem.height ?? 0;
  } else {
    if (wMode !== "auto") {
      absW = wMode === "fixed" ? elem.width ?? 0 : (elem.width ?? 0) * canvasWidth;
    }
    if (hMode === "auto") {
      absH = absW / (ar || 1);
    } else {
      absH = hMode === "fixed" ? elem.height ?? 0 : (elem.height ?? 0) * canvasHeight;
    }
    if (wMode === "auto") {
      absW = absH * (ar || 1);
    }
  }
  return hitTestRect(absX, absY, absW, absH, elem.anchorPoint, mousePos);
}
function normalizeElementMaskProps(item, args = {}) {
  const parsedMaskDepth = Number(args.maskDepth ?? item.maskDepth ?? 0);
  const rawMaskDepth = Number.isFinite(parsedMaskDepth) ? parsedMaskDepth : 0;
  const parsedMaskDepthLayer = Number(args.maskDepthLayer ?? item.maskDepthLayer ?? 1);
  const normalizedMaskDepthLayer = Number.isFinite(parsedMaskDepthLayer) ? Math.max(0, Math.floor(parsedMaskDepthLayer)) : 1;
  item.maskInvert = Object.prototype.hasOwnProperty.call(args, "maskInvert") ? args.maskInvert : item.maskInvert ?? 0;
  item.maskDepth = rawMaskDepth === 1 ? 1 : 0;
  item.maskDepthLayer = rawMaskDepth === 1 ? normalizedMaskDepthLayer : 0;
}
class Element extends Layer {
  constructor(args, id) {
    super(args, id);
    __publicField(this, "isElement", true);
    __publicField(this, "isGpuElement", false);
    this.width = args.width || 0;
    this.height = args.height || 0;
    this.widthMode = args.widthMode ?? "fixed";
    this.heightMode = args.heightMode ?? "fixed";
    this.anchorPoint = args.anchorPoint ?? "center";
    this.left = args.left || 0;
    this.top = args.top || 0;
    this.leftMode = args.leftMode ?? "relative";
    this.topMode = args.topMode ?? "relative";
    this.effects = args.effects || [];
    this.trackMouse = args.trackMouse || 0;
    this.trackAxes = args.trackAxes || "xy";
    this.axisTilt = args.axisTilt || 0;
    this.mouseMomentum = args.mouseMomentum || 0;
    this.groupLayer = args.groupLayer || false;
    this.mask = args.mask || 0;
    this.maskAlpha = args.maskAlpha || 0;
    this.maskBackground = args.maskBackground || new Vec3(0);
    normalizeElementMaskProps(this, args);
  }
  unpackage() {
    this.effects = deserializeNestedArray(this.effects);
    for (let prop in this) {
      if (this[prop] && this[prop].type) {
        if (this[prop].type === "Vec2") {
          this[prop] = new Vec2(this[prop]._x, this[prop]._y);
        } else if (this[prop].type === "Vec3") {
          this[prop] = new Vec3(this[prop]._x, this[prop]._y, this[prop]._z);
        }
      }
    }
    return this;
  }
  dispose() {
    if (this.local.canvas) {
      this.local.canvas.width = 1;
      this.local.canvas.height = 1;
      this.local.canvas = null;
    }
    if (this.local.ctx) {
      this.local.ctx = null;
    }
    super.dispose();
  }
  box() {
    const anchorOffsets = getAnchorOffsets(this.anchorPoint);
    const { width, height } = this.getAbsoluteDimensions();
    const { left, top } = this.getAbsolutePosition();
    const offsetX = width * (0.5 - anchorOffsets.x);
    const offsetY = height * (0.5 - anchorOffsets.y);
    return {
      anchor: {
        x: left + offsetX,
        y: top + offsetY
      },
      center: {
        x: left + width / 2,
        y: top + height / 2
      },
      left,
      top,
      width,
      height
    };
  }
  getAbsolutePosition() {
    var _a, _b, _c, _d;
    const state = this.state();
    const canvasWidth = state.canvasWidth;
    const canvasHeight = state.canvasHeight;
    let left = ((_b = (_a = this.local) == null ? void 0 : _a.stateEffectProps) == null ? void 0 : _b.left) ?? this.left;
    let top = ((_d = (_c = this.local) == null ? void 0 : _c.stateEffectProps) == null ? void 0 : _d.top) ?? this.top;
    const leftMode = resolvePositionMode(this.leftMode);
    const topMode = resolvePositionMode(this.topMode);
    let absoluteX = leftMode === "fixed" ? left : left * canvasWidth;
    let absoluteY = topMode === "fixed" ? top : top * canvasHeight;
    absoluteX = +absoluteX.toFixed(1);
    absoluteY = +absoluteY.toFixed(1);
    return { left: absoluteX, top: absoluteY };
  }
  getAbsoluteDimensions() {
    var _a, _b, _c, _d;
    const scene = this.state();
    let absoluteWidth, absoluteHeight;
    const canvasWidth = scene.canvasWidth;
    const canvasHeight = scene.canvasHeight;
    let width = ((_b = (_a = this.local) == null ? void 0 : _a.stateEffectProps) == null ? void 0 : _b.width) ?? this.width;
    let height = ((_d = (_c = this.local) == null ? void 0 : _c.stateEffectProps) == null ? void 0 : _d.height) ?? this.height;
    let widthMode = DIMENSION_MODES.includes(this.widthMode) ? this.widthMode : DIMENSION_MODES[this.widthMode];
    let heightMode = DIMENSION_MODES.includes(this.heightMode) ? this.heightMode : DIMENSION_MODES[this.heightMode];
    if (widthMode !== "auto") {
      absoluteWidth = widthMode === "fixed" ? width : width * canvasWidth;
      if (heightMode === "auto") {
        absoluteHeight = absoluteWidth / (this.aspectRatio || 1);
        this.height = widthMode === "fixed" ? absoluteHeight : absoluteHeight / canvasHeight;
      }
    }
    if (heightMode !== "auto") {
      absoluteHeight = heightMode === "fixed" ? height : height * canvasHeight;
      if (widthMode === "auto") {
        absoluteWidth = absoluteHeight * (this.aspectRatio || 1);
        this.width = heightMode === "fixed" ? absoluteWidth : absoluteWidth / canvasWidth;
      }
    }
    if (this.layerType === "text") {
      absoluteHeight = this.height;
    }
    return { width: absoluteWidth, height: absoluteHeight };
  }
  isHovered() {
    const scene = this.state();
    return hitTestElementBounds(this, scene.canvasWidth, scene.canvasHeight, scene.mouse.movePos);
  }
}
class Shape extends Element {
  constructor(args, id, initOptions) {
    super(args, id);
    __publicField(this, "layerType", "shape");
    __publicField(this, "isElement", true);
    __publicField(this, "isGpuElement", true);
    this.initOptions = initOptions;
    for (let prop in args) {
      if (!(prop in this)) {
        this[prop] = args[prop];
      }
    }
    normalizeElementMaskProps(this, args);
    if (this.breakpoints.length) {
      this.setBreakpointValues();
    }
  }
}
class Effect extends Layer {
  constructor(args, id, initOptions) {
    super(args, id);
    __publicField(this, "layerType", "effect");
    this.initOptions = initOptions;
    this.type = args.type || "sine";
    this.usesPingPong = args.usesPingPong || false;
    this.speed = args.speed ?? 0.5;
    this.parentLayer = args.parentLayer || false;
    this.animating = args.animating || false;
    this.isMask = args.isMask || 0;
    this.texture = args.texture || null;
    this.mouseMomentum = args.mouseMomentum || 0;
    for (let prop in args) {
      if (!this[prop]) {
        this[prop] = args[prop];
      }
    }
    if (this.breakpoints.length) {
      this.setBreakpointValues();
    }
  }
  unpackage() {
    for (let prop in this) {
      if (this[prop] && this[prop].type) {
        if (this[prop].type === "Vec2") {
          this[prop] = new Vec2(this[prop]._x, this[prop]._y);
        } else if (this[prop].type === "Vec3") {
          this[prop] = new Vec3(this[prop]._x, this[prop]._y, this[prop]._z);
        }
      }
    }
    return this;
  }
  getParent() {
    var _a, _b;
    return (_b = (_a = this.state()) == null ? void 0 : _a.layers) == null ? void 0 : _b.find((n) => {
      var _a2;
      return (_a2 = n.effects) == null ? void 0 : _a2.includes(this.parentLayer);
    });
  }
}
class Group extends Layer {
  constructor(args, id, initOptions) {
    super(args, id, initOptions);
    __publicField(this, "layerType", "group");
    __publicField(this, "isGroup", true);
    this.members = args.members || [];
    this.effects = args.effects || [];
    this.opacity = args.opacity ?? 1;
    this.blendMode = args.blendMode || "NORMAL";
    this.trackMouse = args.trackMouse || 0;
    this.axisTilt = args.axisTilt || 0;
    this.mouseMomentum = args.mouseMomentum || 0;
    this.mouseSpring = args.mouseSpring || 0;
    this.displace = args.displace || 0;
    this.bgDisplace = args.bgDisplace || 0;
    this.dispersion = args.dispersion || 0;
    this.mask = 0;
  }
  getMemberItems() {
    var _a, _b;
    if (!((_a = this.members) == null ? void 0 : _a.length)) return [];
    const state = this.state();
    const memberItems = ((_b = state == null ? void 0 : state.layers) == null ? void 0 : _b.filter((n) => this.members.includes(n.groupLayer))) || [];
    return this.members.map((memberId) => memberItems.find((n) => n.groupLayer === memberId)).filter(Boolean);
  }
  getChildEffectItems() {
    var _a, _b;
    if (!((_a = this.effects) == null ? void 0 : _a.length)) return [];
    const state = this.state();
    const childEffects = ((_b = state == null ? void 0 : state.layers) == null ? void 0 : _b.filter((n) => this.effects.includes(n.parentLayer))) || [];
    return this.effects.map((effectId) => childEffects.find((n) => n.parentLayer === effectId)).filter(Boolean);
  }
  unpackage() {
    this.members = deserializeNestedArray(this.members);
    this.effects = deserializeNestedArray(this.effects);
    return this;
  }
}
class FlattenedGroup extends Layer {
  constructor(args, id, initOptions) {
    var _a, _b, _c, _d;
    super(args, id);
    __publicField(this, "layerType", "flattened");
    __publicField(this, "isFlattened", true);
    this.initOptions = initOptions;
    this.sublayers = args.sublayers || [];
    this.visible = args.visible !== false;
    this.consumedMaskId = args.consumedMaskId || null;
    this.mask = args.mask || 0;
    this.maskDepthLayer = args.maskDepthLayer ?? 0;
    this.maskInvert = args.maskInvert || 0;
    this.maskDepth = args.maskDepth || 0;
    this.maskAlpha = args.maskAlpha || 0;
    this.local.textSublayers = [];
    this.local.imageSublayers = [];
    this.local.videoSublayers = [];
    this.local.modelSublayers = [];
    this.local.textInstances = {};
    this.local.canvasTextures = {};
    this.local.sourceTextures = {};
    this.local.modelInstances = {};
    this.local.modelTextures = {};
    this.sublayers.forEach((sub, idx) => {
      if (sub.layerType === "text") {
        this.local.textSublayers.push(sub);
        const textArgs = { ...sub };
        const textKey = Number.isInteger(sub.sublayerIndex) ? sub.sublayerIndex : idx;
        this.local.textInstances[textKey] = new TextBox(textArgs, id, initOptions).unpackage();
      } else if (sub.layerType === "image") {
        this.local.imageSublayers.push(sub);
      } else if (sub.type === "video") {
        this.local.videoSublayers.push(sub);
      } else if (sub.layerType === "model") {
        this.local.modelSublayers.push(sub);
        const modelKey = Number.isInteger(sub.sublayerIndex) ? sub.sublayerIndex : idx;
        this.local.modelInstances[modelKey] = new Model(sub, id, initOptions);
      }
    });
    if (this.states.hover.some((e) => e.triggerOnElement)) {
      Object.values(this.local.modelInstances).forEach((mi) => {
        mi.states.hover = [{ triggerOnElement: 1 }];
      });
    }
    this.local.remainingEffectItems = [];
    this.effects = [];
    if (args.remainingEffects && args.remainingEffects.length > 0) {
      this.local.remainingEffectItems = args.remainingEffects.map(
        (effectArgs) => new Effect(effectArgs, id, initOptions).unpackage()
      );
      this.effects = args.remainingEffects.map((e) => e.parentLayer).filter(Boolean);
    }
    const allEffects = [
      ...((_a = args.states) == null ? void 0 : _a.appear) || [],
      ...((_b = args.states) == null ? void 0 : _b.scroll) || [],
      ...((_c = args.states) == null ? void 0 : _c.hover) || [],
      ...((_d = args.states) == null ? void 0 : _d.mousemove) || []
    ];
    allEffects.forEach((effect) => {
      var _a2, _b2, _c2, _d2;
      if (!effect.prop || this[effect.prop] !== void 0) return;
      let sublayerPropBaseline;
      const sourceProp = effect.originalProp || effect.prop;
      if (sourceProp && Number.isInteger(effect.sublayerIndex)) {
        const sourceSublayer = this.sublayers.find((sub) => sub.sublayerIndex === effect.sublayerIndex);
        if (sourceSublayer && sourceSublayer[sourceProp] !== void 0) {
          sublayerPropBaseline = sourceSublayer[sourceProp];
        }
      }
      const uniformBaseline = (_c2 = (_b2 = (_a2 = args.data) == null ? void 0 : _a2.uniforms) == null ? void 0 : _b2[effect.prop]) == null ? void 0 : _c2.value;
      const stateUniformBaseline = (_d2 = effect.uniformData) == null ? void 0 : _d2.value;
      this[effect.prop] = sublayerPropBaseline ?? uniformBaseline ?? stateUniformBaseline ?? effect.value;
    });
    if (this.breakpoints.length) {
      this.setBreakpointValues();
    }
  }
  setBreakpointValues(vWidth = null) {
    super.setBreakpointValues(vWidth);
    this.syncTextBreakpoints();
  }
  syncTextBreakpoints() {
    const props = this.local.bpProps || {};
    Object.entries(this.local.textInstances || {}).forEach(([key, textInstance]) => {
      var _a, _b, _c;
      const sublayer = this.sublayers.find((sub) => (sub == null ? void 0 : sub.sublayerIndex) === Number(key));
      let changed = false;
      Object.entries(props).forEach(([prop, value]) => {
        const textProp = prop.startsWith(`L${key}_`) ? prop.slice(key.length + 2) : null;
        if (!textProp || !(textProp in textInstance)) return;
        assignRuntimeValue(textInstance, textProp, cloneRuntimeValue(value));
        if (sublayer && textProp in sublayer) {
          assignRuntimeValue(sublayer, textProp, cloneRuntimeValue(value));
        }
        changed = true;
      });
      if (changed) {
        (_a = textInstance.render) == null ? void 0 : _a.call(textInstance);
        (_c = (_b = this.local.canvasTextures[key]) == null ? void 0 : _b.needUpdate) == null ? void 0 : _c.call(_b);
      }
    });
  }
  /**
   * Returns non-flattenable child effects that render after the flattened plane.
   * Mirrors the Element.getChildEffectItems() pattern.
   */
  getChildEffectItems() {
    return this.local.remainingEffectItems || [];
  }
  hasRemainingEffects() {
    return this.local.remainingEffectItems && this.local.remainingEffectItems.length > 0;
  }
  unpackage() {
    var _a, _b, _c;
    for (let prop in this) {
      if (this[prop] && this[prop].type === "Vec2") {
        this[prop] = new Vec2(this[prop]._x, this[prop]._y);
      } else if (this[prop] && this[prop].type === "Vec3") {
        this[prop] = new Vec3(this[prop]._x, this[prop]._y, this[prop]._z);
      }
    }
    if ((_a = this.data) == null ? void 0 : _a.uniforms) {
      for (let prop in this.data.uniforms) {
        const u = this.data.uniforms[prop];
        if (((_b = u == null ? void 0 : u.value) == null ? void 0 : _b.type) === "Vec2") {
          u.value = new Vec2(u.value._x, u.value._y);
        } else if (((_c = u == null ? void 0 : u.value) == null ? void 0 : _c.type) === "Vec3") {
          u.value = new Vec3(u.value._x, u.value._y, u.value._z);
        }
      }
    }
    return this;
  }
  areTextAssetsReady() {
    return Object.values(this.local.textInstances).every((t) => t.local.loaded);
  }
  // Sublayers hidden at this breakpoint aren't loaded (ensureFlattenedTexture), so neither check waits on them.
  areImageAssetsReady() {
    var _a;
    if (!((_a = this.data) == null ? void 0 : _a.textures)) return true;
    return this.data.textures.filter((td) => td.type === "image" && !this.state().isFlattenedSublayerHidden(this, td, this.getPlane())).every((td) => {
      var _a2;
      return ((_a2 = this.local.sourceTextures) == null ? void 0 : _a2[td.sublayerIndex]) !== void 0;
    });
  }
  areModelAssetsReady() {
    var _a;
    if (!((_a = this.data) == null ? void 0 : _a.textures)) return true;
    return this.data.textures.filter((td) => td.type === "modelRT" && !this.state().isFlattenedSublayerHidden(this, td, this.getPlane())).every((td) => {
      var _a2, _b;
      return !((_b = (_a2 = this.local.modelInstances) == null ? void 0 : _a2[td.sublayerIndex]) == null ? void 0 : _b.isLoading());
    });
  }
  resize() {
    Object.entries(this.local.textInstances).forEach(([key, textInstance]) => {
      var _a, _b;
      textInstance.resize();
      (_b = (_a = this.local.canvasTextures[key]) == null ? void 0 : _a.needUpdate) == null ? void 0 : _b.call(_a);
    });
  }
  isHovered(prop) {
    var _a;
    if (prop) {
      const match = prop.match(/^L(\d+)_/);
      if (match) {
        const idx = parseInt(match[1], 10);
        const mi = (_a = this.local.modelInstances) == null ? void 0 : _a[idx];
        if (mi == null ? void 0 : mi.isHovered) return mi.isHovered();
        return this._isSublayerHovered(idx);
      }
    }
    const instances = this.local.modelInstances;
    if (instances && Object.values(instances).some((mi) => {
      var _a2;
      return (_a2 = mi == null ? void 0 : mi.isHovered) == null ? void 0 : _a2.call(mi);
    })) return true;
    for (const sub of this.sublayers) {
      if (sub.layerType !== "model" && sub.layerType !== "effect") {
        if (this._isSublayerHovered(sub.sublayerIndex)) return true;
      }
    }
    return false;
  }
  _isSublayerHovered(sublayerIdx) {
    var _a, _b;
    const sub = (_a = this.sublayers) == null ? void 0 : _a.find((s) => s.sublayerIndex === sublayerIdx);
    if (!sub || sub.layerType === "effect") return false;
    const scene = this.state();
    if (!((_b = scene == null ? void 0 : scene.mouse) == null ? void 0 : _b.movePos)) return false;
    return hitTestElementBounds(sub, scene.canvasWidth, scene.canvasHeight, scene.mouse.movePos);
  }
}
class Img extends Element {
  constructor(args, id, initOptions) {
    super(args, id);
    __publicField(this, "layerType", "image");
    __publicField(this, "isElement", true);
    __publicField(this, "isGpuElement", true);
    this.initOptions = initOptions;
    for (let prop in args) {
      if (!(prop in this)) {
        this[prop] = args[prop];
      }
    }
    normalizeElementMaskProps(this, args);
    if (this.breakpoints.length) {
      this.setBreakpointValues();
    }
  }
}
class Model extends Layer {
  constructor(args, id, initOptions) {
    var _a;
    super(args, id, initOptions);
    __publicField(this, "layerType", "model");
    __publicField(this, "isModel", true);
    __publicField(this, "contextType", "webgl");
    if (args.moduleRef && ((_a = initOptions == null ? void 0 : initOptions.modules) == null ? void 0 : _a[args.moduleRef])) {
      this.moduleUrl = initOptions.modules[args.moduleRef].url;
    }
    this.trackMouse = args.trackMouse !== void 0 ? args.trackMouse : 0;
    this.mouseMomentum = args.mouseMomentum !== void 0 ? args.mouseMomentum : 0;
    this.mouseSpring = args.mouseSpring !== void 0 ? args.mouseSpring : 0;
    this.trackAxes = args.trackAxes || "xy";
    this.lightTracking = args.lightTracking !== void 0 ? args.lightTracking : 0;
    this.rotationTracking = args.rotationTracking !== void 0 ? args.rotationTracking : 0;
    this.groupLayer = args.groupLayer || false;
    this.effects = args.effects || [];
    this.speed = args.speed !== void 0 ? args.speed : 0.5;
    this.pos = new Vec3(args.pos._x, args.pos._y, args.pos._z);
    this.modelUrl = args.modelUrl;
    this.scale = args.scale;
    this.modelRotation = new Vec3(args.modelRotation._x, args.modelRotation._y, args.modelRotation._z);
    this.lightIntensity = args.lightIntensity;
    this.lightColor = args.lightColor;
    this.ambientLightColor = args.ambientLightColor;
    this.fillLightColor = args.fillLightColor;
    this.ambientLightIntensity = args.ambientLightIntensity ?? 1.5;
    this.fillLightIntensity = args.fillLightIntensity ?? 1;
    this.lightPosition = new Vec3(args.lightPosition._x, args.lightPosition._y, args.lightPosition._z);
    this.materialMetalness = args.materialMetalness;
    this.materialRoughness = args.materialRoughness;
    this.refractScale = args.refractScale;
    this.animationAxis = new Vec3(args.animationAxis._x, args.animationAxis._y, args.animationAxis._z);
    this.renderNormals = args.renderNormals;
    this.animating = args.animating;
    this.opacity = args.opacity;
    this.colorMapUrl = args.colorMapUrl;
    this.colorMapScale = args.colorMapScale ?? 1;
    this.colorMapPosition = args.colorMapPosition ? new Vec2(args.colorMapPosition.x ?? 0.5, args.colorMapPosition.y ?? 0.5) : new Vec2(0.5, 0.5);
    this.colorMapIntensity = args.colorMapIntensity ?? 1;
    this.quality = args.quality || "fast";
    this.environmentMapIntensity = args.environmentMapIntensity ?? 0;
    this.environmentMapUrl = args.environmentMapUrl || "";
    this.normalMapUrl = args.normalMapUrl || "";
    this.normalMapScale = args.normalMapScale ?? 1;
    this.normalMapPosition = args.normalMapPosition ? new Vec2(args.normalMapPosition.x ?? 0.5, args.normalMapPosition.y ?? 0.5) : new Vec2(0.5, 0.5);
    this.normalMapIntensity = args.normalMapIntensity ?? 1;
    this.extrudeDepth = args.extrudeDepth ?? 10;
    this.bevelEnabled = args.bevelEnabled ?? false;
    this.bevelThickness = args.bevelThickness ?? 1;
    this.bevelSize = args.bevelSize ?? 1;
    this.bevelSegments = args.bevelSegments ?? 2;
    this.glassIOR = args.glassIOR ?? 1.5;
    this.glassThickness = args.glassThickness ?? 0.5;
    this.glassRoughness = args.glassRoughness ?? 0;
    this.glassTint = args.glassTint || "#ffffff";
    this.glassDispersion = args.glassDispersion ?? 0;
    this.materialMode = args.materialMode || (args.renderNormals ? "glass" : "standard");
    this.matcapUrl = args.matcapUrl || "https://assets.unicorn.studio/media/matcaps/unicorn_matcap_default.webp";
    this.matcapIntensity = args.matcapIntensity ?? 0.5;
    this.matcapRotation = args.matcapRotation ?? 0;
    this.renderNormals = this.materialMode === "glass" ? 1 : this.renderNormals ? 1 : 0;
    this.loadCallback = null;
    if (this.breakpoints.length) {
      this.setBreakpointValues();
    }
  }
  unpackage() {
    this.effects = deserializeNestedArray(this.effects);
    this.pos = new Vec3(this.pos._x, this.pos._y, this.pos._z);
    this.modelRotation = new Vec3(this.modelRotation._x, this.modelRotation._y, this.modelRotation._z);
    this.lightPosition = new Vec3(this.lightPosition._x, this.lightPosition._y, this.lightPosition._z);
    this.animationAxis = new Vec3(this.animationAxis._x, this.animationAxis._y, this.animationAxis._z);
    return this;
  }
  async loadRenderer() {
    var _a;
    const scene = this.state();
    if (!scene.curtain || !scene.curtain.renderer || !scene.curtain.renderer.gl) {
      console.error("No valid rendering context available for model");
      return;
    }
    let moduleUrl = this.moduleUrl || `https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v${version}/extensions/model-renderer.js`;
    try {
      const module = await (((_a = scene.modelRenderer) == null ? void 0 : _a.call(scene)) || import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        moduleUrl
      ));
      this.local.initialize = module.initialize;
      this.local.loadModel = module.loadModel;
      this.local.draw = module.draw;
      this.local.dispose = module.dispose;
      this.local.rendererLoaded = true;
      requestAnimationFrame(() => {
        var _a2, _b, _c;
        const gl = (_b = (_a2 = scene.curtain) == null ? void 0 : _a2.renderer) == null ? void 0 : _b.gl;
        if (!gl) return;
        if (this.local.renderTarget && !this.local.renderTarget._frameBuffer) {
          this.local.renderTarget._initRenderTarget();
        }
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        this.local.initialize(gl, this);
        this.local.initialized = true;
        this.local.loadModel(this);
        const renderer = (_c = scene.curtain) == null ? void 0 : _c.renderer;
        if (renderer) {
          renderer.state.flipY = null;
          renderer.state.premultiplyAlpha = null;
        }
      });
    } catch (error) {
      console.error("Failed to load model renderer:", error);
    }
  }
  // The renderer imports, initializes on the next frame, then fetches the model. A load that failed has
  // settled, as a failed font has, so it no longer counts.
  isLoading() {
    const { rendererLoading, rendererLoaded, initialized, modelLoading, modelLoaded } = this.local;
    return !modelLoaded && !!(rendererLoading || modelLoading || rendererLoaded && !initialized);
  }
  handleModelLoaded(model = null) {
    var _a, _b, _c, _d, _e, _f;
    this.local.modelLoaded = true;
    this.local.modelObject = model;
    if (this.local.renderTarget && this.getChildEffectItems().length) {
      (_b = (_a = this.state()).createTextures) == null ? void 0 : _b.call(_a);
    } else if (this.local.renderTarget) {
      let outTex = this.local.renderTarget.getTexture();
      const hostPlane = this.getPlane() || ((_d = (_c = this.local.hostLayer) == null ? void 0 : _c.getPlane) == null ? void 0 : _d.call(_c));
      const targetSampler = this.local.targetSamplerName || "uTexture";
      let inTex = (_e = hostPlane == null ? void 0 : hostPlane.textures) == null ? void 0 : _e.find((t) => t._samplerName === targetSampler);
      if (inTex && outTex) {
        inTex.copy(outTex);
      }
    }
    if (!this.animating) {
      this.renderModel();
      this.local.renderedOnce = true;
    }
    const payload = { layer: this, object: this.local.modelObject, modelUrl: this.modelUrl };
    (_f = this.loadCallback) == null ? void 0 : _f.call(this, payload);
  }
  onLoad(callback) {
    if (typeof callback !== "function") return () => {
    };
    this.loadCallback = callback;
    if (this.local.modelLoaded) {
      callback({ layer: this, object: this.local.modelObject || null, modelUrl: this.modelUrl });
    }
    return () => {
      if (this.loadCallback === callback) {
        this.loadCallback = null;
      }
    };
  }
  renderModel() {
    var _a, _b, _c, _d, _e, _f;
    if (!this.local.rendererLoaded || !this.local.modelLoaded) {
      return;
    }
    const scene = this.state();
    if (!scene || scene.destroyed || !scene.curtain || !scene.curtain.renderer || !scene.curtain.renderer.gl) {
      return;
    }
    const gl = scene.curtain.renderer.gl;
    if (gl.drawingBufferWidth === 0 || gl.drawingBufferHeight === 0) {
      return;
    }
    if (this.animating) {
      if (this.local.time === void 0) {
        this.local.time = 0;
      }
      let speed = ((_a = this.local.stateEffectProps) == null ? void 0 : _a.speed) ?? this.speed ?? 0.5;
      const multiplier = scene.fps ? 60 / scene.fps : 1;
      this.local.time += speed * multiplier * 60;
    }
    const materialMode = this.materialMode || (this.renderNormals ? "glass" : "standard");
    const environmentMapUrl = this.environmentMapUrl || "";
    if (this.environmentMapIntensity > 0) {
      const plane = this.getPlane() || ((_c = (_b = this.local.hostLayer) == null ? void 0 : _b.getPlane) == null ? void 0 : _c.call(_b));
      if (plane && !environmentMapUrl.trim()) {
        const bgTex = plane.textures.find((t) => t._samplerName === "uBgTexture");
        if ((bgTex == null ? void 0 : bgTex._copiedFrom) && bgTex._sampler) {
          this.local.envTexture = {
            gl,
            webglTexture: bgTex._sampler.texture,
            width: bgTex._size.width,
            height: bgTex._size.height
          };
        } else {
          this.local.envTexture = null;
        }
      } else if (!environmentMapUrl.trim()) {
        this.local.envTexture = null;
      }
    } else {
      this.local.envTexture = null;
    }
    if (materialMode === "glass") {
      const plane = this.getPlane() || ((_e = (_d = this.local.hostLayer) == null ? void 0 : _d.getPlane) == null ? void 0 : _e.call(_d));
      if (plane) {
        const bgTex = plane.textures.find((t) => t._samplerName === "uBgTexture");
        if ((bgTex == null ? void 0 : bgTex._copiedFrom) && bgTex._sampler && bgTex._sampler.texture) {
          this.local.backgroundTexture = {
            gl,
            webglTexture: bgTex._sampler.texture,
            width: bgTex._size.width,
            height: bgTex._size.height
          };
        } else {
          this.local.backgroundTexture = null;
        }
      } else {
        this.local.backgroundTexture = null;
      }
    } else {
      this.local.backgroundTexture = null;
    }
    const time = this.local.time !== void 0 ? this.local.time : performance.now();
    if (this.local.renderTarget) {
      if (this.local.renderTarget._frameBuffer) {
        const framebuffer = this.local.renderTarget._frameBuffer;
        const width = this.local.renderTarget._size.width;
        const height = this.local.renderTarget._size.height;
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.viewport(0, 0, width, height);
        try {
          this.local.draw(gl, time, this);
        } finally {
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
          gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
          const renderer = (_f = scene.curtain) == null ? void 0 : _f.renderer;
          if (renderer) {
            renderer.setBlendFunc();
            renderer.state.blending = true;
            renderer.state.currentProgramID = null;
            renderer.state.currentGeometryID = null;
            renderer.state.forceBufferUpdate = true;
            renderer.state.frameBufferID = null;
            renderer.state.activeTexture = null;
            renderer.state.depthTest = null;
            renderer.state.cullFace = null;
            renderer.state.flipY = null;
            renderer.state.premultiplyAlpha = null;
          }
        }
      } else {
        this.local.draw(gl, time, this);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      }
    }
  }
  resize() {
    var _a;
    const scene = this.state();
    if (!(scene == null ? void 0 : scene.resizeRenderTarget) || !this.local.renderTarget || !((_a = scene.curtain) == null ? void 0 : _a.canvas)) {
      return;
    }
    const plane = this.getPlane();
    let downSample = this.userDownsample || 1;
    if ((plane == null ? void 0 : plane.userData) && plane.userData.downSample !== void 0) {
      downSample = typeof plane.userData.downSample === "number" ? plane.userData.downSample : 1;
    }
    const targetWidth = scene.curtain.canvas.width * downSample;
    const targetHeight = scene.curtain.canvas.height * downSample;
    scene.resizeRenderTarget(this.local.renderTarget, targetWidth, targetHeight);
  }
  cleanup() {
    var _a;
    if (this.local.dispose) {
      this.local.dispose(this);
    }
    this.local.initialize = null;
    this.local.loadModel = null;
    this.local.draw = null;
    this.local.dispose = null;
    this.local.rendererLoaded = false;
    this.local.initialized = false;
    this.local.modelLoaded = false;
    this.local.modelLoading = false;
    this.local.modelObject = null;
    if (this.local.renderTarget) {
      this.local.renderTarget.remove();
      let plane = this.getPlane();
      if (plane) {
        (_a = plane.removeRenderTarget) == null ? void 0 : _a.call(plane);
      }
      this.local.renderTarget = null;
    }
  }
  isAnimating() {
    return this.visible && (this.animating || this.trackMouse > 0 || this.rotationTracking > 0 || this.lightTracking > 0);
  }
  getProp(prop) {
    var _a;
    return ((_a = this.local.stateEffectProps) == null ? void 0 : _a[prop]) ?? this[prop];
  }
  isAnimatableLightColorProp(prop) {
    return ANIMATABLE_LIGHT_COLOR_PROPS.includes(prop);
  }
  getEventValue(prop, value = this[prop]) {
    if (!this.isAnimatableLightColorProp(prop) || value == null) {
      return value;
    }
    if ((value == null ? void 0 : value.type) === "Vec3") {
      return value instanceof Vec3 ? value.clone() : new Vec3(value.x ?? value._x, value.y ?? value._y, value.z ?? value._z);
    }
    const rgb = hexToRgb(value);
    return rgb ? new Vec3(...rgb.map((channel) => channel / 255)) : value;
  }
  fromEventValue(prop, value) {
    if (!this.isAnimatableLightColorProp(prop) || value == null || typeof value === "string") {
      return value;
    }
    if ((value == null ? void 0 : value.type) === "Vec3") {
      const channels = [value.x ?? value._x ?? 0, value.y ?? value._y ?? 0, value.z ?? value._z ?? 0].map((channel) => {
        return Math.max(0, Math.min(255, Math.round(channel * 255)));
      });
      return rgbToHex(...channels);
    }
    return value;
  }
  isHovered() {
    if (!this.local.boundingBox) return false;
    const scene = this.state();
    const width = scene.canvasWidth;
    const height = scene.canvasHeight;
    const min = this.local.boundingBox.min;
    const max = this.local.boundingBox.max;
    const left = min.x * width;
    const top = min.y * height;
    const right = max.x * width;
    const bottom = max.y * height;
    const mousePos = scene.mouse.movePos;
    return mousePos.x * 2 >= left && mousePos.x * 2 <= right && mousePos.y * 2 >= top && mousePos.y * 2 <= bottom;
  }
  dispose() {
    this.cleanup();
    super.dispose();
  }
}
class TextBox extends Element {
  constructor(args, id, initOptions) {
    var _a;
    super(args, id);
    __publicField(this, "layerType", "text");
    __publicField(this, "isText", true);
    this.initOptions = initOptions;
    this.opacity = args.opacity ?? 1;
    this.displace = args.displace || 0;
    this.bgDisplace = args.bgDisplace || 0;
    this.dispersion = args.dispersion || 0;
    this.rotation = args.rotation || 0;
    this.blendMode = args.blendMode || "NORMAL";
    if (args.textRenderMode === "gpu") {
      for (let prop in args) {
        if (!(prop in this)) {
          this[prop] = args[prop];
        }
      }
    } else {
      let props = this.default(args || {});
      for (let prop in props) {
        this[prop] = props[prop];
      }
    }
    if (this.breakpoints.length) {
      this.setBreakpointValues();
    }
    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    this.textRenderMode = args.textRenderMode || "canvas";
    this.fontAtlas = args.fontAtlas || "";
    const shaderIsMsdf = String(((_a = this.compiledFragmentShaders) == null ? void 0 : _a[0]) || "").includes(TEXT_LAYOUT_SAMPLER);
    this.isGpuElement = shaderIsMsdf && !!this.fontAtlas && canLayoutText(this.textContent);
    this.local.gpuTextFallback = shaderIsMsdf && !this.isGpuElement;
    if (Object.keys(args).length && !this.isGpuElement) {
      this.createLocalCanvas();
    }
    this.loadFont();
  }
  createLocalCanvas() {
    const scene = this.state();
    const canvas = document.createElement("canvas");
    const screenScale = this.getPixelRatio();
    canvas.width = scene.canvasWidth * screenScale;
    canvas.height = scene.canvasHeight * screenScale;
    const ctx = canvas.getContext("2d");
    ctx.scale(screenScale, screenScale);
    this.local.canvas = canvas;
    this.local.ctx = ctx;
  }
  resize() {
    var _a, _b, _c;
    const scene = this.state();
    if (this.local.canvas) {
      const screenScale = this.getPixelRatio();
      this.local.canvas.width = scene.canvasWidth * screenScale;
      this.local.canvas.height = scene.canvasHeight * screenScale;
      this.local.ctx.scale(screenScale, screenScale);
    }
    const currentBreakpointName = (_a = scene.currentBreakpoint) == null ? void 0 : _a.name;
    const hasActiveAppearEffects = (_c = (_b = this.states) == null ? void 0 : _b.appear) == null ? void 0 : _c.some((effect) => {
      if (effect.complete) return false;
      if (!effect.breakpoints || effect.breakpoints.length === 0) return true;
      return effect.breakpoints.includes(currentBreakpointName);
    });
    if (!hasActiveAppearEffects) {
      this.render();
    }
    addTextToScene(this, this.state().element);
  }
  default(args) {
    return {
      fill: args.fill || ["#ffffff"],
      fontSize: args.fontSize ?? 24,
      fontSizeMode: args.fontSizeMode || "fixed",
      fontCSS: args.fontCSS || null,
      lineHeight: args.lineHeight ?? 25,
      letterSpacing: args.letterSpacing || 0,
      minHeight: args.minHeight || 0,
      fontFamily: args.fontFamily || "arial",
      fontStyle: args.fontStyle || "normal",
      fontWeight: args.fontWeight || "normal",
      textAlign: args.textAlign || "left",
      textContent: args.textContent || "",
      href: args.href || "",
      gradientAngle: args.gradientAngle || args.gradAngle || 0,
      gradientType: args.gradientType || args.gradType || "linear",
      noTextAsHtml: args.noTextAsHtml || false,
      htmlOnly: args.htmlOnly || false,
      htmlRenderOrder: args.htmlRenderOrder ?? 0
    };
  }
  unpackage() {
    this.fill = deserializeNestedArray(this.fill);
    return this;
  }
  loadFont() {
    var _a;
    const fontStyle = this.fontStyle.includes("italic") ? "italic" : "normal";
    const normalizeWeight = (weight) => {
      if (weight === "normal" || weight === "400" || weight === 400) return "normal";
      return weight.toString();
    };
    const fontWeight = isNaN(parseInt(this.fontWeight)) ? "normal" : normalizeWeight(this.fontWeight);
    const isLoaded = Array.from(document.fonts).some(
      (font2) => font2.family === this.fontFamily && font2.style === fontStyle && normalizeWeight(font2.weight) === fontWeight && font2.status === "loaded"
    );
    if (isLoaded || !((_a = this.fontCSS) == null ? void 0 : _a.src)) {
      this.handleFontLoaded();
      return;
    }
    let src = this.fontCSS.src.split(" ").join("%20").replace("http:", "https:");
    const font = new FontFace(this.fontFamily, `url(${src})`, {
      style: fontStyle,
      weight: fontWeight,
      display: "swap"
    });
    document.fonts.add(font);
    font.load().then(() => {
      this.handleFontLoaded();
    }).catch((err) => {
      console.error("Font loading error:", err);
      this.handleFontLoaded();
    });
  }
  handleFontLoaded() {
    this.local.loaded = true;
    this.render();
    this.render();
    const state = this.state();
    if (isCurtainsValid(state.curtain)) {
      state.renderFrame();
    }
    addTextToScene(this, this.state().element);
  }
  getAbsoluteFontValues(scene) {
    var _a, _b, _c, _d, _e, _f;
    const renderFontSize = ((_b = (_a = this.local) == null ? void 0 : _a.stateEffectProps) == null ? void 0 : _b.fontSize) ?? this.fontSize;
    const renderLineHeight = ((_d = (_c = this.local) == null ? void 0 : _c.stateEffectProps) == null ? void 0 : _d.lineHeight) ?? this.lineHeight;
    const renderLetterSpacing = ((_f = (_e = this.local) == null ? void 0 : _e.stateEffectProps) == null ? void 0 : _f.letterSpacing) ?? this.letterSpacing;
    const absoluteFontSize = this.fontSizeMode === "fixed" ? renderFontSize : renderFontSize * scene.canvasWidth;
    const toAbsolute = (value) => this.fontSizeMode === "fixed" ? value : value * absoluteFontSize;
    return {
      fontSize: absoluteFontSize,
      lineHeight: toAbsolute(renderLineHeight),
      letterSpacing: toAbsolute(renderLetterSpacing),
      minHeight: toAbsolute(this.minHeight || 0)
    };
  }
  /**
   * Wrap on the CPU and bake the pen positions into the layout texture the MSDF shader reads.
   * Height follows the wrapped line count, floored at minHeight, exactly as the canvas renderer's does.
   */
  renderGpuLayout() {
    var _a, _b, _c;
    const metrics = getCachedFontAtlasMetrics(this.fontAtlas);
    if (!metrics) return;
    const { left, top, width } = this.box();
    const { fontSize, lineHeight, letterSpacing, minHeight } = this.getAbsoluteFontValues(this.state());
    const layout = layoutText(
      { textContent: this.textContent, width, fontSize, lineHeight, letterSpacing, textAlign: this.textAlign },
      metrics
    );
    this.height = Math.max(layout.height, minHeight);
    this.local.wrappedLines = layout.lines;
    this.local.textMetrics = metrics;
    this.local.textLayoutCanvas = writeTextLayoutCanvas(
      layout,
      this.local.textLayoutCanvas || document.createElement("canvas")
    );
    (_b = (_a = this.local.textLayoutTexture) == null ? void 0 : _a.needUpdate) == null ? void 0 : _b.call(_a);
    const anchorOffsets = getAnchorOffsets(this.anchorPoint);
    this.local.textBoxPos = { x: left - anchorOffsets.x * width, y: top - anchorOffsets.y * this.height };
    addTextToScene(this, (_c = this.state()) == null ? void 0 : _c.element);
  }
  render() {
    var _a, _b, _c;
    if (this.isGpuElement) {
      this.renderGpuLayout();
      return;
    }
    if (!((_a = this.local) == null ? void 0 : _a.ctx)) {
      return;
    }
    let ctx = this.local.ctx;
    let { left, top, width } = this.box();
    const anchorOffsets = getAnchorOffsets(this.anchorPoint);
    const renderRotation = (((_c = (_b = this.local) == null ? void 0 : _b.stateEffectProps) == null ? void 0 : _c.rotation) ?? this.rotation) || 0;
    let scene = this.state();
    let height = this.height;
    let x = left - anchorOffsets.x * width;
    let y = top - anchorOffsets.y * height;
    let index = 0;
    let { fontSize, lineHeight, letterSpacing, minHeight } = this.getAbsoluteFontValues(scene);
    let style = this.fontStyle.includes("italic") ? "italic" : "normal";
    let weight = /^\d+$/.test(this.fontStyle) ? this.fontStyle : "400";
    ctx.clearRect(0, 0, scene.canvasWidth, scene.canvasHeight);
    ctx.font = `${style} ${weight} ${fontSize}px/${lineHeight}px ${this.fontFamily}, -apple-system, BlinkMacSystemFont, Helvetica, Arial`;
    if (!this.isSafari) {
      ctx.textAlign = this.textAlign;
      ctx.letterSpacing = letterSpacing + "px";
    }
    const minWidth = ctx.measureText("m").width;
    width = Math.max(width, minWidth);
    const drawTextWithSpacing = (ctx2, text, startX, startY, spacing, align, containerWidth) => {
      let textTotalWidth = text.split("").reduce((acc, char, i) => acc + ctx2.measureText(char).width + (i < text.length - 1 ? spacing : 0), 0);
      let currentX;
      if (align === "center") {
        currentX = startX + (containerWidth - textTotalWidth) / 2 - containerWidth / 2;
      } else if (align === "right") {
        currentX = startX;
      } else {
        currentX = startX;
      }
      if (align === "right") {
        for (let i = text.length - 1; i >= 0; i--) {
          const char = text[i];
          currentX -= ctx2.measureText(char).width;
          ctx2.fillText(char, currentX, startY);
          if (i > 0) currentX -= spacing;
        }
      } else {
        for (let i = 0; i < text.length; i++) {
          ctx2.fillText(text[i], currentX, startY);
          currentX += ctx2.measureText(text[i]).width + spacing;
        }
      }
    };
    const render = (content, index2) => {
      let textY = y + lineHeight * index2 + lineHeight / 2 + fontSize / 3;
      if (this.isSafari) {
        drawTextWithSpacing(ctx, content, x, textY, letterSpacing, this.textAlign, width);
      } else {
        ctx.fillText(content, x, textY);
      }
    };
    const lines = this.textContent ? this.textContent.split("\n") : [""];
    let line_count = lines.length;
    const measureTextWithSpacing = (ctx2, text, spacing) => {
      let totalWidth = text.split("").reduce((acc, char, index2) => {
        acc += ctx2.measureText(char).width;
        if (index2 < text.length - 1) acc += spacing;
        return acc;
      }, 0);
      return totalWidth;
    };
    for (let i = 0; i < line_count; i++) {
      let line = "";
      let words = lines[i].split(/(\s|\n)/);
      for (let wordidx = 0; wordidx < words.length; wordidx++) {
        const word = words[wordidx];
        const potentialLine = line + word;
        let potentialLineWidth = this.isSafari && letterSpacing ? measureTextWithSpacing(ctx, potentialLine, letterSpacing) : ctx.measureText(potentialLine).width;
        if (potentialLineWidth > width || word === "\n") {
          if (line !== "") {
            lines[i] = line.trim();
            if (wordidx !== words.length - 1) {
              lines.splice(i + 1, 0, words.slice(wordidx).join(""));
              line_count++;
            } else if (word !== "\n") {
              lines.push(word);
            }
          } else {
            let remainingWord = word;
            let currentLine = i;
            while (remainingWord.length > 0) {
              let wordFragment = "";
              for (let c = 0; c < remainingWord.length; c++) {
                if (ctx.measureText(wordFragment + remainingWord[c]).width <= width || c == 0) {
                  wordFragment += remainingWord[c];
                } else {
                  break;
                }
              }
              remainingWord = remainingWord.slice(wordFragment.length);
              lines[currentLine] = wordFragment.trim();
              if (remainingWord.length > 0) {
                lines.splice(currentLine + 1, 0, remainingWord);
                currentLine++;
                line_count++;
              }
            }
            if (words.slice(wordidx + 1).length > 0) {
              lines[currentLine] += words.slice(wordidx + 1).join("");
            }
          }
          break;
        } else {
          line = potentialLine;
        }
        if (wordidx === words.length - 1) {
          lines[i] = line.trim();
        }
      }
    }
    this.height = Math.max(lineHeight * (lines.length - 1) + lineHeight, minHeight);
    y = top - anchorOffsets.y * this.height;
    ctx.save();
    const centerX = x + width / 2;
    const centerY = y + this.height / 2;
    ctx.translate(centerX, centerY);
    ctx.rotate(renderRotation * 360 * Math.PI / 180);
    ctx.translate(-centerX, -centerY);
    if (this.textAlign === "center") {
      x += width / 2;
    }
    if (this.textAlign === "right") {
      x += width;
    }
    ctx.fillStyle = getShapeFill(this.fill);
    lines.forEach((ln, i) => {
      render(ln, index);
      if (i < lines.length - 1) {
        index++;
      }
    });
    ctx.translate(-(x + width / 2), -(y + height / 2));
    ctx.restore();
  }
}
function handleVisibilityChange() {
  let now = performance.now();
  if (document[hidden]) {
    cancelAnimationFrame(rafId);
    scenes.forEach((scene) => {
      if (scene.isInView) scene.pauseTime = now;
    });
  } else {
    renderScenes();
    scheduleScenePrewarm();
    scenes.forEach((scene) => {
      var _a, _b;
      if (scene.isInView) scene.pauseTime = scene.pauseTime - now;
      (_b = (_a = scene.curtain) == null ? void 0 : _a.planes) == null ? void 0 : _b.forEach((plane) => {
        plane.videos.forEach((video) => {
          var _a2;
          (_a2 = video.play()) == null ? void 0 : _a2.catch(() => {
          });
        });
      });
    });
  }
}
function handleWindowResize() {
  viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  scenes.filter((n) => n.initialized).forEach((scene) => {
    scene.refresh();
  });
  updateViewportMeasurements();
}
function isElementNearViewport(el, bbox, proximityThreshold = 50) {
  const rect = bbox || el.getBoundingClientRect();
  const isCloseVertically = rect.top >= -proximityThreshold && rect.top <= viewportHeight + proximityThreshold || rect.bottom >= -proximityThreshold && rect.bottom <= viewportHeight + proximityThreshold || rect.top <= 0 && rect.bottom >= viewportHeight;
  const isCloseHorizontally = rect.left >= -proximityThreshold && rect.left <= viewportWidth + proximityThreshold || rect.right >= -proximityThreshold && rect.right <= viewportWidth + proximityThreshold || rect.left <= 0 && rect.right >= viewportWidth;
  return isCloseVertically && isCloseHorizontally;
}
function scheduleIdleWork(callback) {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(callback, { timeout: 500 });
  } else {
    setTimeout(() => callback({ didTimeout: false, timeRemaining: () => 8 }), 16);
  }
}
function getSceneViewportDistance(scene) {
  const rect = scene.element.getBoundingClientRect();
  if (!rect.width || !rect.height) return Infinity;
  if (rect.bottom < 0) return -rect.bottom;
  if (rect.top > viewportHeight) return rect.top - viewportHeight;
  return 0;
}
function scheduleScenePrewarm() {
  if (scenePrewarmScheduled || !scenePrewarmQueue.length) return;
  scenePrewarmScheduled = true;
  scheduleIdleWork(() => {
    scenePrewarmScheduled = false;
    scenePrewarmQueue = scenePrewarmQueue.filter(
      (scene2) => !scene2.destroyed && scenes.includes(scene2) && document.body.contains(scene2.element) && !scene2.curtain && !scene2.initializing
    );
    if (!scenePrewarmQueue.length) return;
    const visibleScenePending = scenes.some((scene2) => scene2.isInView && scene2.initializing && !scene2.destroyed);
    if (scrollActive || document.hidden || visibleScenePending) {
      setTimeout(scheduleScenePrewarm, 80);
      return;
    }
    scenePrewarmQueue.sort((a, b) => {
      const prewarmDistance = viewportHeight * 2;
      const aDistance = getSceneViewportDistance(a);
      const bDistance = getSceneViewportDistance(b);
      const aPriority = aDistance <= prewarmDistance ? 0 : 1;
      const bPriority = bDistance <= prewarmDistance ? 0 : 1;
      return aPriority - bPriority || aDistance - bDistance;
    });
    const scene = scenePrewarmQueue[0];
    if (!scene.ensureCurtains() && !scene.curtain) return;
    scenePrewarmQueue.shift();
    scene.local.prewarmQueued = false;
    if (scene.local.suspended) {
      scene.resume(() => scheduleScenePrewarm());
    } else {
      scene.initializePlanes(() => scheduleScenePrewarm(), !isElementOnScreen(scene.element));
    }
  });
}
function queueScenePrewarm(scene) {
  if (!scene || scene.destroyed || scene.curtain || scene.initializing || scene.local.prewarmQueued) {
    return;
  }
  scene.local.prewarmQueued = true;
  scenePrewarmQueue.push(scene);
  scheduleScenePrewarm();
}
let contextBudget = /Android/i.test(navigator.userAgent) ? 8 : 14;
const pendingOnScreenElements = /* @__PURE__ */ new Set();
const spareContexts = /* @__PURE__ */ new Set();
function isElementOnScreen(el) {
  return el.offsetWidth > 0 && el.offsetHeight > 0 && isElementNearViewport(el, null, 100);
}
function claimContext(scene) {
  const live = scenes.filter((n) => {
    var _a;
    return n !== scene && ((_a = n.curtain) == null ? void 0 : _a.gl) && !n.curtain.gl.isContextLost();
  });
  const onScreen = isElementOnScreen(scene.element);
  if (live.length + (onScreen ? 0 : pendingOnScreenElements.size) < contextBudget) {
    return [...spareContexts].some((gl) => !gl.isContextLost()) || live.length + spareContexts.size < contextBudget;
  }
  const prewarmDistance = viewportHeight * 2;
  if (!onScreen && getSceneViewportDistance(scene) > prewarmDistance) return false;
  const scrolls = (n) => n.layers.some((layer) => {
    var _a;
    return (_a = layer.states) == null ? void 0 : _a.scroll.length;
  });
  const released = live.filter((n) => onScreen ? !isElementOnScreen(n.element) : getSceneViewportDistance(n) > prewarmDistance).sort((a, b) => scrolls(a) - scrolls(b) || getSceneViewportDistance(b) - getSceneViewportDistance(a)).find((n) => n.suspend());
  if (released) queueScenePrewarm(released);
  return false;
}
function updateViewportMeasurements() {
  scenes.filter((n) => n.getDynamicLayers().length || n.lazyLoad && !n.initialized).forEach((scene) => {
    let bbox = scene.element.getBoundingClientRect();
    if (!scene.isFixed) {
      const pageTop = bbox.top + scrollTop;
      if (scrollTop !== scene.scrollY && Math.abs(pageTop - scene.pageTop) < 1) {
        scene.fixedTop = pageTop;
      }
      scene.pageTop = pageTop;
    }
    scene.scrollY = scrollTop;
    if (scene.lastBbox) {
      const deltaTop = Math.abs(bbox.top - scene.lastBbox.top);
      if (deltaTop === 0 && scrollDelta > 0) {
        scene.fixedCounter = (scene.fixedCounter || 0) + 1;
        if (scene.fixedCounter > 3) {
          scene.isFixed = true;
        }
      } else {
        scene.fixedCounter = 0;
      }
    }
    scene.lastBbox = scene.bbox;
    scene.bbox = bbox;
  });
}
function updateSceneVisibility() {
  const now = performance.now();
  const animatedScenes = scenes.filter((n) => n.getDynamicLayers().length || n.lazyLoad && !n.initialized);
  animatedScenes.forEach((scene) => {
    const isInViewport = isElementNearViewport(scene.element, scene.bbox, 100);
    if (isInViewport) {
      if (!scene.isInView) {
        scene.isInView = true;
        scene.pauseTime = scene.pauseTime - now;
        const hasValidDimensions = scene.element.offsetWidth > 0 && scene.element.offsetHeight > 0;
        if (hasValidDimensions && scene.curtain) {
          scene.resize();
        } else if (!hasValidDimensions) {
          requestAnimationFrame(() => {
            if (scene.element.offsetWidth > 0 && scene.element.offsetHeight > 0 && scene.curtain) {
              scene.resize();
            }
          });
        }
        queueScenePrewarm(scene);
      }
    } else if (scene.isInView) {
      scene.isInView = false;
      scene.pauseTime = now;
    }
  });
}
function onScrollEnd() {
  scrollActive = false;
  syncScrollPosition();
  updateViewportMeasurements();
  updateSceneVisibility();
  const animatedScenes = scenes.filter((n) => n.getDynamicLayers().length);
  const animatingScenes = scenes.filter((n) => n.rendering);
  if (animatedScenes.length && !animatingScenes.length) {
    renderScenes();
  }
  scheduleScenePrewarm();
}
function handleScrollChange() {
  scrollActive = true;
  const animatedScenes = scenes.filter((n) => n.getDynamicLayers().length);
  const animatingScenes = scenes.filter((n) => n.rendering);
  if (animatedScenes.length && !animatingScenes.length) {
    renderScenes();
  }
  const now = performance.now();
  if (!lastViewportMeasurementTime || now - lastViewportMeasurementTime > 80) {
    updateViewportMeasurements();
    lastViewportMeasurementTime = now;
  }
  clearTimeout(scrollEndTimeout);
  scrollEndTimeout = setTimeout(onScrollEnd, 80);
  updateSceneVisibility();
}
function handleWindowScroll() {
  syncScrollPosition();
  handleScrollChange();
}
function updateMouseMove() {
  var _a, _b, _c, _d;
  let now = performance.now();
  const isMobileDevice = isMobile();
  for (let si = 0; si < scenes.length; si++) {
    const scene = scenes[si];
    if (scene.isInView && sceneHasMousePos(scene)) {
      if (isMobileDevice && ((_b = (_a = scene.interactivity) == null ? void 0 : _a.mouse) == null ? void 0 : _b.disableMobile) || ((_d = (_c = scene.interactivity) == null ? void 0 : _c.mouse) == null ? void 0 : _d.disabled)) ;
      else {
        if (scene.mouse.pos.x !== scene.mouse.movePos.x || scene.mouse.pos.y !== scene.mouse.movePos.y) {
          scene.local.needsFrame = true;
        }
        scene.mouse.pos.y = scene.mouse.movePos.y;
        scene.mouse.pos.x = scene.mouse.movePos.x;
        scene.mouse.lastPos.x = scene.mouse.pos.x;
        scene.mouse.lastPos.y = scene.mouse.pos.y;
        let top = scene.isFixed ? scene.bbox.top : scene.bbox.top + scene.scrollY;
        let left = scene.bbox.left;
        if (scene.mouse.page.x > left && scene.mouse.page.y > top && scene.mouse.page.x < scene.lastBbox.width + left && scene.mouse.page.y < scene.lastBbox.height + top) {
          if (!scene.mouse.enterTime) {
            scene.mouse.enterTime = now;
          }
        } else {
          scene.mouse.enterTime = null;
        }
      }
    }
  }
}
function sceneHasMousePos(scene) {
  var _a;
  if (scene._hasMousePos) return true;
  if (!((_a = scene.curtain) == null ? void 0 : _a.planes)) return false;
  const found = scene.curtain.planes.find((n) => n.uniforms.mousePos);
  if (found) scene._hasMousePos = true;
  return !!found;
}
function handleMouseLeave(e) {
  for (let i = 0; i < scenes.length; i++) {
    const scene = scenes[i];
    if (!scene.isInView) continue;
    scene.mouse.page.x = 99999999999;
    scene.mouse.page.y = 99999999999;
    scene.mouse.enterTime = null;
  }
}
function handleMouseMove(e) {
  let now = performance.now();
  for (let si = 0; si < scenes.length; si++) {
    const scene = scenes[si];
    if (!scene.isInView || !scene.initialized) continue;
    let rect = scene.bbox;
    if (Math.abs(scrollDelta) > 1 && now - scene.lastBboxTime > 64) {
      rect = scene.element.getBoundingClientRect();
      scene.lastBbox = scene.bbox;
      scene.bbox = rect;
      scene.scrollY = scrollTop;
      scene.lastBboxTime = now;
    }
    let pageX;
    let pageY;
    if (e.targetTouches) {
      pageX = e.targetTouches[0].pageX;
      pageY = e.targetTouches[0].pageY;
    } else {
      pageX = e.pageX;
      pageY = e.pageY;
    }
    if (scene.isFixed) {
      scene.scrollY = 0;
      if (e.targetTouches) {
        pageY = e.targetTouches[0].clientY;
      } else {
        pageY = e.clientY;
      }
    }
    const xPos = pageX - rect.left;
    const yPos = pageY - (rect.top + (scene.isFixed ? 0 : scene.scrollY));
    scene.mouse.page.x = pageX;
    scene.mouse.page.y = pageY;
    scene.mouse.movePos.x = xPos * 0.5;
    scene.mouse.movePos.y = yPos * 0.5;
    scene.mouse.movedInView = true;
  }
}
let scenes = [];
class Scene {
  constructor(args) {
    __publicField(this, "local", {});
    __publicField(this, "scrollY", 0);
    __publicField(this, "paused", false);
    __publicField(this, "destroyed", false);
    __publicField(this, "lastBboxTime", 0);
    this.id = args.id;
    const defaultBreakpoints = [
      { name: "Desktop", max: Infinity, min: 992 },
      { name: "Tablet", max: 991, min: 576 },
      { name: "Mobile", max: 575, min: 0 }
    ];
    if (args.breakpoints) {
      for (const override of args.breakpoints) {
        const target = defaultBreakpoints.find((bp) => bp.name === override.name);
        if (target) {
          if (override.min !== void 0) target.min = override.min;
          if (override.max !== void 0) target.max = override.max;
        }
      }
    }
    this.breakpoints = defaultBreakpoints;
    this.projectId = args.projectId;
    this.canvasWidth = args.width || args.element.offsetWidth || viewportWidth;
    this.canvasHeight = args.height || args.element.offsetHeight || viewportHeight;
    this.curtain = void 0;
    this.curtainRafId = void 0;
    this.dpi = +args.dpi || Math.min(1.5, window.devicePixelRatio);
    this.element = args.element;
    this.altText = args.altText || "";
    this.ariaLabel = args.ariaLabel || "Unicorn Studio Scene";
    this.fps = args.fps || 60;
    this.name = args.name;
    this.frameDuration = 1e3 / (args.fps || 60);
    this.layers = args.layers;
    this.lazyLoad = args.lazyLoad;
    this.initialized = false;
    this.lasTick = null;
    this.lastTime = 0;
    this.rendering = false;
    this.bbox = {};
    this.isFixed = args.fixed || window.getComputedStyle(this.element).position === "fixed";
    this.interactivity = {
      mouse: {
        disableMobile: false,
        disabled: false
      }
    };
    this.mouse = {
      downPos: { x: 0.5, y: 0.5 },
      movePos: { x: 0.5, y: 0.5 },
      lastPos: { x: 0.5, y: 0.5 },
      delta: { x: 0, y: 0 },
      page: { x: 99999999999, y: 99999999999 },
      dragging: false,
      movedInView: false,
      enterTime: null,
      ticks: 0,
      pos: { x: 0, y: 0 }
    };
    this.renderingScale = args.renderingScale || 1;
    this.scale = args.scale || 1;
    this.split = false;
    this.versionId = "";
    this.variableCallbacks = [];
    this.initialVariables = args.initialVariables || {};
    this.initialPreset = args.initialPreset || "";
    this.modelRenderer = args.modelRenderer;
    this.editMetadata = args.editMetadata || {};
    this.breakpointWidth = Number.isFinite(Number(args.breakpointWidth)) ? Number(args.breakpointWidth) : null;
    if (args.width && args.height) {
      this.element.style.width = args.width + "px";
      this.element.style.height = args.height + "px";
    }
    this.bbox = this.element.getBoundingClientRect();
    this.lastBbox = this.bbox;
    this.currentBreakpoint = this.getCurrentBreakpoint();
    if (!args.deferCurtains) {
      this.ensureCurtains();
    }
  }
  ensureCurtains() {
    if (!this.curtain) {
      if (!claimContext(this)) {
        queueScenePrewarm(this);
        return false;
      }
      this.createCurtains();
      this.setCanvasScale();
    }
    if (isCurtainsValid(this.curtain) && this.curtain.gl) {
      this.applyCanvasA11yAttrs();
      if (!this.textureLoader) {
        this.textureLoader = new TextureLoader(this.curtain);
      }
    }
    return isCurtainsValid(this.curtain) && !!this.curtain.gl;
  }
  applyCanvasA11yAttrs() {
    var _a;
    if (!((_a = this.curtain) == null ? void 0 : _a.canvas)) return;
    this.curtain.canvas.innerText = this.altText;
    this.curtain.canvas.setAttribute("aria-label", this.ariaLabel);
    this.curtain.canvas.setAttribute("role", "img");
  }
  hasValidTextureLoader() {
    var _a;
    return !!(this.textureLoader && (((_a = this.textureLoader.renderer) == null ? void 0 : _a.cache) || this.textureLoader.cache));
  }
  getLayer(layerIdOrName, binding = null) {
    var _a, _b;
    const exactMatch = this.layers.find((layer) => layerMatchesIdentifier(layer, layerIdOrName, { includeRuntimeLocalId: true })) || null;
    if (exactMatch || !(binding == null ? void 0 : binding.target)) {
      return exactMatch;
    }
    const flattenedMatch = this.layers.find((layer) => {
      if (!(layer == null ? void 0 : layer.isFlattened) || !Array.isArray(layer.sublayers)) return false;
      return layer.sublayers.some((sublayer) => layerMatchesIdentifier(sublayer, layerIdOrName));
    });
    if (flattenedMatch) {
      const sublayer = flattenedMatch.sublayers.find((item) => layerMatchesIdentifier(item, layerIdOrName));
      const sublayerIndex = sublayer == null ? void 0 : sublayer.sublayerIndex;
      if (Number.isInteger(sublayerIndex)) {
        if ((binding.kind || "prop") === "prop") {
          const namespacedTarget = `L${sublayerIndex}_${binding.target}`;
          const opacityTarget = `L${sublayerIndex}_elemOpacity`;
          const uniforms = ((_a = flattenedMatch.data) == null ? void 0 : _a.uniforms) || {};
          if (binding.target === "opacity" && uniforms[opacityTarget]) {
            binding.target = opacityTarget;
          } else if (uniforms[namespacedTarget]) {
            binding.target = namespacedTarget;
          }
        } else if (binding.kind === "texture" || binding.kind === "source") {
          const textures = ((_b = flattenedMatch.data) == null ? void 0 : _b.textures) || [];
          const expectedSampler = `uL${sublayerIndex}_${String(binding.target || "").replace(/^u/, "")}`;
          const texture = textures.find((item) => (item == null ? void 0 : item.sublayerIndex) === sublayerIndex && item.sampler === binding.target) || textures.find((item) => (item == null ? void 0 : item.sublayerIndex) === sublayerIndex && item.sampler === expectedSampler) || (binding.kind === "source" && (sublayer == null ? void 0 : sublayer.type) !== "video" ? textures.find(
            (item) => (item == null ? void 0 : item.sublayerIndex) === sublayerIndex && ["image", "media", "canvas", "modelRT"].includes(item.type)
          ) : null);
          if (texture == null ? void 0 : texture.sampler) {
            binding.kind = "texture";
            binding.target = texture.sampler;
          }
        }
      }
      return flattenedMatch;
    }
    const targetMatches = this.layers.filter((layer) => Object.prototype.hasOwnProperty.call(layer, binding.target));
    return targetMatches.length === 1 ? targetMatches[0] : null;
  }
  setupVariables(variables = {}, initialVariables = {}, initialPreset = "") {
    this.variables = new VariablesManager({
      variables,
      getLayer: (layerId, binding) => this.getLayer(layerId, binding)
    });
    this.variables.applyAll();
    if (initialPreset) {
      this.variables.applyPreset(initialPreset);
    }
    this.variables.applyInitialValues(initialVariables);
  }
  setVariable(name, value) {
    var _a;
    const changed = (_a = this.variables) == null ? void 0 : _a.setValue(name, value);
    if (changed) {
      const currentValue = this.getVariable(name);
      const values = this.getVariables();
      this.variableCallbacks.forEach((callback) => callback(name, currentValue, values));
    } else if (this.variables && !this.variables.getDefinition(name)) {
      const repairUrl = this.getCreateVariableUrl({ name, defaultValue: value });
      if (repairUrl) {
        console.warn(`Variable "${name}" was not found. Create it here: ${repairUrl}`);
      }
    }
    return this;
  }
  setVariables(values = {}) {
    Object.entries(values || {}).forEach(([name, value]) => this.setVariable(name, value));
    return this;
  }
  setPreset(idOrName) {
    var _a;
    const changed = ((_a = this.variables) == null ? void 0 : _a.applyPreset(idOrName)) || [];
    if (changed.length) {
      const values = this.getVariables();
      changed.forEach((name) => {
        this.variableCallbacks.forEach((callback) => callback(name, this.getVariable(name), values));
      });
    }
    return this;
  }
  getPreset(idOrName) {
    var _a;
    return ((_a = this.variables) == null ? void 0 : _a.getPreset(idOrName)) || null;
  }
  getPresets() {
    var _a;
    return ((_a = this.variables) == null ? void 0 : _a.getPresets()) || [];
  }
  getVariable(name) {
    var _a;
    return (_a = this.variables) == null ? void 0 : _a.getValue(name);
  }
  getVariables() {
    var _a;
    return ((_a = this.variables) == null ? void 0 : _a.getValues()) || {};
  }
  getVariableDefinition(name) {
    var _a;
    const definition = (_a = this.variables) == null ? void 0 : _a.getDefinition(name);
    return definition ? { ...definition, defaultValue: cloneRuntimeValue(definition.defaultValue) } : null;
  }
  getVariableDefinitions() {
    var _a;
    return ((_a = this.variables) == null ? void 0 : _a.getDefinitions()) || [];
  }
  getVariableManifest() {
    var _a;
    return ((_a = this.variables) == null ? void 0 : _a.getManifest()) || [];
  }
  getMouse() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const moved = !!((_a = this.mouse) == null ? void 0 : _a.movedInView);
    const width = ((_b = this.bbox) == null ? void 0 : _b.width) || ((_c = this.element) == null ? void 0 : _c.offsetWidth) || this.canvasWidth || 0;
    const height = ((_d = this.bbox) == null ? void 0 : _d.height) || ((_e = this.element) == null ? void 0 : _e.offsetHeight) || this.canvasHeight || 0;
    if (!moved || !width || !height) {
      return {
        x: 0.5,
        y: 0.5,
        inBounds: false,
        moved
      };
    }
    const page = this.mouse.page || {};
    const left = ((_f = this.bbox) == null ? void 0 : _f.left) || 0;
    const top = this.isFixed ? ((_g = this.bbox) == null ? void 0 : _g.top) || 0 : (((_h = this.bbox) == null ? void 0 : _h.top) || 0) + this.scrollY;
    const boundsWidth = ((_i = this.lastBbox) == null ? void 0 : _i.width) || width;
    const boundsHeight = ((_j = this.lastBbox) == null ? void 0 : _j.height) || height;
    const inBounds = page.x > left && page.y > top && page.x < boundsWidth + left && page.y < boundsHeight + top;
    return {
      x: this.mouse.movePos.x * 2 / width,
      y: 1 - this.mouse.movePos.y * 2 / height,
      inBounds,
      moved
    };
  }
  onVariableChange(callback) {
    if (typeof callback !== "function") return () => {
    };
    this.variableCallbacks.push(callback);
    return () => {
      this.variableCallbacks = this.variableCallbacks.filter((item) => item !== callback);
    };
  }
  getCreateVariableUrl({ layer = null, target = "", defaultValue = 0, kind = "prop", name = "" } = {}) {
    const layerId = (layer == null ? void 0 : layer.hasPublishedPublicId) ? layer == null ? void 0 : layer.id : (layer == null ? void 0 : layer.editorLayerId) || (layer == null ? void 0 : layer.id);
    if (layer && target && !layerId) {
      return "";
    }
    const intent = buildCreateVariableIntent({
      name,
      layerId,
      layerName: (layer == null ? void 0 : layer.layerName) || (layer == null ? void 0 : layer.name),
      target,
      kind,
      defaultValue,
      canvasId: this.editMetadata.canvasId
    });
    return buildCreateVariableUrl({
      designId: this.editMetadata.designId,
      intent
    });
  }
  setProp(layerIdOrName, prop, value) {
    const layer = this.getLayer(layerIdOrName);
    if (!layer) {
      console.warn(`Unable to set property. Layer "${layerIdOrName}" was not found.`);
      return this;
    }
    layer.setRuntimeOverride(prop, value, { source: "scene.setProp" });
    return this;
  }
  setTexture(layerIdOrName, target, value) {
    const layer = this.getLayer(layerIdOrName);
    if (!layer) {
      console.warn(`Unable to set texture. Layer "${layerIdOrName}" was not found.`);
      return this;
    }
    layer.setTexture(target, value);
    return this;
  }
  getLayers() {
    return this.layers.map((layer) => ({
      id: layer.id,
      publicId: layer.publicId,
      name: layer.layerName || layer.name || layer.id,
      type: layer.layerType || layer.type
    }));
  }
  preloadImage(src, sampler, callback, premultiplyAlpha = true) {
    if (!src) return;
    if (!this.hasValidTextureLoader()) {
      if (callback) callback(null);
      return;
    }
    this.local.preloadedImages = this.local.preloadedImages || {};
    let cache = this.local.preloadedImages[src];
    if (!cache) {
      cache = this.local.preloadedImages[src] = {
        texture: null,
        loading: true,
        claimed: false,
        queue: []
      };
      this.textureLoader.loadImage(
        src,
        { sampler, premultipliedAlpha: premultiplyAlpha },
        (texture) => {
          cache.texture = texture;
          cache.loading = false;
          for (const entry2 of cache.queue) {
            this._resolvePreloadedImage(src, entry2);
          }
          cache.queue = [];
        },
        () => {
          cache.loading = false;
          cache.queue.forEach((entry2) => entry2.callback(null));
          cache.queue = [];
        }
      );
    }
    if (!callback) return;
    const entry = { callback, sampler, premultiplyAlpha };
    if (cache.loading) {
      cache.queue.push(entry);
    } else {
      this._resolvePreloadedImage(src, entry);
    }
  }
  _resolvePreloadedImage(src, entry) {
    if (!this.hasValidTextureLoader()) {
      entry.callback(null);
      return;
    }
    const cache = this.local.preloadedImages[src];
    if (!cache.claimed) {
      cache.claimed = true;
      entry.callback(cache.texture);
    } else {
      this.textureLoader.loadImage(
        src,
        {
          sampler: entry.sampler,
          premultipliedAlpha: entry.premultiplyAlpha
        },
        entry.callback,
        () => entry.callback(null)
      );
    }
  }
  preloadVideo(src) {
    if (!src) return null;
    const videoSrc = src.includes(", ") ? getBestVideoSource(src) : src;
    this.local.preloadedVideos = this.local.preloadedVideos || {};
    if (!this.local.preloadedVideos[videoSrc]) {
      const video = document.createElement("video");
      video.crossOrigin = "anonymous";
      video.muted = true;
      video.preload = "auto";
      video.setAttribute("playsinline", "");
      video.src = videoSrc;
      video.load();
      this.local.preloadedVideos[videoSrc] = video;
    }
    return this.local.preloadedVideos[videoSrc];
  }
  // Videos upload as black until the browser presents a frame, and autoplay can be denied outright
  // (iOS Low Power Mode, background tabs). Both cases look the same to a shader, so keep the video
  // sampler empty until the first frame lands and let shaders sample their thumbnail until then.
  playVideoTexture(plane, videoTexture, video) {
    var _a;
    const sampler = videoTexture == null ? void 0 : videoTexture._samplerName;
    if (!plane || !sampler || !video) return;
    const setVideoSampler = (texture) => {
      plane.textures = plane.textures.filter((entry) => entry._samplerName !== sampler);
      if (texture) {
        plane.addTexture(texture);
      } else {
        createTex(plane, sampler);
      }
      syncTextureUnits(plane);
      this.requestSceneRender();
    };
    setVideoSampler(null);
    const showVideo = () => setVideoSampler(videoTexture);
    if (typeof video.requestVideoFrameCallback === "function") {
      video.requestVideoFrameCallback(showVideo);
    } else {
      video.addEventListener("playing", showVideo, { once: true });
    }
    (_a = video.play()) == null ? void 0 : _a.catch(() => {
    });
  }
  shouldPreloadLayerAssets(item) {
    return (item == null ? void 0 : item.visible) !== false;
  }
  ensureImageLayerTexture(item, plane = null) {
    if (item.layerType !== "image" || !item.src || item.local.sourceTexture || item.local.sourceTextureLoading) {
      return;
    }
    item.local.sourceTextureLoading = true;
    this.preloadImage(item.src, "uSourceImage", (texture) => {
      var _a, _b;
      item.local.sourceTextureLoading = false;
      item.local.imageReady = true;
      if (!texture) return;
      item.local.sourceTexture = texture;
      const sourcePlane = plane || ((_a = item.getPlanes) == null ? void 0 : _a.call(item).find((p) => {
        var _a2;
        return !((_a2 = p.userData) == null ? void 0 : _a2.isComposite);
      })) || ((_b = item.getPlane) == null ? void 0 : _b.call(item));
      if (sourcePlane && !sourcePlane.textures.some((t) => t._samplerName === "uSourceImage")) {
        sourcePlane.addTexture(texture);
      }
      this.requestSceneRender();
    });
  }
  isFlattenedSublayerHidden(item, texDef, plane = null) {
    var _a, _b, _c, _d;
    const sublayerIndex = texDef == null ? void 0 : texDef.sublayerIndex;
    if (!(item == null ? void 0 : item.isFlattened) || !Number.isInteger(sublayerIndex)) return false;
    const opacityKey = `L${sublayerIndex}_elemOpacity`;
    const internalOpacityKey = `L${sublayerIndex}_opacity`;
    const uniformOpacity = ((_a = plane == null ? void 0 : plane.uniforms) == null ? void 0 : _a[opacityKey]) || ((_b = plane == null ? void 0 : plane.uniforms) == null ? void 0 : _b[internalOpacityKey]);
    if (uniformOpacity && uniformOpacity.value === 0) {
      return true;
    }
    const bpOpacity = ((_c = item.local.bpProps) == null ? void 0 : _c[opacityKey]) ?? ((_d = item.local.bpProps) == null ? void 0 : _d[internalOpacityKey]);
    return bpOpacity === 0;
  }
  ensureFlattenedTexture(item, texDef, plane = null) {
    var _a;
    if (!(item == null ? void 0 : item.isFlattened) || !texDef) return;
    if (this.isFlattenedSublayerHidden(item, texDef, plane)) return;
    if (texDef.type === "image" && texDef.src) {
      item.local.sourceTextures = item.local.sourceTextures || {};
      const existingTexture = item.local.sourceTextures[texDef.sublayerIndex];
      if (existingTexture) {
        if (plane && !plane.textures.some((t) => t._samplerName === texDef.sampler)) {
          plane.addTexture(existingTexture);
        }
        return;
      }
      this.preloadImage(texDef.src, texDef.sampler, (texture) => {
        var _a2;
        item.local.sourceTextures[texDef.sublayerIndex] = texture;
        if (!texture) return;
        const targetPlane = plane || ((_a2 = item.getPlane) == null ? void 0 : _a2.call(item));
        let attachedToPlane = false;
        if (targetPlane && !targetPlane.textures.some((t) => t._samplerName === texDef.sampler)) {
          targetPlane.addTexture(texture);
          attachedToPlane = true;
        }
        if (attachedToPlane) {
          this.requestSceneRender();
        }
      });
      return;
    }
    if (texDef.type === "video") {
      const sub = item.sublayers.find((s) => s.sublayerIndex === texDef.sublayerIndex);
      const src = texDef.src || (sub == null ? void 0 : sub.src);
      if (!src) return;
      if (!item.local.videoElements) item.local.videoElements = {};
      if (!item.local.videoTextures) item.local.videoTextures = {};
      if (!item.local.videoTextureLoading) item.local.videoTextureLoading = {};
      const videoSource = item.local.videoElements[texDef.sampler] || this.preloadVideo(src);
      item.local.videoElements[texDef.sampler] = videoSource;
      if (!plane || plane.textures.some((t) => t._samplerName === texDef.sampler)) {
        return;
      }
      if (item.local.videoTextures[texDef.sampler]) {
        plane.addTexture(item.local.videoTextures[texDef.sampler]);
        return;
      }
      if (item.local.videoTextureLoading[texDef.sampler]) {
        return;
      }
      item.local.videoTextureLoading[texDef.sampler] = true;
      plane.loadVideo(
        videoSource,
        {
          premultipliedAlpha: true,
          sampler: texDef.sampler
        },
        (videoTexture) => {
          item.local.videoTextureLoading[texDef.sampler] = false;
          item.local.videoTextures[texDef.sampler] = videoTexture;
          const video = (videoTexture == null ? void 0 : videoTexture.source) || (videoTexture == null ? void 0 : videoTexture._source) || videoSource;
          if (!video) return;
          const hasTextureLoop = Object.prototype.hasOwnProperty.call(texDef, "loop");
          const hasSublayerLoop = Object.prototype.hasOwnProperty.call(sub || {}, "loop");
          video.loop = hasTextureLoop ? texDef.loop : hasSublayerLoop ? sub.loop : true;
          video.playbackRate = texDef.playbackRate ?? (sub == null ? void 0 : sub.playbackRate) ?? 1;
          this.playVideoTexture(plane, videoTexture, video);
          this.requestSceneRender();
        },
        () => {
          item.local.videoTextureLoading[texDef.sampler] = false;
        }
      );
      return;
    }
    if (texDef.type === "media" && texDef.src) {
      if (plane == null ? void 0 : plane.textures.some((t) => t._samplerName === texDef.sampler)) {
        return;
      }
      this.preloadImage(
        texDef.src,
        texDef.sampler,
        (texture) => {
          var _a2;
          if (!texture) return;
          const targetPlane = plane || ((_a2 = item.getPlane) == null ? void 0 : _a2.call(item));
          if (targetPlane && !targetPlane.textures.some((t) => t._samplerName === texDef.sampler)) {
            targetPlane.addTexture(texture);
            this.requestSceneRender();
          }
        },
        false
      );
      return;
    }
    if (texDef.type === "modelRT") {
      const modelInstance = (_a = item.local.modelInstances) == null ? void 0 : _a[texDef.sublayerIndex];
      if (!modelInstance || !this.curtain) return;
      modelInstance.local.hostLayer = item;
      modelInstance.local.targetSamplerName = texDef.sampler;
      if (!modelInstance.local.renderTarget) {
        modelInstance.local.renderTarget = new RenderTarget(this.curtain, {
          depth: true,
          maxWidth: this.curtain.canvas.width * (modelInstance.userDownsample || 1),
          maxHeight: this.curtain.canvas.height * (modelInstance.userDownsample || 1),
          texturesOptions: {
            sampler: texDef.sampler,
            premultiplyAlpha: true
          }
        });
      }
      const tex = modelInstance.local.renderTarget.getTexture();
      if (tex) {
        item.local.modelTextures[texDef.sublayerIndex] = tex;
        if (plane && !plane.textures.some((t) => t._samplerName === texDef.sampler)) {
          plane.addTexture(tex);
          this.requestSceneRender();
        }
      }
      if (!modelInstance.local.rendererLoaded && !modelInstance.local.rendererLoading) {
        modelInstance.local.rendererLoading = true;
        Promise.resolve(modelInstance.loadRenderer()).finally(() => {
          modelInstance.local.rendererLoading = false;
        });
      }
    }
  }
  preloadTextures() {
    if (this.local.texturesPreloaded || !this.hasValidTextureLoader()) {
      return;
    }
    this.local.texturesPreloaded = true;
    this.layers.forEach((item) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const shouldPreloadAssets = this.shouldPreloadLayerAssets(item);
      if (item.isFlattened) {
        item.local.canvasTextures = {};
        item.local.sourceTextures = {};
        item.local.modelTextures = {};
        item.local.videoTextures = {};
        if ((_a = item.data) == null ? void 0 : _a.textures) {
          item.data.textures.forEach((texDef) => {
            var _a2, _b2;
            if (texDef.type === "canvas") {
              const textInstance = (_a2 = item.local.textInstances) == null ? void 0 : _a2[texDef.sublayerIndex];
              if ((_b2 = textInstance == null ? void 0 : textInstance.local) == null ? void 0 : _b2.canvas) {
                this.textureLoader.loadCanvas(
                  textInstance.local.canvas,
                  {
                    sampler: texDef.sampler,
                    premultiplyAlpha: true
                  },
                  (texture) => {
                    var _a3;
                    texture.shouldUpdate = true;
                    item.local.canvasTextures[texDef.sublayerIndex] = texture;
                    const plane = (_a3 = item.getPlane) == null ? void 0 : _a3.call(item);
                    if (plane && !plane.textures.some((t) => t._samplerName === texDef.sampler)) {
                      plane.addTexture(texture);
                    }
                  }
                );
              }
            } else if (shouldPreloadAssets) {
              this.ensureFlattenedTexture(item, texDef);
            }
          });
        }
        return;
      }
      if (!item.isElement) {
        const textureSrc = ((_b = item == null ? void 0 : item.texture) == null ? void 0 : _b.src) || ((_d = (_c = item == null ? void 0 : item.data) == null ? void 0 : _c.texture) == null ? void 0 : _d.src);
        const sampler = ((_e = item == null ? void 0 : item.texture) == null ? void 0 : _e.sampler) || ((_g = (_f = item == null ? void 0 : item.data) == null ? void 0 : _f.texture) == null ? void 0 : _g.sampler) || resolveTextureSampler(item, "texture") || "uTexture";
        if (shouldPreloadAssets && textureSrc) {
          this.preloadImage(textureSrc, sampler, null, false);
        }
      } else if (item.layerType === "text" && item.isGpuElement && !item.htmlOnly) {
        this.preloadTextAtlasTextures(item);
      } else if (item.local.canvas && !item.htmlOnly) {
        this.textureLoader.loadCanvas(
          item.local.canvas,
          {
            sampler: "uTexture",
            premultiplyAlpha: true
          },
          (texture) => {
            texture.userData.hasStateEffects = item.states.appear.length > 0 || item.states.scroll.length > 0 || item.states.hover.length > 0 || item.states.mousemove.length > 0;
            item.preloadedCanvasTexture = texture;
          },
          (error) => {
            console.error("Error loading canvas texture:", error);
          }
        );
      } else if (item.layerType === "image" && item.src) {
        if (shouldPreloadAssets) {
          this.ensureImageLayerTexture(item);
        }
      }
    });
  }
  /**
   * GPU text samples the MSDF glyph atlas, its per-slot metrics, and the layout its CPU wrap baked
   * into a canvas. The metrics texture gates the wrap, so the layer re-renders once it arrives.
   * If the metrics never load, the plane is held clear and the HTML node shows the string.
   * All three textures carry opaque alpha, so premultiplying leaves their channels untouched.
   */
  preloadTextAtlasTextures(item) {
    loadFontAtlasMetrics(item.fontAtlas).then((metrics) => {
      var _a, _b, _c;
      if (!metrics) {
        console.warn("Unicorn.studio could not load font metrics for", item.fontAtlas);
        item.local.gpuTextFallback = true;
        item.isGpuElement = false;
        addTextToScene(item, (_a = item.state()) == null ? void 0 : _a.element);
        (_c = (_b = item.state()) == null ? void 0 : _b.renderFrame) == null ? void 0 : _c.call(_b);
        return;
      }
      item.render();
      this.textureLoader.loadCanvas(
        item.local.textLayoutCanvas,
        { sampler: TEXT_LAYOUT_SAMPLER, generateMipmap: false },
        (texture) => {
          texture.shouldUpdate = false;
          item.local.textLayoutTexture = texture;
          this.bindTextAtlasTextures(item);
        }
      );
    });
    [
      [FONT_ATLAS_SAMPLER, item.fontAtlas],
      [FONT_METRICS_SAMPLER, getFontMetricsSrc(item.fontAtlas)]
    ].forEach(([sampler, src]) => {
      this.preloadImage(
        src,
        sampler,
        (texture) => {
          item.local.atlasTextures = { ...item.local.atlasTextures, [sampler]: texture };
          this.bindTextAtlasTextures(item);
        },
        false
      );
    });
  }
  // Textures and the plane race, so both sides call this and it binds once all three are ready.
  // They bind as a set: the metrics and layout are tiny and land long before the atlas, and a
  // plane drawing with metrics but no atlas reads whatever sits on that unit as fully inside the
  // glyph, painting every glyph box solid until the atlas arrives.
  bindTextAtlasTextures(item) {
    const plane = item.getPlanes().find((p) => !p.userData.isComposite);
    const textures = [...Object.values(item.local.atlasTextures || {}), item.local.textLayoutTexture];
    if (!plane || textures.length < 3 || textures.some((texture) => !texture)) return;
    textures.filter((texture) => !plane.textures.some((t) => t._samplerName === texture._samplerName)).forEach((texture) => plane.addTexture(texture));
  }
  setCanvasScale() {
    this.canvasWidth = this.element.offsetWidth;
    this.canvasHeight = this.element.offsetHeight;
  }
  destroy() {
    var _a, _b;
    this.destroyed = true;
    this.rendering = false;
    this.isInView = false;
    this.local.prewarmQueued = false;
    scenePrewarmQueue = scenePrewarmQueue.filter((scene) => scene !== this);
    scheduleScenePrewarm();
    const i = scenes.findIndex((s) => s.id === this.id);
    if (i !== -1) {
      scenes.splice(i, 1);
    }
    this.layers.filter((n) => n.dispose).forEach((layer) => layer.dispose());
    this.layers = [];
    if ((_a = this.curtain) == null ? void 0 : _a.gl) {
      this.curtain.dispose();
      this.curtain = null;
    }
    if (this.element) {
      this.element.removeAttribute("data-us-initialized");
      this.element.removeAttribute("data-scene-id");
      (_b = this.element.querySelector("canvas")) == null ? void 0 : _b.remove();
      this.element.querySelectorAll(`[data-us-text]`).forEach((node) => {
        node.remove();
      });
    }
    renderScenes();
    if (!scenes.length) {
      unbindEvents();
    }
  }
  // Frees the WebGL context, kept as a spare for another scene, and leaves a still of the last frame in
  // the canvas's place. Layers keep their state and drop only the GPU resources they cache, which
  // resume() rebuilds.
  suspend() {
    if (!this.initialized || this.destroyed || this.local.suspended || this.hasLoadsInFlight()) return false;
    const canvas = this.curtain.canvas;
    const still = canvas.cloneNode(true);
    if (canvas.width && canvas.height) {
      this.renderFrame();
      still.getContext("2d").drawImage(canvas, 0, 0);
    }
    canvas.replaceWith(still);
    const times = {};
    this.curtain.planes.forEach((plane) => {
      plane.videos.forEach((video) => video.pause());
      if (plane.uniforms.time) times[`${plane.userData.id}:${plane.userData.passIndex}`] = plane.uniforms.time.value;
    });
    this.local.suspended = { still, times };
    this.layers.flatMap((layer) => [layer, ...layer.local.remainingEffectItems || []]).forEach((layer) => {
      var _a, _b;
      (_a = layer.states) == null ? void 0 : _a.scroll.forEach((state) => state.resetState());
      (_b = layer.states) == null ? void 0 : _b.appear.forEach((state) => {
        var _a2;
        layer[state.prop] = state.endValue ?? ((_a2 = layer.local.stateEffectProps) == null ? void 0 : _a2[state.prop]) ?? layer[state.prop];
      });
      if (layer.isModel) layer.cleanup();
      Object.values(layer.local.modelInstances || {}).forEach((model) => model.cleanup());
      layer.preloadedCanvasTexture = null;
      Object.assign(layer.local, {
        sourceTexture: null,
        sourceTextureLoading: false,
        imageReady: false,
        atlasTextures: null,
        textLayoutTexture: null,
        previousFrameTargets: null,
        previousFrameInputTargets: null
      });
    });
    this.local.preloadedImages = {};
    this.local.texturesPreloaded = false;
    this.local.assetsReady = false;
    this.textureLoader = null;
    const gl = this.curtain.gl;
    this.curtain.dispose();
    const loseContext = gl.getExtension("WEBGL_lose_context");
    if (loseContext) {
      canvas.addEventListener(
        "webglcontextlost",
        (event) => {
          event.preventDefault();
          setTimeout(() => loseContext.restoreContext());
        },
        { once: true }
      );
      canvas.addEventListener("webglcontextrestored", () => scheduleScenePrewarm(), { once: true });
      spareContexts.add(gl);
      loseContext.loseContext();
    }
    this.curtain = null;
    this.initialized = false;
    return true;
  }
  // Loads still in flight would land their textures in the context being released. One that failed has
  // settled, so a scene missing an asset can still give up its context.
  hasLoadsInFlight() {
    const layers = this.layers.flatMap((layer) => [
      layer,
      ...Object.values(layer.local.textInstances || {}),
      ...Object.values(layer.local.modelInstances || {})
    ]);
    return Object.values(this.local.preloadedImages || {}).some((image) => image.loading) || layers.some(
      (layer) => layer.layerType === "text" && layer.visible !== false && !layer.local.loaded || layer.local.rendererLoading || layer.local.modelLoading && !layer.local.modelLoaded || Object.values(layer.local.videoTextureLoading || {}).includes(true)
    );
  }
  resume(callback) {
    if (!this.local.suspended || this.destroyed || this.initializing || !this.ensureCurtains()) return false;
    this.curtain.canvas.remove();
    this.curtain.resize();
    this.setCanvasScale();
    this.applyBreakpointValues();
    this.initializePlanes(callback);
    return true;
  }
  syncPingPongVisibility() {
    var _a;
    let changed = false;
    (_a = this.curtain) == null ? void 0 : _a.planes.filter((plane) => plane.type === "PingPongPlane").forEach((plane) => {
      var _a2, _b;
      const layer = this.layers.find((item) => item.local.id === plane.userData.id);
      const visible = ((_b = (_a2 = layer == null ? void 0 : layer.getPlanes()) == null ? void 0 : _a2[0]) == null ? void 0 : _b.visible) ?? (layer == null ? void 0 : layer.visible) ?? false;
      if (plane.visible !== visible) changed = true;
      plane.visible = visible;
    });
    return changed;
  }
  syncPlaneVisibility() {
    this.layers.filter((n) => !n.parentLayer && !n.groupLayer).forEach((item) => {
      const renderVisible = item.visible;
      if (item.isGroup) {
        item.getMemberItems().forEach((member) => {
          const memberVisible = renderVisible && member.visible;
          member.getChildEffectItems().forEach((effect) => {
            const effectVisible = memberVisible && effect.visible;
            effect.getPlanes().forEach((plane) => {
              plane.visible = effectVisible;
            });
          });
          member.getPlanes().forEach((plane) => {
            plane.visible = memberVisible;
          });
        });
      }
      item.getChildEffectItems().forEach((effect) => {
        const effectVisible = renderVisible && effect.visible;
        effect.getPlanes().forEach((plane) => {
          plane.visible = effectVisible;
        });
      });
      item.getPlanes().forEach((plane) => {
        plane.visible = renderVisible;
      });
    });
    this.syncPingPongVisibility();
  }
  applyLayerVisibility() {
    let changed = false;
    this.layers.filter((n) => !n.parentLayer && !n.groupLayer).forEach((item) => {
      const renderVisible = item.visible;
      if (item.isGroup) {
        item.getMemberItems().forEach((member) => {
          const memberVisible = renderVisible && member.visible;
          member.getChildEffectItems().forEach((effect) => {
            const effectVisible = memberVisible && effect.visible;
            effect.getPlanes().forEach((plane) => {
              if (plane.visible !== effectVisible) changed = true;
              plane.visible = effectVisible;
            });
          });
          member.getPlanes().forEach((plane) => {
            if (plane.visible !== memberVisible) changed = true;
            plane.visible = memberVisible;
          });
        });
      }
      item.getChildEffectItems().forEach((effect) => {
        const effectVisible = renderVisible && effect.visible;
        effect.getPlanes().forEach((plane) => {
          if (plane.visible !== effectVisible) changed = true;
          plane.visible = effectVisible;
        });
      });
      item.getPlanes().forEach((plane) => {
        if (plane.visible !== renderVisible) changed = true;
        plane.visible = renderVisible;
      });
      if (renderVisible && item.isModel && !item.local.rendererLoaded && !item.local.rendererLoading) {
        item.local.rendererLoading = true;
        Promise.resolve(item.loadRenderer()).finally(() => {
          item.local.rendererLoading = false;
        });
      }
    });
    if (this.syncPingPongVisibility()) {
      changed = true;
    }
    if (changed) {
      this.calculateRenderOrders();
      this.createTextures();
      this.renderFrame();
    }
  }
  getBreakpointWidth() {
    return this.breakpointWidth || viewportWidth;
  }
  getCurrentBreakpoint() {
    const width = this.getBreakpointWidth();
    return this.breakpoints.find((bp) => width >= bp.min && width <= bp.max);
  }
  applyBreakpointValues(force = false) {
    var _a;
    const prevBreakpoint = this.currentBreakpoint;
    this.currentBreakpoint = this.getCurrentBreakpoint();
    const breakpointChanged = force || (prevBreakpoint == null ? void 0 : prevBreakpoint.name) !== ((_a = this.currentBreakpoint) == null ? void 0 : _a.name);
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      if (breakpointChanged && layer.breakpoints.length) {
        layer.setBreakpointValues(this.getBreakpointWidth());
        this.applyBreakpointUniforms(layer);
      }
    }
    return breakpointChanged;
  }
  resize() {
    this.lastBbox = this.bbox;
    this.bbox = this.element.getBoundingClientRect();
    this.setCanvasScale();
    const breakpointChanged = this.applyBreakpointValues();
    let sizeChanged = false;
    if (isCurtainsValid(this.curtain)) {
      const { width, height } = this.curtain.canvas;
      this.curtain.resize();
      this.local.needsFrame = true;
      sizeChanged = width !== this.curtain.canvas.width || height !== this.curtain.canvas.height;
      this.curtain.canvas.style.width = this.canvasWidth + "px";
      this.curtain.canvas.style.height = this.canvasHeight + "px";
      for (let i = 0; i < this.curtain.planes.length; i++) {
        const plane = this.curtain.planes[i];
        if (plane.uniforms.resolution) {
          plane.uniforms.resolution.value.x = this.curtain.canvas.width;
          plane.uniforms.resolution.value.y = this.curtain.canvas.height;
        }
        if (plane.uniforms.artboardResolution) {
          plane.uniforms.artboardResolution.value.x = this.canvasWidth;
          plane.uniforms.artboardResolution.value.y = this.canvasHeight;
        }
      }
    }
    for (let i = 0; i < this.layers.length; i++) {
      const layer = this.layers[i];
      if (layer.visible && layer.resize) {
        layer.resize();
      }
    }
    if (!this.curtain) {
      scheduleScenePrewarm();
    } else if (breakpointChanged) {
      this.applyLayerVisibility();
      this.createTextures();
      this.renderFrame();
    }
    if (sizeChanged && this.initialized && this.local.assetsReady) {
      this.waitForAssetsAndDisablePlanes();
    }
  }
  refresh() {
    this.initialized = false;
    this.layers.forEach((layer) => {
      var _a, _b;
      (_a = layer.states) == null ? void 0 : _a.scroll.forEach((state) => state.resetState());
      (_b = layer.states) == null ? void 0 : _b.appear.forEach((state) => {
        layer[state.prop] = state.endValue ?? layer.local.stateEffectProps[state.prop] ?? layer[state.prop];
      });
      if (layer.breakpoints.length) {
        layer.setBreakpointValues(this.getBreakpointWidth());
        this.applyBreakpointUniforms(layer);
      }
      if (layer.preloadedCanvasTexture) {
        layer.preloadedCanvasTexture.shouldUpdate = true;
      }
    });
    requestAnimationFrame(() => {
      if (!this.curtain) return;
      this.curtain.planes.forEach((plane) => {
        plane._canDraw = !!this.local.assetsReady;
      });
      this.scrollY = scrollTop;
      this.applyLayerVisibility();
      this.resize();
      this.handlePlaneCreation();
    });
  }
  getDynamicLayers() {
    return this.layers.filter((n) => isDynamic(n));
  }
  // Event tracks and the mouse move every other dynamic layer, so without these the scene can rest on
  // its last frame. Models count as animated: their clips play on the clock.
  canIdle() {
    return !this.layers.some((n) => {
      var _a;
      return isAnimated(n) || n.isModel || ((_a = n.sublayers) == null ? void 0 : _a.some((sub) => (sub == null ? void 0 : sub.layerType) === "model"));
    });
  }
  createCurtains() {
    const spare = [...spareContexts].find((gl) => !gl.isContextLost());
    spareContexts.delete(spare);
    this.curtain = new Curtains({
      container: this.element,
      canvas: spare == null ? void 0 : spare.canvas,
      premultipliedAlpha: true,
      antialias: false,
      autoRender: false,
      autoResize: false,
      watchScroll: false,
      renderingScale: Math.min(Math.max(0.25, this.renderingScale), 1),
      production: false,
      pixelRatio: this.dpi,
      parallelShaderCompile: true,
      imageBitmaps: true
    });
    if (!this.curtain.gl) {
      console.log("Unicorn.studio was unable to create WebGL context");
      return;
    }
    this.curtain.onError((err) => {
      console.warn("Unicorn.studio scene encountered an error", err);
    });
    this.curtain.onContextLost(() => {
      console.warn("Unicorn.studio scene lost WebGL context");
      const live = scenes.filter((n) => {
        var _a;
        return ((_a = n.curtain) == null ? void 0 : _a.gl) && !n.curtain.gl.isContextLost();
      }).length;
      if (live) contextBudget = Math.min(contextBudget, live + spareContexts.size);
      if (this.suspend()) queueScenePrewarm(this);
    });
    this.scrollY = scrollTop;
  }
  applyBreakpointUniforms(layer) {
    if (!layer.local.bpProps) return;
    layer.getPlanes().forEach((plane) => {
      var _a, _b, _c, _d, _e;
      for (let prop in plane.uniforms) {
        const appearValue = this.getAppearStateUniformValue(layer, prop);
        if (appearValue.hasValue) {
          if ((_b = (_a = layer.states) == null ? void 0 : _a.appear) == null ? void 0 : _b.some((effect) => effect.prop === prop && effect.complete)) {
            updateUniformValues(appearValue.value, plane.uniforms[prop], prop);
          }
          continue;
        }
        const state = resolvePropertyState(layer, prop, {
          breakpointProps: layer.local.bpProps,
          baseValue: (_e = (_d = (_c = layer.data) == null ? void 0 : _c.uniforms) == null ? void 0 : _d[prop]) == null ? void 0 : _e.value,
          sources: ["base", "breakpoint", "runtime"]
        });
        if (state.value !== void 0) {
          updateUniformValues(state.value, plane.uniforms[prop], prop);
        }
      }
    });
  }
  getAppearStateUniformValue(item, prop) {
    var _a, _b;
    const activeEffects = (_b = (_a = item.states) == null ? void 0 : _a.appear) == null ? void 0 : _b.filter((effect) => effect.prop === prop).filter((effect) => {
      var _a2, _b2;
      return !((_a2 = effect.breakpoints) == null ? void 0 : _a2.length) || effect.breakpoints.includes((_b2 = this.currentBreakpoint) == null ? void 0 : _b2.name);
    }).sort((a, b) => (a.transition.delay || 0) - (b.transition.delay || 0));
    if (!(activeEffects == null ? void 0 : activeEffects.length)) {
      return { hasValue: false };
    }
    const completedEffect = [...activeEffects].reverse().find((effect) => effect.complete && effect.endValue !== void 0);
    if (completedEffect) {
      return { hasValue: true, value: completedEffect.endValue };
    }
    const pendingEffect = activeEffects.find((effect) => !effect.complete && effect.value !== void 0);
    if (pendingEffect) {
      return { hasValue: true, value: pendingEffect.value };
    }
    return { hasValue: false };
  }
  // The animation loop passes skipIfIdle: a scene that can idle then leaves its last frame up while no
  // event track, mouse value or render request has moved anything since it was drawn.
  renderFrame(skipIfIdle = false) {
    var _a, _b;
    if (this.destroyed) {
      return;
    }
    if (isCurtainsValid(this.curtain)) {
      this.layers.forEach((item) => {
        item.local.currentFrameMouseValues = null;
      });
      this.local.renderFrameId = (this.local.renderFrameId || 0) + 1;
      const moved = this.handleStateEffects();
      if (skipIfIdle && !moved && this.local.needsFrame === false && this.canIdle()) return;
      this.local.needsFrame = false;
      (_b = (_a = this.curtain).needRender) == null ? void 0 : _b.call(_a);
      this.curtain.render();
      if (this.local.pendingStaticRedrawFinish) {
        const finishStaticRedraw = this.local.pendingStaticRedrawFinish;
        this.local.pendingStaticRedrawFinish = null;
        finishStaticRedraw();
      }
    } else {
      console.warn("Curtains instance is not valid");
    }
  }
  requestSceneRender() {
    if (!isCurtainsValid(this.curtain)) return;
    if (this.rendering) {
      this.local.needsFrame = true;
      return;
    }
    if (typeof this.curtain.requestRender === "function") {
      this.curtain.requestRender();
    } else {
      this.renderFrame();
    }
  }
  requestLayerRender(layer) {
    if (!isCurtainsValid(this.curtain) || !this.local.assetsReady) return;
    const items = this.getSplitOrderedItems();
    let staticIndex = items.static.indexOf(layer);
    if (staticIndex === -1) {
      this.requestSceneRender();
      return;
    }
    const includeItemAndChildEffects = (item) => {
      var _a;
      const itemIndex = items.static.indexOf(item);
      if (itemIndex !== -1) staticIndex = Math.min(staticIndex, itemIndex);
      (_a = item == null ? void 0 : item.getChildEffectItems) == null ? void 0 : _a.call(item).forEach((effect) => {
        const effectIndex = items.static.indexOf(effect);
        if (effectIndex !== -1) staticIndex = Math.min(staticIndex, effectIndex);
      });
    };
    includeItemAndChildEffects(layer);
    const usesBackgroundInput = layer.getPlanes().some((plane) => {
      var _a;
      return (_a = plane.textures) == null ? void 0 : _a.some((texture) => (texture == null ? void 0 : texture._samplerName) === "uBgTexture");
    });
    if (usesBackgroundInput && staticIndex > 0) {
      includeItemAndChildEffects(items.static[staticIndex - 1]);
    }
    items.static.slice(staticIndex).forEach((item) => {
      item.getPlanes().forEach((plane) => {
        plane._canDraw = true;
      });
    });
    if (this.local.staticRedrawQueued) return;
    this.local.staticRedrawQueued = true;
    const finish = () => {
      this.local.staticRedrawQueued = false;
      this.disablePlanes();
    };
    if (this.rendering && !this.paused) {
      this.local.pendingStaticRedrawFinish = finish;
      this.local.needsFrame = true;
    } else if (this.rendering) {
      this.renderFrame();
      finish();
    } else {
      this.renderNFrames(1, finish);
    }
  }
  renderNFrames(count, callback) {
    let index = 0;
    const renderFrame = () => {
      this.renderFrame();
      if (index < count) {
        index++;
        requestAnimationFrame(renderFrame);
      } else if (callback) {
        callback();
      }
    };
    if (!this.rendering) {
      renderFrame();
    }
  }
  setInteractiveParams(params, options) {
    let interactivity = {
      mouse: {
        disableMobile: false,
        disabled: false
      }
    };
    if (options && options.mouse) {
      if ("disableMobile" in options.mouse) {
        interactivity.mouse.disableMobile = options.mouse.disableMobile;
      }
      if ("disabled" in options.mouse) {
        interactivity.mouse.disabled = options.mouse.disabled;
      }
    }
    if (params && params.interactivity && params.interactivity.mouse) {
      if ("disableMobile" in params.interactivity.mouse) {
        interactivity.mouse.disableMobile = params.interactivity.mouse.disableMobile;
      }
      if ("disabled" in params.interactivity.mouse) {
        interactivity.mouse.disabled = params.interactivity.mouse.disabled;
      }
    }
    this.interactivity = interactivity;
  }
  getSplitOrderedItems() {
    let orderedItems = this.getOrderedItems();
    let index = 0;
    let item = orderedItems[index];
    if (item) {
      let parent = item.parentLayer ? item.getParent() : null;
      let dynamicParent = parent && isDynamic(parent);
      let dynamicParentChildren = parent && parent.effects && parent.effects.length && parent.getChildEffectItems().filter((n) => isDynamic(n)).length;
      while (item && !isDynamic(item) && !dynamicParent && !dynamicParentChildren) {
        index++;
        item = orderedItems[index];
        if (item) {
          parent = item.parentLayer ? item.getParent() : null;
          dynamicParent = parent && isDynamic(parent);
          dynamicParentChildren = parent && parent.effects && parent.effects.length && parent.getChildEffectItems().filter((n) => isDynamic(n)).length;
        }
      }
      return {
        static: this.getOrderedItems().splice(0, index),
        dynamic: this.getOrderedItems().splice(index)
      };
    } else {
      return {
        static: [],
        dynamic: []
      };
    }
  }
  initializePlanes(callback, incremental = false) {
    this.initializing = true;
    if (!this.ensureCurtains()) {
      this.initializing = false;
      if (callback) callback(this);
      return;
    }
    const initialize = () => {
      this.handleItemPlanes(() => {
        this.handlePlaneCreation();
        if (callback) callback(this);
      }, incremental);
    };
    if (incremental && !this.local.texturesPreloaded) {
      this.runIdleTasks([() => this.preloadTextures()], initialize);
    } else {
      this.preloadTextures();
      initialize();
    }
  }
  getPassPlane(item, index) {
    var _a;
    return (_a = this.curtain) == null ? void 0 : _a.planes.find((n) => n.userData.id === item.local.id && n.userData.passIndex === index);
  }
  getRenderTargets() {
    var _a;
    return (_a = this.curtain) == null ? void 0 : _a.renderTargets.filter((n) => n.userData.id);
  }
  getPlanes() {
    var _a;
    return (_a = this.curtain) == null ? void 0 : _a.planes.filter((n) => n.type !== "PingPongPlane");
  }
  getPlaneParams(item, index) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const passData = index > 0 ? (_b = (_a = item.data) == null ? void 0 : _a.passes) == null ? void 0 : _b[index - 1] : null;
    const widthSegments = (passData == null ? void 0 : passData.widthSegments) || ((_c = item.data) == null ? void 0 : _c.widthSegments) || 1;
    const heightSegments = (passData == null ? void 0 : passData.heightSegments) || ((_d = item.data) == null ? void 0 : _d.heightSegments) || 1;
    const independentGeometry = (passData == null ? void 0 : passData.independentGeometry) ?? (index === 0 || index == null ? (_e = item.data) == null ? void 0 : _e.independentGeometry : false);
    const uniforms = {
      resolution: {
        name: "uResolution",
        type: "2f",
        value: new Vec2(this.canvasWidth, this.canvasHeight)
      },
      mousePos: {
        name: "uMousePos",
        type: "2f",
        value: new Vec2(0.5)
      },
      time: {
        name: "uTime",
        type: "1f",
        value: 0
      }
    };
    if (item.usesPingPong) {
      uniforms.previousMousePos = {
        name: "uPreviousMousePos",
        type: "2f",
        value: new Vec2(0.5)
      };
    }
    let fragmentShader = item.compiledFragmentShaders[index] || item.compiledFragmentShaders[0];
    let vertexShader = item.compiledVertexShaders[index] ?? item.compiledVertexShaders[0];
    if (item.states) {
      [...item.states.appear, ...item.states.scroll, ...item.states.hover, ...item.states.mousemove].forEach(
        (stateEffect) => {
          if (!uniforms[stateEffect.prop]) {
            if (stateEffect.uniformData) {
              uniforms[stateEffect.prop] = stateEffect.uniformData;
              uniforms[stateEffect.prop].value = item[stateEffect.prop];
            }
          }
        }
      );
    }
    if ((_f = item.data) == null ? void 0 : _f.uniforms) {
      for (let prop in item.data.uniforms) {
        let itemUniforms = item.data.uniforms[prop];
        uniforms[prop] = item.data.uniforms[prop];
        if (((_g = itemUniforms.value) == null ? void 0 : _g.type) === "Vec3") {
          uniforms[prop].value = new Vec3(itemUniforms.value._x, itemUniforms.value._y, itemUniforms.value._z);
        } else if (((_h = itemUniforms.value) == null ? void 0 : _h.type) === "Vec2") {
          uniforms[prop].value = new Vec2(itemUniforms.value._x, itemUniforms.value._y);
        } else if (typeof itemUniforms.value === "object") {
          uniforms[prop].value = deserializeNestedArray(itemUniforms.value);
        }
      }
    }
    uniforms.artboardResolution = {
      name: "uArtboardResolution",
      type: "2f",
      value: new Vec2(this.canvasWidth, this.canvasHeight)
    };
    return {
      fragmentShader,
      vertexShader,
      widthSegments,
      heightSegments,
      independentGeometry,
      // data.depth marks the effects that displace geometry far enough to occlude themselves: they
      // are the ones given a depth buffer, so they are also the ones that should depth test.
      depthTest: (_i = item.data) == null ? void 0 : _i.depth,
      cullFace: (_j = item.data) == null ? void 0 : _j.cullFace,
      texturesOptions: {
        floatingPoint: "half-float",
        premultiplyAlpha: true
      },
      uniforms
    };
  }
  getCompositePlaneRenderOrder(item, orderedItems, itemIndex) {
    const childEffects = item.getChildEffectItems();
    if (childEffects.length === 0) return itemIndex;
    const lastChildEffect = childEffects[childEffects.length - 1];
    const lastEffectIndex = orderedItems.indexOf(lastChildEffect);
    if (lastEffectIndex !== -1) {
      return lastEffectIndex + 1;
    }
    return itemIndex + childEffects.length;
  }
  createPlane(item, passValues) {
    var _a;
    let params;
    if (item.isElement || item.isModel || item.isFlattened) {
      params = this.getPlaneParams(item);
    } else {
      params = this.getPlaneParams(item, passValues ? passValues.index : null);
    }
    params.watchScroll = false;
    let plane;
    try {
      if (!this.curtain.container) {
        throw new Error("Can't find scene container");
      }
      let sampleSize = (passValues == null ? void 0 : passValues.downSample) || (passValues == null ? void 0 : passValues.index) === 0 && ((_a = item.data) == null ? void 0 : _a.downSample);
      let downSample = this.renderingScale;
      if (sampleSize) {
        downSample = typeof sampleSize === "number" ? sampleSize : 0.5;
        downSample *= this.renderingScale;
      }
      if (item.userDownsample && typeof item.userDownsample === "number") {
        downSample *= item.userDownsample;
      }
      plane = new Plane(this.curtain, this.curtain.container, params);
      if (!plane || !plane.userData || !plane.textures) {
        throw new Error("Plane not properly initialized");
      }
      plane.textures.length = 0;
      plane.userData.id = item.local.id;
      plane.userData.layerType = item.layerType;
      plane.userData.type = item.type;
      plane.userData.downSample = downSample;
      return plane;
    } catch (error) {
      console.error("Error creating plane:", error);
      return null;
    }
  }
  clearPingPongTargets(plane) {
    var _a;
    const gl = (_a = this.curtain) == null ? void 0 : _a.gl;
    const targets = (plane == null ? void 0 : plane._targets) || [plane == null ? void 0 : plane.readPass, plane == null ? void 0 : plane.writePass];
    const validTargets = targets.filter(Boolean);
    if (!gl || !validTargets.length) return;
    const previousClearColor = gl.getParameter(gl.COLOR_CLEAR_VALUE);
    if (!previousClearColor) return;
    gl.clearColor(0, 0, 0, 0);
    validTargets.forEach((target) => {
      this.curtain.renderer.bindFrameBuffer(target, true);
      gl.clear(gl.COLOR_BUFFER_BIT);
    });
    this.curtain.renderer.bindFrameBuffer(null);
    gl.clearColor(previousClearColor[0], previousClearColor[1], previousClearColor[2], previousClearColor[3]);
  }
  createPingPongPlane(item, passValues) {
    var _a, _b, _c;
    const passIndex = typeof (passValues == null ? void 0 : passValues.index) === "number" ? passValues.index : 1 + ((passValues == null ? void 0 : passValues.length) || 0);
    let params = this.getPlaneParams(item, passIndex);
    params.widthSegments = 1;
    params.heightSegments = 1;
    params.independentGeometry = false;
    params.targetSize = (_a = item.data) == null ? void 0 : _a.pingPongTargetSize;
    params.texturesOptions = {
      ...params.texturesOptions,
      ...(_b = item.data) == null ? void 0 : _b.pingPongTexturesOptions
    };
    let pingpong = (_c = this.curtain) == null ? void 0 : _c.planes.find((n) => n.type === "PingPongPlane" && n.userData.id === item.local.id);
    if (!pingpong) {
      pingpong = new PingPongPlane(this.curtain, this.curtain.container, params);
      if (!pingpong) return;
      const targetSize = params.targetSize;
      if ((targetSize == null ? void 0 : targetSize.width) && (targetSize == null ? void 0 : targetSize.height)) {
        const targets = pingpong._targets || [pingpong.readPass, pingpong.writePass];
        targets.filter(Boolean).forEach((target) => this.resizeRenderTarget(target, targetSize.width, targetSize.height));
      }
      pingpong.userData.id = item.local.id;
      pingpong.userData.pingpong = true;
      pingpong.userData.passIndex = passIndex;
      pingpong.onReady(() => {
        if (this.destroyed) return;
        this.clearPingPongTargets(pingpong);
        this.setInitialEffectPlaneUniforms(pingpong, item, item == null ? void 0 : item.getParent(), passValues);
        pingpong.userData.isReady = true;
      }).onRender(() => {
        this.setEffectPlaneUniforms(pingpong, item);
      });
    }
    if (!pingpong) return;
    this.handleMediaTextures(pingpong, item, { passIndex });
    return pingpong;
  }
  createEffectPlane(item, passValues) {
    var _a, _b;
    const plane = this.createPlane(item, passValues);
    if (!plane) return;
    const parent = item.getParent();
    let previousBlending;
    if (!plane || !plane.userData || !plane.textures) {
      throw new Error("Plane not properly initialized", plane);
    }
    if (passValues) {
      plane.userData.passIndex = passValues.index;
      plane.userData.length = ((_a = item.data.passes) == null ? void 0 : _a.length) || 0;
      plane.userData.needsPreviousFrame = passValues.needsPreviousFrame;
      if (passValues.needsPreviousFrame === "pass") {
        plane.userData.targetSize = passValues.targetSize;
        plane.userData.floatingPoint = (_b = passValues.texturesOptions) == null ? void 0 : _b.floatingPoint;
      }
      plane.userData.blend = !!passValues.blend;
      Object.entries(passValues).forEach(([prop, value]) => {
        if (plane.uniforms[prop]) plane.uniforms[prop].value = value;
      });
    }
    this.setInitialEffectPlaneUniforms(plane, item, parent, passValues);
    plane.onReady(() => {
      plane.userData.isReady = true;
    }).onRender(() => {
      previousBlending = this.curtain.renderer.state.blending;
      this.curtain.renderer.setBlending(!!plane.userData.blend && plane.visible);
      this.setEffectPlaneUniforms(plane, item);
    }).onAfterRender(() => {
      this.curtain.renderer.setBlending(previousBlending);
      const prevMode = plane.userData.needsPreviousFrame;
      if (prevMode) {
        const passIndex = plane.userData.passIndex ?? 0;
        const prevTargets = item.local.previousFrameTargets || {};
        const prevInputs = item.local.previousFrameInputTargets || {};
        const src = prevMode === "target" ? prevInputs[passIndex] : plane.target;
        const dst = prevTargets[passIndex];
        if (src && dst) this.blitRenderTarget(src, dst);
      }
    });
  }
  createFlattenedPlane(item, schedule = (task) => task(), deferChildEffects = false) {
    var _a;
    const plane = this.createPlane(item);
    if (!plane) return;
    plane.onReady(() => {
      if (this.destroyed) return;
      this.setInitialFlattenedPlaneUniforms(plane, item);
      plane.userData.isReady = true;
    }).onRender(() => this.setFlattenedPlaneUniforms(plane, item));
    if (item.hasRemainingEffects() || item.mask && item.mask !== 0) {
      if (item.hasRemainingEffects() && !deferChildEffects) {
        item.getChildEffectItems().forEach((effect) => {
          if (!effect.getPlanes().length) {
            this.createEffectPlanes(effect, schedule);
          }
        });
      }
      if ((_a = item.data) == null ? void 0 : _a.compositeShader) {
        schedule(() => this.createCompositePlane(item));
      }
    }
  }
  createGroupPlane(item, schedule = (task) => task(), deferChildEffects = false) {
    const params = {
      vertexShader: `#version 300 es
precision highp float;
in vec3 aVertexPosition;
in vec2 aTextureCoord;
uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uTextureMatrix;
out vec2 vTextureCoord;
void main() {
  gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
  vTextureCoord = (uTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
}`,
      fragmentShader: `#version 300 es
precision highp float;
in vec2 vTextureCoord;
out vec4 fragColor;
void main() {
  fragColor = vec4(0.0);
}`,
      texturesOptions: {
        premultiplyAlpha: true
      },
      uniforms: {}
    };
    const plane = new Plane(this.curtain, this.curtain.container, params);
    if (!plane) return;
    plane.textures.length = 0;
    plane.userData.id = item.local.id;
    plane.userData.isGroupSource = true;
    plane.onReady(() => {
      plane.userData.isReady = true;
    });
    if (!deferChildEffects) {
      item.getChildEffectItems().forEach((effect) => {
        if (!effect.getPlanes().length) {
          this.createEffectPlanes(effect, schedule);
        }
      });
    }
    schedule(() => this.createCompositePlane(item));
  }
  createElementPlane(item, schedule = (task) => task()) {
    const plane = this.createPlane(item);
    if (!plane) return;
    if (item.getChildEffectItems().filter((effect) => effect.visible).length > 0) {
      schedule(() => this.createCompositePlane(item));
    }
    if (item.layerType === "text" && item.isGpuElement) {
      this.bindTextAtlasTextures(item);
    }
    plane.onReady(() => {
      this.setInitialElementPlaneUniforms(plane, item);
      plane.userData.isReady = true;
    }).onRender(() => {
      this.setElementPlaneUniforms(plane, item);
      if (!plane.userData.drawsInPlace) return;
      const factor = getInPlaceBlendFactor(item);
      if (factor) {
        const gl = this.curtain.gl;
        this.curtain.renderer.setBlending(true);
        gl.blendFuncSeparate(gl.ONE, gl[factor], gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      } else {
        plane.userData.drawsInPlace = false;
        this.curtain.renderer.nextRender.add(() => this.createTextures());
        this.requestSceneRender();
      }
    }).onAfterRender(() => {
      if (plane.userData.drawsInPlace) this.curtain.renderer.setBlendFunc();
    });
  }
  /**
   * Create a composite plane for GPU elements with effects.
   * Uses packaged compositing shader from item.data.compositeShader.
   */
  createCompositePlane(item) {
    var _a, _b, _c;
    if (!((_a = item.data) == null ? void 0 : _a.compositeShader)) {
      console.warn("No composite shader data for element");
      return null;
    }
    const compositeParams = {
      vertexShader: item.data.compositeShader.vertexShader,
      fragmentShader: item.data.compositeShader.fragmentShader,
      texturesOptions: {
        premultiplyAlpha: true
      },
      uniforms: {}
    };
    if (item.data.compositeUniforms) {
      for (let prop in item.data.compositeUniforms) {
        let uniformData = item.data.compositeUniforms[prop];
        compositeParams.uniforms[prop] = { ...uniformData };
        if (((_b = uniformData.value) == null ? void 0 : _b.type) === "Vec3") {
          compositeParams.uniforms[prop].value = new Vec3(
            uniformData.value._x,
            uniformData.value._y,
            uniformData.value._z
          );
        } else if (((_c = uniformData.value) == null ? void 0 : _c.type) === "Vec2") {
          compositeParams.uniforms[prop].value = new Vec2(uniformData.value._x, uniformData.value._y);
        }
      }
    }
    const plane = new Plane(this.curtain, this.curtain.container, compositeParams);
    if (!plane || !plane.userData) {
      console.warn("Failed to create composite plane");
      return null;
    }
    plane.textures.length = 0;
    plane.userData.id = item.local.id;
    plane.userData.isComposite = true;
    plane.onReady(() => {
      plane.userData.isReady = true;
    }).onRender(() => {
      this.setCompositePlaneUniforms(plane, item);
    });
    return plane;
  }
  /**
   * Set uniforms for composite planes.
   * Only updates runtime uniforms that were preserved during shader optimization.
   */
  setCompositePlaneUniforms(plane, item) {
    var _a, _b, _c;
    if (!(plane == null ? void 0 : plane.uniforms) || !plane.visible) return;
    if (plane.uniforms.resolution) {
      plane.uniforms.resolution.value.x = this.curtain.canvas.width;
      plane.uniforms.resolution.value.y = this.curtain.canvas.height;
    }
    if (plane.uniforms.artboardResolution) {
      plane.uniforms.artboardResolution.value.x = this.canvasWidth;
      plane.uniforms.artboardResolution.value.y = this.canvasHeight;
    }
    if (plane.uniforms.opacity) {
      plane.uniforms.opacity.value = ((_a = item.local) == null ? void 0 : _a.gpuTextFallback) ? 0 : ((_c = (_b = item.local) == null ? void 0 : _b.stateEffectProps) == null ? void 0 : _c.opacity) ?? item.opacity ?? 1;
    }
    if (plane.uniforms.mousePos) {
      if (!item.local.currentFrameMouseValues) {
        item.local.currentFrameMouseValues = this.calculateItemMouseValues(item);
      }
      const mouseValues = item.local.currentFrameMouseValues;
      if (mouseValues && this.mouse.movedInView) {
        plane.uniforms.mousePos.value.x = mouseValues.x;
        plane.uniforms.mousePos.value.y = mouseValues.y;
      }
    }
  }
  handleMediaTextures(plane, item, data) {
    var _a, _b, _c, _d, _e;
    const textures = ((_b = (_a = item.data) == null ? void 0 : _a.textures) == null ? void 0 : _b.length) ? item.data.textures : [item.texture, (_c = item.data) == null ? void 0 : _c.texture].filter((texture) => texture == null ? void 0 : texture.src);
    const passIndex = data.passIndex ?? 0;
    const passShaders = [
      item.compiledFragmentShaders[passIndex],
      ((_d = item.compiledVertexShaders) == null ? void 0 : _d[passIndex]) ?? ((_e = item.compiledVertexShaders) == null ? void 0 : _e[0])
    ];
    textures.filter((n) => n == null ? void 0 : n.src).forEach((texture) => {
      const passNeedsTexture = passShaders.some((shader) => shader == null ? void 0 : shader.includes(texture.sampler));
      if (passNeedsTexture) {
        if (texture.type === "video") {
          const source = texture.sampler === "uVideoTexture" && item.src ? item.src : texture.src;
          if (!source || plane.textures.some((t) => t._samplerName === texture.sampler)) {
            return;
          }
          const videoElement = this.preloadVideo(source);
          if (!videoElement) {
            return;
          }
          plane.loadVideo(
            videoElement,
            {
              premultipliedAlpha: true,
              sampler: texture.sampler
            },
            (videoTexture) => {
              const video = videoTexture == null ? void 0 : videoTexture.source;
              if (!video) return;
              video.loop = texture.loop ?? item.loop ?? true;
              video.playbackRate = texture.playbackRate || item.playbackRate || 1;
              this.playVideoTexture(plane, videoTexture, video);
              plane.userData.textureLoaded = true;
            }
          );
          return;
        }
        this.preloadImage(
          texture.src,
          texture.sampler,
          (tex) => {
            if (tex) {
              const hasTex = plane.textures.some((t) => t._samplerName === texture.sampler);
              if (!hasTex) {
                plane.addTexture(tex);
              }
              plane.userData.textureLoaded = true;
            }
          },
          false
        );
      }
    });
    if (item.type === "video" && item.src) {
      if (plane.textures.some((t) => t._samplerName === "uVideoTexture")) {
        return;
      }
      const videoElement = this.preloadVideo(item.src);
      plane.loadVideo(
        videoElement,
        {
          premultipliedAlpha: true,
          sampler: "uVideoTexture"
        },
        (videoTexture) => {
          const video = videoTexture == null ? void 0 : videoTexture.source;
          if (!video) return;
          video.loop = item.hasOwnProperty("loop") ? item.loop : true;
          video.playbackRate = item.playbackRate || 1;
          this.playVideoTexture(plane, videoTexture, video);
          plane.userData.textureLoaded = true;
        }
      );
    }
  }
  handleEffectPlane(item, i, data, renderTargets) {
    var _a;
    const plane = "passIndex" in data ? this.getPassPlane(item, data.passIndex) : item.getPlane();
    if (!plane) return false;
    let target = renderTargets[i - 1];
    let pingpong = (_a = this.curtain) == null ? void 0 : _a.planes.find((n) => n.type === "PingPongPlane" && n.userData.id === item.local.id);
    let fragShader = item.compiledFragmentShaders[data.passIndex ?? 0];
    let vertexShader = item.compiledVertexShaders[data.passIndex ?? 0] ?? item.compiledVertexShaders[0];
    if (pingpong) {
      if ((fragShader == null ? void 0 : fragShader.includes("uPingPongTexture")) || (vertexShader == null ? void 0 : vertexShader.includes("uPingPongTexture"))) {
        createTex(plane, "uPingPongTexture", pingpong.getTexture());
      }
    }
    if (target) {
      createTex(plane, "uTexture", target.getTexture());
    } else {
      createTex(plane, "uTexture");
    }
    if (fragShader == null ? void 0 : fragShader.includes("uBgTexture")) {
      let bgTarget = renderTargets[i - (1 + data.passIndex)];
      if (bgTarget) {
        createTex(plane, "uBgTexture", bgTarget.getTexture());
      }
    }
    if (data.needsPreviousFrame) {
      createTex(plane, "uPreviousFrameTexture", this.createPreviousFrameTarget(item, data, i, renderTargets));
    }
    this.handleMediaTextures(plane, item, data);
  }
  handleModelPlane(item, i, renderTargets) {
    var _a;
    const plane = item.getPlane();
    let target = renderTargets[i - 1];
    let previousLayer = this.findPreviousLayerForMask(item, 0);
    plane.textures.forEach((texture) => {
    });
    plane.textures = [];
    const hasEffects = item.getChildEffectItems().some((effect) => effect.visible);
    if (item.local.renderTarget && !hasEffects) {
      plane.addTexture(item.local.renderTarget.getTexture());
    } else if (target) {
      createTex(plane, "uTexture", target.getTexture());
    } else {
      createTex(plane, "uTexture");
    }
    if ((_a = previousLayer == null ? void 0 : previousLayer.local) == null ? void 0 : _a.lastTarget) {
      createTex(plane, "uBgTexture", previousLayer.local.lastTarget.getTexture());
    } else {
      createTex(plane, "uBgTexture");
    }
  }
  createPreviousFrameTarget(item, data, planeIndex, renderTargets) {
    var _a, _b, _c;
    const passIndex = data.passIndex ?? data.index ?? 0;
    const downSample = data.downSample || 1;
    const floatingPoint = data.floatingPoint || null;
    const targetWidth = ((_a = data.targetSize) == null ? void 0 : _a.width) || this.curtain.canvas.width * downSample;
    const targetHeight = ((_b = data.targetSize) == null ? void 0 : _b.height) || this.curtain.canvas.height * downSample;
    if (!item.local.previousFrameTargets) item.local.previousFrameTargets = {};
    if (!item.local.previousFrameInputTargets) item.local.previousFrameInputTargets = {};
    const existing = item.local.previousFrameTargets[passIndex];
    if (existing && (existing.userData.floatingPoint || null) !== floatingPoint) {
      existing.remove();
      item.local.previousFrameTargets[passIndex] = null;
    }
    if (!item.local.previousFrameTargets[passIndex]) {
      item.local.previousFrameTargets[passIndex] = new RenderTarget(this.curtain, {
        depth: false,
        clear: false,
        scaleWithCanvas: !((_c = data.targetSize) == null ? void 0 : _c.width),
        maxWidth: targetWidth,
        maxHeight: targetHeight,
        ...floatingPoint ? { texturesOptions: { floatingPoint } } : {}
      });
      item.local.previousFrameTargets[passIndex].userData.isPingPong = true;
      item.local.previousFrameTargets[passIndex].userData.isPreviousFrame = true;
      item.local.previousFrameTargets[passIndex].userData.floatingPoint = floatingPoint;
    }
    if (data.needsPreviousFrame === "target" && planeIndex !== void 0) {
      item.local.previousFrameInputTargets[passIndex] = renderTargets[planeIndex - (1 + data.passIndex)];
    }
    return item.local.previousFrameTargets[passIndex].getTexture();
  }
  findPreviousLayerForMask(item, maskDepthLayer) {
    var _a;
    const topLevelItems = this.layers.filter((layer) => !layer.parentLayer);
    const currentIndex = topLevelItems.indexOf(item);
    if (currentIndex < 0) return null;
    const boundaryIndex = currentIndex - maskDepthLayer - 1;
    if (boundaryIndex < 0) return null;
    const searchStart = Math.max(0, boundaryIndex);
    for (let i = searchStart; i >= 0; i--) {
      const previousLayer = topLevelItems[i];
      if ((previousLayer == null ? void 0 : previousLayer.visible) && ((_a = previousLayer == null ? void 0 : previousLayer.local) == null ? void 0 : _a.lastTarget) && previousLayer !== item) {
        return previousLayer;
      }
    }
    return null;
  }
  handleFlattenedPlane(item, i, renderTargets) {
    var _a;
    const plane = item.getPlane();
    if (!plane) return;
    let target = renderTargets[i - 1];
    if (target) {
      createTex(plane, "uBgTexture", target.getTexture());
    }
    if ((_a = item.data) == null ? void 0 : _a.textures) {
      item.data.textures.forEach((texDef) => {
        if (texDef.type === "canvas") {
          if (item.local.canvasTextures && item.local.canvasTextures[texDef.sublayerIndex]) {
            plane.addTexture(item.local.canvasTextures[texDef.sublayerIndex]);
          }
        } else {
          this.ensureFlattenedTexture(item, texDef, plane);
        }
      });
    }
  }
  ensureFlattenedPlaneTextures(plane, item) {
    var _a;
    if (!plane || !((_a = item.data) == null ? void 0 : _a.textures)) return;
    item.data.textures.forEach((texDef) => {
      var _a2;
      if (plane.textures.some((t) => t._samplerName === texDef.sampler)) {
        return;
      }
      if (texDef.type === "canvas") {
        const tex = (_a2 = item.local.canvasTextures) == null ? void 0 : _a2[texDef.sublayerIndex];
        if (tex) plane.addTexture(tex);
      } else {
        this.ensureFlattenedTexture(item, texDef, plane);
      }
    });
  }
  handleElementPlane(item, i, renderTargets) {
    var _a;
    const plane = item.getPlanes().find((p) => !p.userData.isComposite);
    if (!plane) return false;
    const effects = item.getChildEffectItems().filter((effect) => effect.visible);
    let target = renderTargets[i - 1];
    let previousLayerTarget;
    if (item.mask && item.maskDepthLayer > 0) {
      const previousLayer = this.findPreviousLayerForMask(item, item.maskDepthLayer ?? 0);
      if (previousLayer) {
        previousLayerTarget = previousLayer.local.lastTarget;
      }
    }
    if (item.isGpuElement) {
      if (item.layerType === "image") {
        if (!plane.textures.some((t) => t._samplerName === "uSourceImage")) {
          if (item.local.sourceTexture) {
            plane.addTexture(item.local.sourceTexture);
            item.local.imageReady = true;
          } else {
            this.ensureImageLayerTexture(item, plane);
          }
        }
      } else if (item.shapeShaderMode === "custom" || item.layerType === "text") {
        this.handleMediaTextures(plane, item, {});
      }
      const samplesBackdrop = effects.length === 0 || /\b(?:texture|textureLod|texelFetch)\s*\(\s*uBgTexture\b/.test(((_a = item.compiledFragmentShaders) == null ? void 0 : _a[0]) || "");
      if (samplesBackdrop && target) {
        createTex(plane, "uBgTexture", plane.userData.drawsInPlace ? null : target.getTexture());
        if (previousLayerTarget && item.mask) {
          createTex(plane, "uPreviousLayerTexture", previousLayerTarget.getTexture());
        }
      }
      return;
    }
    if (!effects.length) {
      plane.textures.length = 0;
    }
    if (target && effects.length) {
      createTex(plane, "uTexture", target.getTexture());
    } else if (plane && item.preloadedCanvasTexture) {
      plane.addTexture(item.preloadedCanvasTexture);
    }
    if (target) {
      if (effects.length) {
        let planeCount = effects.reduce((a, b) => a + b.getPlanes().length, 0);
        target = renderTargets[i - (1 + planeCount)];
      }
      if (target) {
        createTex(plane, "uBgTexture", target.getTexture());
        if (previousLayerTarget && item.mask) {
          createTex(plane, "uPreviousLayerTexture", previousLayerTarget.getTexture());
        }
      }
    }
  }
  handleCompositePlane(item, i, orderedPlanes, renderTargets) {
    const plane = item.getPlanes().find((p) => p.userData.isComposite);
    if (!plane) return;
    let previousLayerTarget;
    if (item.mask && item.maskDepthLayer > 0) {
      const previousLayer = this.findPreviousLayerForMask(item, item.maskDepthLayer ?? 0);
      if (previousLayer) {
        previousLayerTarget = previousLayer.local.lastTarget;
      }
    }
    const lastEffectTarget = renderTargets[i - 1];
    if (lastEffectTarget) {
      createTex(plane, "uTexture", lastEffectTarget.getTexture());
    }
    const firstPlaneIndex = orderedPlanes.findIndex((p) => p.userData.id === item.local.id && !p.userData.isComposite);
    const bgTargetIndex = firstPlaneIndex > 0 ? firstPlaneIndex - 1 : -1;
    const bgTarget = bgTargetIndex >= 0 ? renderTargets[bgTargetIndex] : null;
    if (bgTarget) {
      createTex(plane, "uBgTexture", bgTarget.getTexture());
      if (previousLayerTarget && item.mask) {
        createTex(plane, "uPreviousLayerTexture", previousLayerTarget.getTexture());
      }
    }
  }
  handleChildEffectPlane(item, i, data, renderTargets) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const plane = "passIndex" in data ? this.getPassPlane(item, data.passIndex) : item.getPlane();
    const parent = item.getParent();
    if (!plane || !parent) return;
    let target = renderTargets[i - 1];
    let pingpong = (_a = this.curtain) == null ? void 0 : _a.planes.find((n) => n.type === "PingPongPlane" && n.userData.id === item.local.id);
    let fragShader = item.compiledFragmentShaders[data.passIndex ?? 0];
    let vertexShader = item.compiledVertexShaders[data.passIndex ?? 0] ?? item.compiledVertexShaders[0];
    let effects = parent.effects.filter((n) => {
      if (this.layers.find((o) => o.parentLayer === n)) {
        return this.layers.find((o) => o.parentLayer === n);
      }
    });
    let effectIndex = effects.indexOf(item.parentLayer);
    let lastEffect = effects.at(-1) === effects[effectIndex];
    let lastPass = data.passIndex === data.length;
    const isGpuParent = parent.isGpuElement || parent.isFlattened || parent.isModel;
    const parentSourceTexture = parent.isModel ? (_b = parent.local.renderTarget) == null ? void 0 : _b.getTexture() : (_d = (_c = parent.getPlanes().find((p) => !p.userData.isComposite)) == null ? void 0 : _c.target) == null ? void 0 : _d.getTexture();
    if (pingpong) {
      if ((fragShader == null ? void 0 : fragShader.includes("uPingPongTexture")) || (vertexShader == null ? void 0 : vertexShader.includes("uPingPongTexture"))) {
        createTex(plane, "uPingPongTexture", pingpong.getTexture());
      }
    }
    if (fragShader == null ? void 0 : fragShader.includes("uBgTexture")) {
      if (effectIndex && data.length > 1) {
        let bgTarget = renderTargets[i - (1 + data.length)];
        if (bgTarget) {
          createTex(plane, "uBgTexture", bgTarget.getTexture());
        }
      } else if (parent.isGroup) {
        if (target) {
          createTex(plane, "uBgTexture", target.getTexture());
        }
      } else if (!isGpuParent) {
        if ((_f = (_e = parent.preloadedCanvasTexture) == null ? void 0 : _e.userData) == null ? void 0 : _f.used) {
          plane.loadCanvas(
            parent.local.canvas,
            {
              sampler: "uBgTexture",
              premultiplyAlpha: true
            },
            (tex) => {
              tex.shouldUpdate = parent.preloadedCanvasTexture.shouldUpdate;
            }
          );
        } else if (parent.preloadedCanvasTexture) {
          parent.preloadedCanvasTexture._samplerName = "uBgTexture";
          plane.addTexture(parent.preloadedCanvasTexture);
        }
      } else {
        createTex(plane, "uBgTexture", parentSourceTexture);
      }
    }
    if (target && (effectIndex || data.passIndex)) {
      if (item.isMask) {
        if (!data.length || lastEffect && lastPass) {
          if (!isGpuParent && parent.preloadedCanvasTexture) {
            plane.addTexture(parent.preloadedCanvasTexture);
          } else {
            createTex(plane, "uMaskTexture", parentSourceTexture);
          }
        }
      }
      createTex(plane, "uTexture", target.getTexture());
    } else {
      if (item.isMask) {
        if (!data.length || lastEffect && lastPass) {
          if (!isGpuParent && parent.preloadedCanvasTexture) {
            plane.addTexture(parent.preloadedCanvasTexture);
          } else {
            createTex(plane, "uMaskTexture", parentSourceTexture);
          }
        }
        if (lastEffect && lastPass && !isGpuParent) {
          plane.addTexture(parent.preloadedCanvasTexture);
        } else if (target) {
          createTex(plane, "uTexture", target.getTexture());
        } else {
          createTex(plane, "uTexture");
        }
        target = parent.isModel ? null : renderTargets[i - 2];
        if (target) {
          createTex(plane, "uTexture", target.getTexture());
        }
      } else if (fragShader == null ? void 0 : fragShader.includes("uTexture")) {
        if (parent.isGroup && target) {
          createTex(plane, "uTexture", target.getTexture());
        } else if (isGpuParent) {
          createTex(plane, "uTexture", parentSourceTexture);
        } else if (parent.preloadedCanvasTexture) {
          plane.addTexture(parent.preloadedCanvasTexture);
          if (parent.preloadedCanvasTexture) parent.preloadedCanvasTexture.userData.used = true;
        } else {
          createTex(plane, "uTexture", target.getTexture());
        }
      }
    }
    if (data.needsPreviousFrame) {
      createTex(plane, "uPreviousFrameTexture", this.createPreviousFrameTarget(item, data, i, renderTargets));
    }
    if (item.type === "custom") {
      createTex(plane, "uCustomTexture", (_h = (_g = renderTargets[i]) == null ? void 0 : _g.getTexture) == null ? void 0 : _h.call(_g));
    }
    this.handleMediaTextures(plane, item, data);
  }
  runIdleTasks(tasks, callback) {
    let index = 0;
    const runNext = () => {
      if (this.destroyed) {
        this.initializing = false;
        return;
      }
      if (scrollActive && !this.isInView || document.hidden) {
        setTimeout(() => scheduleIdleWork(runNext), 80);
        return;
      }
      if (index < tasks.length) {
        tasks[index++]();
        scheduleIdleWork(runNext);
      } else if (callback) {
        callback();
      }
    };
    scheduleIdleWork(runNext);
  }
  createPlanes(callback, incremental = false) {
    const tasks = [];
    const schedule = incremental ? (task) => tasks.push(task) : (task) => task();
    this.getOrderedItems().forEach((item) => {
      if (item.layerType === "text" && item.htmlOnly) {
        return;
      }
      schedule(() => {
        if (!item.getPlanes().length) {
          if (item.isGroup) {
            this.createGroupPlane(item, schedule, incremental);
          } else if (item.isFlattened) {
            this.createFlattenedPlane(item, schedule, incremental);
          } else if (item.isElement) {
            this.createElementPlane(item, schedule);
          } else if (item.isModel) {
            this.createModelPlane(item);
          } else {
            this.createEffectPlanes(item, schedule);
          }
        }
      });
    });
    const finish = () => {
      this.calculateRenderOrders();
      if (callback) callback();
    };
    if (incremental) {
      this.runIdleTasks(tasks, finish);
    } else {
      finish();
    }
  }
  calculateRenderOrders() {
    var _a;
    let renderOrder = -9999;
    const setLayerRenderOrders = (item) => {
      var _a2, _b, _c;
      if (item.isBackground) {
        (_a2 = item.getPlane()) == null ? void 0 : _a2.setRenderOrder(renderOrder);
        return;
      }
      const mainPlanes = item.getPlanes().filter((p) => !p.userData.isComposite);
      const mainFirst = item.isGpuElement || item.isFlattened && (((_b = item.hasRemainingEffects) == null ? void 0 : _b.call(item)) || item.mask && item.mask !== 0);
      if (mainFirst) {
        mainPlanes.forEach((plane) => plane.setRenderOrder(renderOrder++));
      }
      if ((_c = item.effects) == null ? void 0 : _c.length) {
        item.getChildEffectItems().forEach((effect) => {
          if (!effect.visible) return;
          effect.getPlanes().forEach((plane) => plane.setRenderOrder(renderOrder++));
        });
      }
      if (!mainFirst) {
        mainPlanes.forEach((plane) => plane.setRenderOrder(renderOrder++));
      }
      const compositePlane = item.getPlanes().find((p) => p.userData.isComposite);
      if (compositePlane) {
        compositePlane.setRenderOrder(renderOrder++);
      }
    };
    this.layers.filter((n) => !n.parentLayer && !n.groupLayer).forEach((item) => {
      if (item.isGroup) {
        item.getPlanes().filter((p) => !p.userData.isComposite).forEach((plane) => plane.setRenderOrder(renderOrder++));
        item.getMemberItems().filter((member) => member.visible !== false).forEach((member) => {
          setLayerRenderOrders(member);
        });
        item.getChildEffectItems().forEach((effect) => {
          if (!effect.visible) return;
          effect.getPlanes().forEach((plane) => plane.setRenderOrder(renderOrder++));
        });
        const compositePlane = item.getPlanes().find((p) => p.userData.isComposite);
        if (compositePlane) {
          compositePlane.setRenderOrder(renderOrder++);
        }
        return;
      }
      setLayerRenderOrders(item);
    });
    const sortedPlanes = this.getPlanes().filter((n) => n.visible).sort((a, b) => a.renderOrder - b.renderOrder);
    const last = sortedPlanes.at(-1);
    if (last == null ? void 0 : last.target) {
      const target = last.target;
      (_a = last.removeRenderTarget) == null ? void 0 : _a.call(last);
      target.remove();
    }
  }
  createModelPlane(item) {
    const plane = this.createPlane(item);
    if (plane) {
      plane.onReady(() => {
        plane.userData.isReady = true;
        plane.userData.createdAt = performance.now();
        let downSample = item.userDownsample || 1;
        let targetWidth = this.curtain.canvas.width * downSample;
        let targetHeight = this.curtain.canvas.height * downSample;
        if (!item.local.renderTarget) {
          item.local.renderTarget = new RenderTarget(this.curtain, {
            depth: true,
            maxWidth: targetWidth,
            maxHeight: targetHeight,
            texturesOptions: {
              sampler: "uTexture",
              premultiplyAlpha: true
            }
          });
          if (!item.local.rendererLoaded && item.visible !== false && !item.local.rendererLoading) {
            item.local.rendererLoading = true;
            Promise.resolve(item.loadRenderer()).finally(() => {
              item.local.rendererLoading = false;
            });
          }
        }
      }).onRender(() => {
        if (!plane.visible) return;
        this.setModelPlaneUniforms(plane, item);
        if (this.curtain.gl) {
          item.renderModel();
        }
      });
    }
  }
  createEffectPlanes(item, schedule = (task) => task()) {
    var _a, _b, _c, _d, _e;
    const effect = item.data;
    const customFirstPass = item.type === "custom" ? (_a = item.customPasses) == null ? void 0 : _a[0] : null;
    const passLength = item.type === "custom" ? ((_b = item.customPasses) == null ? void 0 : _b.length) || (((_c = effect.passes) == null ? void 0 : _c.length) || 0) + 1 : (((_d = effect.passes) == null ? void 0 : _d.length) || 0) + 1;
    const hasPingPongPass = !!((_e = item.customPasses) == null ? void 0 : _e.some((pass) => pass == null ? void 0 : pass.pingPong));
    if (effect.passes && effect.passes.length) {
      const firstPassParams = {
        index: 0,
        downSample: (customFirstPass == null ? void 0 : customFirstPass.downSample) ?? effect.downSample,
        length: passLength,
        includeBg: customFirstPass == null ? void 0 : customFirstPass.includeBg,
        needsPreviousFrame: (customFirstPass == null ? void 0 : customFirstPass.needsPreviousFrame) ?? effect.needsPreviousFrame,
        targetSize: customFirstPass == null ? void 0 : customFirstPass.targetSize,
        texturesOptions: customFirstPass == null ? void 0 : customFirstPass.texturesOptions,
        blend: (customFirstPass == null ? void 0 : customFirstPass.blend) ?? effect.blend
      };
      if (customFirstPass == null ? void 0 : customFirstPass.pingPong) {
        schedule(() => this.createPingPongPlane(item, firstPassParams));
      } else {
        schedule(() => this.createEffectPlane(item, firstPassParams));
      }
      effect.passes.forEach((pass, index) => {
        const passParams = {
          index: index + 1,
          length: passLength,
          downSample: pass.downSample,
          includeBg: pass.includeBg,
          needsPreviousFrame: pass.needsPreviousFrame,
          targetSize: pass.targetSize,
          texturesOptions: pass.texturesOptions,
          widthSegments: pass.widthSegments,
          heightSegments: pass.heightSegments,
          independentGeometry: pass.independentGeometry,
          blend: pass.blend,
          [pass.prop]: pass.value
        };
        if (pass.pingPong) {
          schedule(() => this.createPingPongPlane(item, passParams));
        } else {
          schedule(() => this.createEffectPlane(item, passParams));
        }
      });
      if (item.usesPingPong && !hasPingPongPass) {
        schedule(() => this.createPingPongPlane(item, effect.passes));
      }
    } else {
      const firstPassParams = customFirstPass || effect.needsPreviousFrame ? {
        index: 0,
        downSample: (customFirstPass == null ? void 0 : customFirstPass.downSample) ?? effect.downSample,
        length: passLength,
        includeBg: customFirstPass == null ? void 0 : customFirstPass.includeBg,
        needsPreviousFrame: (customFirstPass == null ? void 0 : customFirstPass.needsPreviousFrame) ?? effect.needsPreviousFrame,
        targetSize: customFirstPass == null ? void 0 : customFirstPass.targetSize,
        texturesOptions: customFirstPass == null ? void 0 : customFirstPass.texturesOptions,
        blend: (customFirstPass == null ? void 0 : customFirstPass.blend) ?? effect.blend
      } : null;
      if (customFirstPass == null ? void 0 : customFirstPass.pingPong) {
        schedule(() => this.createPingPongPlane(item, firstPassParams));
      } else if (firstPassParams) {
        schedule(() => this.createEffectPlane(item, firstPassParams));
      } else {
        schedule(() => this.createEffectPlane(item));
      }
      if (item.usesPingPong && !hasPingPongPass) {
        schedule(() => this.createPingPongPlane(item));
      }
    }
  }
  createTextures(callback, incremental = false) {
    const orderedPlanes = this.getPlanes().filter((n) => n.visible).sort((a, b) => a.renderOrder - b.renderOrder);
    const renderTargets = this.getRenderTargets();
    const getPlaneItem = (plane) => this.layers.find((n) => n.local.id === plane.userData.id);
    const staticItems = new Set(this.getSplitOrderedItems().static);
    const hasDepthMask = this.layers.some((layer) => layer.visible && layer.mask && layer.maskDepthLayer > 0);
    const len = orderedPlanes.length;
    const tasks = [];
    for (let i = 0; i < len; i++) {
      tasks.push(() => {
        const plane = orderedPlanes[i];
        let item = getPlaneItem(plane);
        if (i < len - 1) {
          this.assignRenderTargetToPlane(orderedPlanes, renderTargets, i, item, plane);
        }
        const previous = orderedPlanes[i - 1];
        plane.userData.drawsInPlace = !!previous && !hasDepthMask && !staticItems.has(getPlaneItem(previous)) && this.canDrawInPlace(item, plane, previous);
        this.handleTextures(item, i, plane.userData, orderedPlanes, renderTargets);
        item.local.lastTarget = plane.target;
      });
    }
    tasks.push(() => {
      for (let i = len - 1; i > 0; i--) {
        if (!orderedPlanes[i].userData.drawsInPlace) continue;
        const previous = orderedPlanes[i - 1];
        previous.setRenderTarget(orderedPlanes[i].target);
        getPlaneItem(previous).local.lastTarget = previous.target;
      }
    });
    if (incremental) {
      this.runIdleTasks(tasks, callback);
    } else {
      tasks.forEach((task) => task());
      if (callback) callback();
    }
  }
  resizeRenderTarget(renderTarget, width, height) {
    var _a, _b, _c;
    const currentWidth = ((_a = renderTarget._size) == null ? void 0 : _a.width) || 0;
    const currentHeight = ((_b = renderTarget._size) == null ? void 0 : _b.height) || 0;
    if (Math.abs(currentWidth - width) <= 1 && Math.abs(currentHeight - height) <= 1) {
      return;
    }
    const texture = (_c = renderTarget.textures) == null ? void 0 : _c[0];
    if (renderTarget._frameBuffer && (texture == null ? void 0 : texture._copiedFrom)) {
      return;
    }
    renderTarget._size = { width, height };
    renderTarget._maxSize = { width, height };
    renderTarget._minSize = { width, height };
    if (!renderTarget._frameBuffer) {
      return;
    }
    if (texture) {
      texture._size = { width, height };
      const gl = this.curtain.gl;
      gl.bindTexture(gl.TEXTURE_2D, texture._sampler.texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        texture._globalParameters.internalFormat,
        width,
        height,
        0,
        texture._globalParameters.format,
        texture._globalParameters.type,
        null
      );
      this.curtain.renderer.bindFrameBuffer(renderTarget, true);
      if (renderTarget._depth && renderTarget._depthBuffer) {
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderTarget._depthBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, width, height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderTarget._depthBuffer);
      }
      this.curtain.renderer.bindFrameBuffer(null);
    }
  }
  ensureRenderTargetInitialized(renderTarget, width, height) {
    if (!renderTarget) return;
    if (width && height) {
      this.resizeRenderTarget(renderTarget, width, height);
    }
    if (!renderTarget._frameBuffer) {
      this.curtain.renderer.bindFrameBuffer(renderTarget, true);
      this.curtain.renderer.bindFrameBuffer(null);
    }
  }
  blitRenderTarget(sourceTarget, destTarget) {
    var _a, _b, _c;
    const gl = (_a = this.curtain) == null ? void 0 : _a.gl;
    if (!gl || typeof gl.blitFramebuffer !== "function") return;
    const w = ((_b = sourceTarget._size) == null ? void 0 : _b.width) || this.curtain.canvas.width;
    const h = ((_c = sourceTarget._size) == null ? void 0 : _c.height) || this.curtain.canvas.height;
    this.ensureRenderTargetInitialized(sourceTarget, w, h);
    this.ensureRenderTargetInitialized(destTarget, w, h);
    if (!(sourceTarget == null ? void 0 : sourceTarget._frameBuffer) || !(destTarget == null ? void 0 : destTarget._frameBuffer)) return;
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, sourceTarget._frameBuffer);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, destTarget._frameBuffer);
    gl.blitFramebuffer(0, 0, w, h, 0, 0, w, h, gl.COLOR_BUFFER_BIT, gl.NEAREST);
    gl.bindFramebuffer(gl.READ_FRAMEBUFFER, null);
    gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
  }
  // A lone element plane whose blend reads only the backdrop pixel under it can draw straight onto the
  // previous plane's output rather than copy it into a target of its own. Every plane drawing into the
  // shared target must fit it as its own would: canvas-sized, 8-bit and without depth testing.
  canDrawInPlace(item, plane, previous) {
    const { width, height } = this.curtain.canvas;
    const fitsCanvas = ({ target, userData, _depthTest }) => !userData.floatingPoint && !_depthTest && (!target || Math.abs(target._size.width - width) <= 1 && Math.abs(target._size.height - height) <= 1);
    return item.isGpuElement && !item.mask && item.shapeShaderMode !== "custom" && item.textShaderMode !== "custom" && item.getPlanes().length === 1 && !item.getChildEffectItems().some((effect) => effect.visible) && !!getInPlaceBlendFactor(item) && fitsCanvas(plane) && fitsCanvas(previous);
  }
  // A layer crossing the static split changes which planes may draw in place onto their predecessor:
  // one drawing in place onto a layer that froze would wipe it. With none drawing in place the split
  // can only leave a new one out, so the rebuild, which stalls a frame, is skipped.
  updateInPlacePlanes() {
    var _a;
    if (this.initialized && ((_a = this.curtain) == null ? void 0 : _a.planes.some((plane) => plane.userData.drawsInPlace))) this.createTextures();
  }
  assignRenderTargetToPlane(orderedPlanes, renderTargets, i, item, plane) {
    var _a;
    let renderTargetParams = this.getTextureParams(orderedPlanes, i, item);
    let renderTarget = renderTargets[i];
    const formatKey = `${((_a = renderTargetParams.texturesOptions) == null ? void 0 : _a.floatingPoint) || ""}:${renderTargetParams.scaleWithCanvas}:${!!renderTargetParams.depth}`;
    if (renderTarget && renderTarget.userData.formatKey !== formatKey) {
      const poolIndex = this.curtain.renderTargets.indexOf(renderTarget);
      renderTarget.remove();
      renderTarget = new RenderTarget(this.curtain, renderTargetParams);
      const pool = this.curtain.renderTargets;
      pool.splice(pool.indexOf(renderTarget), 1);
      pool.splice(poolIndex, 0, renderTarget);
      pool.forEach((target, index) => target.index = index);
      renderTargets[i] = renderTarget;
    } else if (!renderTarget) {
      renderTarget = new RenderTarget(this.curtain, renderTargetParams);
      renderTargets[i] = renderTarget;
    } else {
      this.resizeRenderTarget(renderTarget, renderTargetParams.maxWidth, renderTargetParams.maxHeight);
    }
    renderTarget.userData.formatKey = formatKey;
    renderTarget.userData.id = plane.userData.id;
    if (plane) {
      plane.setRenderTarget(renderTarget);
    }
  }
  handleTextures(item, i, planeUserData, orderedPlanes, renderTargets) {
    if (planeUserData.isComposite) {
      this.handleCompositePlane(item, i, orderedPlanes, renderTargets);
      return;
    }
    if (item.isGroup) {
      return;
    } else if (item.isFlattened) {
      this.handleFlattenedPlane(item, i, renderTargets);
    } else if (item.isElement) {
      this.handleElementPlane(item, i, renderTargets);
    } else if (item.isModel) {
      this.handleModelPlane(item, i, renderTargets);
    } else {
      item.parentLayer ? this.handleChildEffectPlane(item, i, planeUserData, renderTargets) : this.handleEffectPlane(item, i, planeUserData, renderTargets);
    }
  }
  handleItemPlanes(callback, incremental = false) {
    this.createPlanes(() => {
      var _a;
      (_a = this.curtain) == null ? void 0 : _a.planes.forEach((plane) => {
        plane._canDraw = false;
      });
      this.syncPlaneVisibility();
      this.createTextures(() => this.checkIfReady(callback, incremental), incremental);
    }, incremental);
  }
  checkIfReady(callback, incremental = false) {
    const performCheck = () => {
      var _a;
      if (this.destroyed) return;
      if (incremental && scrollActive && !this.isInView) {
        requestAnimationFrame(performCheck);
        return;
      }
      let planeNotReady = false;
      const planes = (_a = this.curtain) == null ? void 0 : _a.planes;
      if (!planes) return;
      for (let i = 0; i < planes.length; i++) {
        if (!planes[i].userData.isReady) {
          planeNotReady = true;
          break;
        }
      }
      if (planeNotReady) {
        requestAnimationFrame(performCheck);
      } else {
        callback();
      }
    };
    performCheck();
  }
  setModelPlaneUniforms(plane, item) {
    var _a, _b;
    plane.uniforms.resolution.value.x = this.curtain.canvas.width;
    plane.uniforms.resolution.value.y = this.curtain.canvas.height;
    if (!item.local.currentFrameMouseValues) {
      item.local.currentFrameMouseValues = this.calculateItemMouseValues(item);
    }
    const mouseValues = item.local.currentFrameMouseValues;
    if (mouseValues && !item.local.mouse) {
      item.local.mouse = { x: 0.5, y: 0.5 };
    }
    if (mouseValues) {
      item.local.mouse.x = mouseValues.x;
      item.local.mouse.y = mouseValues.y;
    }
    if (plane.uniforms.opacity) {
      plane.uniforms.opacity.value = item.local.modelLoaded ? ((_b = (_a = item.local) == null ? void 0 : _a.stateEffectProps) == null ? void 0 : _b.opacity) ?? item.opacity : 0;
    }
  }
  setInitialEffectPlaneUniforms(plane, item, parent, passValues) {
    var _a, _b;
    if (!plane.userData.initialUniformsSet || !plane.userData.isReady) {
      for (let prop in plane.uniforms) {
        if ((_a = item.states) == null ? void 0 : _a.scroll.some((effect) => effect.prop === prop)) {
          if (((_b = item.local.stateEffectProps) == null ? void 0 : _b[prop]) !== void 0) {
            updateUniformValues(item.local.stateEffectProps[prop], plane.uniforms[prop], prop);
          }
          continue;
        }
        if (item.local.bpProps && prop in item.local.bpProps) {
          updateUniformValues(item.local.bpProps[prop], plane.uniforms[prop], prop);
        } else if (prop in item) {
          updateUniformValues(item[prop], plane.uniforms[prop], prop);
        }
      }
      if (parent && passValues && passValues.index < passValues.length - 1 && plane.uniforms.isMask) {
        plane.uniforms.isMask.value = 0;
      }
      if (parent && item.isMask && !item.mouseMomentum) {
        item.mouseMomentum = parent.mouseMomentum;
      }
      plane.uniforms.resolution.value.x = this.curtain.canvas.width;
      plane.uniforms.resolution.value.y = this.curtain.canvas.height;
      if (plane.uniforms.artboardResolution) {
        plane.uniforms.artboardResolution.value.x = this.canvasWidth;
        plane.uniforms.artboardResolution.value.y = this.canvasHeight;
      }
      plane.userData.initialUniformsSet = true;
    }
  }
  // Returns whether any layer's event tracks moved a property this frame.
  handleStateEffects() {
    let moved = false;
    this.layers.forEach((item) => {
      const parent = item.parentLayer ? item.getParent() : null;
      const isVisible = parent ? parent.visible : item.visible;
      if (!isVisible) return;
      if (item.updateStateEffects()) moved = true;
    });
    return moved;
  }
  setInitialFlattenedPlaneUniforms(plane, item) {
    var _a, _b, _c;
    if (plane.uniforms.resolution && ((_a = this.curtain) == null ? void 0 : _a.canvas)) {
      plane.uniforms.resolution.value.x = this.curtain.canvas.width;
      plane.uniforms.resolution.value.y = this.curtain.canvas.height;
    }
    if (plane.uniforms.artboardResolution) {
      plane.uniforms.artboardResolution.value.x = this.canvasWidth;
      plane.uniforms.artboardResolution.value.y = this.canvasHeight;
    }
    for (let prop in plane.uniforms) {
      if (((_b = item.states) == null ? void 0 : _b.scroll.some((effect) => effect.prop === prop)) || ((_c = item.states) == null ? void 0 : _c.appear.some((effect) => effect.prop === prop && !effect.complete))) {
        continue;
      }
      if (item.local.bpProps && prop in item.local.bpProps) {
        updateUniformValues(item.local.bpProps[prop], plane.uniforms[prop], prop);
      } else if (prop in item) {
        updateUniformValues(item[prop], plane.uniforms[prop], prop);
      }
    }
  }
  setFlattenedPlaneUniforms(plane, item) {
    var _a, _b, _c, _d, _e;
    if (!plane.visible) return;
    this.ensureFlattenedPlaneTextures(plane, item);
    if (item.local.modelInstances) {
      Object.entries(item.local.modelInstances).forEach(([key, modelInstance]) => {
        if (!modelInstance || !modelInstance.local) return;
        const opUniform = plane.uniforms[`L${key}_elemOpacity`] || plane.uniforms[`L${key}_opacity`];
        if (opUniform && opUniform.value === 0) return;
        const prefix = `L${key}_`;
        const runtimeModelProps = {};
        if (item.local.bpProps) {
          for (const prop in item.local.bpProps) {
            if (prop.startsWith(prefix)) {
              runtimeModelProps[prop.slice(prefix.length)] = item.local.bpProps[prop];
            }
          }
        }
        if (item.local.stateEffectProps) {
          for (const prop in item.local.stateEffectProps) {
            if (prop.startsWith(prefix)) {
              runtimeModelProps[prop.slice(prefix.length)] = item.local.stateEffectProps[prop];
            }
          }
        }
        modelInstance.local.stateEffectProps = runtimeModelProps;
        const mouseValues = this.calculateItemMouseValues(modelInstance);
        if (mouseValues && !modelInstance.local.mouse) {
          modelInstance.local.mouse = { x: 0.5, y: 0.5 };
        }
        if (mouseValues) {
          modelInstance.local.mouse.x = mouseValues.x;
          modelInstance.local.mouse.y = mouseValues.y;
        }
        modelInstance.renderModel();
      });
    }
    if (((_a = item.local.stateEffectProps) == null ? void 0 : _a.playbackRate) && plane.videos.at(-1)) {
      plane.videos.at(-1).playbackRate = item.local.stateEffectProps.playbackRate;
    }
    if (plane.uniforms.mousePos && this.mouse.movedInView) {
      if (!item.local.currentFrameMouseValues) {
        item.local.currentFrameMouseValues = this.calculateItemMouseValues(item);
      }
      const mouseValues = item.local.currentFrameMouseValues;
      if (mouseValues) {
        plane.uniforms.mousePos.value.x = mouseValues.x;
        plane.uniforms.mousePos.value.y = mouseValues.y;
      }
    }
    const isSublayerHidden = (key) => {
      const match = key.match(/^L(\d+)_/);
      if (!match) return false;
      const idx = match[1];
      const u = plane.uniforms[`L${idx}_elemOpacity`] || plane.uniforms[`L${idx}_opacity`];
      return u && u.value === 0;
    };
    if ((_c = (_b = item.data) == null ? void 0 : _b.timeUniforms) == null ? void 0 : _c.length) {
      item.data.timeUniforms.forEach(({ key, speed, animating }) => {
        var _a2;
        if (isSublayerHidden(key)) return;
        if (plane.uniforms[key] && animating !== false) {
          const speedPropKey = key.replace(/_time$/, "_speed");
          const runtimeSpeed = ((_a2 = item.local.stateEffectProps) == null ? void 0 : _a2[speedPropKey]) ?? item[speedPropKey];
          const timeSpeed = runtimeSpeed ?? speed ?? 1;
          plane.uniforms[key].value += timeSpeed * 60 / this.fps;
        }
      });
    }
    if ((_e = (_d = item.data) == null ? void 0 : _d.mouseUniforms) == null ? void 0 : _e.length) {
      const canvasWidth = this.bbox.width / 2;
      const canvasHeight = this.bbox.height / 2;
      const rawX = this.mouse.pos.x;
      const rawY = this.mouse.pos.y;
      if (!item.local.mouseStates) {
        item.local.mouseStates = {};
      }
      item.data.mouseUniforms.forEach(({ key, momentum, spring, trackAxes }) => {
        if (!plane.uniforms[key]) return;
        if (isSublayerHidden(key)) return;
        const axes = trackAxes || "xy";
        const trackX = axes === "x" || axes === "xy";
        const trackY = axes === "y" || axes === "xy";
        const sp = spring || 0;
        if (!item.local.mouseStates[key]) {
          item.local.mouseStates[key] = {
            x: trackX ? rawX / canvasWidth : 0.5,
            y: trackY ? 1 - rawY / canvasHeight : 0.5,
            vx: 0,
            vy: 0
          };
          plane.uniforms[key].value.x = item.local.mouseStates[key].x;
          plane.uniforms[key].value.y = item.local.mouseStates[key].y;
          return;
        }
        const state = item.local.mouseStates[key];
        const lastXPx = state.x * canvasWidth;
        const lastYPx = (1 - state.y) * canvasHeight;
        if (sp > 0) {
          if (trackX) {
            const sx = springStep(lastXPx, rawX, state.vx, momentum, sp);
            state.x = sx.value / canvasWidth;
            state.vx = sx.velocity;
          } else {
            state.x = 0.5;
          }
          if (trackY) {
            const sy = springStep(lastYPx, rawY, state.vy, momentum, sp);
            state.y = 1 - sy.value / canvasHeight;
            state.vy = sy.velocity;
          } else {
            state.y = 0.5;
          }
        } else {
          if (trackX) {
            state.x = weightedLerp(rawX, lastXPx, momentum * 2) / canvasWidth;
          } else {
            state.x = 0.5;
          }
          if (trackY) {
            state.y = 1 - weightedLerp(rawY, lastYPx, momentum * 2) / canvasHeight;
          } else {
            state.y = 0.5;
          }
        }
        if (plane.uniforms[key].value.x !== state.x || plane.uniforms[key].value.y !== state.y) {
          this.local.needsFrame = true;
        }
        plane.uniforms[key].value.x = state.x;
        plane.uniforms[key].value.y = state.y;
      });
    }
  }
  setInitialElementPlaneUniforms(plane, item) {
    var _a;
    plane.uniforms.resolution.value.x = this.curtain.canvas.width;
    plane.uniforms.resolution.value.y = this.curtain.canvas.height;
    if (plane.uniforms.artboardResolution) {
      plane.uniforms.artboardResolution.value.x = this.canvasWidth;
      plane.uniforms.artboardResolution.value.y = this.canvasHeight;
    }
    for (let prop in plane.uniforms) {
      const stateEffectUniform = this.getAppearStateUniformValue(item, prop);
      if (stateEffectUniform.hasValue) {
        updateUniformValues(stateEffectUniform.value, plane.uniforms[prop], prop);
      } else if (item.local.bpProps && prop in item.local.bpProps) {
        updateUniformValues(item.local.bpProps[prop], plane.uniforms[prop], prop);
      } else if (prop in item) {
        updateUniformValues(((_a = item.local.stateEffectProps) == null ? void 0 : _a[prop]) ?? item[prop], plane.uniforms[prop], prop);
      }
    }
    syncShapeColorUniforms(item, plane, "fill");
    syncShapeColorUniforms(item, plane, "stroke");
  }
  setElementPlaneUniforms(plane, item) {
    var _a, _b, _c;
    if (!plane.visible) return;
    if (((_a = item.local) == null ? void 0 : _a.gpuTextFallback) && plane.uniforms.opacity) {
      plane.uniforms.opacity.value = 0;
    }
    syncShapeColorUniforms(item, plane, "fill");
    syncShapeColorUniforms(item, plane, "stroke");
    if (plane.uniforms.fontSize && item.isGpuElement) {
      const { fontSize, lineHeight } = item.getAbsoluteFontValues(this);
      plane.uniforms.fontSize.value = fontSize;
      plane.uniforms.lineHeight.value = lineHeight;
      plane.uniforms.height.value = item.height;
      if (plane.uniforms.lineCount) {
        plane.uniforms.lineCount.value = ((_b = item.local.wrappedLines) == null ? void 0 : _b.length) || 1;
      }
      if (item.local.textMetrics) {
        const metrics = item.local.textMetrics;
        plane.uniforms.ascender.value = metrics.ascender;
        plane.uniforms.descender.value = metrics.descender;
        if (plane.uniforms.capTop) {
          plane.uniforms.capTop.value = metrics.capTop;
        }
        plane.uniforms.atlasEmPx.value = metrics.emPx;
        plane.uniforms.atlasPxRange.value = metrics.pxRange;
        plane.uniforms.atlasTrueSdf.value = metrics.trueSdf ? 1 : 0;
      }
      const reveal = resolveTextReveal(item, (prop) => {
        var _a2;
        if (((_a2 = item.local.stateEffectProps) == null ? void 0 : _a2[prop]) !== void 0) return item.local.stateEffectProps[prop];
        const appear = this.getAppearStateUniformValue(item, prop);
        return appear.hasValue ? appear.value : item[prop];
      });
      Object.entries(reveal || {}).forEach(([prop, value]) => {
        if (plane.uniforms[prop]) updateUniformValues(value, plane.uniforms[prop], prop);
      });
    }
    if (plane.uniforms.resolution) {
      plane.uniforms.resolution.value.x = this.curtain.canvas.width;
      plane.uniforms.resolution.value.y = this.curtain.canvas.height;
    }
    if (plane.uniforms.artboardResolution) {
      plane.uniforms.artboardResolution.value.x = this.canvasWidth;
      plane.uniforms.artboardResolution.value.y = this.canvasHeight;
    }
    if (item.animating && plane.uniforms.time) {
      const renderFrameId = this.local.renderFrameId || 0;
      if (plane.userData.lastTimeUpdateFrameId !== renderFrameId) {
        const speed = ((_c = item.local.stateEffectProps) == null ? void 0 : _c.speed) ?? item.speed ?? 1;
        plane.uniforms.time.value += speed * 60 / this.fps;
        plane.userData.lastTimeUpdateFrameId = renderFrameId;
      }
    }
    if (plane.uniforms.mousePos) {
      if (!item.local.currentFrameMouseValues) {
        item.local.currentFrameMouseValues = this.calculateItemMouseValues(item);
      }
      const mouseValues = item.local.currentFrameMouseValues;
      if (this.mouse.movedInView && (plane.uniforms.mousePos.value.x !== mouseValues.x || plane.uniforms.mousePos.value.y !== mouseValues.y)) {
        plane.uniforms.mousePos.value.x = mouseValues.x;
        plane.uniforms.mousePos.value.y = mouseValues.y;
      }
    }
  }
  calculateItemMouseValues(item) {
    if (!this.mouse.movedInView) return null;
    const canvasWidth = this.bbox.width / 2;
    const canvasHeight = this.bbox.height / 2;
    const mousePos = this.getMousePosWithMomentum(item, canvasWidth, canvasHeight);
    if (!item.local.mouseValuePool) {
      item.local.mouseValuePool = new Vec2(0.5);
    }
    if (item.local.mouseValuePool.x !== mousePos.x || item.local.mouseValuePool.y !== mousePos.y) {
      this.local.needsFrame = true;
    }
    item.local.mouseValuePool.x = mousePos.x;
    item.local.mouseValuePool.y = mousePos.y;
    return item.local.mouseValuePool;
  }
  getMousePosWithMomentum(item, canvasWidth, canvasHeight) {
    let xPos = this.mouse.pos.x;
    let yPos = this.mouse.pos.y;
    let axes = item.trackAxes || "xy";
    let trackX = axes === "x" || axes === "xy";
    let trackY = axes === "y" || axes === "xy";
    const momentum = item.mouseMomentum || 0;
    const spring = item.mouseSpring || 0;
    let x = xPos / canvasWidth;
    let y = 1 - yPos / canvasHeight;
    if (!momentum && !spring) {
      return { x: trackX ? x : 0.5, y: trackY ? y : 0.5 };
    }
    if (!item.local.lastMousePos) {
      item.local.lastMousePos = { x: trackX ? x : 0.5, y: trackY ? y : 0.5 };
      return item.local.lastMousePos;
    }
    const lastXPos = item.local.lastMousePos.x * canvasWidth;
    const lastYPos = (1 - item.local.lastMousePos.y) * canvasHeight;
    if (spring > 0) {
      if (!item.local.mouseVelocity) {
        item.local.mouseVelocity = { x: 0, y: 0 };
      }
      if (trackX) {
        const sx = springStep(lastXPos, xPos, item.local.mouseVelocity.x, momentum, spring);
        xPos = sx.value;
        item.local.mouseVelocity.x = sx.velocity;
        item.local.lastMousePos.x = xPos / canvasWidth;
      } else {
        item.local.lastMousePos.x = 0.5;
      }
      if (trackY) {
        const sy = springStep(lastYPos, yPos, item.local.mouseVelocity.y, momentum, spring);
        yPos = sy.value;
        item.local.mouseVelocity.y = sy.velocity;
        item.local.lastMousePos.y = 1 - yPos / canvasHeight;
      } else {
        item.local.lastMousePos.y = 0.5;
      }
      return item.local.lastMousePos;
    }
    const deltaX = Math.abs(xPos - lastXPos);
    const deltaY = Math.abs(yPos - lastYPos);
    if (deltaX < EPS && deltaY < EPS) {
      return item.local.lastMousePos;
    }
    if (trackX) {
      xPos = weightedLerp(xPos, lastXPos, momentum * 2);
      item.local.lastMousePos.x = xPos / canvasWidth;
    } else {
      item.local.lastMousePos.x = 0.5;
    }
    if (trackY) {
      yPos = weightedLerp(yPos, lastYPos, momentum * 2);
      item.local.lastMousePos.y = 1 - yPos / canvasHeight;
    } else {
      item.local.lastMousePos.y = 0.5;
    }
    return item.local.lastMousePos;
  }
  setEffectPlaneUniforms(plane, item) {
    var _a, _b, _c, _d;
    if (!plane.visible) return;
    let speed = ((_a = item.local.stateEffectProps) == null ? void 0 : _a.speed) ?? item.speed ?? 1;
    if (item.animating && plane.uniforms.time) {
      const renderFrameId = this.local.renderFrameId || 0;
      if (plane.userData.lastTimeUpdateFrameId !== renderFrameId) {
        plane.uniforms.time.value += speed * 60 / this.fps;
        plane.userData.lastTimeUpdateFrameId = renderFrameId;
      }
    }
    if (((_b = item.local.stateEffectProps) == null ? void 0 : _b.playbackRate) && plane.videos.at(-1)) {
      plane.videos.at(-1).playbackRate = item.local.stateEffectProps.playbackRate;
    }
    if (isMobile() && ((_d = (_c = this.interactivity) == null ? void 0 : _c.mouse) == null ? void 0 : _d.disableMobile)) return false;
    if (!this.mouse.movedInView) return;
    if (!item.local.currentFrameMouseValues) {
      item.local.currentFrameMouseValues = this.calculateItemMouseValues(item);
    }
    const mouseValues = item.local.currentFrameMouseValues;
    if (!mouseValues) return;
    if (plane.uniforms.previousMousePos) {
      if (this.mouse.ticks > 16) {
        plane.uniforms.previousMousePos.value.x = plane.uniforms.mousePos.value.x;
        plane.uniforms.previousMousePos.value.y = plane.uniforms.mousePos.value.y;
      } else {
        plane.uniforms.previousMousePos.value.x = mouseValues.x;
        plane.uniforms.previousMousePos.value.y = mouseValues.y;
      }
    }
    if (plane.uniforms.mousePos && !mouseValues.equals(plane.uniforms.mousePos.value)) {
      plane.uniforms.mousePos.value.x = mouseValues.x;
      plane.uniforms.mousePos.value.y = mouseValues.y;
    }
    this.mouse.ticks++;
  }
  getOrderedItems() {
    let orderedItems = [];
    this.layers.filter((n) => !n.parentLayer && !n.groupLayer).forEach((item) => {
      if (item.isGroup) {
        orderedItems.push(item);
        item.getMemberItems().filter((member) => member.visible !== false).forEach((member) => {
          if (member.effects && member.effects.length) {
            orderedItems.push(...member.getChildEffectItems());
          }
          orderedItems.push(member);
        });
        if (item.effects && item.effects.length) {
          orderedItems.push(...item.getChildEffectItems());
        }
        return;
      }
      if (item.effects && item.effects.length) {
        orderedItems.push(...item.getChildEffectItems());
      }
      orderedItems.push(item);
    });
    return orderedItems;
  }
  getTextureParams(orderedPlanes, i, item) {
    var _a;
    const plane = orderedPlanes[i];
    let downSample = 1;
    if (plane.userData.downSample) {
      downSample = typeof plane.userData.downSample === "number" ? plane.userData.downSample : 0.5;
    }
    const { targetSize, floatingPoint } = plane.userData;
    const params = {
      maxWidth: (targetSize == null ? void 0 : targetSize.width) || this.curtain.canvas.width * downSample,
      maxHeight: (targetSize == null ? void 0 : targetSize.height) || this.curtain.canvas.height * downSample,
      // Fixed-size state targets must not rescale with the canvas (same as ping-pong targets).
      scaleWithCanvas: !(targetSize == null ? void 0 : targetSize.width),
      depth: (_a = item == null ? void 0 : item.data) == null ? void 0 : _a.depth
    };
    if (floatingPoint) params.texturesOptions = { floatingPoint };
    return params;
  }
  handlePlaneCreation() {
    this.initialized = true;
    this.initializing = false;
    if (this.rendering) {
      this.local.needsFrame = true;
    } else {
      this.renderNFrames(2);
    }
    this.waitForAssetsAndDisablePlanes();
    renderScenes();
  }
  waitForAssetsAndDisablePlanes() {
    var _a, _b;
    const hasLoadingPreloads = this.local.preloadedImages && Object.values(this.local.preloadedImages).some((t) => t.loading);
    const hasLoadingAssets = this.local.suspended ? this.hasLoadsInFlight() : hasLoadingPreloads || this.layers.some(
      (layer) => layer.visible !== false && (layer.isModel && layer.isLoading() || layer.layerType === "image" && !layer.local.imageReady || layer.layerType === "text" && (!layer.local.loaded || layer.isGpuElement && !layer.htmlOnly && !layer.local.textLayoutTexture) || layer.isFlattened && (!layer.areTextAssetsReady() || !layer.areImageAssetsReady() || !layer.areModelAssetsReady()))
    );
    if (hasLoadingAssets) {
      setTimeout(() => this.waitForAssetsAndDisablePlanes(), 32);
    } else {
      this.layers.filter((n) => n.preloadedCanvasTexture).forEach((item) => {
        item.preloadedCanvasTexture.shouldUpdate = true;
      });
      this.layers.filter((n) => n.isFlattened).forEach((item) => {
        Object.values(item.local.canvasTextures || {}).forEach((tex) => {
          if (tex) tex.shouldUpdate = true;
        });
      });
      const suspended = this.local.suspended;
      if (this.curtain) {
        this.curtain.planes.forEach((plane) => {
          if (suspended) {
            const time = suspended.times[`${plane.userData.id}:${plane.userData.passIndex}`];
            if (plane.uniforms.time && time !== void 0) plane.uniforms.time.value = time;
          } else {
            plane.videos.forEach((video) => {
              video.currentTime = 0;
            });
          }
          plane._canDraw = true;
        });
      }
      this.local.assetsReady = true;
      (_b = (_a = this.variables) == null ? void 0 : _a.applyAll) == null ? void 0 : _b.call(_a);
      this.renderFrame();
      if (suspended && this.curtain) {
        suspended.still.replaceWith(this.curtain.canvas);
        this.local.suspended = null;
      }
      this.layers.filter((n) => n.preloadedCanvasTexture).forEach((item) => {
        item.preloadedCanvasTexture.shouldUpdate = item.preloadedCanvasTexture.userData.hasStateEffects || false;
      });
      this.layers.filter((n) => n.isFlattened).forEach((item) => {
        Object.values(item.local.canvasTextures || {}).forEach((tex) => {
          if (tex) tex.shouldUpdate = false;
        });
      });
      setTimeout(() => this.disablePlanes(), 16);
      scheduleScenePrewarm();
    }
  }
  disablePlanes() {
    const items = this.getSplitOrderedItems();
    if (!items.dynamic.length) {
      items.static.pop();
    }
    for (const item of items.static) {
      item.getPlanes().forEach((plane) => {
        plane._canDraw = false;
      });
    }
  }
}
function isElement(o) {
  return typeof HTMLElement === "object" ? o instanceof HTMLElement : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
}
function ael(s, ev, fn) {
  s.addEventListener(ev, fn, { passive: true });
}
function rel(s, ev, fn) {
  s.removeEventListener(ev, fn);
}
function bindEvents() {
  ael(window, "scroll", handleWindowScroll);
  if (isMobile()) {
    ael(window, "touchmove", handleMouseMove);
  } else {
    ael(window, "mousemove", handleMouseMove);
  }
  ael(window, "routeChange", cleanupScenes);
  ael(document, "mouseleave", handleMouseLeave);
  debouncedHandleWindowResize = debounce(handleWindowResize, 16);
  if (isMobile()) {
    ael(window, "orientationchange", debouncedHandleWindowResize);
  } else {
    ael(window, "resize", debouncedHandleWindowResize);
  }
  ael(document, visibilityChange, handleVisibilityChange);
  eventsBound = true;
}
function unbindEvents() {
  rel(window, "mousemove", handleMouseMove);
  rel(window, "touchmove", handleMouseMove);
  rel(window, "scroll", handleWindowScroll);
  rel(window, "routeChange", cleanupScenes);
  rel(document, "mouseleave", handleMouseLeave);
  if (debouncedHandleWindowResize) {
    rel(window, "resize", debouncedHandleWindowResize);
    rel(window, "orientationchange", debouncedHandleWindowResize);
  }
  rel(document, visibilityChange, handleVisibilityChange);
  eventsBound = false;
}
function getCanvasScale(element, scale, dpi, breakpointWidth = null) {
  return {
    canvasWidth: element.offsetWidth,
    canvasHeight: element.offsetHeight,
    scale,
    dpi,
    element,
    breakpointWidth
  };
}
function destroy() {
  [...scenes].forEach((scene) => {
    scene.destroy();
  });
  scenes.length = 0;
  unbindEvents();
}
function setScroll(scroll) {
  const nextScrollTop = normalizeScrollTop(scroll);
  if (nextScrollTop === null) {
    return;
  }
  virtualScrollTop = nextScrollTop;
  syncScrollPosition(nextScrollTop);
  handleScrollChange();
}
function useNativeScroll() {
  virtualScrollTop = null;
  syncScrollPosition();
  handleScrollChange();
}
function fetchSceneData(projectId, queryString, filePath, reject, production) {
  let url;
  if (filePath) {
    url = filePath;
    const element = document.getElementById(filePath);
    if (element) {
      try {
        let resp = JSON.parse(element.innerText);
        if ((resp == null ? void 0 : resp.options) && ((resp == null ? void 0 : resp.layers) || (resp == null ? void 0 : resp.history))) {
          return Promise.resolve(resp);
        } else {
          reject(new Error(`Did not find valid JSON inside ${filePath}`));
          return Promise.reject();
        }
      } catch (error) {
        reject(new Error(`Error parsing JSON from ${filePath}: ${error.message}`));
        return Promise.reject();
      }
    }
  } else {
    let prefix = "https://storage.googleapis.com/unicornstudio-production";
    if (production || (queryString == null ? void 0 : queryString.includes("production=true"))) {
      prefix = "https://assets.unicorn.studio";
      if (!(queryString == null ? void 0 : queryString.includes("update="))) {
        queryString = null;
      }
    } else if (!(queryString == null ? void 0 : queryString.includes("update="))) {
      queryString = `v=${Date.now()}`;
    }
    url = `${prefix}/embeds/${projectId}${queryString ? "?" + queryString : ""}`;
  }
  return fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    return data;
  }).catch((error) => console.error("Error fetching data:", error));
}
function isWebGL2Supported() {
  if (webGL2Supported !== null) {
    return webGL2Supported;
  }
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2", { antialias: false });
    webGL2Supported = !!context;
    if (context) spareContexts.add(context);
  } catch {
    webGL2Supported = false;
  }
  return webGL2Supported;
}
function addScene(params) {
  let projectId = params.projectId ? params.projectId.split("?")[0] : null;
  let queryString = params.projectId ? params.projectId.split("?")[1] : null;
  const pendingElement = isElement(params.element) ? params.element : document.getElementById(params.elementId);
  if (pendingElement && isElementOnScreen(pendingElement)) pendingOnScreenElements.add(pendingElement);
  const releaseHeldSlot = () => {
    if (pendingOnScreenElements.delete(pendingElement)) scheduleScenePrewarm();
  };
  return new Promise((resolve, reject) => {
    fetchSceneData(projectId, queryString, params.filePath, reject, params.production).then((resp) => {
      releaseHeldSlot();
      if (!resp || !resp.layers && !resp.history || !resp.options) {
        reject(new Error(`Error fetching data for project id '${params.projectId}'`));
        return;
      }
      const options = resp.options || {};
      const element = isElement(params.element) ? params.element : document.getElementById(params.elementId);
      if (!element) {
        reject(new Error(`Couldn't find an element with id '${params.elementId}' on the page.`));
        return;
      }
      const id = generateUUID();
      element.setAttribute("data-scene-id", id);
      let baseScale = params.scale || options.scale || 1;
      let baseDpi = params.dpi || options.dpi || Math.min(1.5, window.devicePixelRatio);
      const breakpointWidth = Number.isFinite(Number(params.breakpointWidth)) ? Number(params.breakpointWidth) : null;
      const layers = unpackageLayers(
        resp.layers || resp.history,
        id,
        getCanvasScale(element, baseScale, baseDpi, breakpointWidth),
        resp.modules
      );
      if (!isWebGL2Supported()) {
        const fallbackScene = createFallbackScene({ id, element, layers });
        addTextFallbacksToScene(layers, element);
        scenes.push(fallbackScene);
        resolve(fallbackScene);
        return;
      }
      const initialPreset = params.initialPreset || getInitialPresetFromUrl();
      const initiallyInView = !!params.fixed || isElementNearViewport(element, null, 50);
      const scene = new Scene({
        id,
        fps: params.fps || options.fps || 60,
        dpi: baseDpi,
        name: options.name,
        projectId: projectId || params.filePath.split(".")[0],
        renderingScale: baseScale,
        element,
        lazyLoad: params.lazyLoad,
        fixed: params.fixed,
        width: params.width,
        height: params.height,
        breakpoints: params.breakpoints || options.breakpoints,
        breakpointWidth,
        initialVariables: params.initialVariables,
        initialPreset,
        modelRenderer: params.modelRenderer,
        altText: params.altText,
        ariaLabel: params.ariaLabel,
        deferCurtains: !!params.lazyLoad && !initiallyInView,
        editMetadata: {
          designId: resp.designId,
          canvasId: resp.canvasId,
          designName: resp.designName || resp.projectName,
          sceneName: resp.sceneName
        }
      });
      scene.applyCanvasA11yAttrs();
      let fp = options[ds("ZnJlZVBsYW4=")];
      if (!fp && options[ds("aW5jbHVkZUxvZ28=")]) {
        al(id, element);
      }
      if (fp) {
        console.log(ds("TWFkZSB3aXRoIHVuaWNvcm4uc3R1ZGlv"));
      }
      scenes.push(scene);
      scene.layers = layers;
      scene.applyBreakpointValues(true);
      scene.setupVariables(resp.variables, params.initialVariables, initialPreset);
      scene.preloadTextures();
      scene.setInteractiveParams(params, options);
      scene.isInView = scene.isFixed || initiallyInView;
      if (!scene.lazyLoad || scene.isInView) {
        scene.initializePlanes();
      } else {
        queueScenePrewarm(scene);
      }
      if (!eventsBound) {
        bindEvents();
      }
      mountControlsForScene(element, scene, params);
      resolve(scene);
    }).catch((err) => {
      releaseHeldSlot();
      console.error(err);
      reject(err);
    });
  });
}
function init() {
  if (!isWebGL2Supported()) {
    console.warn("WebGL2 is not supported in this browser. Unicorn Studio will render available HTML fallbacks only.");
  }
  return new Promise((resolve, reject) => {
    const elements = [...document.querySelectorAll("[data-us-project], [data-us-project-src]")];
    const pendingElements = elements.filter((n) => !n.getAttribute("data-us-initialized"));
    if (!pendingElements.length) {
      resolve(scenes);
      return;
    }
    Promise.all(
      pendingElements.map((element) => {
        element.setAttribute("data-us-initialized", true);
        const id = gatt(element, "data-us-project");
        const filePath = gatt(element, "data-us-project-src");
        const disableMobile = gatt(element, "data-us-disablemobile");
        const disabled = gatt(element, "data-us-disablemouse");
        return addScene({
          projectId: filePath ? null : id,
          filePath,
          element,
          dpi: +gatt(element, "data-us-dpi"),
          scale: +gatt(element, "data-us-scale"),
          production: gatt(element, "data-us-production"),
          fps: +gatt(element, "data-us-fps"),
          lazyLoad: gatt(element, "data-us-lazyload"),
          altText: gatt(element, "data-us-alttext"),
          ariaLabel: gatt(element, "data-us-arialabel"),
          fixed: gatt(element, "data-us-fixed"),
          initialVariables: parseInitialVariables(gatt(element, "data-us-vars")),
          initialPreset: gatt(element, "data-us-preset") || getInitialPresetFromUrl(),
          interactivity: disableMobile || disabled ? {
            mouse: {
              disableMobile,
              disabled
            }
          } : null
        }).catch((err) => {
          element.removeAttribute("data-us-initialized");
          throw err;
        });
      })
    ).then(() => resolve(scenes)).catch(reject);
  });
}
export {
  addScene,
  destroy,
  init,
  scenes,
  setScroll,
  unbindEvents,
  useNativeScroll,
  version
};
