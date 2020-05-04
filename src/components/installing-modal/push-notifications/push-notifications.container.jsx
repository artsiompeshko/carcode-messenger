import React, { useState, useContext } from 'react';

import { SwRegistrationContext } from 'core/contexts';

import { usePushNotifications } from './push-notifications.hook';
import PushNotifications from './push-notifications.presentation';

const PushNotificationsContainer = () => {
  const swRegistration = useContext(SwRegistrationContext);
  const [isSubscribed, setSubscribed, toggleSubscription] = usePushNotifications({ swRegistration });

  if (!swRegistration) {
    return null;
  }

  return <PushNotifications isSubscribed={isSubscribed} disabled={!swRegistration} handleClick={toggleSubscription} />;
};

export default PushNotificationsContainer;
