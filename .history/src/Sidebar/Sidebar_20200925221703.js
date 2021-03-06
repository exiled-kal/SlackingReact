import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
        <h2>Clever Programmer</h2>
        <h3>
          <FiberManualRecordIcon />
          Tsering Kalden
        </h3>
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
