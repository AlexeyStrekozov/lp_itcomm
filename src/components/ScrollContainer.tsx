import { useState, useRef, ReactNode, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type ParallaxProps = {
  children?: ReactNode;
  offset?: number;
  className?: string;
  isMobile?: boolean;
  style?: any;
};

const Parallax = ({
  children,
  offset = 50,
  isMobile,
  style,
  ...rest
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (!element) return;
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY || window.scrollY,
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion || isMobile) {
    return <div {...rest}>{children}</div>;
  }

  return (
    <motion.div {...rest} ref={ref} style={{ ...style, y }}>
      {children}
    </motion.div>
  );
};
const ParallaxBackground = ({
  offset = 50,
  children,
  style,
  ...rest
}: ParallaxProps): JSX.Element => {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);

  const { scrollY } = useScroll();

  const initial = elementTop + clientHeight;
  const final = elementTop - offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90, velocity: 50 });

  useEffect(() => {
    const element = ref.current;
    const onResize = () => {
      setElementTop(
        element.getBoundingClientRect().top + window.scrollY || window.scrollY,
      );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion) {
    return <div {...rest}>{children}</div>;
  }

  return (
    <motion.div
      {...rest}
      ref={ref}
      style={{
        ...style,
        y: y,
      }}
    >
      {children}
    </motion.div>
  );
};

export { Parallax, ParallaxBackground };
