import { useCallback, useState } from "react";

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {

  const [translate, setTranslate] = useState(defaultTranslate);
  const [dimensions, setDimensions] = useState();

  const containerRef = useCallback((containerElem) => {
    if (containerElem !== null) {
      const { width, height } = containerElem.getBoundingClientRect();
      console.log(width, height);

      const smallScreenAdjustment = width < 1024 ? 150 : 0;
      const adjustedHeight = height - smallScreenAdjustment;

      setDimensions({ width, adjustedHeight });
      setTranslate({ x: width / 2, y: adjustedHeight / 2 });
    }
  }, []);

  return [dimensions, translate, containerRef];

};
