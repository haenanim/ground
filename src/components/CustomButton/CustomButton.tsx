import React, { useState } from 'react';
import { useRef } from 'react';
import './CustomButton.scoped.scss';

interface props {
  children: any;
  onChangeList?: any;
  checkedItem?: any;
}
export default function CustomButton({
  children,
  onChangeList,
  checkedItem,
}: props) {
  const $control: any = useRef();

  return (
    <div>
      <div
        className="custom-btn-base"
        onClick={(e) => {
          onChangeList(children);
          console.log(checkedItem(children));
        }}
      >
        <div
          className={`custom-btn-control ${
            checkedItem(children) ? 'active' : ''
          }`}
          ref={$control}
        ></div>
      </div>
      <div>{children}</div>
    </div>
  );
}
