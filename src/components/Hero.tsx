import { motion } from "framer-motion";
import { Button } from "./ui";
import { townhall1, townhall2 } from "@/assets";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-20 md:pt-24 overflow-hidden bg-gradient-to-b from-pink-50/50 to-white scroll-mt-24"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Talk,</span>
              <br />
              <span className="text-gray-900">Feel,</span>
              <br />
              <span className="gradient-text">And Heal</span>
            </h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              In a Space Made Safe for{" "}
              <span className="gradient-text">You</span>.
            </motion.p>

            <motion.p
              className="text-gray-500 max-w-lg mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Teatalz is your personal AI companion for emotional wellness.
              Vent, reflect, connect, and grow in a judgment-free space designed
              just for you.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button href="#waitlist" size="lg">
                Join Waitlist
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Contact
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-xl lg:max-w-2xl">
              {/* Floating Mood Card - Top Right */}
              <motion.div
                className="absolute -top-4 right-0 lg:right-12 bg-white rounded-2xl shadow-lg px-4 py-3 z-20 hidden sm:flex items-center gap-3"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Your mood today</p>
                  <p className="text-sm font-semibold gradient-text">
                    Feeling better ✨
                  </p>
                </div>
              </motion.div>

              {/* Main Phone - AI Modes Grid */}
              <motion.div
                className="relative z-10 w-56 sm:w-80 mx-auto lg:mx-0"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="overflow-hidden bg-white">
                  <img
                    src={townhall1}
                    alt="Teatalz App - AI Modes"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              {/* Secondary Phone - Townhall Feed */}
              <motion.div
                className="absolute right-0 lg:-right-8 top-16 sm:top-20 w-44 sm:w-64 z-20 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <div className="rounded-[1.75rem] overflow-hidden bg-white">
                  <img
                    src={townhall2}
                    alt="Teatalz Townhall - Community Feed"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
