"use client";

import LaptopModel from "./LaptopModel";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={2.5} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={4}
      />

      <pointLight
        position={[-4, 3, 3]}
        intensity={3}
        color="#3b82f6"
      />

      <LaptopModel />
    </>
  );
}