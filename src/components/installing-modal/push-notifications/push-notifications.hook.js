import { useState, useEffect } from 'react';

import { serviceWorkerPush } from 'core/service-worker';

const usePushNotifications = ({ swRegistration }) => {
  const [isSubscribed, setSubscribed] = useState(false);

  useEffect(() => {
    async function getIsSubscribed() {
      const nextSubscribed = await serviceWorkerPush.getIsSubscribed(swRegistration);

      setSubscribed(nextSubscribed);
    }

    getIsSubscribed();
  });

  function subscribeUser() {
    async function subscribe() {
      const subscription = await serviceWorkerPush.subscribeUser(swRegistration);

      setSubscribed(true);

      if (subscription) {
        await serviceWorkerPush.updateSubscriptionOnServer(subscription);
      }
    }

    subscribe();
  }

  function unsubscribeUser() {
    async function unsubscribe() {
      const subscription = await serviceWorkerPush.unsubscribeUser(swRegistration);

      setSubscribed(false);

      if (subscription) {
        await serviceWorkerPush.removeSubscriptionFromServer(subscription);
      }
    }

    unsubscribe();
  }

  function toggleSubscription() {
    if (isSubscribed) {
      unsubscribeUser();
    } else {
      subscribeUser();
    }
  }

  return [isSubscribed, setSubscribed, toggleSubscription];
};

export { usePushNotifications };
