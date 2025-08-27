import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer">
        <ul>
            <li style={{ fontSize:'1.5em', marginBottom: '10px'}}>
                Will dos Santos Design
            </li>
            <li>
                San Diego, CA
            </li>
            <li>
                willdossantosdesigns@gmail.com
            </li>
        </ul>
      <ul>
        <li><strong>Hours</strong></li>
          <li>Monday-Friday</li>
          <li>9am - 5pm</li>
      </ul>
      <ul>
        <li><strong>Follow</strong></li>
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
      </ul>
      {/* This could be a modal or a link */}
    </footer>
  );
}

export default Footer;
