import { motion } from 'framer-motion';

export default function EmotionalJourney() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-pink-50/30 to-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Track Your <span className="gradient-text">Emotional Journey</span>
          </h2>
        </motion.div>

        {/* Phone Mockup with Daily Check-ins */}
        <div className="flex justify-center">
          <motion.div
            className="relative max-w-sm w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Phone Frame */}
            <div className="phone-mockup">
              <div className="phone-screen aspect-[9/16] bg-gradient-to-b from-pink-50 to-white">
                <div className="p-6 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-8">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                      Daily Check-ins
                    </h3>
                    <p className="text-sm text-gray-500">
                      Log your mood in seconds and build a habit of self-awareness.
                    </p>
                  </div>

                  {/* Calendar Grid (simplified) */}
                  <div className="bg-white rounded-2xl p-4 shadow-soft mb-6">
                    <div className="grid grid-cols-7 gap-2 text-center text-xs mb-3">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="text-gray-400 font-medium">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 28 }, (_, i) => {
                        const isHighlighted = [3, 4, 5, 10, 11, 17, 18, 19, 24, 25].includes(i);
                        const isToday = i === 18;
                        return (
                          <div
                            key={i}
                            className={`
                              aspect-square rounded-full flex items-center justify-center text-xs
                              ${isToday ? 'gradient-bg text-white font-bold' : ''}
                              ${isHighlighted && !isToday ? 'bg-pink-100 text-pink-600' : ''}
                              ${!isHighlighted && !isToday ? 'text-gray-400' : ''}
                            `}
                          >
                            {i + 1}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mood Question */}
                  <div className="mt-auto">
                    <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
                      <p className="text-gray-700 font-medium mb-4">
                        How are you feeling today?
                      </p>
                      <motion.div
                        className="text-5xl mb-2"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        😊
                      </motion.div>
                      <div className="flex justify-between px-4 mt-4">
                        <span className="text-xs text-gray-400">Not great</span>
                        <span className="text-xs text-gray-400">Amazing</span>
                      </div>
                      <div className="w-full h-2 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-full mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              className="absolute -right-8 top-1/4 bg-white rounded-xl shadow-lg p-3 hidden md:block"
              animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-lg">
                  😌
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">Calm</p>
                  <p className="text-xs text-gray-400">Most frequent</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -left-12 bottom-1/3 bg-white rounded-xl shadow-lg p-3 hidden md:block"
              animate={{ y: [0, 8, 0], rotate: [0, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <div className="text-2xl">📊</div>
                <div>
                  <p className="text-xs font-medium text-gray-700">7 day streak!</p>
                  <p className="text-xs text-gray-400">Keep it up</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
