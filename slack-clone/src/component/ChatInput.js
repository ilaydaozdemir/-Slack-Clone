import React, { useState } from 'react';
import '../css/ChatInput.css';
import db from '../firebase';
import Message from './Message';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('');
  const [{ user }] = useStateValue();

  const sendMessage = e => {
    e.preventDefault();
    console.log('user', user);
    console.log('user photo', user.photoURL);

    console.log(firebase.firestore.FieldValue.timestamp);

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').doc().set({
        message: input,
        user: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        userImage: user.photoURL,
      });
    } else {
      console.log('channelId undefined');
    }
  };

  return (
    <div className='chatInput'>
      <form>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type='submit' onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
