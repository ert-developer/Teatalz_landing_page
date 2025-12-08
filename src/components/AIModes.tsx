import { motion } from "framer-motion";
import { MessageCircle, Brain, Heart, Smile, Sparkles } from "lucide-react";
import { rumi_avatar } from "@/assets";

interface AIMode {
  name: string;
  description: string;
  titleColor: string;
  iconBgColor: string;
  iconColor: string;
  cardBgColor: string;
  icon: React.ReactNode;
  comingSoon?: boolean;
}

const aiModes: AIMode[] = [
  {
    name: "Spill the Tea",
    description:
      "Vent freely and let it all out. Your AI listener is here without judgment, ready to hold space for whatever you need to say.",
    titleColor: "text-pink-600",
    iconBgColor: "bg-pink-500",
    iconColor: "text-white",
    cardBgColor: "bg-amber-50/80",
    icon: <MessageCircle className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    name: "Think Tank",
    description:
      "Get thoughtful advice and problem-solving support. Work through challenges with AI-powered insights tailored to you.",
    titleColor: "text-purple-600",
    iconBgColor: "bg-purple-500",
    iconColor: "text-white",
    cardBgColor: "bg-blue-50/80",
    icon: <Brain className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    name: "Hearts",
    description:
      "Receive warmth, empathy, and emotional support. Sometimes you just need someone to care—and Hearts is here for that.",
    titleColor: "text-pink-500",
    iconBgColor: "bg-pink-400",
    iconColor: "text-white",
    cardBgColor: "bg-pink-50/80",
    icon: <Heart className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    name: "Dank",
    description:
      "Lighten the mood with humor and playful conversation. Because laughter truly is medicine for the soul.",
    titleColor: "text-orange-600",
    iconBgColor: "bg-orange-400",
    iconColor: "text-white",
    cardBgColor: "bg-orange-50/80",
    icon: <Smile className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    name: "Tarot",
    description:
      "Get a fresh perspective through the wisdom of tarot readings.",
    titleColor: "text-indigo-600",
    iconBgColor: "bg-indigo-400",
    iconColor: "text-white",
    cardBgColor: "bg-indigo-50/80",
    icon: <Sparkles className="w-6 h-6" strokeWidth={1.5} />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AIModes() {
  return (
    <section
      id="ai-modes"
      className="relative section-spacing overflow-hidden scroll-mt-24"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200/45 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-6 w-48 h-48 bg-pink-100/55 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-6 left-0 w-72 h-72 bg-amber-100/35 rounded-full blur-[90px] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-100/45 rounded-full blur-[90px] translate-x-1/4 translate-y-1/3" />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:flex-start gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">AI Modes</span> for every mood
            </h2>
            <p className="text-gray-500">
              Choose the companion that matches how you're feeling. Each mode
              offers a unique way to support your emotional journey.
            </p>
          </motion.div>

          {/* Character illustration */}
          <motion.div
            className="relative flex-shrink-0 self-center lg:self-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Speech bubble */}
              <motion.div
                className="absolute -top-2 -right-4 lg:left-full lg:ml-2 lg:top-4 whitespace-nowrap z-10"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm font-medium text-gray-700">
                  I'm Rumi, your non-judgemental AI BFF
                </p>
              </motion.div>

              {/* Character Avatar */}
              <div className="w-24 h-24 lg:w-28 lg:h-28">
                <img
                  src={rumi_avatar}
                  alt="Rume - Your AI BFF"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mode Cards Grid - First Row */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {aiModes.slice(0, 3).map((mode, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={`h-full ${mode.cardBgColor} rounded-3xl p-6 border border-gray-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${mode.iconBgColor} ${mode.iconColor} flex items-center justify-center mb-5`}
                >
                  {mode.icon}
                </div>

                {/* Content */}
                <h3
                  className={`font-display text-xl font-bold ${mode.titleColor} mb-3`}
                >
                  {mode.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {mode.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mode Cards Grid - Second Row */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {aiModes.slice(3, 5).map((mode, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={`h-full ${mode.cardBgColor} rounded-3xl p-6 border border-gray-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${mode.iconBgColor} ${mode.iconColor} flex items-center justify-center mb-5`}
                >
                  {mode.icon}
                </div>

                {/* Content */}
                <h3
                  className={`font-display text-xl font-bold ${mode.titleColor} mb-3`}
                >
                  {mode.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {mode.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Coming Soon Card */}
          <motion.div variants={itemVariants}>
            <div className="h-full bg-gray-100/80 rounded-3xl p-6 border border-gray-200/50 flex flex-col items-center justify-center text-center min-h-[200px]">
              {/* Sparkle Icon */}
              <div className="text-gray-400 mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3v1m0 16v1m-8-9H3m18 0h-1M5.6 5.6l.7.7m12.1-.7-.7.7m-12.1 11.4.7-.7m12.1.7-.7-.7" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>

              <p className="text-gray-500 font-medium">
                Library and whisper modes
                <br />
                are coming soon
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
