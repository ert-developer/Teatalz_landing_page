import { motion } from 'framer-motion';
import { UserCircle, Users, Shield, ThumbsUp, MessageCircle } from 'lucide-react';
import { Card } from './ui';
import type { TownhallFeatureProps, TestimonialProps } from '@/types';

const townhallFeatures: TownhallFeatureProps[] = [
  {
    icon: <UserCircle className="w-6 h-6 text-magenta" />,
    title: '100% Anonymous',
    description: 'No usernames, no profiles, no identities. Just real people, real experiences in a safe space.',
  },
  {
    icon: <Users className="w-6 h-6 text-magenta" />,
    title: 'Supportive Community',
    description: "Get encouragement from people who truly understand what you're going through. We're all in this together.",
  },
  {
    icon: <Shield className="w-6 h-6 text-magenta" />,
    title: 'Moderated for Safety',
    description: 'Our AI and human moderators ensure the space stays kind, supportive, and free from harmful content.',
  },
];

const testimonials: TestimonialProps[] = [
  {
    content: "Finally found a space where I can be honest about my struggles. Thank you, Teatalz Townhall!",
    author: "Anonymous",
    timeAgo: "2h ago",
    likes: 234,
    comments: 18,
  },
  {
    content: "Used Think Tank mode today and got such helpful advice. Feeling more confident about my decision.",
    author: "Anonymous",
    timeAgo: "4h ago",
    likes: 156,
    comments: 24,
  },
  {
    content: "The anonymity here makes all the difference. I can share without fear of judgment.",
    author: "Anonymous",
    timeAgo: "6h ago",
    likes: 312,
    comments: 45,
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

export default function Townhall() {
  return (
    <section
      id="townhall"
      className="section-spacing bg-white scroll-mt-24 relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-6 left-6 w-72 h-72 bg-pink-100/50 blur-[90px]" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-100/45 blur-[100px]" />
      </div>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            You're not alone <span className="gradient-text">Join the Townhall</span>
          </h2>
          <p className="text-gray-500 max-w-2xl">
            Connect with others who get it. Share your story, offer support, and find comfort—all while staying completely anonymous.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Testimonials */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="flex gap-4" padding="md" hover>
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200 to-magenta-light flex items-center justify-center">
                      <UserCircle className="w-6 h-6 text-magenta" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-700 text-sm leading-relaxed mb-3">
                      "{testimonial.content}"
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span>{testimonial.timeAgo}</span>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="w-3 h-3" />
                        <span>{testimonial.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{testimonial.comments}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Features */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {townhallFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
