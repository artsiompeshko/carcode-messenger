import { useState, useEffect } from 'react';

import { serviceWorkerPush } from 'core/service-worker';

const usePushNotifications = ({ swRegistration, handleSubmit }) => {
  const [isSubscribed, setSubscribed] = useState(false);
  const [isSubscribing, setSubscribing] = useState(false);

  useEffect(() => {
    async function getIsSubscribed() {
      const nextSubscribed = await serviceWorkerPush.getIsSubscribed(swRegistration);

      setSubscribed(nextSubscribed);
    }

    getIsSubscribed();
  });

  function subscribeUser() {
    setSubscribing(true);

    async function subscribe() {
      const subscription = await serviceWorkerPush.subscribeUser(swRegistration);

      if (subscription) {
        try {
          await serviceWorkerPush.updateSubscriptionOnServer(subscription);
        } catch (e) {
          // error
        }
      }

      setSubscribed(true);
      setSubscribing(false);
      handleSubmit();
    }

    subscribe();
  }

  function unsubscribeUser() {
    setSubscribing(true);

    async function unsubscribe() {
      const subscription = await serviceWorkerPush.unsubscribeUser(swRegistration);

      if (subscription) {
        try {
          await serviceWorkerPush.removeSubscriptionFromServer(subscription);
        } catch (e) {
          // error
        }
      }

      setSubscribed(false);
      setSubscribing(false);
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

  return [isSubscribed, setSubscribed, toggleSubscription, isSubscribing];
};

export { usePushNotifications };
