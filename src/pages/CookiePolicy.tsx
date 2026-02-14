import { motion } from "framer-motion";
import { ArrowLeft, Cookie } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar, Footer } from "@/components";

export default function CookiePolicy() {
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
            <Cookie className="w-8 h-8 text-magenta" />
            <h1 className="text-3xl md:text-4xl font-bold gradient-text">
              Cookies Policy
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-10">
            Last Updated: 09 December 2025 &middot; Version: 1.0
          </p>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              This Cookies Policy explains how TEATALZ – HOUSE OF RUME PRIVATE
              LIMITED ("Teatalz", "we", "our", "us") uses cookies and similar
              tracking technologies on this website ("Site") and our
              AI-native emotional wellness platform
              ("Platform").
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our Site or Platform, you agree that we can
              store and access cookies as described in this Policy.
            </p>

            {/* Section 1 */}
            <Section number="1" title="What Are Cookies?">
              <p>
                Cookies are small text files placed on your device (computer,
                mobile phone, tablet) when you visit our Site. Cookies help
                websites remember your actions and preferences, making your
                experience faster, personalized, and more secure.
              </p>
              <p>Cookies may be:</p>
              <ul>
                <li>
                  <strong>Session cookies</strong> – expire when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent cookies</strong> – remain until deleted or
                  expired
                </li>
                <li>
                  <strong>First-party cookies</strong> – set by Teatalz
                </li>
                <li>
                  <strong>Third-party cookies</strong> – set by external
                  services integrated with our Platform
                </li>
              </ul>
            </Section>

            {/* Section 2 */}
            <Section number="2" title="Why We Use Cookies">
              <p>Teatalz uses cookies for the following purposes:</p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.1 Essential / Strictly Necessary Cookies
              </h4>
              <p>
                These cookies are required for the Site and Platform to function
                properly. They enable:
              </p>
              <ul>
                <li>Signing in and authentication</li>
                <li>Secure access to accounts</li>
                <li>Page navigation</li>
                <li>Fraud prevention</li>
              </ul>
              <p>Without these cookies, certain features may not be usable.</p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.2 Performance & Analytics Cookies
              </h4>
              <p>
                These cookies help us understand how users interact with our
                Site and Platform, including:
              </p>
              <ul>
                <li>Pages visited</li>
                <li>Session durations</li>
                <li>User navigation paths</li>
                <li>App or website errors</li>
              </ul>
              <p>
                This data helps us improve speed, reliability, and user
                experience.
              </p>
              <p>
                We may use analytics services provided by third-party tools,
                including but not limited to:
              </p>
              <ul>
                <li>AI analytics engines</li>
                <li>Performance measurement tools</li>
              </ul>
              <p>
                These tools help us measure Platform usage and enhance the
                emotional wellness experience.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.3 Functional Cookies
              </h4>
              <p>
                These cookies store user preferences to personalize the
                experience such as:
              </p>
              <ul>
                <li>Language settings</li>
                <li>Display preferences</li>
                <li>Saved login state</li>
                <li>
                  AI mode preferences (e.g., Spill the Tea, Hearts, Think Tank)
                </li>
              </ul>
              <p>Functional cookies improve convenience and consistency.</p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.4 Targeting / Marketing Cookies (If Enabled in Future)
              </h4>
              <p>These cookies may be used for:</p>
              <ul>
                <li>Personalized recommendations</li>
                <li>Measuring effectiveness of marketing campaigns</li>
                <li>Displaying relevant ads or wellness content</li>
              </ul>
              <p>
                If advertising integrations are added in the future, users will
                be notified and given additional controls.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                2.5 Security Cookies
              </h4>
              <p>These cookies support:</p>
              <ul>
                <li>Account protection</li>
                <li>Detection of unauthorized or suspicious activity</li>
                <li>Prevention of misuse or harmful actions</li>
              </ul>
              <p>
                They help keep your emotional wellness records safe and private.
              </p>
            </Section>

            {/* Section 3 */}
            <Section number="3" title="Third-Party Cookies">
              <p>
                We may allow trusted third parties to set cookies on your device
                for:
              </p>
              <ul>
                <li>Analytics</li>
                <li>Platform performance</li>
                <li>Content delivery</li>
                <li>Payment processing</li>
                <li>AI model integration</li>
                <li>Error debugging</li>
                <li>Security enhancement</li>
              </ul>
              <p>Examples of third-party tools include:</p>
              <ul>
                <li>Cloud hosting & CDN providers</li>
                <li>AI model providers</li>
                <li>Analytics and traffic monitoring tools</li>
                <li>Payment processors</li>
              </ul>
              <p>
                Each third party operates under its own privacy and cookie
                policies. We recommend reviewing their respective terms for
                details on how they use cookies.
              </p>
            </Section>

            {/* Section 4 */}
            <Section number="4" title="Managing Your Cookie Preferences">
              <p>
                You can manage or disable cookies directly from your browser or
                device settings.
              </p>
              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                Browser Instructions:
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Browser
                      </th>
                      <th className="px-4 py-3 font-semibold text-gray-700 border-b">
                        Path
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">Google Chrome</td>
                      <td className="px-4 py-3 text-gray-600">
                        Settings → Privacy & Security → Cookies and other site
                        data
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Mozilla Firefox</td>
                      <td className="px-4 py-3 text-gray-600">
                        Options → Privacy & Security → Cookies and Site Data
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Safari</td>
                      <td className="px-4 py-3 text-gray-600">
                        Preferences → Privacy → Manage Website Data
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Microsoft Edge</td>
                      <td className="px-4 py-3 text-gray-600">
                        Settings → Cookies and site permissions
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mt-6">
                On Mobile Applications:
              </h4>
              <p>
                Users may restrict cookies, trackers, or analytics through
                system privacy settings.
              </p>
              <p className="text-sm text-gray-500 italic">
                Note: Disabling certain cookies may affect functionality,
                personalization, and security of the Platform.
              </p>
            </Section>

            {/* Section 5 */}
            <Section number="5" title="Do We Use Cookie Banners?">
              <p>
                If required under applicable laws (e.g., EU GDPR), Teatalz may
                display:
              </p>
              <ul>
                <li>A cookie consent banner</li>
                <li>Options to accept or reject non-essential cookies</li>
                <li>A link to manage individual cookie categories</li>
              </ul>
              <p>
                At present, Teatalz complies with relevant jurisdictional
                requirements where users reside.
              </p>
            </Section>

            {/* Section 6 */}
            <Section number="6" title="Updates to This Cookies Policy">
              <p>We may update this Policy from time to time to reflect:</p>
              <ul>
                <li>Changes in technology</li>
                <li>New features of the Platform</li>
                <li>Legal or regulatory updates</li>
              </ul>
              <p>
                The latest version will always be available on this website
                with an updated "Last Updated" date.
              </p>
              <p>
                Continued use of the Site or Platform after updates means you
                accept the revised Policy.
              </p>
            </Section>

            {/* Section 7 */}
            <Section number="7" title="Contact Us">
              <p>
                For questions about our Cookies Policy or data practices, you
                may contact us at:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 mt-4">
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
                  <strong>Address:</strong> TEATALZ – HOUSE OF RUME PRIVATE
                  LIMITED, DOOR NO 1-60/8/A & B, 3RD FLOOR, KNR SQUARE, Opp. The
                  Platina, Kondapur, Gachibowli, Hyderabad – 500032, Telangana,
                  India
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
