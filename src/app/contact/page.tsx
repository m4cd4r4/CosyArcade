import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | CosyArcade",
  description: "Get in touch with the CosyArcade team. Questions, feedback, game submissions, or just say hello.",
};

const contactOptions = [
  {
    icon: "💬",
    title: "General Enquiries",
    email: "hello@cosyarcade.com",
    description: "Questions, feedback, or just saying hi.",
  },
  {
    icon: "🎮",
    title: "Game Submissions",
    email: "games@cosyarcade.com",
    description: "Know a legally-free game we should add? Let us know!",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Parents",
    email: "parents@cosyarcade.com",
    description: "Questions about child accounts or age verification.",
  },
  {
    icon: "🛡️",
    title: "Privacy & Data",
    email: "privacy@cosyarcade.com",
    description: "Data requests, privacy concerns, or GDPR enquiries.",
  },
  {
    icon: "⚖️",
    title: "Legal & Copyright",
    email: "legal@cosyarcade.com",
    description: "DMCA requests or licensing questions.",
  },
  {
    icon: "🐛",
    title: "Bug Reports",
    email: "bugs@cosyarcade.com",
    description: "Found something broken? Help us fix it.",
  },
];

export default function ContactPage() {
  return (
    <main className="page-container">
      {/* Header */}
      <section className="page-header">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">
          We&apos;d love to hear from you
        </p>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="contact-grid">
          {contactOptions.map((option) => (
            <div key={option.email} className="contact-card">
              <span className="contact-icon">{option.icon}</span>
              <h3 className="contact-title">{option.title}</h3>
              <p className="contact-description">{option.description}</p>
              <a href={`mailto:${option.email}`} className="contact-email">
                {option.email}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="contact-form-container">
          <h2 className="section-title">Send a Message</h2>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  disabled
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="you@example.com"
                  disabled
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <select id="subject" name="subject" className="form-input" disabled>
                <option value="">Select a topic...</option>
                <option value="general">General Enquiry</option>
                <option value="game">Game Submission</option>
                <option value="bug">Bug Report</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="form-input form-textarea"
                placeholder="What's on your mind?"
                disabled
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" disabled>
              Send Message
            </button>
            <p className="form-note">
              Form coming soon! For now, please use the email addresses above.
            </p>
          </form>
        </div>
      </section>

      {/* Response Time */}
      <section className="section">
        <div className="notice">
          <span className="notice-icon">⏱️</span>
          <div className="notice-content">
            <h3>Response Times</h3>
            <p>We typically respond within 24-48 hours. Copyright/DMCA requests are prioritised and handled within 48 hours.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
