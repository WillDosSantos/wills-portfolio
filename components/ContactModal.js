import React, { useState, useEffect } from 'react';

export default function ContactModal({ isOpen, onClose, onSubmit }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for animation to complete before actually closing
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`}>
    <div className={`modal ${isClosing ? 'closing' : ''}`}>
      <div className="modal--header">
        <p>Let's work together</p>
        <button onClick={handleClose}>Close</button>
        </div>
      
      <form className="contact-form" onSubmit={onSubmit}>
        {/* form fields */}
        <div className="flex">
          <div className="col">
            <label>Contact details</label>
            <input type="text" name="name" required placeholder="Your Name..." />
            <input type="email" name="email" required placeholder="Your Email" />
            <input type="tel" name="phone" placeholder="Your Phone (optional)" />
          </div>
          <div className="col">
            <label>What is your budget?</label>
            <select name="budget" required placeholder="Budget...">
              <option value="1000-5000">$1000 - $5000</option>
              <option value="5000-10000">$5000 - $10000</option>
              <option value="10000-20000">$10000 - $20000</option>
              <option value="20000+">$20000+</option>
            </select>
            <label>Type of Project</label>
            <select name="projectType" required placeholder="Type of Project...">
              <option value="uiux">UI/UX</option>
              <option value="motiongfx">Motion Graphics</option>
              <option value="development">Development</option>
              <option value="branding">Branding</option>
              <option value="all">All the Above</option>
            </select>
            <label>Preferred Contact</label>
            <select name="preferredContact" required>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
          </div>
        </div>
        <button className="btn btn--primary" type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}
