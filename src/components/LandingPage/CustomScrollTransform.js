import { useScroll, useTransform } from "framer-motion";

function CustomScrollTranslate(minRange, maxRange, limitX, limitY) {
  const { scrollYProgress } = useScroll();

  const translateXCard1 = useTransform(
    scrollYProgress,
    [0, 1],
    [minRange, maxRange]
  );
  const clampedTranslateXCard1 = useTransform(translateXCard1, (value) =>
    Math.min(Math.max(value, limitX), limitY)
  );

  return clampedTranslateXCard1;
}

export default CustomScrollTranslate;
