
export const getRefElement = (
  element
) => {
  if (element && 'current' in element) {
    return element.current;
  }

  return element;
};

export const isSSR = !(
    typeof window !== 'undefined' && window.document?.createElement
  );