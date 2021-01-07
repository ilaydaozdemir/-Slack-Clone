import React, { useEffect, useState } from 'react';
import '../css/Chat.css';
import { useParams } from 'react-router-dom';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from '../component/ChatInput';

//changes url
//connects to the database
//uses Url param(roomId) to fetch room details
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => setRoomDetails(snapshot.data()));

      db.collection('rooms')
        .doc(roomId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot =>
          setRoomMessages(snapshot.docs.map(doc => doc.data()))
        );
    }
  }, [roomId]);
  console.log('roomDetails', roomDetails, roomId);
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

      <div className='chat__messages'>
        {/*<Message/> */}
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </div>
  );
}

export default Chat;
