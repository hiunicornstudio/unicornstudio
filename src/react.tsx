'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type Ref } from 'react';
import { mountScene, type UnicornSceneHandle, type UnicornSceneOptions, type UnicornStudioScene } from './index.js';

export type * from './types.js';

export interface UnicornSceneProps extends UnicornSceneOptions {
  /** A number is pixels. Defaults to `100%`. */
  width?: number | string;
  /** A number is pixels. Defaults to `100%`. */
  height?: number | string;
  className?: string;
  style?: CSSProperties;
  /** Shown until the scene loads and when it fails: an image URL, or any node. */
  placeholder?: ReactNode;
  /** Class for an empty placeholder element, used when `placeholder` is omitted. */
  placeholderClassName?: string;
  showPlaceholderWhileLoading?: boolean;
  showPlaceholderOnError?: boolean;
  /** Receives the live scene for the imperative API, and `null` while there isn't one. */
  sceneRef?: Ref<UnicornStudioScene | null>;
}

function setRef(ref: UnicornSceneProps['sceneRef'], scene: UnicornStudioScene | null) {
  if (typeof ref === 'function') ref(scene);
  else if (ref) ref.current = scene;
}

const fill: CSSProperties = { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' };

export function UnicornScene({
  width = '100%',
  height = '100%',
  className,
  style,
  placeholder,
  placeholderClassName,
  showPlaceholderWhileLoading = true,
  showPlaceholderOnError = true,
  sceneRef,
  ...options
}: UnicornSceneProps) {
  const element = useRef<HTMLDivElement>(null);
  const handle = useRef<UnicornSceneHandle | null>(null);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  const sceneOptions: UnicornSceneOptions = {
    ...options,
    onLoad: scene => {
      setRef(sceneRef, scene);
      setStatus('loaded');
      options.onLoad?.(scene);
    },
    onError: error => {
      setStatus('error');
      options.onError?.(error);
    },
  };

  useEffect(() => {
    handle.current = mountScene(element.current!, sceneOptions);
    return () => {
      handle.current!.destroy();
      setRef(sceneRef, null);
    };
    // Mounts once: the effect below hands every later render's options to the handle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handle.current!.update(sceneOptions);
    // The handle drops its scene when an option change makes it recreate one.
    if (!handle.current!.scene) setRef(sceneRef, null);
  });

  const showPlaceholder =
    (placeholder || placeholderClassName) &&
    ((status === 'loading' && showPlaceholderWhileLoading) || (status === 'error' && showPlaceholderOnError));

  return (
    <div ref={element} className={className} style={{ position: 'relative', width, height, ...style }}>
      {showPlaceholder &&
        (typeof placeholder === 'string' ? (
          <img src={placeholder} alt={options.altText ?? ''} style={fill} />
        ) : (
          (placeholder ?? <div className={placeholderClassName} style={fill} />)
        ))}
    </div>
  );
}

export default UnicornScene;
