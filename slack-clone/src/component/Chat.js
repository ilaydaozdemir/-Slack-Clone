import React from 'react';
import '../css/Chat.css';
import { useParams } from 'react-router-dom';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function Chat() {
  const { roomId } = useParams();
  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__left'>
          <h4 className='chat__channelName'>
            <strong>#general</strong>
            <StarOutlinedIcon />
          </h4>
        </div>
        <div className='chat__right'>
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
