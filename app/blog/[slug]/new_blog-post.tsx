import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';  // Assuming you are using Next.js Image component
import { ComponentProps } from 'react';

const components = {
    Image: (props: React.ComponentProps<typeof Image>) => (
        <div className="relative w-full aspect-video my-8">
          <Image {...props} alt={props.alt || ''} fill className="object-cover rounded-lg" />
        </div>
      ),
  
  h1: (props: ComponentProps<typeof motion.h1>) => (
    <motion.h1
      {...props}
      className="text-4xl font-bold my-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    />
  ),
  h2: (props: ComponentProps<typeof motion.h2>) => (
    <motion.h2
      {...props}
      className="text-3xl font-semibold my-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    />
  ),
  
  p: (props: ComponentProps<typeof motion.p>) => (
    <motion.p
      {...props}
      className={`my-4 text-gray-700 leading-relaxed ${props.className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />

    
  ),
  
};

export default components;
