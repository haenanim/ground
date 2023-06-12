import React, { useState } from 'react';
import './Modal.scoped.scss';

interface props {
  children: any;
}
export default function Modal({ children }: props) {
  const [showModal, setShowModal] = useState(true);

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
              alert('백그라운드');
              setShowModal(false);
            }}
          >
            <div className="modal-body" onClick={handleModalBodyClick}>
              <div className="modal-header">
                <div className="modal-title">해 보시겠습니까</div>
                <div
                  className="modal-close-btn"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  X
                </div>
              </div>
              <div className="modal-content">바디</div>
              <div className="modal-footer">
                <button>submit</button>
                <button>close</button>
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
