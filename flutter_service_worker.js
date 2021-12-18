'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4b0175f4783df149d8cbb27d0134fd7f",
"assets/assets/Background.png": "3e7ab84d1e376a87d3fd748100354797",
"assets/assets/backgroundMain.png": "d51c2c7b73fe9c2a8f5e36e62ad0c326",
"assets/assets/Logoweb.png": "40386175277b621073ac49d092c60ec6",
"assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "aaee91d0ca53ff897dcf858a7cef8d78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "9fd50b863c2a4eb276011dd3ef9df53e",
"/": "40b6abae69376908d07a012c82599d3c",
"main.dart.js": "ea47ba03e78f0aaa7d119220ba418931",
"manifest.json": "a12712bc2f0379d490e1fb88ac9400bf",
"mtcdashboard/.git/COMMIT_EDITMSG": "847d10120485fbee4e31337c5027cc4b",
"mtcdashboard/.git/config": "1e3c9521878ebfad8f350a3aaf13ea55",
"mtcdashboard/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"mtcdashboard/.git/FETCH_HEAD": "8bfed8124ad13d4abc6d63656ba7c209",
"mtcdashboard/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"mtcdashboard/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"mtcdashboard/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"mtcdashboard/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"mtcdashboard/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"mtcdashboard/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"mtcdashboard/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"mtcdashboard/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"mtcdashboard/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"mtcdashboard/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"mtcdashboard/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"mtcdashboard/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"mtcdashboard/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"mtcdashboard/.git/index": "9889883e992efea556ffb206c094c499",
"mtcdashboard/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"mtcdashboard/.git/logs/HEAD": "190d25a6882724602c055eab163cd1aa",
"mtcdashboard/.git/logs/refs/heads/main": "190d25a6882724602c055eab163cd1aa",
"mtcdashboard/.git/logs/refs/remotes/origin/main": "1306486e1441a9b7e4b6f786f2122527",
"mtcdashboard/.git/objects/01/b318fb75a8f713a9c7a25964ed6d0e4de296ac": "ef9dba66f184d683bd8ca1c821ef2acd",
"mtcdashboard/.git/objects/08/772b7e4693d2e60fabaf13305fcdc2450dbbfb": "f41f828be1d91c439442eb0308096e70",
"mtcdashboard/.git/objects/09/2da2087353f05f7fe31d9f9fc400006969e389": "6e0b024b9d7152c9f0528b977357ad4a",
"mtcdashboard/.git/objects/0f/8bb3f251077a195b18fbabafbb3f30577545e8": "38f16ba432b98fc7a3a5f802198f791f",
"mtcdashboard/.git/objects/12/7ec86c84dafe7a8763db61e777ac84a2c198a4": "9e2a84e1409437ff9c6e5727a7eb3812",
"mtcdashboard/.git/objects/17/6a42e0c6f82e4868f91efa17a31a52bd4b2838": "fa5a1e658f66743bfd2fa839b256f737",
"mtcdashboard/.git/objects/19/14033ecac47012f17e57626652317a35ef6def": "808f2ae8c696d55292cc9478f50fb00a",
"mtcdashboard/.git/objects/1a/03d0737a0a97745ebb1e5c4d908bceb639288c": "884e0d832f502b38c6f4bad41d32a353",
"mtcdashboard/.git/objects/1d/297bc01f97c9e425a192ca9429026e7ff635aa": "8930c5bcf1692a6e374c89770ec18deb",
"mtcdashboard/.git/objects/1e/6d4d591f8f090bbad2a654db0362270fa3f116": "17239ce7aa4b427ecfd520b101970f3a",
"mtcdashboard/.git/objects/1e/e72c799ff364b637b8d7da23dd952a45c0b032": "93be456a231885f680903a2ce8da1b09",
"mtcdashboard/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"mtcdashboard/.git/objects/27/c1311579e44eb039cd670c7d599cf3286a4b78": "6878346cb87ae05c1ec17ddc4e925bd1",
"mtcdashboard/.git/objects/2c/601d3322033fe89dca524dcfc9004b4a68f065": "95c23f0815171da666fad226bed591ff",
"mtcdashboard/.git/objects/2e/2c322862cc9eb66b67ab2947b742d0f2386b19": "e58d9533005d33aba157f29b6af55b2f",
"mtcdashboard/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"mtcdashboard/.git/objects/36/d886073e4205e1a9c29e84cf25c35652181c2d": "ef3d9cb6a05a50286dda61665f53bff1",
"mtcdashboard/.git/objects/3a/8f6a317e47e6e01fcd7dfe177bcfca7035c785": "34cc9dec5d646ccac2d06eb486cfdb45",
"mtcdashboard/.git/objects/3d/3d0fabfc23da1d8b1904b3c7ec761f17043251": "7cf5c5fc29072e1651dd214cdb32c831",
"mtcdashboard/.git/objects/40/eff1e61e5dc34a0c68722512d9a3752bcceeca": "7fb5233a54d3eba2803bf0c0604f27a8",
"mtcdashboard/.git/objects/44/62b89f33a0eba48b62eee6404967e84949901a": "52ddcd528b7ec6b9f3f004965a86d4e2",
"mtcdashboard/.git/objects/4b/1c65fbb15f4864526c4cd77bef59b24ca7404f": "7100bcf67b72e3a1fb7d23ff4f71de3a",
"mtcdashboard/.git/objects/50/7305270833888c4d7b2aa7e3289770654a26ce": "78d84d4b9ca83bdac54aa0362b8b501d",
"mtcdashboard/.git/objects/51/db7b06704b69c7579220024a9e4472b0efa4d4": "50dbff61cdd2418887daef62d5ba9580",
"mtcdashboard/.git/objects/54/04fc367983a4318bc3151dbaebce49f2be5a90": "fc77d6855a0fadccf5baa6630a1d4541",
"mtcdashboard/.git/objects/5d/bde275602d83ca6b6d296d56b2c3cc01a46e49": "6a853fb7c3e653d9629daa2b208c5142",
"mtcdashboard/.git/objects/61/3c974bea05f120695f76d558fcea6644c4ce92": "107d922cefbb761d2d37753e608052d6",
"mtcdashboard/.git/objects/67/a936aa04098e3141f2fd8c4ded7802aac66a98": "b693fc9056e39c7c97f077c096c1b825",
"mtcdashboard/.git/objects/71/35807df9ed08ca7540b029149963f4bd2e1c40": "11f9a98da411dbda9eb5e7626ad9d65a",
"mtcdashboard/.git/objects/75/dccf3156f77002f47e39d90de32d41645f7e32": "41c9684a59b97a88f8b4e45d6f24e6bf",
"mtcdashboard/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"mtcdashboard/.git/objects/7c/add15e91e159076ccc289f1e3bfcc980388c79": "ac0a3bf912110e61e7f83c9132984ded",
"mtcdashboard/.git/objects/82/56b7493f6121e00da21673e3bab5df6976f167": "d6d201a162927391e9d2efa39d577cf2",
"mtcdashboard/.git/objects/82/5d20b0920f8277d208db38233c4f84bf0cb011": "d0dbadb98c92fe846101d14c48442047",
"mtcdashboard/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"mtcdashboard/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"mtcdashboard/.git/objects/8d/35f96fd818b38a3441939f9f972bd33e094545": "618259e7d0fe02de945c1faa9b176d8f",
"mtcdashboard/.git/objects/8e/803fecc7461a5df864f1c83f1a579e7cb390e4": "30f4158573221294185cffa3cadfaab7",
"mtcdashboard/.git/objects/99/743a6a3b885ae7e38fb7acba3cce290f39cdfe": "9c8a787fa19196c2a53f152c1348a780",
"mtcdashboard/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"mtcdashboard/.git/objects/a7/a7578b8143af129effac96cd12d48ff48196e5": "0f08ec061f106da100e5734b5c2bf8d4",
"mtcdashboard/.git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
"mtcdashboard/.git/objects/aa/d799d3e14430b8cc156e7bc89a7b3318532e65": "79ea14853ada1a0ff3da6013b574cac2",
"mtcdashboard/.git/objects/af/6615af17e1d06b2540638187eb0032060d0fdc": "4964c5a591b35b873eb8dd00bf812912",
"mtcdashboard/.git/objects/b5/369cd943fa7829c24e6faec47ac5ef1ea1494d": "5b49dca86bf7c18732b2ce9379421915",
"mtcdashboard/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"mtcdashboard/.git/objects/be/b1991954e8c1c75476fa7316f9a048d742879a": "fa0f0fd6a23900a5b51257428c5e7e1e",
"mtcdashboard/.git/objects/bf/acb41978a33265655ab2b15af4800d5ef9e542": "24249436b37bc4f758d09a18a78912d8",
"mtcdashboard/.git/objects/d1/6f1f805efd16051a16f04e9a1d64ebaf5bd73c": "bd715e2904ef981aba8bd7b9de01a9e9",
"mtcdashboard/.git/objects/d3/f65bb3324a0a9b65de46518561df52a8428626": "8da8383dff84a9846767e5cb1b4e743d",
"mtcdashboard/.git/objects/d8/6f85d1f7c00624132843f7f75bff735211a8ef": "f5a844562ac03d13cfa644e7d26086c7",
"mtcdashboard/.git/objects/dc/c18a7424f4721bbcada97de0a32c550659d4c7": "747258940622bc952ab427c5078a6718",
"mtcdashboard/.git/objects/dd/a369942d802a55002ad3022f0c4014d6ea964f": "707abece70f1f86463bcca3b4f3e2f00",
"mtcdashboard/.git/objects/e4/aba23fa90f69854fae53315b74d1b7a300fc00": "dec4106aae721e3ff5d2952905f07b2a",
"mtcdashboard/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"mtcdashboard/.git/objects/e5/eb843ac6a3e55417c66a28a960c2094deec124": "acc922c7ede7e3dae6db8e47d02770af",
"mtcdashboard/.git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
"mtcdashboard/.git/objects/f8/b3124abca57b36ad027be96bc19beea4c48925": "4992a4007d89ddae729b33b5e2785435",
"mtcdashboard/.git/ORIG_HEAD": "06a0638dcf52bbc2d840746c107528f0",
"mtcdashboard/.git/refs/heads/main": "37b0dcfa1e9289a51af8ed55182202dd",
"mtcdashboard/.git/refs/remotes/origin/main": "37b0dcfa1e9289a51af8ed55182202dd",
"mtcdashboard/assets/AssetManifest.json": "4b0175f4783df149d8cbb27d0134fd7f",
"mtcdashboard/assets/assets/Background.png": "3e7ab84d1e376a87d3fd748100354797",
"mtcdashboard/assets/assets/backgroundMain.png": "d51c2c7b73fe9c2a8f5e36e62ad0c326",
"mtcdashboard/assets/assets/Logoweb.png": "40386175277b621073ac49d092c60ec6",
"mtcdashboard/assets/Background.png": "3e7ab84d1e376a87d3fd748100354797",
"mtcdashboard/assets/backgroundMain.png": "d51c2c7b73fe9c2a8f5e36e62ad0c326",
"mtcdashboard/assets/FontManifest.json": "9e0649c90f16a7be3d51ab27d6089604",
"mtcdashboard/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"mtcdashboard/assets/Logoweb.png": "40386175277b621073ac49d092c60ec6",
"mtcdashboard/assets/NOTICES": "aaee91d0ca53ff897dcf858a7cef8d78",
"mtcdashboard/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"mtcdashboard/assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"mtcdashboard/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"mtcdashboard/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"mtcdashboard/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"mtcdashboard/index.html": "40b6abae69376908d07a012c82599d3c",
"mtcdashboard/main.dart.js": "607111d42e88eb024fc1709f85a90bf6",
"mtcdashboard/manifest.json": "a12712bc2f0379d490e1fb88ac9400bf",
"mtcdashboard/version.json": "281f2a7b1646c3dea6feea25f04fa556",
"version.json": "281f2a7b1646c3dea6feea25f04fa556"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
