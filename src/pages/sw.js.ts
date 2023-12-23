/**
 * PWA.
 * @see https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
 */
import pack from "../../package.json";
import pwa from "../../src/pwa.json"

export const prerender = true;

export async function GET(): Promise<Response> {
  return new Response(`const version = "${pack.version}";
  const assets = ${JSON.stringify(pwa)};

/**
 * Install
 */
self.addEventListener("install", (e) =>
  e.waitUntil(
    caches
      .open(version)
      .then((cache) => {
        cache.addAll(assets);
      })
      .then(() => {
        sendMessage({ text: "install" });
        self.skipWaiting();
      })
  )
);

/**
 * Activate
 */
self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches.keys().then(async (ks) => {
      for (const k of ks) {
        if (k !== version) {
          await caches.delete(k);
        }
      }
      sendMessage({ text: "activate", action: "reset" });
      self.clients.claim();
    })
  )
);

/**
 * Fetch
 */
const CONFIG = "/config";
self.addEventListener("fetch", (event) => {
  const {
    request,
    request: { url, method },
  } = event;

  // Save and load json data in Cache Storage CONFIG file.
  if (url.match(CONFIG)) {
    if (method === "POST") {
      request
        .json()
        .then((body) =>
          caches
            .open(version)
            .then((cache) =>
              cache.put(CONFIG, new Response(JSON.stringify(body)))
            )
        );
      return event.respondWith(new Response("{}"));
    } else {
      return event.respondWith(
        caches.match(CONFIG).then((response) => response || new Response("{}"))
      );
    }
  } else {
    // Get & save request in Cache Storage.
    if (method !== "POST") {
      event.respondWith(
        caches.open(version).then(async (cache) => {
          let response = await cache.match(event.request);
          if (response) return response;

          // To fix 'chrome-extension'.
          if (
            url.startsWith("chrome-extension") ||
            url.includes("extension") ||
            !(url.indexOf("http") === 0)
          )
            return await fetch(event.request);

          response = await cache.match((event.request.url += "index.html"));
          if (response) return response;

          response = await cache.match((event.request.url += "/index.html"));
          if (response) return response;

          response = await fetch(event.request);
          cache.put(event.request, response.clone());

          return response;
        })
      );
    }
  }
});

/**
 * Receive messages from the main script
 */
self.onmessage = function (e) {
  if (e.data.action === "skipWaiting") {
    self.skipWaiting();
  }
  if (e.data.action === "update") {
    self.registration.update();
  }
  if (e.data.action === "sync") {
    self.registration.sync.register("sync-news").then(() => {
      // ...
    });
  }
  sendMessage({ type: "receive", msg: e.data });
};

/**
 * Send a message to the main script
 */
function sendMessage(message) {
  self.clients.matchAll().then((a) => {
    if (a[0]) {
      self.clients.get(a[0].id).then((client) => {
        client.postMessage(message);
      });
    }
  });
}
`);
}
