import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Resources() {
    useEffect(() => {
        // Load external CSS
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/accessibility-website/css/styles.css';
        document.head.appendChild(link);

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
                                <li><Link to="/accessibility/resources" className="nav-link active" aria-current="page">Resources</Link></li>
                                <li><Link to="/accessibility/contact" className="nav-link">Contact</Link></li>
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
                        <h2 className="hero-title">Community Resources</h2>
                        <p className="hero-description">
                            Discover comprehensive resources, tools, and support materials designed to help
                            individuals with disabilities navigate daily challenges and access essential services.
                        </p>
                    </div>
                </section>

                {/* Resources Grid Section */}
                <section className="features-section">
                    <div className="container">
                        <h2 className="section-title">Available Resources</h2>

                        <div className="resources-grid">
                            {/* Resource 1 - Assistive Technology */}
                            <article className="resource-card">
                                <h3>Assistive Technology Guide</h3>
                                <p>
                                    Comprehensive guide to assistive technologies including screen readers,
                                    voice recognition software, adaptive keyboards, and mobility aids. Learn
                                    about the latest innovations and how to access funding for these tools.
                                </p>
                                <a href="https://www.atia.org/" target="_blank" rel="noopener noreferrer">
                                    Explore Technologies
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>

                            {/* Resource 2 - Employment Support */}
                            <article className="resource-card">
                                <h3>Employment Resources</h3>
                                <p>
                                    Find job opportunities, workplace accommodation guides, and career
                                    development resources. Connect with employers committed to inclusive
                                    hiring practices and learn about your rights under employment law.
                                </p>
                                <a href="https://www.dol.gov/agencies/odep" target="_blank" rel="noopener noreferrer">
                                    View Job Resources
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>

                            {/* Resource 3 - Healthcare Navigation */}
                            <article className="resource-card">
                                <h3>Healthcare Navigation</h3>
                                <p>
                                    Access information about healthcare providers specializing in disability
                                    care, insurance coverage options, and patient advocacy services. Find
                                    resources for managing chronic conditions and accessing mental health support.
                                </p>
                                <a href="https://www.medicaid.gov/" target="_blank" rel="noopener noreferrer">
                                    Healthcare Information
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>

                            {/* Resource 4 - Legal Rights */}
                            <article className="resource-card">
                                <h3>Legal Rights & Advocacy</h3>
                                <p>
                                    Understand your rights under the ADA and other disability rights legislation.
                                    Access legal resources, advocacy organizations, and guidance on filing
                                    discrimination complaints and accessing legal representation.
                                </p>
                                <a href="https://www.ada.gov/resources/disability-rights-guide/" target="_blank" rel="noopener noreferrer">
                                    Know Your Rights
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>

                            {/* Resource 5 - Education Support */}
                            <article className="resource-card">
                                <h3>Educational Resources</h3>
                                <p>
                                    Find information about special education services, individualized education
                                    programs (IEPs), college accessibility offices, and scholarship opportunities
                                    for students with disabilities at all educational levels.
                                </p>
                                <a href="https://www2.ed.gov/about/offices/list/ocr/504faq.html" target="_blank" rel="noopener noreferrer">
                                    Education Support
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>

                            {/* Resource 6 - Transportation Access */}
                            <article className="resource-card">
                                <h3>Transportation Services</h3>
                                <p>
                                    Discover accessible transportation options including paratransit services,
                                    accessible rideshare programs, and information about accessible public
                                    transit systems in your area.
                                </p>
                                <a href="https://www.transit.dot.gov/regulations-and-guidance/civil-rights-ada/ada-guidance" target="_blank" rel="noopener noreferrer">
                                    Transportation Options
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>

                            {/* Resource 7 - Housing Assistance */}
                            <article className="resource-card">
                                <h3>Accessible Housing</h3>
                                <p>
                                    Learn about accessible housing options, home modification programs, fair
                                    housing rights, and financial assistance for making homes more accessible.
                                    Connect with housing specialists who understand disability needs.
                                </p>
                                <a href="https://www.hud.gov/program_offices/fair_housing_equal_opp/disabilities" target="_blank" rel="noopener noreferrer">
                                    Housing Resources
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>

                            {/* Resource 8 - Financial Benefits */}
                            <article className="resource-card">
                                <h3>Financial Support Programs</h3>
                                <p>
                                    Information about Social Security Disability Insurance (SSDI), Supplemental
                                    Security Income (SSI), and other financial assistance programs. Get help
                                    with applications and understanding eligibility requirements.
                                </p>
                                <a href="https://www.ssa.gov/benefits/disability/" target="_blank" rel="noopener noreferrer">
                                    Financial Programs
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>

                            {/* Resource 9 - Mental Health Support */}
                            <article className="resource-card">
                                <h3>Mental Health Resources</h3>
                                <p>
                                    Access mental health support services, peer counseling groups, crisis
                                    intervention resources, and information about therapists specializing in
                                    disability-related mental health challenges.
                                </p>
                                <a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank" rel="noopener noreferrer">
                                    Mental Health Support
                                    <span className="visually-hidden">(opens in new tab)</span>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Additional Resources Section */}
                <section className="cta-section">
                    <div className="container">
                        <h2 className="cta-title">Need More Information?</h2>
                        <p className="cta-description">
                            Our community team is here to help you find the resources you need. Contact us
                            for personalized assistance and additional resource recommendations.
                        </p>
                        <Link to="/accessibility/contact" className="cta-button">Contact Us</Link>
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
