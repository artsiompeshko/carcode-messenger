import React from 'react';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { dealersService } from 'core/dealers';
import { useDealers } from 'core/hooks';

import Dialog from './dialog.presentation';

const DialogContainer = props => {
  const { dealerPhoneNumber } = useParams();
  const dealers = useSelector(state => state.dealers.list);

  useDealers();

  return <Dialog {...props} dealer={dealersService.findByNumber(dealers, dealerPhoneNumber)} />;
};

export default DialogContainer;
