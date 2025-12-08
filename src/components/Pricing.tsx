import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Card } from './ui';

interface PricingPlan {
  name: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'FREE Pack',
    features: [
      '100K sips/month',
      'Spill the tea mode',
      'Think tank mode',
      'Hearts mode',
    ],
  },
  {
    name: 'LITE Pack',
    features: [
      '500K sips/month',
      'Advanced features',
      'Tarot mode',
      'Meme tokens',
      'Mood Analytics',
    ],
  },
  {
    name: 'PRO Pack',
    features: [
      '500K sips/month',
      'Unlimited AI features',
      'Couple mode',
      'Custom avatars',
      'Permanent storage',
    ],
    highlighted: true,
  },
  {
    name: 'COLLEGE Pack',
    features: [
      '250K sips/month',
      'Premium Access',
      'Unlock dank, tarot',
      'College ID required',
    ],
    badge: 'Students',
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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
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
            Start free <span className="gradient-text">Upgrade Anytime</span>
          </h2>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`h-full relative ${
                  plan.highlighted
                    ? 'border-2 border-magenta shadow-glow'
                    : 'border border-gray-200'
                }`}
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
                <h3 className={`font-display text-xl font-bold mb-6 ${
                  plan.highlighted ? 'gradient-text' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                        plan.highlighted ? 'bg-magenta' : 'bg-gray-200'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.highlighted ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
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
