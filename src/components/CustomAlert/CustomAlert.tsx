import React, { useState, useRef } from 'react';
import CustomAlertItem from './CustomAlertItem';
interface props {
  children: any;
}
export default function CustomAlert({ children }: props) {
  const [alerts, setAlerts] = useState<any>([]);
  const $alertElement = useRef<HTMLDivElement>(null);
  const elementSet = [];

  function addAlert(content: any) {
    const index: any = alerts.length;
    const a = [
      ...alerts,
      // <CustomAlertItem id={index} key={index} ref={$alertElement}>
      <CustomAlertItem>{content}</CustomAlertItem>,
    ];
    elementSet.push($alertElement);
    setAlerts(a);
    // settingInterval();
    // setAlerts([content, ...alerts]);
  }

  return (
    <div>
      <div>{alerts}</div>
      <button
        onClick={() => {
          {
            addAlert('divelement');
            console.log(alerts);
          }
        }}
      ></button>
    </div>
  );
}

//  CustomAlert;
