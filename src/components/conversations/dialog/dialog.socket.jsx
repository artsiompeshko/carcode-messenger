import React, { useState, useEffect } from 'react';

import { messagesService } from 'core/messages';

import { WS_MESSAGE_EVENT } from 'core/constants/websocket.constant';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { dealersService } from 'core/dealers';

import { DEALERS_PATH } from 'core/constants/api.constant';

import { allActions } from 'core/actions';

import useSocket from './dialog.socket.hook';

import DialogContainer from './dialog.container';

const DialogSocket = () => {
  const [messages, setMessages] = useState([]);
  const { dealerPhoneNumber } = useParams();

  const [loading, setLoading] = useState(false);
  const dealers = useSelector(state => state.dealers.list);
  const dispatch = useDispatch();
  const visitorId = useSelector(state => state.customer.visitorId);

  useEffect(() => {
    const path = DEALERS_PATH.replace(':visitorId', visitorId);
    setLoading(true);

    async function loadDealers() {
      const result = await fetch(path).then(response => {
        return response.json();
      });

      dispatch(allActions.dealersActions.setDealers(result));

      setLoading(false);
    }

    loadDealers();
  }, []);
  const dealer = dealersService.findByNumber(dealers, dealerPhoneNumber);
  const [socket, sendMessage, isConnecting, setConnecting] = useSocket({ onMessage, dealer });

  function onMessage(message) {
    switch (message.event) {
      case WS_MESSAGE_EVENT.HISTORY: {
        setConnecting(false);

        setMessages(messagesService.flat(message.data.dialog));

        break;
      }
      case WS_MESSAGE_EVENT.CONFIRMATION_MESSAGE: {
        setMessages([...messages, message.data]);

        break;
      }
      case WS_MESSAGE_EVENT.REPLY: {
        setMessages([...messages, message.data]);

        break;
      }
      default: {
        console.log('not processed event', message);
      }
    }
  }

  function onSubmit(body) {
    sendMessage({
      webSoketEvent: WS_MESSAGE_EVENT.MESSAGE,
      notificationData: {
        attachments: [],
        body,
        type: 'message',
      },
    });
  }

  return (
    <DialogContainer
      dealer={dealer}
      messages={messages}
      isConnecting={isConnecting || loading}
      handleSubmit={onSubmit}
    />
  );
};

export default DialogSocket;
