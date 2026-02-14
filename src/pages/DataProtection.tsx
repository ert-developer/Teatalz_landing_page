import { motion } from "framer-motion";
import { ArrowLeft, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "@/components";

export default function DataProtection() {
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
            <Lock className="w-8 h-8 text-magenta" />
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Data Protection Policy
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-10">
            Last Updated: 09 December 2025 &middot; Version: 1.0
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              This Data Protection Policy ("Policy") outlines how TEATALZ –
              HOUSE OF RUME PRIVATE LIMITED ("Teatalz", "we", "our") protects,
              manages, stores, and processes personal data collected through our
              AI-native emotional wellness platform, including Rume AI,
              Townhall, subscriptions, and related services ("Platform").
            </p>
            <p className="text-gray-700 leading-relaxed">
              Teatalz is committed to complying with the Digital Personal Data
              Protection Act (DPDPA) 2023, GDPR, IT Act 2000 & SPDI Rules, and
              other global data standards.
            </p>

            {/* Section 1 */}
            <Section number="1" title="Purpose of This Policy">
              <p>This Policy establishes:</p>
              <ul>
                <li>
                  How Teatalz collects, stores, processes, and protects user
                  data
                </li>
                <li>Responsibilities of employees, partners, and vendors</li>
                <li>Minimum technical and organizational safeguards</li>
                <li>Retention, deletion, and data transfer procedures</li>
                <li>
                  Safety mechanisms for sensitive emotional wellness data
                </li>
              </ul>
              <p>This Policy applies to:</p>
              <ul>
                <li>Employees</li>
                <li>Contractors</li>
                <li>Vendors & processors</li>
                <li>Partners</li>
                <li>All users of the Teatalz Platform</li>
              </ul>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="Definitions">
              <ul>
                <li>
                  <strong>Personal Data:</strong> Any information that can
                  identify an individual (name, email, phone, IP address).
                </li>
                <li>
                  <strong>Sensitive Personal Data:</strong> Emotional wellness
                  conversations, mental-health indicators, user posts, payment
                  details, voice notes, or other protected categories.
                </li>
                <li>
                  <strong>Processing:</strong> Collection, storage, analysis,
                  use, sharing, transmission, deletion of data.
                </li>
                <li>
                  <strong>Data Principal/User:</strong> Individual whose data is
                  collected.
                </li>
                <li>
                  <strong>Data Fiduciary (Controller):</strong> TEATALZ – HOUSE
                  OF RUME PRIVATE LIMITED.
                </li>
                <li>
                  <strong>Data Processor:</strong> Any third-party service
                  (cloud provider, payment gateway, analytics tools).
                </li>
                <li>
                  <strong>Breach:</strong> Unauthorized access, exposure,
                  destruction, or alteration of data.
                </li>
              </ul>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="Data Categories We Process">
              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.1 Personal Information
              </h4>
              <ul>
                <li>Name</li>
                <li>Email</li>
                <li>Phone number</li>
                <li>Account credentials</li>
                <li>Device identifiers</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.2 Sensitive Personal Data
              </h4>
              <p>
                Used exclusively to improve emotional wellness services:
              </p>
              <ul>
                <li>AI conversation content</li>
                <li>Emotional responses</li>
                <li>Townhall posts</li>
                <li>Private journaling</li>
                <li>Voice notes & audio inputs</li>
                <li>Payment information (via secure gateways)</li>
                <li>Profile preferences & mental wellness indicators</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.3 Technical & System Data
              </h4>
              <ul>
                <li>IP address</li>
                <li>Browser type, device details</li>
                <li>Crash logs</li>
                <li>Usage patterns</li>
                <li>AI interaction metadata</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                3.4 Third-Party Data
              </h4>
              <p>Received through:</p>
              <ul>
                <li>Payment processors</li>
                <li>Analytics tools</li>
                <li>Cloud & hosting services</li>
                <li>Authentication services</li>
              </ul>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="Lawful Bases for Processing">
              <p>Teatalz processes data based on:</p>
              <ul>
                <li>
                  <strong>Consent</strong> – especially for sensitive emotional
                  data
                </li>
                <li>
                  <strong>Contractual Necessity</strong> – to deliver services
                </li>
                <li>
                  <strong>Legitimate Interests</strong> – security, fraud
                  detection, analytics
                </li>
                <li>
                  <strong>Legal Obligation</strong> – compliance with regulatory
                  authorities
                </li>
              </ul>
              <p>
                Users may withdraw consent anytime by contacting{" "}
                <a
                  href="mailto:support@teatalz.com"
                  className="text-magenta hover:underline"
                >
                  support@teatalz.com
                </a>
                .
              </p>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="Data Collection Principles">
              <p>
                Teatalz follows the seven core data protection principles:
              </p>
              <ul>
                <li>
                  <strong>Lawful, Fair & Transparent Processing</strong>
                </li>
                <li>
                  <strong>Purpose Limitation</strong> – data used only for
                  defined purposes
                </li>
                <li>
                  <strong>Data Minimization</strong> – only what is necessary
                </li>
                <li>
                  <strong>Accuracy</strong> – updated and corrected when needed
                </li>
                <li>
                  <strong>Storage Limitation</strong> – retention only as long
                  as needed
                </li>
                <li>
                  <strong>Integrity & Confidentiality</strong> – strong security
                  controls
                </li>
                <li>
                  <strong>Accountability</strong> – documentation, audits,
                  compliance
                </li>
              </ul>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="How We Use and Process Data">
              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                6.1 For Platform Operations
              </h4>
              <ul>
                <li>AI conversation support</li>
                <li>Townhall posts & moderation</li>
                <li>Creator monetization</li>
                <li>Subscription management</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                6.2 For Personalization
              </h4>
              <ul>
                <li>User preferences</li>
                <li>Emotional mode customization</li>
                <li>Content relevance</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                6.3 For Security & Crisis Response
              </h4>
              <ul>
                <li>Detecting harmful or crisis content</li>
                <li>Preventing abuse or harassment</li>
                <li>Enforcing community guidelines</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                6.4 For Analytics & Product Improvement
              </h4>
              <ul>
                <li>System performance</li>
                <li>Debugging</li>
                <li>Improving AI responses (anonymized)</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                6.5 For Legal Compliance
              </h4>
              <ul>
                <li>Respond to law enforcement requests</li>
                <li>Maintain tax and billing records</li>
              </ul>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Data Storage & Security Measures">
              <p>
                Teatalz implements industry-leading safeguards, including:
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                7.1 Technical Measures
              </h4>
              <ul>
                <li>End-to-end encryption (data in transit and at rest)</li>
                <li>AES-256 encryption for stored data</li>
                <li>Secure cloud hosting with restricted access</li>
                <li>Rate limiting, firewalls, bot protection</li>
                <li>Multi-factor authentication for admin accounts</li>
                <li>Role-based access control (RBAC)</li>
                <li>Automated anomaly detection</li>
                <li>Hashing & salting of credentials</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                7.2 Organizational Measures
              </h4>
              <ul>
                <li>Employee confidentiality agreements</li>
                <li>Mandatory security training</li>
                <li>Controlled internal access</li>
                <li>Vendor risk assessments</li>
                <li>Periodic data protection audits</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                7.3 Crisis Support Protocol
              </h4>
              <p>Sensitive emotional signals may trigger:</p>
              <ul>
                <li>AI-based severity scoring</li>
                <li>Suggestion of helplines</li>
                <li>
                  Limited moderator review (only when risk is high)
                </li>
              </ul>
            </Section>

            {/* Section 8 */}
            <Section number="8" title="Data Sharing & Third-Party Processors">
              <p className="font-semibold text-gray-900">
                Teatalz does NOT sell user data.
              </p>
              <p>Data may be shared with:</p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                8.1 Essential Service Providers
              </h4>
              <ul>
                <li>Hosting providers</li>
                <li>Payment gateways</li>
                <li>AI model processors</li>
                <li>Analytics vendors</li>
                <li>Moderation tools</li>
                <li>CDN services</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                8.2 Legal Obligations
              </h4>
              <ul>
                <li>Law enforcement</li>
                <li>Court orders</li>
                <li>Government authorities</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                8.3 Business Transfers
              </h4>
              <p>
                In case of merger, acquisition, restructuring—data will remain
                protected under this Policy.
              </p>
              <p>All third parties must comply with:</p>
              <ul>
                <li>DPDPA 2023</li>
                <li>GDPR standards</li>
                <li>Confidentiality obligations</li>
                <li>Security certifications</li>
              </ul>
            </Section>

            {/* Section 9 */}
            <Section number="9" title="Data Retention Policy">
              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                9.1 Retention Duration
              </h4>
              <ul>
                <li>
                  <strong>Account data</strong> → until deletion request
                </li>
                <li>
                  <strong>Emotional logs</strong> → according to user-selected
                  settings
                </li>
                <li>
                  <strong>Townhall posts</strong> → auto-delete after 7 days
                </li>
                <li>
                  <strong>Payment records</strong> → 7–8 years (legal
                  requirement)
                </li>
                <li>
                  <strong>Analytics logs</strong> → limited retention for
                  operational use
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                9.2 Data Deletion
              </h4>
              <p>Upon user request:</p>
              <ul>
                <li>Personal data is erased</li>
                <li>Sensitive data is permanently deleted</li>
                <li>Backups overwritten automatically during next cycle</li>
              </ul>
              <p>
                Users can request deletion at:{" "}
                <a
                  href="mailto:support@teatalz.com"
                  className="text-magenta hover:underline"
                >
                  support@teatalz.com
                </a>
              </p>
            </Section>

            {/* Section 10 */}
            <Section number="10" title="User Rights">
              <p>
                Depending on jurisdiction, users may exercise:
              </p>
              <ul>
                <li>
                  <strong>Right to Access</strong> – obtain copy of your data
                </li>
                <li>
                  <strong>Right to Correction</strong> – fix inaccurate data
                </li>
                <li>
                  <strong>Right to Deletion</strong> – request erasure
                </li>
                <li>
                  <strong>Right to Data Portability</strong>
                </li>
                <li>
                  <strong>Right to Withdraw Consent</strong>
                </li>
                <li>
                  <strong>Right to Object</strong> to certain processing
                </li>
                <li>
                  <strong>Right to Restrict Processing</strong>
                </li>
              </ul>
              <p>
                Teatalz will respond within 30 days of verified request.
              </p>
            </Section>

            {/* Section 11 */}
            <Section number="11" title="Child Safety & Minors">
              <p>
                Teatalz does not knowingly collect data from users under 18
                years.
              </p>
              <p>If such data is discovered:</p>
              <ul>
                <li>Account is deleted</li>
                <li>Data is removed immediately</li>
                <li>
                  Parent/guardian may contact us for verification
                </li>
              </ul>
            </Section>

            {/* Section 12 */}
            <Section number="12" title="International Data Transfers">
              <p>
                Your data may be processed or stored in countries where cloud
                providers, AI processors, and payment gateways operate.
              </p>
              <p>We ensure:</p>
              <ul>
                <li>Adequate data protection safeguards</li>
                <li>
                  Standard Contractual Clauses (where applicable)
                </li>
                <li>Compliance with DPDPA & GDPR transfer standards</li>
              </ul>
            </Section>

            {/* Section 13 */}
            <Section number="13" title="Data Breach Response Policy">
              <p>
                Teatalz maintains a structured Incident Response Plan:
              </p>
              <ul>
                <li>Immediate identification of breach</li>
                <li>Containment & isolation</li>
                <li>Risk assessment & classification</li>
                <li>Notification to users (if harmful)</li>
                <li>Reporting to authorities (if required)</li>
                <li>Post-incident audit & corrective measures</li>
              </ul>
              <p>Notification timeline:</p>
              <ul>
                <li>Within 72 hours (GDPR standard)</li>
                <li>As soon as practicable (DPDPA requirement)</li>
              </ul>
            </Section>

            {/* Section 14 */}
            <Section number="14" title="Employee & Vendor Obligations">
              <p>All employees and vendors must:</p>
              <ul>
                <li>Sign confidentiality agreements</li>
                <li>Use data strictly for intended purposes</li>
                <li>Follow internal access control rules</li>
                <li>Report suspicious activity immediately</li>
                <li>Complete security training</li>
              </ul>
              <p className="text-sm text-gray-500 italic">
                Violation may result in disciplinary or legal action.
              </p>
            </Section>

            {/* Section 15 */}
            <Section number="15" title="Policy Updates">
              <p>Teatalz may update this Policy:</p>
              <ul>
                <li>For legal changes</li>
                <li>To improve security</li>
                <li>When we add new features</li>
              </ul>
              <p>
                The latest version will always be available on this website.
                Continued use of the Platform indicates acceptance of updated
                terms.
              </p>
            </Section>

            {/* Section 16 */}
            <Section number="16" title="Contact & Grievance Redressal">
              <p>
                For concerns, requests, or complaints regarding data protection,
                contact:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 mt-4">
                <p className="font-semibold text-gray-900">
                  Data Protection Contact / Grievance Officer
                </p>
                <p className="text-sm text-gray-600">
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
