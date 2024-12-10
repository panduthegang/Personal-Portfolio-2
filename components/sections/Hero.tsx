'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import Earth from '../3d/Earth';
import Stars from '../effects/Stars';
import { Button } from '../ui/button';
import { ArrowDown } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Hero() {
  const [isRotating, setIsRotating] = useState(true);
  const { theme } = useTheme();

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full bg-gradient-to-b from-transparent to-background">
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          className="touch-none cursor-none"
          onCreated={({ gl }) => {
            gl.setClearColor('#000000', 0);
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Suspense fallback={null}>
            {theme === 'dark' && <Stars />}
            <Earth isRotating={isRotating} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30">
        <div className="px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
           Harsh Rathod
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-text mb-8 text-lg text-gray-200 md:text-xl"
          >
            Full Stack Developer & 3D Enthusiast
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ArrowDown className="mr-2" />
              Explore
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}