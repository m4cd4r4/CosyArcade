import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Policy | CosyArcade",
  description: "CosyArcade's game selection criteria",
};

export default function ContentPolicyPage() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <h1>Content Policy</h1>
        <p className="last-updated">Last updated: January 2025</p>

        <section>
          <h2>Our Commitment</h2>
          <p>CosyArcade is committed to providing a curated library of quality retro games that are:</p>
          <ol>
            <li><strong>Legally free</strong> to distribute</li>
            <li><strong>Appropriately rated</strong> for our audience</li>
            <li><strong>Functional</strong> in our browser-based emulator</li>
            <li><strong>Quality</strong> experiences worth playing</li>
          </ol>
        </section>

        <section>
          <h2>Legal Requirements</h2>

          <h3>What We Host</h3>
          <ul>
            <li><strong>Homebrew</strong>: Original games created for retro hardware</li>
            <li><strong>Freeware</strong>: Games officially released for free by copyright holders</li>
            <li><strong>Open Source</strong>: Games with open source licences</li>
            <li><strong>Public Domain</strong>: Games with expired or released copyrights</li>
          </ul>

          <h3>What We Never Host</h3>
          <ul>
            <li>Pirated commercial games</li>
            <li>Games with unclear copyright status</li>
            <li>ROMs extracted from commercial cartridges</li>
            <li>Games without documented legal source</li>
          </ul>

          <h3>Documentation</h3>
          <p>Every game in our library includes:</p>
          <ul>
            <li>Source URL (where we obtained it)</li>
            <li>Licence type (homebrew, freeware, open source, etc.)</li>
            <li>Author/publisher attribution</li>
            <li>Any distribution terms</li>
          </ul>
        </section>

        <section>
          <h2>Content Standards</h2>

          <h3>Prohibited Content</h3>
          <p>We do not host games containing:</p>
          <ul>
            <li>Real-world violence promotion</li>
            <li>Hate speech or discrimination</li>
            <li>Sexual content or nudity</li>
            <li>Illegal activities promotion</li>
            <li>Gambling with real money</li>
          </ul>

          <h3>Age Rating Guidelines</h3>
          <p><strong>ALL (All Ages)</strong></p>
          <ul>
            <li>Cartoon/fantasy violence only (if any)</li>
            <li>No blood or gore</li>
            <li>No mature themes</li>
            <li>Positive or neutral messaging</li>
          </ul>

          <p><strong>TEEN_13 (Ages 13+)</strong></p>
          <ul>
            <li>Mild cartoon violence</li>
            <li>Fantasy combat</li>
            <li>Challenging/competitive content</li>
            <li>No realistic violence</li>
            <li>No sexual content</li>
          </ul>
        </section>

        <section>
          <h2>Curation Process</h2>

          <h3>New Game Submissions</h3>
          <ol>
            <li><strong>Source Verification</strong>: Confirm legal status</li>
            <li><strong>Technical Testing</strong>: Verify works in EmulatorJS</li>
            <li><strong>Content Review</strong>: Play through to assess content</li>
            <li><strong>Age Rating</strong>: Assign appropriate rating</li>
            <li><strong>Documentation</strong>: Record all metadata</li>
            <li><strong>Publication</strong>: Add to library</li>
          </ol>

          <h3>Community Reports</h3>
          <p>Users can report games for:</p>
          <ul>
            <li>Copyright concerns</li>
            <li>Incorrect age rating</li>
            <li>Technical issues</li>
            <li>Content concerns</li>
          </ul>
          <p>Reports are reviewed within 48 hours.</p>
        </section>

        <section>
          <h2>Removal Policy</h2>
          <p>Games may be removed if:</p>
          <ul>
            <li>Copyright holder requests removal</li>
            <li>Legal status becomes unclear</li>
            <li>Content no longer meets our standards</li>
            <li>Technical issues cannot be resolved</li>
          </ul>
        </section>

        <section>
          <h2>Disclaimer</h2>
          <p>While we make every effort to verify legal status:</p>
          <ul>
            <li>We rely on publicly available information</li>
            <li>Copyright law varies by jurisdiction</li>
            <li>We will promptly respond to legitimate takedown requests</li>
          </ul>
        </section>

        <section>
          <h2>DMCA / Takedown Requests</h2>
          <p>If you believe your copyrighted work is hosted on CosyArcade without authorisation:</p>
          <ol>
            <li>
              Email dmca@cosyarcade.com with:
              <ul>
                <li>Your contact information</li>
                <li>Description of the copyrighted work</li>
                <li>URL of the infringing content</li>
                <li>Statement of good faith belief</li>
                <li>Statement of accuracy under penalty of perjury</li>
                <li>Your physical or electronic signature</li>
              </ul>
            </li>
            <li>We will respond within 48 hours</li>
            <li>Infringing content will be removed promptly</li>
          </ol>
        </section>

        <section>
          <h2>Contact</h2>
          <ul>
            <li>Content questions: content@cosyarcade.com</li>
            <li>Copyright concerns: dmca@cosyarcade.com</li>
            <li>General: support@cosyarcade.com</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
