import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    useEffect(() => {
        // Load external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/accessibility-website/css/styles.css';
        document.head.appendChild(link);

        // Load and execute JavaScript
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
                                <li><Link to="/accessibility" className="nav-link active" aria-current="page">Home</Link></li>
                                <li><Link to="/accessibility/resources" className="nav-link">Resources</Link></li>
                                <li><Link to="/accessibility/contact" className="nav-link">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>

            {/* ==================== MAIN CONTENT SECTION ==================== */}
            <main id="main-content" className="main-content">

                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <h2 className="hero-title">Building an Inclusive Community Together</h2>
                        <p className="hero-description">
                            A safe space where individuals with disabilities connect, share experiences,
                            and support each other through daily challenges. Our platform prioritizes
                            accessibility and energy-conscious design.
                        </p>

                        {/* Weather Widget Button */}
                        <button id="weather-btn" className="cta-button" aria-label="Check current weather conditions">
                            Check Local Weather
                        </button>
                    </div>
                </section>

                {/* Features Grid Section */}
                <section className="features-section">
                    <div className="container">
                        <h2 className="section-title">Our Community Features</h2>

                        <div className="features-grid">
                            {/* Feature 1 */}
                            <article className="feature-card">
                                <h3 className="feature-title">Low Energy Mode</h3>
                                <p className="feature-description">
                                    Designed for users who experience fatigue. This mode simplifies layouts,
                                    increases spacing, and removes non-essential visual elements to reduce
                                    cognitive load.
                                </p>
                            </article>

                            {/* Feature 2 */}
                            <article className="feature-card">
                                <h3 className="feature-title">Browse by Challenge</h3>
                                <p className="feature-description">
                                    Find relevant content organized by specific disability challenges including
                                    mobility, vision, hearing, cognitive, and chronic conditions. Connect with
                                    others facing similar experiences.
                                </p>
                            </article>

                            {/* Feature 3 */}
                            <article className="feature-card">
                                <h3 className="feature-title">Community Tips</h3>
                                <p className="feature-description">
                                    Share and discover practical advice from community members. From daily living
                                    hacks to adaptive technology recommendations, learn from real experiences.
                                </p>
                            </article>

                            {/* Feature 4 */}
                            <article className="feature-card">
                                <h3 className="feature-title">Accessible Design</h3>
                                <p className="feature-description">
                                    Built with strict color contrast ratios, keyboard navigation support, and
                                    screen reader compatibility. Every feature is tested for WCAG 2.1 AA compliance.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Video Section with User Controls */}
                <section className="video-section">
                    <div className="container">
                        <h2 className="section-title">Introduction to Our Community</h2>
                        <p className="section-intro">
                            Watch this brief introduction to learn how our platform supports accessibility
                            and community connection. All controls are accessible via keyboard and screen readers.
                        </p>

                        <div className="video-container">
                            <video id="intro-video" className="community-video" controls aria-label="Community introduction video">
                                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                                <track kind="captions" src="/accessibility-website/assets/captions.vtt" srcLang="en" label="English" />
                                Your browser does not support the video element. Please use a modern browser to view this content.
                            </video>

                            {/* Custom Video Controls for Enhanced Accessibility */}
                            <div className="video-controls">
                                <button id="play-pause-btn" className="control-btn" aria-label="Play or pause video">
                                    Play
                                </button>
                                <button id="mute-btn" className="control-btn" aria-label="Mute or unmute video">
                                    Mute
                                </button>
                                <input
                                    type="range"
                                    id="volume-control"
                                    className="volume-slider"
                                    min="0"
                                    max="100"
                                    defaultValue="100"
                                    aria-label="Volume control"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="cta-section">
                    <div className="container">
                        <h2 className="cta-title">Ready to Join Our Community?</h2>
                        <p className="cta-description">
                            Connect with thousands of individuals who understand your journey. Share your story,
                            learn from others, and access resources designed with your needs in mind.
                        </p>
                        <Link to="/accessibility/contact" className="cta-button">Get Started Today</Link>
                    </div>
                </section>

                {/* External Resources Section */}
                <section className="external-resources">
                    <div className="container">
                        <h2 className="section-title">Helpful External Resources</h2>
                        <ul className="resource-list">
                            <li>
                                <a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer" className="external-link">
                                    Americans with Disabilities Act (ADA)
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.w3.org/WAI/" target="_blank" rel="noopener noreferrer" className="external-link">
                                    Web Accessibility Initiative (WAI)
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.disability.gov/" target="_blank" rel="noopener noreferrer" className="external-link">
                                    Disability.gov Resources
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </li>
                        </ul>
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

            {/* ==================== MODAL POPUP ==================== */}
            <div id="weather-modal" className="modal" role="dialog" aria-labelledby="modal-title" aria-modal="true" hidden>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 id="modal-title" className="modal-title">Current Weather</h2>
                        <button id="close-modal" className="close-btn" aria-label="Close weather modal">
                            &times;
                        </button>
                    </div>
                    <div className="modal-body">
                        <div id="weather-content" className="weather-content">
                            <p>Loading weather data...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
