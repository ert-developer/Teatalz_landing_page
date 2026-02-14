import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "@/components";

export default function PrivacyPolicy() {
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
            <ShieldCheck className="w-8 h-8 text-magenta" />
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Privacy Policy
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-10">
            Last Updated: 09 December 2025 &middot; Version: 1.0
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy ("Policy") explains how TEATALZ – HOUSE OF
              RUME PRIVATE LIMITED ("Teatalz", "we", "us", "our") collects,
              uses, stores, discloses, and protects your information when you use
              our website, mobile applications, AI-based emotional wellness
              companion ("Rume AI"), community features ("Townhall"), creator
              tools, and all related services (collectively, the "Platform").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the Platform, you agree to the terms of this
              Policy. If you do not agree, please discontinue use immediately.
            </p>

            {/* Section 1 */}
            <Section number="1" title="Definitions">
              <ul>
                <li>
                  <strong>Personal Data:</strong> Information that identifies or
                  can identify you (name, email, phone number, etc.).
                </li>
                <li>
                  <strong>Sensitive Personal Data:</strong> Emotional,
                  psychological, conversational logs, financial information, and
                  any data protected under applicable laws.
                </li>
                <li>
                  <strong>Processing:</strong> Any operation performed on data,
                  including storing, recording, modifying, or sharing.
                </li>
                <li>
                  <strong>User:</strong> A person accessing or using the
                  Platform.
                </li>
                <li>
                  <strong>Third Parties:</strong> External service providers
                  integrated with our systems (e.g., payment processors, AI
                  tools).
                </li>
              </ul>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="Information We Collect">
              <p>
                We collect information only as required to operate, secure, and
                improve the Platform.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.1 Personal Information You Provide
              </h4>
              <ul>
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Mobile Number</li>
                <li>Account Login Credentials</li>
                <li>Profile Information (optional)</li>
                <li>Preferences and settings</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.2 Sensitive Personal Data
              </h4>
              <p>This includes—but is not limited to:</p>
              <ul>
                <li>
                  Emotional or mental wellness conversations with Rume AI
                </li>
                <li>Posts, comments, or engagements in Townhall</li>
                <li>Wellness preferences, self-reflection content</li>
                <li>
                  Payment and billing information (processed securely through
                  third-party gateways)
                </li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Note: We do not store raw card details. Only masked
                information/transaction IDs are processed via secure gateways.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.3 Automatically Collected Data
              </h4>
              <ul>
                <li>IP address</li>
                <li>
                  Device information (model, OS version, device identifiers)
                </li>
                <li>Browser type</li>
                <li>App usage logs</li>
                <li>
                  AI interaction metadata (not the full content unless required
                  for safety or improvements)
                </li>
                <li>Crash reports and error logs</li>
                <li>
                  Analytics signals (pages visited, time spent, interactions)
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.4 Data From Third Parties
              </h4>
              <ul>
                <li>Payment processors</li>
                <li>Authentication providers</li>
                <li>Analytics tools</li>
                <li>AI model providers</li>
                <li>App store platforms</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.5 Cookies & Tracking Technologies
              </h4>
              <p>
                We use cookies as described in our separate{" "}
                <Link
                  to="/cookie-policy"
                  className="text-magenta hover:underline"
                >
                  Cookies Policy
                </Link>
                .
              </p>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="How We Use Your Information">
              <p>
                We process Personal Data for the following purposes:
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.1 To Operate the Platform
              </h4>
              <ul>
                <li>Create and manage user accounts</li>
                <li>Deliver AI-powered emotional wellness support</li>
                <li>Facilitate Townhall community features</li>
                <li>Store user preferences</li>
                <li>Provide personalized recommendations</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.2 Safety, Security & Moderation
              </h4>
              <ul>
                <li>Detect abusive, harmful, or crisis-related language</li>
                <li>Apply AI + human moderation in Townhall</li>
                <li>Prevent fraud, unauthorized access, or misuse</li>
                <li>
                  Protect user well-being (e.g., crisis detection protocols)
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.3 Payments & Subscriptions
              </h4>
              <ul>
                <li>Process payments securely</li>
                <li>Manage subscriptions and billing</li>
                <li>Generate invoices and receipts</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.4 Improvements to the Platform
              </h4>
              <ul>
                <li>Debugging and performance optimization</li>
                <li>
                  AI training/quality enhancement (using anonymized data only)
                </li>
                <li>Feature development and research</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.5 Communications
              </h4>
              <ul>
                <li>Service announcements</li>
                <li>Customer support responses</li>
                <li>Product updates</li>
                <li>Marketing communication (only with consent)</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.6 Legal Compliance
              </h4>
              <ul>
                <li>
                  Comply with applicable laws, court orders, or government
                  requests
                </li>
                <li>Respond to legal claims and disputes</li>
              </ul>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="Legal Basis for Processing">
              <p>
                We process data under one or more of the following lawful bases:
              </p>
              <ul>
                <li>
                  <strong>Consent</strong> – explicit for sensitive data
                </li>
                <li>
                  <strong>Contractual necessity</strong> – providing requested
                  services
                </li>
                <li>
                  <strong>Legitimate interests</strong> – security, improvement,
                  analytics
                </li>
                <li>
                  <strong>Legal obligation</strong> – compliance with laws
                </li>
              </ul>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="Data Sharing & Third Parties">
              <p className="font-semibold text-gray-900">
                We do not sell your data.
              </p>
              <p>We may share data with:</p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                5.1 Service Providers
              </h4>
              <ul>
                <li>Cloud hosting providers</li>
                <li>AI model processors</li>
                <li>Payment gateways</li>
                <li>Moderation tools</li>
                <li>Analytics platforms</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                5.2 Legal Authorities
              </h4>
              <p>
                Only when required by law, court order, or valid legal process.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                5.3 Business Transfers
              </h4>
              <p>
                If Teatalz undergoes merger, acquisition, or restructuring, your
                data may be transferred safely under this Policy.
              </p>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="Data Security">
              <p>
                We implement industry-standard technical and organizational
                measures:
              </p>
              <ul>
                <li>Encryption (in transit & at rest)</li>
                <li>Two-factor authentication</li>
                <li>Role-based access controls</li>
                <li>Firewalls and secure hosting</li>
                <li>AI misuse detection</li>
                <li>Regular security assessments</li>
              </ul>
              <p>
                While we use best practices, no system is 100% secure.
              </p>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Data Retention">
              <p>We retain data only for as long as necessary:</p>
              <ul>
                <li>
                  <strong>Account data</strong> → until account deletion
                </li>
                <li>
                  <strong>Conversation data</strong> → subject to
                  user-controlled settings (e.g., auto-delete)
                </li>
                <li>
                  <strong>Financial records</strong> → as required by tax laws
                </li>
                <li>
                  <strong>Logs & analytics</strong> → for operational purposes
                  (short-lifecycle retention)
                </li>
              </ul>
              <p>
                Upon request, data will be deleted unless legally prohibited.
              </p>
            </Section>

            {/* Section 8 */}
            <Section number="8" title="Your Rights">
              <p>
                Depending on jurisdiction (GDPR, DPDPA, CCPA), you may:
              </p>
              <ul>
                <li>Access your data</li>
                <li>Request correction</li>
                <li>Request deletion</li>
                <li>Withdraw consent</li>
                <li>Object to processing</li>
                <li>Request data portability</li>
                <li>Disable cookies or tracking</li>
              </ul>
              <p>
                You may exercise these rights by contacting:{" "}
                <a
                  href="mailto:support@teatalz.com"
                  className="text-magenta hover:underline"
                >
                  support@teatalz.com
                </a>
              </p>
            </Section>

            {/* Section 9 */}
            <Section number="9" title="Children's Privacy">
              <p>
                Teatalz is not intended for individuals under 18 years. We do
                not knowingly collect data from minors. If discovered, such data
                will be deleted immediately.
              </p>
            </Section>

            {/* Section 10 */}
            <Section number="10" title="International Data Transfers">
              <p>
                Your data may be processed in jurisdictions where our
                third-party partners operate.
              </p>
              <p>In such cases, we ensure:</p>
              <ul>
                <li>Adequate protection measures</li>
                <li>
                  Standard Contractual Clauses (SCCs) where applicable
                </li>
                <li>Compliance with international data protection laws</li>
              </ul>
            </Section>

            {/* Section 11 */}
            <Section number="11" title="Account Deletion">
              <p>
                You may request account deletion anytime by contacting:{" "}
                <a
                  href="mailto:support@teatalz.com"
                  className="text-magenta hover:underline"
                >
                  support@teatalz.com
                </a>
              </p>
              <p>After deletion:</p>
              <ul>
                <li>Access will be revoked</li>
                <li>Personal data will be securely erased</li>
                <li>
                  Certain financial or legal records may be retained as required
                  by law
                </li>
              </ul>
            </Section>

            {/* Section 12 */}
            <Section number="12" title="Changes to This Privacy Policy">
              <p>
                We may update this Policy periodically. Changes will be posted
                on this website with an updated "Last Updated" date. Continued
                use of the Platform means you accept the revised Policy.
              </p>
            </Section>

            {/* Section 13 */}
            <Section number="13" title="Contact & Grievance Redressal">
              <p>
                For privacy concerns, data requests, or complaints:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 mt-4">
                <p className="font-semibold text-gray-900">
                  Teatalz – House of Rume Private Limited
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
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Grievance Officer</strong> (As required under IT Act,
                    2000)
                  </p>
                  <p className="text-sm text-gray-600">
                    Email:{" "}
                    <a
                      href="mailto:support@teatalz.com"
                      className="text-magenta hover:underline"
                    >
                      support@teatalz.com
                    </a>
                  </p>
                </div>
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
