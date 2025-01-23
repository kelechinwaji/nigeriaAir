import { AnimationDefinition, Transition, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  animationDefinition: AnimationDefinition;
  transitionOverride?: Transition;
  threshold?: number;
};

function useAnimationObserver({ animationDefinition, threshold = 0.5 }: Props) {
  const controls = useAnimation();
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          controls.start(animationDefinition);
        }
      },
      {
        root: null,
        threshold,
      }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
        setIsInView(false);
      }
    };
  }, [controls]); //eslint-disable-line

  return { controls, containerRef, isInView };
}

export default useAnimationObserver;
