'use client';

import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';
import { Card } from '../ui/card';

const socials = [
  {
    icon: <Mail className="h-6 w-6" />,
    href: "mailto:harshsrathod959@gmail.com",
    label: "Email",
    handle: "harshsrathod959@gmail.com",
  },
  {
    icon: <Github className="h-6 w-6" />,
    href: "https://github.com/panduthegang",
    label: "Github",
    handle: "@panduthegang",
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: "https://www.linkedin.com/in/harsh-rathod-2591b0292/",
    label: "LinkedIn",
    handle: "@Harsh Rathod",
  },
  {
    icon: <Twitter className="h-6 w-6" />,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
    handle: "@yourusername",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let's Connect
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Feel free to reach out through any of these platforms
          </p>
        </div>

        <motion.div 
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {socials.map((social, index) => (
            <motion.div
              key={social.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full border p-2 group-hover:border-primary group-hover:text-primary transition-colors">
                        {social.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="absolute inset-0 pointer-events-none border rounded-lg transition-colors group-hover:border-primary" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}