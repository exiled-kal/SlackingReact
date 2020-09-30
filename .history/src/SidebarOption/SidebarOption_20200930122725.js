import React from 'react';
import './SidebarOption.css';

function SidebarOption({Icon, title, id, addChannelOption}) {

  const selectChannel = () +
  return (
    <div
      className="sidebarOption"
      onCLick={addChannelOption ? addChannel : selectChannel}
    >
      {/* render an Icon if an icon exist */}
      {Icon && <Icon className="sidebarOption__icon" />}
      {/* if you pass an icon render the title */}
      {/* but if you didnt pass an icon  */}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
