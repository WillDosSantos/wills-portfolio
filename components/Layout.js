// components/Layout.js

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import ContactModal from "./ContactModal";

const Layout = ({ children, selectedTag, onTagSelect, isHomePage }) => {

  const [isModalOpen, setModalOpen] = useState(false);

  // Function to handle opening the modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Now you'd probably want to format this data and send it to your backend or third-party service
    // ...

    // Close the modal
    setModalOpen(false);
  };
 
  return (
    <div className="container">
      <MobileNavbar/>
      <Sidebar />
      <main>
        <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        <Navbar onTagSelect={onTagSelect} isHomePage={isHomePage} onOpenModal={handleOpenModal} />
        {children} {/* This will render the content of the page */}
      </main>
    </div>
  );
};

export default Layout;
