import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { animate } from "framer-motion";
import { easeQuadOut } from "d3-ease";

import { BackgroundMaterial } from "./BackgroundMaterial";
import { colors } from "./utils";
import { useStore } from "./store";
import { Color } from "three";

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

      duration: 1.9,
      ease: easeQuadOut,
    });
  }, [index]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    material.current.u_time = time;
  });

  return (
    <mesh onClick={(e) => handleClick(e)} visible={true}>
      <planeGeometry args={[width, height]} />
      {/* @ts-ignore */}
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
