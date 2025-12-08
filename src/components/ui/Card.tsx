import { motion } from 'framer-motion';
import type { CardProps } from '@/types';

const paddingMap = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  return (
    <motion.div
      className={`
        bg-white rounded-2xl
        border border-gray-100
        ${paddingMap[padding]}
        ${hover ? 'hover:shadow-soft hover:border-gray-200' : ''}
        transition-all duration-300
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -4 } : undefined}
    >
      {children}
    </motion.div>
  );
}
