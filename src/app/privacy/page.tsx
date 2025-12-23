import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CosyArcade",
  description: "How CosyArcade handles your data",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: January 2025</p>

        <section>
          <h2>Introduction</h2>
          <p>
            CosyArcade (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) operates the website cosyarcade.com (the &ldquo;Service&rdquo;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.
          </p>
          <p>
            We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>

          <h3>Information You Provide</h3>
          <p><strong>Account Information</strong></p>
          <ul>
            <li>Email address (required for account creation)</li>
            <li>Username (chosen by you)</li>
            <li>Password (stored securely hashed)</li>
            <li>Phone number (optional, for age verification)</li>
            <li>Parent/guardian email (for child accounts)</li>
          </ul>

          <p><strong>Game Data</strong></p>
          <ul>
            <li>Save states (game progress)</li>
            <li>Play history</li>
            <li>Favourite games</li>
            <li>Settings preferences</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p><strong>Usage Data</strong></p>
          <ul>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Games played</li>
            <li>Features used</li>
          </ul>

          <p><strong>Device Information</strong></p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Screen resolution</li>
            <li>Device type (desktop/mobile)</li>
          </ul>

          <p><strong>Cookies and Local Storage</strong></p>
          <ul>
            <li>Authentication tokens</li>
            <li>Theme preferences</li>
            <li>Performance settings</li>
            <li>Session data</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain the Service</li>
            <li>Create and manage your account</li>
            <li>Save your game progress</li>
            <li>Verify your age for age-restricted content</li>
            <li>Send important service updates</li>
            <li>Improve and optimise the Service</li>
            <li>Respond to your requests and support queries</li>
          </ul>
        </section>

        <section>
          <h2>Age Verification Data</h2>
          <p>For users seeking access to teen-rated content:</p>
          <ul>
            <li>Phone numbers are used solely for SMS verification</li>
            <li>Verification codes expire after 10 minutes</li>
            <li>We do not store your phone number after verification</li>
            <li>We record only that verification was completed</li>
          </ul>

          <p>For child accounts:</p>
          <ul>
            <li>Parent email addresses are used to obtain consent</li>
            <li>Parents can revoke consent at any time</li>
            <li>Child accounts have restricted access to content</li>
          </ul>
        </section>

        <section>
          <h2>Data Sharing</h2>
          <p>We do not sell your personal data. We may share data with:</p>

          <p><strong>Service Providers</strong></p>
          <ul>
            <li>Twilio (SMS verification)</li>
            <li>Resend (transactional email)</li>
            <li>Vultr (hosting)</li>
            <li>PostgreSQL database providers</li>
          </ul>

          <p><strong>Legal Requirements</strong></p>
          <p>We may disclose your data if required by law or to protect our rights.</p>
        </section>

        <section>
          <h2>Data Retention</h2>
          <ul>
            <li>Account data: Retained while your account is active</li>
            <li>Save states: Retained while your account is active</li>
            <li>Usage logs: Retained for 90 days</li>
            <li>Verification data: Deleted after verification complete</li>
          </ul>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Delete your account and data</li>
            <li>Export your data</li>
            <li>Withdraw consent for optional processing</li>
          </ul>
          <p>To exercise these rights, contact us at privacy@cosyarcade.com.</p>
        </section>

        <section>
          <h2>Children&apos;s Privacy</h2>
          <p>CosyArcade offers accounts for users under 13 with parental consent. We:</p>
          <ul>
            <li>Require verified parental consent for child accounts</li>
            <li>Limit data collection from children</li>
            <li>Do not show advertising to children</li>
            <li>Restrict access to age-inappropriate content</li>
            <li>Allow parents to review and delete child data</li>
          </ul>
        </section>

        <section>
          <h2>Security</h2>
          <p>We implement appropriate security measures including:</p>
          <ul>
            <li>HTTPS encryption for all connections</li>
            <li>Secure password hashing (bcrypt)</li>
            <li>Regular security updates</li>
            <li>Access controls and monitoring</li>
          </ul>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, contact us at:</p>
          <ul>
            <li>Email: privacy@cosyarcade.com</li>
            <li>Website: <a href="/contact">cosyarcade.com/contact</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
