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
          <div className="modal-background">배경</div>
          <div>
            <div>헤더</div>
            <div>바디</div>
            <div>푸터</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}
