/* Saddam Salon VIP - Service Worker (Background Web Push + App Shell Caching) */

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Listen for Web Push events even when browser tabs are closed
self.addEventListener("push", (event) => {
  if (!event.data) return;

  let data = {};
  try {
    data = event.data.json();
  } catch {
    data = {
      title: "👑 صالون صدام الملكي",
      body: event.data.text(),
      url: "/",
    };
  }

  const title = data.title || "👑 صالون صدام الملكي VIP";
  const options = {
    body: data.body || "لديك إشعار جديد من صالون صدام",
    icon: data.icon || "/logo.jpg",
    badge: data.badge || "/logo.jpg",
    tag: data.tag || `saddam-alert-${Date.now()}`,
    renotify: true,
    requireInteraction: data.requireInteraction !== undefined ? data.requireInteraction : true,
    vibrate: [250, 100, 250, 100, 350],
    dir: "rtl",
    lang: "ar",
    data: {
      url: data.url || "/",
      ...(data.data || {}),
    },
  };

  event.waitUntil(
    Promise.all([
      self.registration.showNotification(title, options),
      self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: "SADDAM_PUSH_RECEIVED",
            payload: { title, ...data },
          });
        });
      }),
    ])
  );
});

// Handle notification click to focus existing window or open destination route
self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const targetUrl = (event.notification.data && event.notification.data.url) || "/";

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) {
          if (client.url.includes(targetUrl)) {
            return client.focus();
          }
        }
      }
      if (clientList.length > 0 && "focus" in clientList[0]) {
        clientList[0].navigate(targetUrl).catch(() => {});
        return clientList[0].focus();
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow(targetUrl);
      }
    })
  );
});
