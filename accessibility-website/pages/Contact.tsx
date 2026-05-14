import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
    useEffect(() => {
        // Load external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/accessibility-website/css/styles.css';
        document.head.appendChild(link);

        // Load and execute JavaScript for form validation
        import('../js/main.ts');

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    return (
        <div>
            {/* Skip to main content link for screen readers */}
            <a href="#main-content" className="skip-link">Skip to main content</a>

            {/* ==================== HEADER SECTION ==================== */}
            <header className="site-header">
                <div className="container">
                    <div className="header-content">
                        <h1 className="site-logo">AccessAbility Community</h1>

                        {/* Main Navigation Menu */}
                        <nav className="main-nav" aria-label="Main navigation">
                            <ul className="nav-list">
                                <li><Link to="/accessibility" className="nav-link">Home</Link></li>
                                <li><Link to="/accessibility/resources" className="nav-link">Resources</Link></li>
                                <li><Link to="/accessibility/contact" className="nav-link active" aria-current="page">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            {/* ==================== MAIN CONTENT SECTION ==================== */}
            <main id="main-content" className="main-content">

                {/* Page Header */}
                <section className="hero-section">
                    <div className="container">
                        <h2 className="hero-title">Get in Touch</h2>
                        <p className="hero-description">
                            We are here to support you. Whether you have questions, need assistance, or want
                            to share feedback about our platform, please reach out using the form below.
                        </p>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="contact-section">
                    <div className="container">
                        <form id="contact-form" className="contact-form" noValidate>
                            {/* Name Field */}
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">
                                    Full Name <span aria-label="required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    required
                                    aria-required="true"
                                    aria-describedby="name-error"
                                />
                                <div id="name-error" className="form-error" role="alert"></div>
                            </div>

                            {/* Email Field */}
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email Address <span aria-label="required">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    required
                                    aria-required="true"
                                    aria-describedby="email-error"
                                />
                                <div id="email-error" className="form-error" role="alert"></div>
                            </div>

                            {/* Subject Field */}
                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">
                                    Subject <span aria-label="required">*</span>
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="form-select"
                                    required
                                    aria-required="true"
                                    aria-describedby="subject-error"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="technical">Technical Support</option>
                                    <option value="accessibility">Accessibility Feedback</option>
                                    <option value="resources">Resource Suggestions</option>
                                    <option value="partnership">Partnership Opportunities</option>
                                    <option value="other">Other</option>
                                </select>
                                <div id="subject-error" className="form-error" role="alert"></div>
                            </div>

                            {/* Message Field */}
                            <div className="form-group">
                                <label htmlFor="message" className="form-label">
                                    Message <span aria-label="required">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-textarea"
                                    required
                                    aria-required="true"
                                    aria-describedby="message-error"
                                    placeholder="Please share your message here..."
                                ></textarea>
                                <div id="message-error" className="form-error" role="alert"></div>
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>

                            {/* Success Message */}
                            <div id="success-message" className="success-message" role="alert">
                                Thank you for your message! We will get back to you within 24-48 hours.
                            </div>
                        </form>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section className="features-section">
                    <div className="container">
                        <h2 className="section-title">Other Ways to Connect</h2>

                        <div className="features-grid">
                            {/* Email Contact */}
                            <article className="feature-card">
                                <h3 className="feature-title">Email Support</h3>
                                <p className="feature-description">
                                    For general inquiries, you can email us directly at:
                                    <br />
                                    <strong>support@accessability-community.org</strong>
                                    <br />
                                    We typically respond within 24-48 hours.
                                </p>
                            </article>

                            {/* Phone Contact */}
                            <article className="feature-card">
                                <h3 className="feature-title">Phone Support</h3>
                                <p className="feature-description">
                                    Our accessibility helpline is available Monday through Friday, 9 AM - 5 PM EST:
                                    <br />
                                    <strong>1-800-ACCESS-1</strong>
                                    <br />
                                    TTY services available upon request.
                                </p>
                            </article>

                            {/* Community Forums */}
                            <article className="feature-card">
                                <h3 className="feature-title">Community Forums</h3>
                                <p className="feature-description">
                                    Join our online discussion forums to connect with other community members,
                                    share experiences, and get peer support. Moderated 24/7 for a safe environment.
                                </p>
                            </article>

                            {/* Social Media */}
                            <article className="feature-card">
                                <h3 className="feature-title">Social Media</h3>
                                <p className="feature-description">
                                    Follow us on social media for updates, community stories, and accessibility tips.
                                    All our social media content includes image descriptions and captions.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Emergency Resources Section */}
                <section className="cta-section">
                    <div className="container">
                        <h2 className="cta-title">Need Immediate Assistance?</h2>
                        <p className="cta-description">
                            If you are experiencing a mental health crisis, please contact the National
                            Suicide Prevention Lifeline at 988 or visit your nearest emergency room.
                            For disability-related emergencies, contact your local emergency services at 911.
                        </p>
                        <a
                            href="https://988lifeline.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-button"
                        >
                            Crisis Resources
                            <span className="visually-hidden">(opens in new tab)</span>
                        </a>
                    </div>
                </section>

            </main>

            {/* ==================== FOOTER SECTION ==================== */}
            <footer className="site-footer">
                <div className="container">
                    <p className="footer-text">
                        &copy; 2026 AccessAbility Community. Committed to digital accessibility and inclusion.
                    </p>
                    <nav className="footer-nav" aria-label="Footer navigation">
                        <ul className="footer-links">
                            <li><Link to="/accessibility" className="footer-link">Home</Link></li>
                            <li><Link to="/accessibility/resources" className="footer-link">Resources</Link></li>
                            <li><Link to="/accessibility/contact" className="footer-link">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    );
}
