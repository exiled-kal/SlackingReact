import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
  return (
    <div className="sidebarOption">
      {/* render an Icon if an icon exist */}
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
          <h3>{title}</h3>
      )}
    </div>
  );
}

export default SidebarOption;
