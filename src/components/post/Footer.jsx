import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>À propos</h3>
                    <p>Nous sommes une entreprise passionnée par la création de solutions innovantes pour nos clients.</p>
                </div>
                <div className="footer-section">
                    <h3>Link</h3>
                    <ul>
                
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        {/* <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li> */}
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contactez-nous</h3>
                    <p>Email: contact@example.com</p>
                    <p>Téléphone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Votre entreprise. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;