import React from "react";

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="logo">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAk1BMVEX///8pquMOp+GCvuT///0pquErqOL///sAnN2Cv+AAltkAneETpuUPpuIAntwAod/V6fKAxOGczePq9Pff7/Oq1+eJw+GRyeLE4+/2+viSxeMwo9oAouRVst2dyuQloNu22elnuN9ar+JrsNtJs+Rzt95nt+ZDqNtkv+Jzvd+r1Ons9vImruBBrNkAjc4AlNy64OVFHIhzAAADgklEQVR4nO2ZbXOiMBCAE80LLwlSUQoniq1aTnue/f+/7hK0Tq/IjQeL8GGfmTrjDI2Pm7fdlRAEQRAEQRAEQRAEQRAEQRAEQRAEQW7BGLv89W1S5dNJssHZGaPZPB67z0lq3vRt8wUbqtmPhecrpTPPWSbpYIInCZNylQeKc2rgdOQsZ0wOw44RGS0nnJ7dKBWcqmA9jNAZiajQVukK59xZ9e11hqVLLejfcJqt2QD2hZSxmdOKnV6E/bsRMss1/Y5ZgZOXISy7l0klbkaOCmfWv1wUUF6JnPVTcf9yc/+mm+E17duNuOq2muAi7ElJ2nOiTEE219P3u51IyocuLw/cHuVHpakk6auum1a9tt/CPsTIww49VhKuxi/LzXi+rR5yFze9TpN4t1m+xeuUyce4WbnoUHgTs9i0yuhfN9fX7cp/eo4aCUFVlu9DKbtPpWzQSLJ0BKWXJKQG88CIXxIVLvzg+f0By04yeXC0qNkF3/eEuE65U7x3HjrG5Nzht1dZJXTXVxs9fYw6jxxbB3eYfdG6vlOF7Lj4kVF+n9sNnFXXyy6uuRHuCKXOQ9mpXZjfsxNu82sSd3veTYPGcmbZLdJOp/Wo7tqqtzCnj590WJUx8rv5rBqyZ+ijrux+sPLylumpceAsagcsV17z5ggxpGR2ahU5/QaqVl45Mox322K73UyT2rz3PrkNcORkmhx9bfeaoJPm2+ESOcngblizzqKdU5tP/i9c7CMG1Uexja18BGRGy+s/h2vysHDxmZUB6UG1Akzc0kW1nG+JWEC078z5wVwFGLUzPIslxP0vw7w+D28sJ2xy0tqNyadJu6PjJmLy1L5SNCujeWL5Tzu76loHLvTAJ7XEaz+vjEyzTuR4Nm0/rbVNmrYoF0QOfjtYRhBy40onejByptICvx7OqBggcusA8lq9wAX356R1FcYiD/6CsHgAjQnGCl3TfGuFLiREwnnweV1vsBl2LO4f2psR+6uWHQzOjttGIz9GAIFjknw4YGJXQecDpJ9jBhlnvKat2tQtcCVMnm6q6L0DtezOw2S7FKiZY+tpN1BAwROCa+8Jrkdn6jiZFDC1oVFzisTUXmDVl/2a0eF48pVWetQYrbXyT8dDxACL6k/FKNm7rjtujPln9+OddNITBpqIjppzEKM+6hcmBEEQBEEQBEEQBEEQBEEQBEEQBBkUfwC7ATDmuNbOWAAAAABJRU5ErkJggg==" alt="Logo" width={60} height={60} />
          {/* <span>Company</span> */}
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Why us?</a></li>
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
          <h2>Excellent IT services for your success </h2>
          <p className="yasser">WhyAWS is a blog offering Exclusive informations about Technology and Provides IT Solutions & Services 🚀☁️</p>
          <button className="login-btn btn">Read more</button>
        </div>
        <div className="hero-image">
          <img className="image" src="https://www.shutterstock.com/image-photo/cloud-service-files-storage-transfer-600nw-2492224549.jpg" alt="Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Overview of our services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="icon">🚀</div>
            <h3>Technology Consulting</h3>
            <p>Expertise in a IT consultancy for the many companies, for their different working areas.</p>
          </div>
          <div className="feature-card">
            <div className="icon">📱</div>
            <h3>Cloud solutions & IT security</h3>
            <p>Expertise in cloud solutions and IT security for various companies in different sectors.</p>
          </div>
          <div className="feature-card">
            <div className="icon">🔒</div>
            <h3>Data Tracking Security</h3>
            <p>Expertise in securing data tracking systems for companies across various industries.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>Why Choosing Us?</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            
            <h4>🔐 Securing Access</h4>
            <p>Use IAM (Identity and Access Management) to control access to AWS services and resources.</p>
            <br></br>
            <p>Implement MFA (Multi-Factor Authentication) for additional security when accessing the AWS Management Console.</p>
          </div>
          <div className="testimonial-card">
            <h4>💻 Adding a Compute Layer Using Amazon EC2</h4>
            <p>Choose the appropriate Amazon Machine Image (AMI) for your EC2 instance.</p>
            <br></br>
            <p>Configure security groups to control inbound and outbound traffic to the EC2 instance.</p>
          </div>
          <div className="testimonial-card">
            <h4>♻️Adding a Compute Layer Using Amazon EC2</h4>
            <p>Choose the appropriate database service based on your needs, such as Amazon RDS, Amazon DynamoDB, or Amazon Aurora.</p>
            <br></br>
            <p>Implement high availability and disaster recovery solutions for the database layer using features like Multi-AZ deployments and automated backups.</p>            
          </div>
          <div className="testimonial-card">
            <h4>🛜 Connecting Networks</h4>
            <p>Utilize Amazon VPC to create and manage virtual private networks.</p>
            <br></br>
            <p>Implement networking services such as Route 53, CloudFront, and API Gateway for connecting networks within the AWS environment.</p>
          </div>
          <div className="testimonial-card">
            <h4>📊 Securing User, Application, and Data Access</h4>
            <p>Utilize Web Application Firewall (WAF) to protect web applications from common web exploits.</p>
            <br></br>
            <p>Secure application resources using AWS CloudTrail for auditing and AWS Config for resource inventory and configuration monitoring.</p>            
          </div>
          <div className="testimonial-card">
            <h4>🛠️ Implementing Monitoring, Elasticity, and High Availability</h4>
            <p>Design for high availability by utilizing multiple Availability Zones and implementing fault-tolerant architectures.</p>
            <br></br>
            <p>Utilize AWS Trusted Advisor to identify potential cost savings, security vulnerabilities, and performance improvements.</p>            
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
        <div className="footer-top">
          <div className="footer-links">
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
          <div className="social-icons">
            <a href="#" target="_blank" className="fab fa-twitter"></a>
            <a href="#" target="_blank" className="fab fa-facebook-f"></a>
            <a href="#" target="_blank" className="fab fa-linkedin-in"></a>
            <a href="#" target="_blank" className="fab fa-github"></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Company. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms & Conditions</a></p>
        </div>
      </footer>
    </div>
  );
}
