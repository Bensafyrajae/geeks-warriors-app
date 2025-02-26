import React from "react";


export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav-bar">
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
          <h2>Empower Your Business</h2>
          <p>IWhy AWS : une infrastructure cloud évolutive, sécurisée et performante. Réduisez vos coûts, simplifiez la gestion et accélérez l’innovation. Passez au cloud dès aujourd’hui !" 🚀☁️</p>
          <button className="login-btn btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img className="image" src="https://www.shutterstock.com/image-photo/cloud-service-files-storage-transfer-600nw-2492224549.jpg" alt="Hero" />
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
            <button type="submit" className="login-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
 
  <div class="footer-top">
   
    {/* <div class="footer-links">
      <a href="#">About Us</a>
      <a href="#">Services</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </div> */}
    
   
    {/* <div class="social-icons">
      <a href="#" target="_blank" class="fab fa-twitter"></a>
      <a href="#" target="_blank" class="fab fa-facebook-f"></a>
      <a href="#" target="_blank" class="fab fa-linkedin-in"></a>
      <a href="#" target="_blank" class="fab fa-github"></a>
    </div> */}
  </div>

  
  <div class="footer-bottom">
    <p>&copy; 2024 Company. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
  </div>
</footer>

    </div>
  );
}
