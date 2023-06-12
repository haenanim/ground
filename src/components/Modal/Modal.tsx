import React, { useState } from 'react';
import './Modal.scoped.scss';

interface Props {
  children: any;
}

export default function Modal({ children }: Props) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <button onClick={openModal}>Open Modal</button>

      {showModal && (
        <div className="modal-background">
          <div className="modal-body">
            <div className="modal-header">
              <div className="modal-title">Modal Title</div>
              <div className="modal-close-btn" onClick={closeModal}>
                X
              </div>
            </div>
            <div className="modal-content">{children}</div>
            <div className="modal-footer">
              <button>Submit</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
