import React, { useState } from 'react';
import './Modal.scoped.scss';

interface props {
  children: any;
}
export default function Modal({ children }: props) {
  const [showModal, setShowModal] = useState(true);

  return (
    <React.Fragment>
      {children}
      {showModal ? (
        <div>
          <div className="modal-background">
            <div className="modal-body">
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
              <div className="modal-footer">푸터</div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}
