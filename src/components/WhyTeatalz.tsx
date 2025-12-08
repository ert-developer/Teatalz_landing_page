import { motion } from "framer-motion";
import { Heart, Lock, Clock } from "lucide-react";
import { Card } from "./ui";
import type { FeatureCardProps } from "@/types";

const features: FeatureCardProps[] = [
  {
    icon: <Heart className="w-6 h-6 text-magenta" />,
    title: "Empathy-Driven AI",
    description: "Supportive, warm, human-like conversations.",
  },
  {
    icon: <Lock className="w-6 h-6 text-magenta" />,
    title: "Anonymous & Safe",
    description: "Express freely without revealing your identity.",
  },
  {
    icon: <Clock className="w-6 h-6 text-magenta" />,
    title: "7 Day Auto Delete",
    description: "Your data stays private and temporary.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WhyTeatalz() {
  return (
    <section
      id="features"
      className="section-spacing bg-white relative overflow-hidden section-divider"
    >
      {/* Soft ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -left-10 w-64 h-64 bg-pink-100/50 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-purple-100/40 blur-[90px]" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Why <span className="gradient-text">Teatalz</span>?
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="text-center h-full border-2 border-gray-300 shadow-md hover:border-gray-400 hover:shadow-lg"
                padding="lg"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-pink-50 flex items-center justify-center">
                  {feature.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
