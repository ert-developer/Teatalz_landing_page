import { motion } from "framer-motion";
import { ArrowLeft, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "@/components";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-16 w-80 h-80 bg-magenta/10 blur-3xl" />
        <div className="absolute top-10 right-0 w-72 h-72 bg-primary-200/35 blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-primary-100/30 blur-3xl" />
      </div>

      <Navbar />

      <main className="container-custom pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-magenta hover:text-primary-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <ScrollText className="w-8 h-8 text-magenta" />
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Terms of Use / Terms of Service
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-10">
            Last Updated: 09 December 2025 &middot; Version: 1.0
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              These Terms of Use ("Terms") constitute a legally binding
              agreement between TEATALZ – HOUSE OF RUME PRIVATE LIMITED
              ("Teatalz", "we", "us", "our") and the user ("you", "your",
              "User") governing your access to and use of the Teatalz website,
              mobile applications, Rume AI companion, Townhall community,
              creator tools, subscriptions, and related services (collectively,
              the "Platform").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using the Platform, you acknowledge that you have read,
              understood, and agree to be bound by these Terms. If you do not
              agree, you must discontinue use immediately.
            </p>

            {/* Section 1 */}
            <Section number="1" title="Eligibility">
              <p>
                1.1 You must be at least 18 years old to use Teatalz.
              </p>
              <p>
                1.2 By using the Platform, you represent that you have the legal
                capacity to enter into this agreement.
              </p>
              <p>1.3 Use by minors is strictly prohibited.</p>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="About the Platform">
              <p>Teatalz provides:</p>
              <ul>
                <li>
                  <strong>Rume AI</strong> – AI-based emotional wellness
                  companion
                </li>
                <li>
                  <strong>Townhall</strong> – ephemeral emotional social
                  community
                </li>
                <li>
                  <strong>Creator Tools</strong> – monetization and content
                  creation toolkit
                </li>
                <li>
                  <strong>Subscription Services</strong> – Free, College, Lite,
                  Pro, and Creator plans
                </li>
                <li>
                  <strong>Wellness content & introspection features</strong>{" "}
                  including Tarot, Dank, Hearts, Think Tank modes
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Teatalz does not provide medical or clinical therapy and is not a
                substitute for professional psychological care.
              </p>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="Account Registration">
              <p>
                3.1 You must create an account to access certain features.
              </p>
              <p>
                3.2 You agree to provide accurate and complete information.
              </p>
              <p>3.3 You are responsible for:</p>
              <ul>
                <li>Maintaining confidentiality of your login credentials</li>
                <li>All activity under your account</li>
                <li>Ensuring use complies with local laws</li>
              </ul>
              <p>3.4 Teatalz may suspend or terminate accounts for:</p>
              <ul>
                <li>Misuse</li>
                <li>Fraud</li>
                <li>Violations of these Terms</li>
                <li>Security concerns</li>
              </ul>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="User Responsibilities">
              <p>You agree NOT to:</p>
              <ul>
                <li>Misuse, hack, or disrupt the Platform</li>
                <li>
                  Upload harmful, abusive, discriminatory, or illegal content
                </li>
                <li>Impersonate another person or misrepresent identity</li>
                <li>Attempt to reverse-engineer or copy Platform code</li>
                <li>
                  Use Rume AI for prohibited, dangerous, or exploitative
                  requests
                </li>
                <li>
                  Spread misinformation, hate speech, or harassment in Townhall
                </li>
                <li>Post explicit, sexual, violent, or harmful content</li>
                <li>
                  Engage in self-harm encouragement or encourage harm to others
                </li>
              </ul>
              <p>Violations may result in:</p>
              <ul>
                <li>Warnings</li>
                <li>Content removal</li>
                <li>Temporary suspension</li>
                <li>Permanent ban</li>
                <li>Legal action</li>
              </ul>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="Rume AI – Limitations & Disclaimer">
              <p>
                5.1 Rume AI provides emotional support, guided introspection,
                and general well-being prompts.
              </p>
              <p>
                5.2 Rume AI is not a therapist, doctor, or medical expert.
              </p>
              <p>
                5.3 AI responses may not always be accurate, complete, or
                suitable; they should not replace:
              </p>
              <ul>
                <li>Professional mental health counselling</li>
                <li>Emergency help</li>
                <li>Medical diagnosis</li>
                <li>Clinical therapy</li>
              </ul>
              <p>5.4 In crisis cases, the Platform may:</p>
              <ul>
                <li>Provide helpline numbers</li>
                <li>Encourage seeking immediate professional assistance</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Teatalz is not responsible for decisions made based on AI
                responses.
              </p>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="Townhall – Community Rules">
              <p>Users must follow these rules:</p>
              <ul>
                <li>Be respectful and non-abusive</li>
                <li>
                  No hate speech, harassment, bullying, or discrimination
                </li>
                <li>No sexual, explicit, or violent content</li>
                <li>No political or religious extremism</li>
                <li>No misinformation or harmful advice</li>
                <li>No promotion of self-harm</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Townhall posts auto-delete after 7 days, but screenshots by
                others remain outside Teatalz's control.
              </p>
              <p>Teatalz reserves the right to:</p>
              <ul>
                <li>Remove posts</li>
                <li>Moderate content</li>
                <li>Restrict access</li>
                <li>Ban offenders</li>
              </ul>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Subscriptions & Payments">
              <p>
                7.1 Teatalz offers free and paid subscription plans.
              </p>
              <p>
                7.2 Payments must be made through approved gateways.
              </p>
              <p>
                7.3 Subscriptions renew automatically unless cancelled.
              </p>
              <p>
                7.4 Teatalz is not responsible for gateway failures or
                third-party issues.
              </p>
              <p>
                7.5 Refunds are subject to Teatalz's Refund & Cancellation
                Policy (available separately).
              </p>
              <p>
                Price changes may occur, and Users will be notified.
              </p>
            </Section>

            {/* Section 8 */}
            <Section number="8" title="Intellectual Property">
              <p>8.1 Teatalz owns:</p>
              <ul>
                <li>Platform design & architecture</li>
                <li>Rume AI system prompts & models</li>
                <li>Visual assets, trademarks, logos</li>
                <li>Townhall infrastructure</li>
                <li>Creator tool systems</li>
                <li>All underlying code, algorithms, and content</li>
              </ul>
              <p>
                8.2 Users are granted a limited, non-exclusive, non-transferable
                license to use the Platform for personal purposes.
              </p>
              <p>8.3 Users may not:</p>
              <ul>
                <li>Copy</li>
                <li>Modify</li>
                <li>Distribute</li>
                <li>Reverse-engineer</li>
                <li>Sell or sublicense platform content</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Violation may result in legal action.
              </p>
            </Section>

            {/* Section 9 */}
            <Section number="9" title="User Content">
              <p>
                9.1 You retain ownership of content you create, but grant
                Teatalz a non-exclusive, revocable, limited license to:
              </p>
              <ul>
                <li>Store</li>
                <li>Display</li>
                <li>Process</li>
                <li>Moderate</li>
                <li>Improve personalization features</li>
              </ul>
              <p>
                9.2 Content removed by users may still exist in backups for a
                limited duration.
              </p>
            </Section>

            {/* Section 10 */}
            <Section number="10" title="Data Privacy">
              <p>
                Your data is governed by our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-magenta hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  to="/cookie-policy"
                  className="text-magenta hover:underline"
                >
                  Cookies Policy
                </Link>
                .
              </p>
              <p>Key principles:</p>
              <ul>
                <li>You own your data</li>
                <li>Teatalz never sells user data</li>
                <li>Sensitive data is encrypted and protected</li>
                <li>AI interactions follow strict privacy safeguards</li>
              </ul>
              <p>Full details appear in the Privacy Policy.</p>
            </Section>

            {/* Section 11 */}
            <Section number="11" title="Data & Account Termination">
              <p>We may suspend or terminate your account if:</p>
              <ul>
                <li>You violate these Terms</li>
                <li>You misuse the Platform</li>
                <li>You engage in harmful behavior</li>
                <li>You fail to pay subscription dues</li>
              </ul>
              <p>
                You may terminate by requesting deletion via:{" "}
                <a
                  href="mailto:support@teatalz.com"
                  className="text-magenta hover:underline"
                >
                  support@teatalz.com
                </a>
              </p>
              <p>Upon termination:</p>
              <ul>
                <li>Access is revoked</li>
                <li>Data is deleted or anonymized</li>
                <li>
                  Certain financial or legal data may be retained per law
                </li>
              </ul>
            </Section>

            {/* Section 12 */}
            <Section number="12" title="Limitation of Liability">
              <p>To the maximum extent permitted by law:</p>
              <p>12.1 Teatalz is not liable for:</p>
              <ul>
                <li>Emotional or psychological outcomes</li>
                <li>AI responses, errors, or inaccuracies</li>
                <li>Interruptions or downtime</li>
                <li>Loss of data</li>
                <li>User interactions in Townhall</li>
                <li>Actions taken based on AI guidance</li>
                <li>Third-party service issues</li>
              </ul>
              <p>
                12.2 Maximum liability shall not exceed the amount paid by the
                User in the last 12 months.
              </p>
            </Section>

            {/* Section 13 */}
            <Section number="13" title="Indemnity">
              <p>
                You agree to indemnify and hold harmless Teatalz from claims
                arising out of:
              </p>
              <ul>
                <li>Your misuse of the Platform</li>
                <li>Violation of these Terms</li>
                <li>Illegal or harmful actions on the Platform</li>
                <li>Third-party claims related to your content</li>
              </ul>
            </Section>

            {/* Section 14 */}
            <Section number="14" title="Updates & Modifications">
              <p>Teatalz may update these Terms for:</p>
              <ul>
                <li>Legal compliance</li>
                <li>Platform enhancements</li>
                <li>Security improvements</li>
              </ul>
              <p>
                Changes will be posted on this website. Continued use
                constitutes acceptance of updated Terms.
              </p>
            </Section>

            {/* Section 15 */}
            <Section number="15" title="Governing Law & Jurisdiction">
              <p>
                These Terms shall be governed by the laws of India. Courts of
                Hyderabad, Telangana shall have exclusive jurisdiction.
              </p>
            </Section>

            {/* Section 16 */}
            <Section number="16" title="Contact Information">
              <p>For questions, disputes, or concerns:</p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 mt-4">
                <p className="font-semibold text-gray-900">
                  TEATALZ – HOUSE OF RUME PRIVATE LIMITED
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@teatalz.com"
                    className="text-magenta hover:underline"
                  >
                    support@teatalz.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> DOOR NO 1-60/8/A & B, 3RD FLOOR, KNR
                  SQUARE, Opp. The Platina, Kondapur, Gachibowli, Hyderabad –
                  500032, Telangana, India
                </p>
              </div>
            </Section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="space-y-3"
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
        {number}. {title}
      </h3>
      <div className="text-gray-700 leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_li]:text-gray-700">
        {children}
      </div>
    </motion.section>
  );
}
