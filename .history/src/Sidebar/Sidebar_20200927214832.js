import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from '../SidebarOption/SidebarOption';

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
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved " />
      <SidebarOption Icon={BookmarkBorderIcon} title="Youtube" />
      <SidebarOption Icon={PeopleAltIcon} title="Youtube" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="Youtube" />
      <SidebarOption Icon={ExpandLessIcon} title="Youtube" />
    </div>
  );
}

export default Sidebar;
