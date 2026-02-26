import { motion } from "framer-motion";
import { MessageCircle, Brain, Heart, Smile, Sparkles } from "lucide-react";
import { rume_avatar } from "@/assets";

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
      "Get thoughtful advice and problem-solving support with AI-powered insights tailored to you.",
    titleColor: "text-purple-600",
    iconBgColor: "bg-purple-500",
    iconColor: "text-white",
    cardBgColor: "bg-blue-50/80",
    icon: <Brain className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    name: "Hearts",
    description:
      "Receive warmth, empathy, and emotional support—sometimes you just need a caring companion.",
    titleColor: "text-pink-500",
    iconBgColor: "bg-pink-400",
    iconColor: "text-white",
    cardBgColor: "bg-pink-50/80",
    icon: <Heart className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    name: "Dank",
    description:
      "Lighten the mood with humor and playful conversation—because laughter is healing.",
    titleColor: "text-orange-600",
    iconBgColor: "bg-orange-400",
    iconColor: "text-white",
    cardBgColor: "bg-orange-50/80",
    icon: <Smile className="w-6 h-6" strokeWidth={1.5} />,
  },
  {
    name: "Tarot",
    description:
      "Gain fresh perspective through intuitive tarot-style insights.",
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
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function AIModes() {
  return (
    <section
      id="ai-modes"
      className="relative section-spacing overflow-visible scroll-mt-24 bg-white section-divider"
    >
      {/* Background soft blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-0 right-6 w-48 h-48 bg-pink-100/55 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-6 left-0 w-72 h-72 bg-amber-100/35 rounded-full blur-[90px] -translate-x-1/2 translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-purple-100/45 rounded-full blur-[90px] translate-x-1/4 translate-y-1/3" />
      </div>

      <div className="container-custom relative overflow-visible">
        {/* ---- HEADER ---- */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 md:gap-10 mb-10 md:mb-12 relative overflow-visible">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="gradient-text">AI Modes</span> for every mood
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Choose the companion that fits how you're feeling. Every mode
              offers a unique emotional and conversational experience.
            </p>
          </motion.div>

          {/* Rume Avatar */}
          <motion.div
            className="relative flex-shrink-0 self-center lg:self-start"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            {/* Mobile: row layout — avatar left, bubble right */}
            {/* Desktop (sm+): column layout — bubble above, avatar below */}
            <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-center">
              {/* Avatar Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 relative z-10 flex-shrink-0 sm:order-2">
                <img
                  src={rume_avatar}
                  alt="Rume - AI Companion"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>

              {/* Bubble */}
              <motion.div
                className="sm:order-1 sm:absolute sm:-top-14 sm:left-1/2 sm:-translate-x-1/2 z-20"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <p className="text-xs sm:text-sm font-medium text-gray-700 bg-white/95 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-lg border border-gray-300 max-w-[150px] sm:max-w-none sm:whitespace-nowrap">
                  I'm Rume — your non-judgmental AI BFF ✨
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ---- MODES GRID ---- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-3
            gap-6
            auto-rows-[1fr]
          "
        >
          {aiModes.map((mode, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div
                className={`h-full ${mode.cardBgColor} rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${mode.iconBgColor} ${mode.iconColor} flex items-center justify-center mb-5`}
                >
                  {mode.icon}
                </div>

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

          {/* Coming Soon */}
          <motion.div variants={itemVariants}>
            <div className="h-full bg-gray-100/80 rounded-3xl p-6 border border-gray-200 text-center flex items-center justify-center flex-col shadow-sm">
              <div className="text-gray-400 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <p className="text-gray-600 font-medium">
                Library & Whisper modes
                <br /> are coming soon ✨
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
