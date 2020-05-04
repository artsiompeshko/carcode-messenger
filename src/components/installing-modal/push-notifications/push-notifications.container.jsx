import React, { useState, useContext } from 'react';

import { SwRegistrationContext } from 'core/contexts';

import { usePushNotifications } from './push-notifications.hook';
import PushNotifications from './push-notifications.presentation';

const PushNotificationsContainer = ({ handleSubmit }) => {
  const swRegistration = useContext(SwRegistrationContext);
  const [isSubscribed, setSubscribed, toggleSubscription, isSubscribing] = usePushNotifications({
    swRegistration,
    handleSubmit,
  });

  if (!swRegistration) {
    return null;
  }

  return (
    <PushNotifications
      isSubscribed={isSubscribed}
      disabled={!swRegistration || isSubscribing}
      handleClick={toggleSubscription}
    />
  );
};

export default PushNotificationsContainer;
