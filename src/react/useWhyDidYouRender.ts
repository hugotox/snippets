import { useRef, useEffect } from "react";

export function useWhyDidYouRender(
  componentName: string,
  props: {
    [key: string]: unknown;
  }
): void {
  const previousProps = useRef(props);

  useEffect(() => {
    if (previousProps.current) {
      const changedProps = Object.entries(props).reduce((acc, [key, value]) => {
        if (previousProps.current[key] !== value) {
          // @ts-expect-error - we know this key exists
          acc[key] = {
            previous: previousProps.current[key],
            current: value,
          };
        }
        return acc;
      }, {});

      if (Object.keys(changedProps).length > 0) {
        console.log(`[${componentName}] re-rendered because of:`, changedProps);
      }
    }

    previousProps.current = props;
  });
}
