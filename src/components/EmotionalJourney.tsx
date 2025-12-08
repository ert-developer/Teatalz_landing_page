import { motion } from "framer-motion";
import backgroundImage from "@/assets/wellness-practices-bg.png";

export default function EmotionalJourney() {
  return (
    <section
      id="journey"
      className="section-spacing bg-gradient-to-b from-white to-pink-50/40 overflow-hidden scroll-mt-24 section-divider"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Track Your <span className="gradient-text">Emotional Journey</span>
          </h2>
        </motion.div>

        {/* Visual block */}
        <motion.div
          className="relative overflow-hidden rounded-3xl shadow-soft min-h-[300px] md:min-h-[400px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={backgroundImage}
            alt="Relaxed woman with serene background"
            className="w-full h-full object-cover min-h-[300px] md:min-h-[400px] max-h-[460px]"
            loading="lazy"
          />

          {/* Overlay cards */}
          <div className="absolute inset-0 p-3 sm:p-4 md:p-6">
            {/* Top Left Card */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-soft max-w-[calc(100%-1.5rem)] sm:max-w-[calc(50%-1rem)] md:max-w-xs z-10">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
                Daily Check-ins
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Log your mood in seconds and build a habit of self-awareness.
              </p>
            </div>

            {/* Bottom Right Card */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl px-3 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 shadow-soft w-[calc(100%-1.5rem)] sm:w-[calc(50%-1rem)] md:w-72 lg:w-80 max-w-full z-10">
              <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2">
                How are you feeling today?
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                <span className="text-xl sm:text-2xl mx-auto flex justify-center">
                  🙂
                </span>
              </div>
              <div className="mt-2 sm:mt-3 flex items-center justify-between text-xs text-gray-400">
                <span>Not great</span>
                <span>Amazing</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-gradient-to-r from-red-300 via-yellow-300 to-green-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
