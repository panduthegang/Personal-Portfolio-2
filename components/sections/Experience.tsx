'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Building2, Calendar } from 'lucide-react';
import Sparkles from '../effects/Sparkles';

const experiences = [
  {
  company: 'Lakshya College',
    position: 'Student',
    period: '2020-2022',
    description: 'Passed out with a degree in Computer Science.',
  },
  {
    company: 'Thakur College of Engineering',
    position: 'Full Stack Developer',
    period: '2020 - present',
    description: 'Started my journey as a developer, working on various frontend projects.',
  },
  {
    company: 'Main Flow Services',
    position: 'Frontend Developer',
    period: '2024 - 2025',
    description: 'Made Some Real Life Projects with Next.js and Typescript.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Sparkles>
            <h2 className="mb-4 text-4xl font-bold">Experience</h2>
          </Sparkles>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            My professional journey in the tech industry, working with amazing teams
            and building great products.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary to-primary/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`mb-8 flex ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <Card className="relative w-[calc(50%-20px)] transition-transform duration-300 hover:-translate-y-1">
                <div
                  className={`absolute top-1/2 h-0.5 w-5 bg-primary ${
                    index % 2 === 0 ? '-right-5' : '-left-5'
                  }`}
                />
                <div className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-background bg-primary ${
                  index % 2 === 0 ? '-right-[34px]' : '-left-[34px]'
                }`} />
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    {exp.company}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-2 font-semibold">{exp.position}</h4>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}