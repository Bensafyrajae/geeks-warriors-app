import React from "react";
import { useState } from "react";
import { Modal ,Group ,Button } from "@mantine/core";

export default function LandingPage() {
  const [opened, setOpened] = useState(false);
  const [content, setContent] = useState('');
  const [imageURL, setImageURL] = useState('');



  const url = "http://localhost:3000/posts"

  const postData = async ( data) => {
    try {
      const response = await fetch(url, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json(); // Parse the JSON response
      return result;
    } catch (error) {
      console.error('Error posting data:', error);
      throw error;
    }
  };

  const handleSubmit = () => {
    const data = {
      image_url : imageURL ,
      content : content,
      user_id : "123",
      createdAt : "1234",
    }
    postData(data);

    console.log('Content:', content);
    console.log('Image URL:', imageURL);
  };
  console.log(opened)
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Add New Content"
        size="md"
      >
        <input
          label="Content"
          placeholder="Enter content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <input
          label="Image URL"
          placeholder="Enter image URL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <Group position="right" mt="md">
          <Button onClick={handleSubmit}>Submit</Button>
        </Group>
      </Modal>
    <div className="landing-page">
      {/* Navigation */}
      <nav className="nav-bar">
        <div className="logo">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAACUCAMAAACjieW3AAAAclBMVEX///8Bk971/P4Aj92KxeoAjdwAkd0AitsAhdoAh9q62fLr9fvz+f35/P7a6vjC3fMsl96z1fBAouKbye2Du+jN5PXd7vlmq+SLwOrm8fqRxOterOSfze2SyOp0tuZqseVWpuJToOEzneF4s+fi9furzu4UPvirAAAEjklEQVR4nO2bC3OiMBCAC+kGeT8ElMcB0vr//+JpNmhpvRNt0ODsNx3bTktml2w2+0je3giCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIIgn4wZO/ef9T+0E7rNFmRsvbCJmWQAMwAIWtbH/bJFmw80aewXcOMOZvWqyl5xk16lsMH4Cdhe/nsJhyy4pKxSGjfNs8RSTRmMr5nyksLF9pQkuOnZSj8PquIDlt9Mi7oJnC6mMMIKTWpCkzqdrmqbrOmkCTE4zZ1H4bDEV4UQMlWXGrsxHf8rLnQGDfcdPkk8todSWQ1d7P/5qrjtp06+hb9aDnNpvMzuQl8P7YNmDZVOPKbWF/p+bjR/2OL8sWrx/bi3UpP+f5y2kL4PNw+Sahxi15f2VeYvk+i0fI9ZMuKgGN65ZqYv2zJNFb79bVIJf90EZvhjYLjhFChKhg1VP+N+9CDj4f9e45qxxxjZTHK7biu0I1oud3qICsXCn5TuOMGeWFDNLNRuhsE/4+BlLXaRBy19q7OyXYnKjqbEhTq+VLtOavQxtubscO154IEFnNdEYdCKIy48OI4d08kMNOqupr0cbnDYxGDCMMKbsQvIxEUraC1u8TsLPxRkeTU9zCvGC7PcZZVNO3tmjqlR/w8ZiCE9ezSecavw9HxccWWJOf1oEzqybTTrVmOW5BsfgWIm6aa7QNSfmQrYiPz3V4CyjKuvYieNbKhQYYhttWsb5AlROh7KT1ddBcbvACVZxDmYR7VrtS+21hdoCq++rwkh1Rc7IeaL3jhTiuuWsujcuOqsrBrIrjSOOokNtYXoY9Z1k1Eo5xM8a19rXTNYj7h+it60jcHLvTNvas6xcwG8Smv1akFaG9AIHW9HTY/lrUXNkk/Ofy6McePO9IogTawhCtbTnomMiIVBlfH5to99inY7ljdAWsn3cEDJeIR92YQ3zfX9rKZ3cI27FdDVnWYnYKa1E5GKBGFaqXX3DRUfVqh0Vq1fc0K72nK+E3e0VD9tgfUP1sL8mRHVVN2ixlXJ/VDoXtXDM8Kl63I2wZtCt74tBhnp1se2y0i1VmEvdDNXVLXKOMcpQ7kI/ha+y1qrH/SWZcFVMeTxvorq6NfULoa5xf6r7DzRVFw8b8J3qcdGY7emdiMfgNzBLeOugq9LuwBUesbmh/zWNFNXVLgcMMLzt1c6DtxOj6ne8zEsxSWiUxnt4PsVq9Mt4Q5xeUJrxbrAnqF/COzRMOCiUTZx2MEDL8k0mD76p0zfGLjFol/8J1vKcLt+rWb97PPjLKh0n92DOLfb/OPtQ4J+9LZcnDHXLDwb8ftA3an6ZLPjxTrYSWKNGuBlwo9PFAqsvM9cz76II02jom0Cn3yZ0wj3foOHWyh419CbDv1ydg1vOOjweNx1diOL38OVxqLSLp8Z4+8T61ra8G+Bb3WpyPwm2oERhZnehxuv2hB9s+fji6u1wWEXLufhphm3E4AA7frLj7WT2/bfha/iQPzJxk9lotEtxr5Bncf1+F3GoZxxFEARBEARBEARBEARBEARBEARBEARBEARBEATxevwF5PMzewDtvA0AAAAASUVORK5CYII=" alt="Logo" width={80} height={30} />
         
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn" onClick={()=>{
            setOpened(true)
          }}>Create a post</button>
          
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

      {/* Section Features */}
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
            <h4>♻Adding a Compute Layer Using Amazon EC2</h4>
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
            <h4>🛠 Implementing Monitoring, Elasticity, and High Availability</h4>
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
        <div className="faq-item">
          <h3>How does the platform work?</h3>
          <p>Our platform simplifies your workflow with advanced automation.</p>
        </div>
        <div className="faq-item">
          <h3>How does the platform work?</h3>
          <p>Our platform simplifies your workflow with advanced automation.</p>
        </div>
      </section>

     {/* Contact Section */}
<section id="contact" className="contact">
  <h2>Contact Us</h2>
  <div className="contact-container">
    {/* Formulaire de contact */}
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required></textarea>
      <button type="submit" className="submit-button">Send Message</button>
    </form>

    {/* Carte Google Maps */}
    <div className="map-container">
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26601.245983087912!2d-7.643962!3d33.54932949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1740658648716!5m2!1sfr!2sma" 
        width="100%"
        height="550"
        style={{ border: 0, borderRadius: "10px", marginTop: "4px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  </div>
</section>

     

    </div>
    </>
    
  );
}
