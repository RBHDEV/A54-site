'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4209a4399b2778ab876230f59f600cf0",
"assets/AssetManifest.bin.json": "77a02e7c2192740ff0e78b2227026e90",
"assets/AssetManifest.json": "840a6cc5249bf250e1f987f3e771f3ff",
"assets/assets/icons/a54_logo.png": "631bc2be7239af5c172cad1efe318619",
"assets/assets/icons/a54_whitebg.png": "77faf23a5698e5d7ae90c21c5c7ead3c",
"assets/assets/icons/headset.png": "2705f093cd96b243d6aaa7e4af126b16",
"assets/assets/icons/map-marker.png": "f27cbec73b5e0d9bf6e8ecbf672e735b",
"assets/assets/icons/money-bills.png": "ce864ed4b54bf216ab989c136270f9d8",
"assets/assets/icons/profile.png": "5aaa5eb6a314d214d66c911ffd74ceb3",
"assets/assets/icons/transfer_icon.png": "2750fec6b1dcb13164d2f357e21bc58d",
"assets/assets/icons/transfer_icon_white.png": "30c55688806f5c1de9722f74e3120c22",
"assets/assets/icons/virment_icon.png": "e7531c548b97b4f4d9a767baaa6d1c18",
"assets/assets/icons/virment_icon_white.png": "531045c2f0877439a8f8d0d796024641",
"assets/assets/illustrations/contact_art.png": "1a3b23b39dbd307d0be5c2e7b8478c3b",
"assets/assets/illustrations/homepage_art.png": "492fb08ea30cc6c66968f3711788653a",
"assets/assets/illustrations/login_art.png": "680f154ad1c59391f9869016ac6c42d6",
"assets/assets/illustrations/money-exchange.png": "680f154ad1c59391f9869016ac6c42d6",
"assets/assets/illustrations/signup_art.png": "fb7aa24d12833d8eb72d88b9804734aa",
"assets/assets/translations/ar.json": "3e137978adbd549f21fc61d9ed086362",
"assets/assets/translations/en.json": "daff6a020ee5cc59693660c145b47d67",
"assets/assets/translations/fr.json": "28be675fe83e347d5806b265283079ec",
"assets/FontManifest.json": "ac8c7fce76c190923c82ea8e2ff96072",
"assets/fonts/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/fonts/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/fonts/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/fonts/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/fonts/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/fonts/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/fonts/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/fonts/Inter-SemiBold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/fonts/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/fonts/Inter-VariableFont_slnt,wght.ttf": "32204736a4290ec41200abe91e5190d1",
"assets/fonts/MaterialIcons-Regular.otf": "f4e039ebf95b1877e99990ba52feb667",
"assets/NOTICES": "7d751339ab8618e6122794445b99bd38",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "aca50f919a32182b137622448ba780e1",
"canvaskit/canvaskit.wasm": "2ce67fce172f84ebe068585a8f1412bf",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "15763b59702ce7eb23b981eba585706a",
"canvaskit/chromium/canvaskit.wasm": "46e8e15b345739c94c088dbfc2b7872c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "2666f43a1ffd6429d8759e12578e84aa",
"canvaskit/skwasm.wasm": "3c7ba886f12fd46c0e02244aceb07ac0",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3e6efa19eef5bd8dad439ed4e5a6d3eb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "31013e8a78d7627c666744aedbf2ca44",
"/": "31013e8a78d7627c666744aedbf2ca44",
"main.dart.js": "c40f714d40112cfb307a6eeae18fdda1",
"manifest.json": "d6cc94843055770fba46ea58ea26c47f",
"version.json": "885fd8d560c7ac31b8bd981370b8d2ae"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
