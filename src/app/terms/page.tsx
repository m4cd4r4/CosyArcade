import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CosyArcade",
  description: "Rules for using CosyArcade",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last updated: January 2025</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using CosyArcade (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you disagree with any part of the terms, you may not access the Service.
          </p>
        </section>

        <section>
          <h2>2. Description of Service</h2>
          <p>
            CosyArcade is a browser-based retro gaming platform that allows users to play legally-free games (homebrew, freeware, and open source) directly in their web browser.
          </p>
        </section>

        <section>
          <h2>3. User Accounts</h2>

          <h3>3.1 Account Creation</h3>
          <p>To access certain features, you must create an account. You agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your password</li>
            <li>Accept responsibility for all activities under your account</li>
            <li>Notify us immediately of any unauthorised use</li>
          </ul>

          <h3>3.2 Account Types</h3>
          <p><strong>Guest Access</strong></p>
          <ul>
            <li>No account required</li>
            <li>Limited to all-ages content</li>
            <li>No save state functionality</li>
          </ul>

          <p><strong>Standard Account</strong></p>
          <ul>
            <li>Email verification required</li>
            <li>Access to save states</li>
            <li>Limited to all-ages content</li>
          </ul>

          <p><strong>Verified Account (13+)</strong></p>
          <ul>
            <li>SMS verification required</li>
            <li>Full access to teen-rated content</li>
            <li>Multiplayer features enabled</li>
          </ul>

          <p><strong>Child Account (Under 13)</strong></p>
          <ul>
            <li>Parental consent required</li>
            <li>Limited to all-ages content</li>
            <li>Save states enabled</li>
            <li>No multiplayer access</li>
          </ul>

          <h3>3.3 Account Termination</h3>
          <p>We reserve the right to suspend or terminate accounts that:</p>
          <ul>
            <li>Violate these Terms</li>
            <li>Engage in abusive behaviour</li>
            <li>Attempt to circumvent age restrictions</li>
            <li>Misuse the Service</li>
          </ul>
        </section>

        <section>
          <h2>4. Acceptable Use</h2>
          <p>You agree NOT to:</p>
          <ul>
            <li>Use the Service for any illegal purpose</li>
            <li>Attempt to access age-restricted content without proper verification</li>
            <li>Share your account credentials</li>
            <li>Attempt to bypass security measures</li>
            <li>Upload, transmit, or distribute harmful content</li>
            <li>Harass, abuse, or harm other users</li>
            <li>Use automated systems to access the Service</li>
            <li>Reverse engineer or decompile the Service</li>
          </ul>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>

          <h3>5.1 Our Content</h3>
          <p>
            The CosyArcade website, branding, design, and code are owned by us and protected by intellectual property laws.
          </p>

          <h3>5.2 Game Content</h3>
          <p>Games available on CosyArcade are:</p>
          <ul>
            <li>Homebrew games created by independent developers</li>
            <li>Freeware games released for free distribution</li>
            <li>Open source games and clones</li>
            <li>Public domain games</li>
          </ul>
          <p>
            Each game&apos;s licence and attribution is documented in its metadata. Game content remains the property of its respective creators.
          </p>

          <h3>5.3 User Content</h3>
          <p>
            By using save state features, you grant us a licence to store and serve your save data back to you. Save data remains your property.
          </p>
        </section>

        <section>
          <h2>6. Age Restrictions</h2>

          <h3>6.1 Age Requirements</h3>
          <ul>
            <li>Users under 13 require parental consent</li>
            <li>Teen-rated content requires age verification (13+)</li>
            <li>Adult content is not hosted on CosyArcade</li>
          </ul>

          <h3>6.2 Age Verification</h3>
          <p>
            We use SMS verification to confirm user age for teen-rated content. By completing verification, you confirm that:
          </p>
          <ul>
            <li>You are 13 years of age or older</li>
            <li>The phone number belongs to you or you have permission to use it</li>
            <li>You are not misrepresenting your age</li>
          </ul>

          <h3>6.3 Parental Consent</h3>
          <p>For users under 13:</p>
          <ul>
            <li>A parent or guardian must approve account creation</li>
            <li>Parents can revoke consent at any time</li>
            <li>Parents can request deletion of their child&apos;s data</li>
          </ul>
        </section>

        <section>
          <h2>7. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT GUARANTEE THAT:
          </p>
          <ul>
            <li>The Service will be uninterrupted or error-free</li>
            <li>Games will function perfectly on all devices</li>
            <li>Save data will never be lost</li>
          </ul>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, COSYARCADE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF DATA OR PROFITS.
          </p>
        </section>

        <section>
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless CosyArcade and its operators from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
          </p>
        </section>

        <section>
          <h2>10. Modifications to Service</h2>
          <p>
            We reserve the right to modify or discontinue the Service at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance.
          </p>
        </section>

        <section>
          <h2>11. Modifications to Terms</h2>
          <p>
            We may revise these Terms at any time. By continuing to use the Service after changes take effect, you agree to the revised Terms.
          </p>
        </section>

        <section>
          <h2>12. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of Ireland, without regard to its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2>13. Contact</h2>
          <p>For questions about these Terms, contact us at:</p>
          <ul>
            <li>Email: legal@cosyarcade.com</li>
            <li>Website: <a href="/contact">cosyarcade.com/contact</a></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
