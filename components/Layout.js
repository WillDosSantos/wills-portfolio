// components/Layout.js

import React, { useState, useEffect } from "react";
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

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Handle adding/removing the modal-open class to the body element
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isModalOpen]);

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
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <MobileNavbar/>
      <Sidebar />
      <main>
        <Navbar onTagSelect={onTagSelect} isHomePage={isHomePage} onOpenModal={handleOpenModal} />
        {children} {/* This will render the content of the page */}
      </main>
    </div>
  );
};

export default Layout;
