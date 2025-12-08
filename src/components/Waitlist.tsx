import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, Clock } from "lucide-react";
import { Button } from "./ui";
import { supabase } from "@/lib/supabase";

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("You're on the list! We’ll email you soon.");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) {
      setStatus("error");
      setErrorMessage("Service unavailable. Please try again later.");
      return;
    }

    setStatus("loading");
    setErrorMessage(null);

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const mobile = formData.mobile.trim();

    const { error } = await supabase
      .from("waitlist")
      .insert([{ name, email, mobile, source: "landing_waitlist" }]);

    if (error) {
      console.error("Supabase waitlist error", error);
      if (error.code === "23505") {
        setStatus("success");
        setErrorMessage(null);
        setToastMessage("You're already on the list! We'll keep you posted.");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000);
        return;
      }
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
      return;
    }

    setStatus("success");
    setFormData({ name: "", email: "", mobile: "" });
    setToastMessage("You're on the list! We’ll email you soon.");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const perks = [
    { icon: <Mail className="w-5 h-5" />, label: "Early access invites" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "Privacy-first experience" },
    { icon: <Clock className="w-5 h-5" />, label: "Concierge onboarding" },
  ];

  return (
    <section
      id="waitlist"
      className="section-spacing bg-gray-50 scroll-mt-24 relative overflow-hidden section-divider-thick"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-10 w-72 h-72 bg-pink-100/45 blur-[90px]" />
        <div className="absolute bottom-0 left-6 w-72 h-72 bg-purple-100/35 blur-[90px]" />
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold text-magenta uppercase tracking-wide">
              Join the beta
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Be the first to meet your AI companion
            </h2>
            <p className="text-gray-600">
              Get early access to new modes, personalized onboarding, and a direct
              line to the team so we can build Teatalz with you.
            </p>

            <ul className="space-y-3">
              {perks.map((perk, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-magenta shadow-soft">
                    {perk.icon}
                  </span>
                  <span className="text-sm font-medium">{perk.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/60 shadow-soft p-8"
          >
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-gray-800">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent transition"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent transition"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="mobile" className="text-sm font-semibold text-gray-800">
                  Mobile
                </label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="123-456-7890"
                  className="w-full rounded-2xl border border-gray-200/80 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-magenta focus:border-transparent transition"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-start gap-3 text-xs text-gray-500">
                <input
                  id="privacy"
                  type="checkbox"
                  className="mt-1 accent-magenta focus:ring-magenta"
                  required
                />
                <label htmlFor="privacy">
                  I agree to receive waitlist updates. We respect your privacy and never
                  share your information.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Submitting..." : "Request Access"}
              </Button>

              <p className="text-xs text-gray-400 text-center">
                {status === "success"
                  ? "You're on the list! Check your email for confirmation."
                  : "No spam. You’ll get a quick confirmation with next steps."}
              </p>
              {status === "error" && errorMessage && (
                <p className="text-xs text-red-500 text-center">{errorMessage}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
      {/* Toast */}
      <div
        className={`
          fixed bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300
          ${showToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <div className="bg-gray-900 text-white px-4 py-2 rounded-full shadow-soft text-sm">
          {toastMessage}
        </div>
      </div>
    </section>
  );
}

