import React from "react";


export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav>
        <div className="logo">
          <img src="/placeholder.svg" alt="Logo" width={40} height={40} />
          <span>Company</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="login-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Empower Your Business</h1>
          <p>Innovative solutions to take your ideas to the next level.</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
          <img src="/placeholder.svg?height=500&width=500" alt="Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">🚀</div>
            <h3>Fast Performance</h3>
            <p>Blazing-fast speed with optimized architecture.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔒</div>
            <h3>Security First</h3>
            <p>Your data is protected with the latest security standards.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📱</div>
            <h3>100% Responsive</h3>
            <p>Optimized for all devices and screen sizes.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"Absolutely incredible! The performance is top-notch."</p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="testimonial-card">
            <p>"A game-changer for our business. Highly recommend!"</p>
            <h4>- Alex T.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Superb experience with exceptional customer service."</p>
            <h4>- Linda W.</h4>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How does the platform work?</h3>
          <p>Our platform simplifies your workflow with advanced automation.</p>
        </div>
        <div className="faq-item">
          <h3>Is there a free trial available?</h3>
          <p>Yes! You can start with a 14-day free trial, no credit card required.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <div className="contact-container">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
