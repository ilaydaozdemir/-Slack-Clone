import React, { useEffect, useState } from 'react';
import '../css/Chat.css';
import { useParams } from 'react-router-dom';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';

//changes url
//connects to the database
//uses Url param(roomId) to fetch room details
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => setRoomDetails(snapshot.data()));
    }
    db.collection('rooms')
      .doc(roomId)
      .collection('message')
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot =>
        setRoomMessages(snapshot.docs.map(doc => doc.data()))
      );
  }, [roomId]);
  console.log(roomDetails);
  console.log('MESSAGES >>>', roomMessages);
  return (
    <div className='chat'>
      <div className='chat__header'>
        <div className='chat__left'>
          <h4 className='chat__channelName'>
            <strong>#{roomDetails?.name}</strong>
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
