import React from 'react';
import {useHistory} from 'react-router-dom';
import './SidebarOption.css';

function SidebarOption({Icon, title, id, addChannelOption}) {
  // whenever you click on an icon we gonna force redirect
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push('title');
    }
  };

  const addChannel = () => {
    const channelName = prompt('Please enter the channel name')

    if(channelName){
      db.collection('room').add({
        name: ch
      })
    }
  };
  return (
    <div
      
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
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
