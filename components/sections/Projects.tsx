'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Live Docs',
    description: 'A platform for creating and sharing live documentation',
    image: '/assets/project-1.png',
    github: 'https://github.com/panduthegang/LiveDocs',
    demo: 'https://livedocs-by-harsh-durvesh-rudra.vercel.app/sign-in',
    tags: ['Next.js', 'LiveBlocks', 'Tailwind CSS'],
  },
  {
    title: 'Zcrum',
    description: 'Zcrum a project management tool',
    image: '/assets/project-2.png',
    github: 'https://github.com/panduthegang/Zcrum',
    demo: 'https://zcrum-by-harsh.vercel.app/',
    tags: ['React', 'Clerk', 'Prisma'],
  },
  {
    title: 'Sky Store',
    description: 'A clone of Google Drive using Next.js and Appwrite',
    image: 'assets/project-3.png',
    github: 'https://github.com/panduthegang/Sky-Store',
    demo: 'https://sky-store-by-harsh-rathod.vercel.app/',
    tags: ['Next.js', 'Appwrite', 'TypeScript'],
  },
  {
    title: 'Klimate',
    description: 'A real-time weather app using Openmap API and React.js',
    image: 'assets/project-4.png',
    github: 'https://github.com/panduthegang/Klimate',
    demo: 'https://klimate-by-harsh-rathod.vercel.app/',
    tags: ['Openmap API', 'React.js',],
  },
  {
    title: 'AI Journal App',
    description: 'A mobile app for journaling and tracking goals',
    image: 'assets/project-5.png',
    github: 'https://github.com/panduthegang/Journal-App',
    demo: 'https://journal-app-by-harsh-rathod.vercel.app/',
    tags: ['React', 'Prisma', 'Chart.js',],
  },
  {
    title: 'Grocery Store',
    description: 'Online Grocery Store using React.js and Firebase',
    image: 'assets/project-6.png',
    github: 'https://github.com/panduthegang/Grocery-Store',
    demo: 'http://grocery-store-by-harsh-rathod.vercel.app/',
    tags: ['React.js', 'Firebase', 'TypeScript'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Featured Projects</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Here are some of my recent projects that showcase my skills and expertise
            in different areas of web development and emerging technologies.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}