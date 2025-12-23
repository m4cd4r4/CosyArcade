import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Age Verification Policy | CosyArcade",
  description: "How CosyArcade protects younger users",
};

export default function AgePolicyPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Age Verification Policy</h1>
        <p className="last-updated">Last updated: January 2025</p>

        <section>
          <h2>Purpose</h2>
          <p>
            CosyArcade is committed to providing age-appropriate content to all users. This policy explains how we verify user ages and protect younger users.
          </p>
        </section>

        <section>
          <h2>Content Ratings</h2>

          <h3>ALL (All Ages)</h3>
          <ul>
            <li>Suitable for everyone</li>
            <li>No violence beyond cartoon/fantasy</li>
            <li>No mature themes</li>
            <li>No verification required</li>
          </ul>

          <h3>TEEN_13 (Ages 13+)</h3>
          <ul>
            <li>Mild cartoon violence</li>
            <li>Some competitive/challenging content</li>
            <li>Requires SMS verification to access</li>
          </ul>
        </section>

        <section>
          <h2>Verification Methods</h2>

          <h3>For Users 13 and Over</h3>
          <p><strong>SMS Verification</strong></p>
          <ol>
            <li>User provides mobile phone number</li>
            <li>We send a 6-digit verification code via Twilio</li>
            <li>User enters code within 10 minutes</li>
            <li>Verification status is recorded (phone number is not stored)</li>
          </ol>

          <p><strong>Why SMS?</strong></p>
          <ul>
            <li>Mobile phone ownership correlates with age</li>
            <li>Provides reasonable assurance without collecting sensitive documents</li>
            <li>Quick and user-friendly process</li>
          </ul>

          <h3>For Users Under 13</h3>
          <p><strong>Parental Consent</strong></p>
          <ol>
            <li>Child provides parent/guardian email address</li>
            <li>We send verification email to parent</li>
            <li>Parent clicks link to approve account creation</li>
            <li>Child account is created with restricted access</li>
          </ol>

          <p><strong>Parent Rights</strong></p>
          <ul>
            <li>Review what data we collect about their child</li>
            <li>Request deletion of their child&apos;s account</li>
            <li>Revoke consent at any time</li>
          </ul>
        </section>

        <section>
          <h2>What Verification Does NOT Include</h2>
          <p>We do NOT:</p>
          <ul>
            <li>Request government ID or identity documents</li>
            <li>Collect date of birth (we verify age bracket, not exact age)</li>
            <li>Store phone numbers after verification</li>
            <li>Share verification data with third parties</li>
            <li>Use facial recognition or biometrics</li>
          </ul>
        </section>

        <section>
          <h2>Bypassing Restrictions</h2>
          <p>
            Attempting to bypass age verification is a violation of our Terms of Service and may result in:
          </p>
          <ul>
            <li>Account suspension or termination</li>
            <li>IP-based access restrictions</li>
            <li>Reporting to relevant authorities if laws are broken</li>
          </ul>
        </section>

        <section>
          <h2>For Parents</h2>

          <h3>How to Know if Your Child Has an Account</h3>
          <p>
            Child accounts require your email verification. If you receive a verification email you didn&apos;t expect:
          </p>
          <ol>
            <li>Do not click the approval link</li>
            <li>Contact us at parents@cosyarcade.com</li>
            <li>We will investigate and take appropriate action</li>
          </ol>

          <h3>Managing Your Child&apos;s Account</h3>
          <p>Parents can:</p>
          <ul>
            <li>View their child&apos;s play history</li>
            <li>Delete their child&apos;s account</li>
            <li>Modify content restrictions</li>
            <li>Receive usage reports (optional)</li>
          </ul>
          <p>Contact parents@cosyarcade.com to manage your child&apos;s account.</p>
        </section>

        <section>
          <h2>Compliance</h2>
          <p>This policy is designed to comply with:</p>
          <ul>
            <li>Irish Data Protection Act 2018</li>
            <li>Children&apos;s Online Privacy Protection Act (COPPA) principles</li>
            <li>General Data Protection Regulation (GDPR)</li>
          </ul>
        </section>

        <section>
          <h2>Updates</h2>
          <p>
            We may update this policy as regulations change or our service evolves. Significant changes will be announced on our website.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>For questions about age verification:</p>
          <ul>
            <li>Parents: parents@cosyarcade.com</li>
            <li>General: support@cosyarcade.com</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
