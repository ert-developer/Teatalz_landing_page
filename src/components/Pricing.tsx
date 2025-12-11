import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "./ui";

interface PricingPlan {
  name: string;
  features: string[];
  badge?: string;
  bg?: string;
  hover?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "FREE Pack",
    features: [
      "100K sips/month",
      "Spill the tea mode",
      "Think tank mode",
      "Hearts mode",
    ],
    bg: "bg-gradient-to-br from-blue-50 to-blue-100",
    hover:
      "hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:border-2 hover:border-blue-400",
  },
  {
    name: "LITE Pack",
    features: ["500K sips/month", "Advanced features", "Tarot mode"],
    bg: "bg-gradient-to-br from-purple-50 to-purple-100",
    hover:
      "hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:border-2 hover:border-purple-400",
  },
  {
    name: "PRO Pack",
    features: ["500K sips/month", "Unlimited AI features", "Permanent storage"],
    bg: "bg-gradient-to-br from-pink-50 to-pink-100",
    hover:
      "hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:border-2 hover:border-pink-400",
  },
  {
    name: "COLLEGE Pack",
    features: [
      "250K sips/month",
      "Premium Access",
      "Unlock dank, tarot",
      "College ID required",
    ],
    bg: "bg-gradient-to-br from-orange-50 to-orange-100",
    hover:
      "hover:shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:border-2 hover:border-orange-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="section-spacing bg-white relative overflow-hidden section-divider"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-10 right-4 w-64 h-64 bg-pink-100/45 blur-[90px]" />
        <div className="absolute bottom-0 left-6 w-72 h-72 bg-amber-100/35 blur-[100px]" />
      </div>

      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Start free <span className="gradient-text">Upgrade Anytime</span>
          </h2>
        </motion.div>

        {/* 2×2 Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`h-full w-full relative rounded-2xl transition-all duration-300 
                ${plan.bg} 
                ${plan.hover}
                border border-gray-200
                hover:scale-[1.03]`}
                padding="lg"
                hover
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 text-xs font-semibold text-white gradient-bg rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="font-display text-xl font-bold mb-6 text-gray-900">
                  {plan.name}
                </h3>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center bg-gray-300">
                        <Check className="w-3 h-3 text-gray-700" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
