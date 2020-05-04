import { urlUtils, httpUtils } from 'core/utils';

const PUBLIC_KEY = 'BPhmk1dRsQFc0m2laCDsoD6MWdkiziFP5OFtF-Pxb2H9r7waH4vQrTySpdio3E_H3V4_GePYHQhSVYt60NFG7DA';

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
  const { endpoint } = subscription;

  const url = '/api/unsubscribe';

  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
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

  const url = '/api/subscribe';

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
