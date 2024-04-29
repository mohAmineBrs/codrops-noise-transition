import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { animate } from "framer-motion";
import { easeQuadOut } from "d3-ease";
import { Color } from "three";

import { colors } from "./data";
import { useStore } from "./store";

import { BackgroundMaterial } from "./BackgroundMaterial";

function Background() {
  const [index, setIndex] = useState(0);

  const play = useStore((s) => s.play);

  const material = useRef();

  const {
    viewport: { width, height },
  } = useThree();

  const handleClick = () => {
    if (play) {
      index == colors.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  };

  useEffect(() => {
    animate(0, 1, {
      onUpdate(v) {
        if (!material.current) return;

        material.current.u_progress = v;
      },

      duration: 2,
      ease: easeQuadOut,
    });
  }, [index]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    material.current.u_time = time;
  });

  return (
    <mesh onClick={(e) => handleClick(e)}>
      <planeGeometry args={[width, height]} />
      <backgroundMaterial
        ref={material}
        key={BackgroundMaterial.key}
        u_aspect={width / height}
        u_color={new Color(colors[index])}
      />
    </mesh>
  );
}

export default Background;
