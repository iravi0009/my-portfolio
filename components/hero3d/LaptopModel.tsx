"use client";

import { Float, useGLTF } from "@react-three/drei";

export default function LaptopModel() {
  const { scene } = useGLTF("/models/laptop.glb");

  return (
    <Float
      speed={2}
      rotationIntensity={0.2}
      floatIntensity={0.6}
    >
      <primitive
        object={scene}
        scale={0.5}
        position={[0, -1, 0]}
        rotation={[0, Math.PI, 0]}
      />
    </Float>
  );
}

useGLTF.preload("/models/laptop.glb");