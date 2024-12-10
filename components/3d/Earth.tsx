'use client';

import { useRef, useState } from 'react';
import { useFrame, useThree, ThreeEvent } from '@react-three/fiber';
import * as THREE from 'three';

export default function Earth({ isRotating }: { isRotating: boolean }) {
  const earthRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useFrame((_state, delta) => {
    if (earthRef.current) {
      if (isRotating) {
        earthRef.current.rotation.y += delta * 0.2;
      }
      
      if (hovered) {
        earthRef.current.rotation.x += (mousePosition.y * 0.01 - earthRef.current.rotation.x) * 0.1;
        earthRef.current.rotation.y += (mousePosition.x * 0.01 - earthRef.current.rotation.y) * 0.1;
      }
    }
  });

  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMousePosition({ x, y });
  };

  return (
    <mesh
      ref={earthRef}
      scale={2.5}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onPointerMove={handlePointerMove}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial
        color={hovered ? "#60a5fa" : "#3b82f6"}
        emissive="#000000"
        specular="#ffffff"
        shininess={60}
        wireframe={true}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}
