import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { logo } from "@/assets";

const companyLinks = [
  { label: "About Us", href: "#hero" },
  { label: "Blog", href: "#features" },
  { label: "CSR Impact", href: "#townhall" },
  { label: "Careers", href: "#waitlist" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#contact" },
  { label: "Terms of Service", href: "#contact" },
  { label: "Data Protection", href: "#contact" },
  { label: "Cookie Policy", href: "#contact" },
];

const socialLinks = [
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
  { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
  {
    icon: <Mail className="w-4 h-4" />,
    href: "mailto:support@teatalz.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-gray-500">
      <div className="absolute inset-0 bg-gradient-to-br from-[#181d4a] via-[#3b1c63] to-[#831845]" />
      <div className="relative container-custom py-12 md:py-14 text-white/90">
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center">
                <img
                  src={logo}
                  alt="Teatalz logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-display font-semibold text-lg text-white">
                Teatalz
              </span>
            </div>
            <p className="text-xs md:text-sm text-white/80 leading-relaxed max-w-xs">
              Your AI companion for emotional wellness. Safe, private, and
              always here for you.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  className="w-9 h-9 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <p className="text-sm font-semibold text-white">Company</p>
            {companyLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <p className="text-sm font-semibold text-white">Legal</p>
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center text-xs text-white/80"
        >
          © Built by{" "}
          <a
            href="https://www.errortechnologies.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white/80 transition-colors hover:underline"
          >
            Error Technologies
          </a>
          . All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
