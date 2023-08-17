'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "708837c1d238f0955c23a38051f5ebb7",
".git/config": "1f5cccb404532ab932a0994534fc6bd1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "567ad9d2029218b60efe3f57cdc1d3b2",
".git/HEAD": "013f073889cb8d3d23aea2663408e9d8",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3d16a51073ee998050d331cb9a7377a2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7cf86aa9d22cb0d00a418cff85d7b106",
".git/logs/refs/heads/build": "4f824e79dcf2c12662978f48575045a8",
".git/logs/refs/remotes/origin/build": "f1c7e3b694f310e0e79ec2be67ad7cb8",
".git/logs/refs/remotes/origin/main": "08fea49b7e85cca29ed6c146c96f6299",
".git/objects/03/cab3aa86ff6b50c41e3c36d87c39ed4a43a59c": "c2fc839fc1461a428cc7f6b08c9344b5",
".git/objects/05/b59cfdddef872c9d1a33ac7e6595d95e95dc0a": "bd895c5e06eb6b750e509d8d921fb498",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/260002261adca45495cf09706bd36bfa8c02a0": "aef64e8c073c4f02d02f3018a6a1cbe8",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/2d/a67b9881b810e9612e90b2beafa64a76f6c8e6": "8d93149c5c772b1acf10678554dab6d0",
".git/objects/32/309764926be58fd13dfe92b30bd4f5b9245cfb": "2e2b8fbfbe17970a076c8f3c57e783cf",
".git/objects/34/453d3946bd7d5f0005397f81965117c4fae2bc": "f06a02aaaa3a429e5eb5ec8372445f99",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/6446904e4ffa108e3a24495e05506b048f14d7": "5abc95396dd905cdb23adb8a1b6f9173",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5e/257492dd13149cc1a80c14276e27c950805b5d": "26191b249a056d93cf5927f5bcdbd5da",
".git/objects/5e/94b55fa69161fc443ce6d66c3eafabb8b128b8": "e68d1c5f5b8cb658ac276334cd1a5a63",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/21b7ba0bd0d143e59ca9389b53b574ae12bf46": "f496bedcb394794cedd4f6cf584b89c7",
".git/objects/6d/28abc8c684e19aec033f685fe4ad0bc16bf552": "d0e6ca9b40134f9c785c3be46a194462",
".git/objects/6e/c1b66fbfbada160ff8d4f17aef8f7ee88a6056": "c53ff259e182d7059679f91547a0a0ca",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/78/cce86fc243d2b16ed3d1804e747a06e73301d6": "4754ca6eeab7ba98a38794e65e96ff6f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/268a93811fdfd438e1a033349ccb36a6f8b6a5": "d00882a313c19fbad89ec9f2e3337274",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/93/182c417a4893b472129c2e0e3897557a40ba3b": "de80d481dca7b24cce5a0dfd05f44b00",
".git/objects/94/6fb2669847e34190a5e05e65dc061c319b0452": "c2d3400e2566696774ace407fc7664a6",
".git/objects/9c/72d9d174e19d11e8935dc9fad51085b20a8a24": "aece7ef7d2b4dbbc4713531f0396484e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/373a4bbe4d901f04dbd976d0a64759b7c9d8a7": "fa9e0be6bdfcf7d0235b5964a1a96933",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ad/3dbaf480ff319409088d6a3458811e62dec2f0": "8ca6a8edf199f530ffda516b9a6aeabf",
".git/objects/b2/b5650503d5275b427bc6941e7eab36761d749c": "77339a6cb431a4666fea020010e89516",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/56a37717fa20c9d4b14b4ffc6569b333cb9b9a": "82f8c612cb5cb1b0809d2a298638b272",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/5be2849beb8b3fe1f68b9512c3781c4da9e8cb": "482fda5542bf04f4b0e398f83076d7fb",
".git/objects/be/caf0674df46cdfdcc3d85a936570f6a814723a": "ed87060b8308c911cf8f050dc69267f6",
".git/objects/c0/b5d01bbe97260706a47fcf1496bf1e346e240c": "c3dbac081f44ec945e7ef35ff2dfacc1",
".git/objects/ca/6a2df965ae4c71db3640516a9b56fda20fc07c": "8c320bec3d87ea869843f493e7f56e30",
".git/objects/ce/b87c7e4a3afa955a086fc4817fc97b72a0f3d2": "ae07e588773bdcd7ea3271e5860cac2a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/d8eedff453af4e293464a1e5113f5633892d5d": "b6e3e2f22f91b3824a2e13aea1be17e5",
".git/objects/df/7cd69bd37985b6cd9219c494c95ac3c54911fa": "1bbd0016dcf548f8e4750c15228f84fa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/d0338497ca9cd1a667f9da8ddc9b18bd87bd04": "71a07c721ca15ec73d359a798d331820",
".git/objects/eb/237fab879a23a00254602bf9984af8df825537": "6388d3e9b40a483682d91855a1badbd9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/a69b2e7073ae059eb60ad2fd6997da8ac3f4cd": "454e9d8f64d59305d2825cc719fee7fb",
".git/objects/f2/36010ae12ad42381acfdb4e6622a4b70a4b55a": "c4b71cf900dc8cfcc52a22eecb883c43",
".git/objects/f6/b6bbf8b0e81c233df1e71ea4ec75a555ce7dc1": "570373fd425358380de60719ba3ae8ae",
".git/objects/f7/57579e7da287c7be52260cc1a5fe057a0f6786": "02d21d860c86dda6097bf514ec9577b5",
".git/objects/fe/11f50758dcbb8208195809a5b25a455d44ba02": "a962e1767011b98e8ed805f0ec656aba",
".git/refs/heads/build": "5a62bd53bc798ec80f3d85cb864187d4",
".git/refs/remotes/origin/build": "5a62bd53bc798ec80f3d85cb864187d4",
".git/refs/remotes/origin/main": "51c2d073056bf58478536174841ecab3",
"assets/AssetManifest.json": "9cf4fed84e38f20f6cdbed979fae3037",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/undraw_my_files_swob.svg": "47e9dc464efc1673b78d66a7f9fe3a4c",
"assets/lib/undraw_progressive_app_m-9-ms.svg": "69cbc826529a518e9c5ed687ed8ab028",
"assets/NOTICES": "ee11dfbc1042e172294d6bf6aa1e2e07",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a345ac1c8faa59a2f5ef533f532a112d",
"/": "a345ac1c8faa59a2f5ef533f532a112d",
"main.dart.js": "4984a09f8835d41772122eaca06ea0b7",
"manifest.json": "453f5c1cc4b3d131a44b4f5b21fbcd6a",
"version.json": "3d3c191c7ac1d895655296993fa301a2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
