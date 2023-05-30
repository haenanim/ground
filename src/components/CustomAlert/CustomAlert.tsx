import React, { useState } from 'react';
interface props {
  children: any;
}
export default function CustomAlert({ children }: props) {
  const [alerts, setAlerts] = useState<any>([]);
  function addAlert(content: any) {
    setAlerts([content, ...alerts]);
  }
  return (
    <div>
      <div>
        {alerts.map((element: any) => {
          return <div>{element}</div>;
        })}
      </div>
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
