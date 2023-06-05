import React, { useState } from 'react';
import CustomButton from './CustomButton';

interface props {
  children: any;
  array?: string[];
  setArray?: any;
}
export default function CustomButtonProvider({
  children,
  array,
  setArray,
}: props) {
  function onChangeList(label: string) {
    if (array?.includes(label)) {
      const ary = array.filter((e) => {
        return label !== e;
      });
      setArray(ary);
    } else {
      if (array) {
        setArray([...array, label]);
      }
    }
  }
  return (
    <div>
      {children.map((child: any, idx: number) => {
        console.log(child);
        return React.cloneElement(child, {
          onChangeList,
          checkedItem: (label: string) => {
            return array?.includes(label);
          },
        });
      })}
    </div>
  );
}
