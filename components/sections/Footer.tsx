'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <motion.div 
        className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center space-x-6 md:order-2">
          <p className="text-sm leading-5 text-muted-foreground">
            Built with Next.js & Tailwind
          </p>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            &copy; {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}