import { animate } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

function Counter({ from, to }) {
  const nodeRef = useRef();
  const [reachedTarget, setReachedTarget] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 3,
      onUpdate(value) {
        if (value >= 100) {
          setReachedTarget(true);
          node.textContent = value.toFixed() + '+';
        } else {
          setReachedTarget(false);
          node.textContent = value.toFixed();
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <p className={`text-blue-600 ml-1 lg:ml-14 text-[80px] lg:text-[130px] font-bold ${reachedTarget ? 'transition-class' : ''}`} ref={nodeRef} />
  );
}

export default function App() {
  return <Counter from={70} to={100} />;
}
