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
          <li>Dribbble</li>
      </ul>
      {/* This could be a modal or a link */}
    </footer>
  );
}

export default Footer;
