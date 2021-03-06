import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
  return (
    <div className="sidebarOption">
      {/* render an Icon if an icon exist */}
      {Icon && <Icon className="sidebarOption__icon" />}
      {/* if you pass an icon render the title */}
      {/* but if you didnt pass an icon  */}
      {Icon ? <h3>{title}</h3> : <h3>
      <span>#</span>{title}</h3>}
    </div>
  );
}

export default SidebarOption;
