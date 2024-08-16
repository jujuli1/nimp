import React, { useEffect, useRef } from 'react';
import './Contact.css'; 

const Modal = ({ show, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    // fermer modale en cas de clic en dehors
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
