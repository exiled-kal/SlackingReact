import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title}) {
  return (
    <div className="sidebarOption">
      {/* render an Icon if an icon exist */}
      {Icon && <Icon className="sidebarOption__icon" />}
      {/* if you pass an icon render the title */}
      {Icon ? 
          <h3>{title}</h3>
          {/* but if you didnt pass an icon  */}
      ): 
          <h3>
              #{title}
          </h3>
      )}
    </div>
  );
}

export default SidebarOption;
