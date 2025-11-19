import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer" style={{ color: '#fff' }}>
        <ul>
            <li style={{ fontSize: '1.5em', color: '#fff'}}>
                Will dos Santos Design
            </li>
            <li style={{ color: '#fff'}}>
                Boise, ID
            </li>
            <li style={{ color: '#fff'}}>
                <a href="mailto:willdossantosdesigns@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>willdossantosdesigns@gmail.com</a>
            </li>
        </ul>
      <ul>
        <li><strong>Hours</strong></li>
          <li>Monday-Friday</li>
          <li>9am - 5pm</li>
      </ul>
      <ul className="flex gap-4 md:flex-row flex-col">
        
          <li>
            <Link href="https://dribbble.com/willds" className="footer-link">Dribbble</Link>
          </li>
          <li>
            <Link href="https://www.youtube.com/@williamdossantos6155" className="footer-link">Youtube</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/william-dos-santos-4947b4a3/" className="footer-link">LinkedIn</Link>
          </li>
          <li>
            <Link href="https://www.x.com/w_g_teller" className="footer-link">X</Link>
          </li>
          <li>
            <Link href="https://github.com/WillDosSantos" className="footer-link">Github</Link>
          </li>
      </ul>
      {/* This could be a modal or a link */}
    </footer>
  );
}

export default Footer;
