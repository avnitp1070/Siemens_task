import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">MySite</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
            <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; MySite | Designed by Avnit Prakash
      </div>
    </footer>
  );
}

export default Footer;
