import React, { useState } from 'react';
import './Modal.scoped.scss';

interface props {
  children: any;
}
export default function Modal({ children }: props) {
  const [showModal, setShowModal] = useState(true);
  const [modalTitle, setModalTitle] = useState('Modal title');
  const [modalContent, setModalContent] = useState('Modal content');

  const handleModalBodyClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <React.Fragment>
      {children}
      {showModal ? (
        <div>
          <div
            className="modal-background"
            onClick={() => {
              setShowModal(false);
            }}
          >
            <div className="modal-body" onClick={handleModalBodyClick}>
              <div className="modal-header">
                <div className="modal-title">{modalTitle}</div>
                <div
                  className="modal-close-btn"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  X
                </div>
              </div>
              <div className="modal-content">{modalContent}</div>
              <div className="modal-footer">
                <button>submit</button>
                <button
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  close
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}
