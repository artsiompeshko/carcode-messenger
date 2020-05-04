import React from 'react';

import { useSelector } from 'react-redux';

import Dialog from './dialog.presentation';

const DialogContainer = props => {
  const dealers = useSelector(state => state.dealers.list);

  return <Dialog {...props} dealer={dealers?.[0]} />;
};

export default DialogContainer;
