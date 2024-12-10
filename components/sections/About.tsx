'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import Image from 'next/image';

const skills = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: 'Frontend Development',
    description: 'Building beautiful, responsive web applications with React and Next.js',
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: 'Backend Development',
    description: 'Creating scalable server-side applications with Firebase and Appwrite',
  },
  {
    icon: <Palette className="h-8 w-8" />,
    title: '3D Development',
    description: 'Crafting immersive 3D experiences with Three.js',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-12 md:grid-cols-2"
        >
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-4xl font-bold">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a passionate developer with over 2 years of experience in creating
                digital experiences that make a difference.
              </p>
              <p>
                My journey in tech started with a curiosity about how things work on the web,
                which led me to dive deep into various technologies and frameworks.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing
                to open-source projects, or sharing my knowledge through technical writing.
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square w-full max-w-md"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/0 backdrop-blur-sm" />
            <div className="absolute inset-2 overflow-hidden rounded-xl bg-muted">
              <Image
                src="/assets/Harsh 2.JPG"
                alt="Profile"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full transition-transform duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="mb-4 text-primary">{skill.icon}</div>
                  <CardTitle>{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{skill.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}