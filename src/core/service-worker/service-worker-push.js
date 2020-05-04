import { urlUtils, httpUtils } from 'core/utils';

import { NOTIFICATIONS_SUBSCRIBE, NOTIFICATIONS_UNSUBSCRIBE } from 'core/constants/api.constant';

const PUBLIC_KEY = 'BHtmWnExKQdRyO8QnteTijOpYFbfCdntNJtsU-hQMsfF_fCx-P5aNLQKeJlD2SfHM90OD5ATdkuYyexMKs-1tXU';

const getIsSubscribed = swRegistration => {
  if (!swRegistration) {
    return false;
  }

  // Set the initial subscription value
  return swRegistration.pushManager.getSubscription().then(function (subscription) {
    const isSubscribed = !(subscription === null);

    return isSubscribed;
  });
};

const subscribeUser = swRegistration => {
  const applicationServerKey = urlUtils.urlB64ToUint8Array(PUBLIC_KEY);

  return swRegistration.pushManager
    .subscribe({
      userVisibleOnly: true,
      applicationServerKey,
    })
    .then(function (subscription) {
      console.log('User is subscribed.');

      return subscription;
    })
    .catch(function (err) {
      console.log('Failed to subscribe the user: ', err);

      return null;
    });
};

const unsubscribeUser = swRegistration => {
  return swRegistration.pushManager.getSubscription().then(function (subscription) {
    subscription.unsubscribe();

    return subscription;
  });
};

const removeSubscriptionFromServer = subscription => {
  const { p256dh, auth } = subscription.keys;
  const { endpoint } = subscription;

  const url = NOTIFICATIONS_UNSUBSCRIBE;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      p256dh,
      auth,
      endpoint,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const sendSubscriptionToServer = subscription => {
  const { p256dh, auth } = subscription.keys;
  const { endpoint } = subscription;

  const url = NOTIFICATIONS_SUBSCRIBE;

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      p256dh,
      auth,
      endpoint,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const updateSubscriptionOnServer = subscription => sendSubscriptionToServer(JSON.parse(JSON.stringify(subscription)));

export default {
  getIsSubscribed,
  subscribeUser,
  unsubscribeUser,
  updateSubscriptionOnServer,
  removeSubscriptionFromServer,
};
