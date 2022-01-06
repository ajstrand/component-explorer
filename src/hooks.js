import { useEffect, useMemo } from 'preact/hooks';
import { isSSR, getRefElement } from './utils.js';



export const useMutationObserver = ({
  target,
  options = {},
  callback
}) => {
  const observer = useMemo(
    () =>
      !isSSR
        ? new MutationObserver((mutationRecord, mutationObserver) => {
            callback?.(mutationRecord, mutationObserver);
          })
        : null,
    [callback]
  );

  useEffect(() => {
    const element = getRefElement(target);

    if (observer && element) {
      observer.observe(element, options);
      return () => observer.disconnect();
    }
  }, [target, observer, options]);
};