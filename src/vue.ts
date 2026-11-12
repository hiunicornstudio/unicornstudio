import { defineComponent, h, onBeforeUnmount, onMounted, ref, shallowRef, watch, type PropType } from 'vue';
import { mountScene, type UnicornSceneHandle, type UnicornSceneOptions, type UnicornStudioScene } from './index.js';
import type { UnicornVariableValue, UnicornVariables } from './types.js';

export type * from './types.js';

const size = (value: number | string) => (typeof value === 'number' ? `${value}px` : value);
const fill = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' };

/**
 * Emits `load`, `error` and `variable-change`. The `placeholder` slot, or the `placeholder`
 * image URL, shows until the scene loads and when it fails. A template ref exposes `scene`.
 */
export const UnicornScene = defineComponent({
  name: 'UnicornScene',
  props: {
    projectId: String,
    jsonFilePath: String,
    sdkUrl: String,
    scale: Number,
    dpi: Number,
    fps: Number,
    // Vue casts an absent Boolean prop to false, which would override the defaults.
    lazyLoad: { type: Boolean, default: undefined },
    production: { type: Boolean, default: undefined },
    fixed: { type: Boolean, default: undefined },
    altText: String,
    ariaLabel: String,
    paused: Boolean,
    variables: Object as PropType<UnicornVariables>,
    preset: String,
    width: { type: [Number, String], default: '100%' },
    height: { type: [Number, String], default: '100%' },
    placeholder: String,
  },
  emits: {
    load: (_scene: UnicornStudioScene) => true,
    error: (_error: Error) => true,
    variableChange: (_name: string, _value: UnicornVariableValue, _values: UnicornVariables) => true,
  },
  setup(props, { emit, slots, expose }) {
    const element = ref<HTMLElement>();
    const scene = shallowRef<UnicornStudioScene | null>(null);
    const loaded = ref(false);
    let handle: UnicornSceneHandle;

    const options = (): UnicornSceneOptions => ({
      ...props,
      onLoad: created => {
        scene.value = created;
        loaded.value = true;
        emit('load', created);
      },
      onError: error => emit('error', error),
      onVariableChange: (...change) => emit('variableChange', ...change),
    });

    onMounted(() => {
      handle = mountScene(element.value!, options());
    });
    // Deep, so mutating `variables` in place syncs as well as replacing it.
    watch(
      () => ({ ...props }),
      () => {
        handle.update(options());
        scene.value = handle.scene;
      },
      { deep: true }
    );
    onBeforeUnmount(() => handle.destroy());

    expose({ scene });

    return () => {
      const placeholder =
        !loaded.value && (slots.placeholder?.() ?? (props.placeholder && h('img', { src: props.placeholder, alt: props.altText ?? '', style: fill })));
      return h(
        'div',
        { ref: element, style: { position: 'relative', width: size(props.width), height: size(props.height) } },
        placeholder || undefined
      );
    };
  },
});

export default UnicornScene;
