import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
  return <div className="sidebarOption">
  
  {Icon && <Icon />}</div>;
}

export default SidebarOption;
