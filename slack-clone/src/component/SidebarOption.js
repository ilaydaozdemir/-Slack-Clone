import React from 'react';
import '../css/SidebarOption.css';

function SidebarOption({ Icon, title }) {
  return (
    <div className='sidebarOption'>
      {Icon && <Icon className='sidebarOption__icon' />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className='sidebarOption__channel'>
          <span className='sidebarOption__hash'>#</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
