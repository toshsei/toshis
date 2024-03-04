import React from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, photo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-body">
        <img src={photo.src} alt={'whoops'} className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;
