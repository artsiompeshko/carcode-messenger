import React, { useState } from 'react';

import { messagesService } from 'core/messages';

import { WS_MESSAGE_EVENT } from 'core/constants/websocket.constant';

import useSocket from './dialog.socket.hook';

import DialogContainer from './dialog.container';

const DialogSocket = () => {
  const [messages, setMessages] = useState([]);
  const [socket, sendMessage, isConnecting, setConnecting] = useSocket({ onMessage });

  function onMessage(message) {
    switch (message.event) {
      case WS_MESSAGE_EVENT.HISTORY: {
        setConnecting(false);

        setMessages(messagesService.flat(message.data.dialog));

        break;
      }
      default: {
        console.log('not processed event', message);
      }
    }
  }

  return <DialogContainer messages={messages} isConnecting={isConnecting} />;
};

export default DialogSocket;
