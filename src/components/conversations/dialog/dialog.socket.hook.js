import { useEffect, useState, useRef } from 'react';

import { WS_MESSAGE_EVENT } from 'core/constants/websocket.constant';

import { dialogService } from './dialog.service';

export default ({ onMessage, dealer }) => {
  const [isConnecting, setConnecting] = useState(true);

  const socketUrl = dialogService.getSocketUrl({
    dealerPhoneNumber: dealer?.phoneNumberDto?.number,
    chatterSessionId: dealer?.customerInfoDto?.chatterSessionId,
    visitorId: dealer?.customerInfoDto?.visitorId,
  });

  const socketRef = useRef();
  useEffect(() => {
    if (!dealer) {
      return () => {};
    }

    socketRef.current = new WebSocket(socketUrl);

    setConnecting(true);

    socketRef.current.onopen = () => {
      sendMessage({
        webSoketEvent: WS_MESSAGE_EVENT.HISTORY,
        notificationData: null,
      });
    };

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, [socketUrl]);

  useEffect(() => {
    if (!socketRef.current) {
      return;
    }
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
