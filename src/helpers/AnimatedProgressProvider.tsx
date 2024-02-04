import React, { useEffect, useState } from "react";

type Props = {
  valueStart: number;
  valueEnd: number;
  duration: number;
  easingFunction: (t: number) => number;
  children: (value: number) => React.ReactNode;
};

const AnimatedProgressProvider = ({
  valueStart,
  valueEnd,
  duration,
  easingFunction,
  children,
}: Props) => {
  const [value, setValue] = useState(valueStart);

  useEffect(() => {
    let start: number;
    let rafId: number;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;

      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(easingFunction(progress) * (valueEnd - valueStart) + valueStart);

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [easingFunction, duration, valueStart, valueEnd]);

  return <div>{children(value)}</div>;
};

export default AnimatedProgressProvider;
