import React from 'react';
import '../css/Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import SidebarOption from './SidebarOption';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <div className='sidebar__info'>
          <h2>Ilayda Ozdemir</h2>
          <h3>
            <FiberManualRecordIcon />
          </h3>
        </div>
        <CreateIcon />
        <SidebarOption Icon={InsertCommentIcon} title='Threads' />
      </div>
    </div>
  );
}

export default Sidebar;
