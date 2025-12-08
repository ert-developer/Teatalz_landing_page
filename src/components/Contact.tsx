import { motion } from 'framer-motion';
import { Button } from './ui';

export default function Contact() {
  return (
    <section id="contact" className="section-spacing bg-gray-50 scroll-mt-24">
      <div className="container-custom">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-500 mb-8">
            Our support team is here to help. We typically respond within 24 hours.
          </p>
          <Button href="mailto:support@teatalz.com" size="lg">
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
