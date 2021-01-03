import React from 'react';
import '../css/SidebarOption.css';

function SidebarOption({ Icon, title }) {
  return (
    <div className='sidebarOption'>
      {Icon && <Icon className='sidebarOption__icon' />}
    </div>
  );
}

export default SidebarOption;
