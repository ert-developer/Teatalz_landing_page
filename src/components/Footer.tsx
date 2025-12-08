import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import type { FooterLinkGroup } from '@/types';

const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'AI Modes', href: '#ai-modes' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Townhall', href: '#townhall' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Our Mission', href: '#' },
      { label: 'CSR Impact', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Safety Tips', href: '#' },
      { label: 'Crisis Resources', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Data Protection', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
  { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Description */}
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="font-display font-bold text-xl text-gray-900">Teatalz</span>
            </a>

            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              Your AI companion for emotional wellness. Safe, private, and always here for you.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Groups */}
          {footerLinks.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="font-display font-semibold text-gray-900 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Teatalz. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with 💜 for your emotional wellness
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
