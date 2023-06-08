import React from 'react';
import { createContext } from 'react';

interface props {
  children: any;
}
export default function Modal({ children }: props) {
  return (
    <div>
      {children}
      <button>배경</button>
      <div>
        <div>헤더</div>
        <div>바디</div>
        <div>푸터</div>
      </div>
    </div>
  );
}
