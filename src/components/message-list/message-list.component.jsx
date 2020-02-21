import React from 'react';
import Message from '../message/message.component';

import './message-list.styles.css';

const MessageList = (props) => {
  const { messages, onRemoveMessageClick } = props;
  return (
    <div className="message-list">
      {
        messages.map((message) => (
          <Message
            key={message.uuid}
            message={message}
            onRemoveMessageClick={onRemoveMessageClick}
          />
        ))
      }
    </div>
  );
};

export default MessageList;
