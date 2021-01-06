import React from 'react';
import '../css/ChatInput.css';
function ChatInput({ channelName, channelId }) {
  const sendMessage = e => {
    e.preventDefault();
  };

  return (
    <div className='chatInput'>
      <form>
        <input placeholder={`Message #${channelName}`} />
        <button type='submit' onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
