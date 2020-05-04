import { useEffect, useState, useRef } from 'react';

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

  const socketRef = useRef();
  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = new WebSocket(socketUrl);

      socketRef.current.onopen = () => {
        sendMessage({
          webSoketEvent: WS_MESSAGE_EVENT.HISTORY,
          notificationData: null,
        });
      };
    }

    return () => {
      socketRef.current.close();
    };
  }, [socketUrl]);

  useEffect(() => {
    socketRef.current.onmessage = event => {
      const data = JSON.parse(event.data);

      onMessage(data);
    };
  }, [onMessage]);

  const sendMessage = message => {
    socketRef.current && socketRef.current.send(JSON.stringify(message));
  };

  return [socketRef.current, sendMessage, isConnecting, setConnecting];
};
