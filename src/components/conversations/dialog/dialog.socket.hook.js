import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { WS_MESSAGE_EVENT } from 'core/constants/websocket.constant';

import { dialogService } from './dialog.service';

export default ({ onMessage }) => {
  const [isConnecting, setConnecting] = useState(true);
  const { dealerPhoneNumber } = useParams();
  const { chatterSessionId, visitorId } = useSelector(state => state.customer);

  const socketUrl = dialogService.getSocketUrl({
    dealerPhoneNumber,
    chatterSessionId,
    visitorId,
  });

  let socket;
  useEffect(() => {
    socket = new WebSocket(socketUrl);

    socket.onopen = () => {
      sendMessage({
        webSoketEvent: WS_MESSAGE_EVENT.HISTORY,
        notificationData: null,
      });
    };

    socket.onmessage = event => {
      const data = JSON.parse(event.data);

      onMessage(data);
    };

    return () => {
      socket.close();
    };
  }, [socketUrl]);

  const sendMessage = message => {
    socket && socket.send(JSON.stringify(message));
  };

  return [socket, sendMessage, isConnecting, setConnecting];
};
