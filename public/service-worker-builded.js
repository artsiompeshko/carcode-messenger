importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Note: Ignore the error that Glitch raises about workbox being undefined.
workbox.core.skipWaiting();
workbox.core.clientsClaim();

self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${JSON.stringify(event.data.json())}"`);

  const data = event.data.json();
  const title = 'New incoming message';
  const options = {
    body: data.body,
    icon: '/letter.png',
    badge: '/letter.png',
    actions: [
      {
        action: 'reply',
        title: 'Reply',
      },
    ],
    data,
    requireInteraction: true,
  };

  const notificationPromise = self.registration.showNotification(title, options);
  event.waitUntil(notificationPromise);
});

self.onReply = function (event) {
  event.waitUntil(
    clients.openWindow(
      `https://carcode-messenger.netlify.app/conversations/${event.notification.data.dealerPhoneNumber.number}`,
    ),
  );
};

self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.');

  console.log(event);

  event.notification.close();

  if (event.action === 'reply') {
    onReply(event);
  } else {
    event.waitUntil(
      clients.openWindow(
        `https://carcode-messenger.netlify.app/conversations/${event.notification.data.dealerPhoneNumber.number}`,
      ),
    );
  }
});

self.customPaths = [];

const { core, routing, strategies, precaching } = workbox;

precaching.precacheAndRoute([].concat(self.customPaths), {});

routing.registerRoute(new RegExp('/'), new workbox.strategies.StaleWhileRevalidate());
