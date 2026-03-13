import { motion } from 'framer-motion';
import type { ButtonProps } from '@/types';

const variants = {
  primary: 'bg-gradient-to-r from-magenta to-primary-500 text-white hover:from-magenta-dark hover:to-primary-600 shadow-lg shadow-magenta/25',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  outline: 'bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-full
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-magenta focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const handleClick = () => {
    // Fire Google Analytics event if this button navigates to the waitlist
    if (href === '#waitlist') {
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "waitlist_click", {
          event_category: "engagement",
          event_label: "Navigate to Waitlist",
        });
      }
    }
    
    if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        onClick={handleClick as any}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label={ariaLabel}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={handleClick as any}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}
