import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import { Card } from "./ui";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Blog() {
  return (
    <section
      id="blog"
      className="section-spacing bg-white scroll-mt-24 relative overflow-hidden"
    >
      {/* Blurry background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-100/50 blur-[90px]" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100/45 blur-[100px]" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Blogs <span className="gradient-text">Coming Soon</span>
          </h2>

          <p className="text-gray-500 text-base md:text-lg">
            We’re brewing thoughtful stories, insights, mental health guides, and
            behind-the-scenes journeys to help you feel seen, heard, and supported.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          className="max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Card padding="lg" className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-200 to-magenta-light flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-magenta" />
                </div>
              </div>

              <h3 className="font-display text-xl md:text-2xl font-semibold text-gray-900">
                Fresh content is brewing...
              </h3>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-2 text-sm text-gray-400 animate-pulse"
              >
                <Sparkles className="w-4 h-4" />
                Brewing inspiration...
              </motion.div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
