import React, { useState } from 'react';

export default function ContactModal({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
    <div className="modal">
      <button onClick={onClose}>X</button>
      <form onSubmit={onSubmit}>
        {/* form fields */}
        <input type="text" name="name" required placeholder="Your Name" />
        <select name="budget" required>
          <option value="1000-5000">$1000 - $5000</option>
          <option value="5000-10000">$5000 - $10000</option>
          <option value="10000-20000">$10000 - $20000</option>
          <option value="20000+">$20000+</option>
        </select>
        <select name="projectType" required>
          <option value="design">Design</option>
          <option value="video">Video</option>
          <option value="development">Development</option>
          <option value="branding">Branding</option>
          <option value="all">All the Above</option>
        </select>
        <input type="email" name="email" required placeholder="Your Email" />
        <input type="tel" name="phone" placeholder="Your Phone (optional)" />
        <select name="preferredContact" required>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}
