<<<<<<< HEAD
'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "41869f788c316d3e43c1212a696ab6fd",
".git/config": "52465a3dec6f2fd7ce289c2e3420ccf2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5dac7383dce6dd0125539b5ca138ee7e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bf4cdd2e2e6302354e2b193ffc1d3700",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cfcde948ffab8b21a8046c2ae8ef1eed",
".git/logs/refs/heads/main": "cfcde948ffab8b21a8046c2ae8ef1eed",
".git/logs/refs/remotes/origin/main": "43214229effae81e885f072ff4c3a8a4",
".git/objects/02/4fcd92c56b42fa455bb970cd51146041d024ac": "f30f7db7606aad293c8e0419f883ef31",
".git/objects/03/9ade6e2b5fd85ac4769c030332b9776e2209ff": "f113a194e45f31f1a60ee3a000708405",
".git/objects/06/88b48efe5d5a0e0c98ab8e068f89e1e43d0e83": "a868e509757bebb6aa1bd26e2840ee0d",
".git/objects/07/07e15c3ae09c0e97cc716cf329063a95f5d168": "9827236014351ca337d41d4a8597d7bc",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/1ae0b789a2f42869ae9a58e5dd70a8e2afd107": "eaa031df7fcec3e748978dee27ed3eba",
".git/objects/0c/2768cf103c39e0d0b8a00f9b2ca4f66e5c328f": "681369c61f92ca93566aff3728381a3f",
".git/objects/15/a20ff1fc3ee942f56bb9d8ed223cfcdd29c31c": "1e3b6a5a02fcbf9653f3a566b1eb4287",
".git/objects/17/2cb385bf7ee5403d4d02b40f06a22eb2c0a9fb": "09d5a8929172ca205d22f269751911e3",
".git/objects/18/8957b496d2dcdaef0463bde490c9dcd15097b3": "92bbd8eb7ccf513aecf68798c7765ba9",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/24/50860e72e0e99727ab706c7000d915b327eace": "53ce120a915ae369e13128f1e85a563b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e1233f287a9ec50a9aeb2da239a4cce3af3641": "86c7ef09c87c505c24b68120bea94f0a",
".git/objects/28/d383ccde7e47a69e63687251a2cb73ed0055fe": "8489eab5563ba14b2741104812832d32",
".git/objects/28/e8effeb5c72ac84f52f1d8f0a44ef086c8d3e2": "1e07ee675ad1d8c44682c3c96ea18eaa",
".git/objects/2a/2a63d3fcfb3fb70aa406936a7c719e09948b3d": "aea9c39c8b08fc49017e76ab6018f181",
".git/objects/2b/f784da9c8ad3f4760d7ee8ccfc446667eabf49": "8605eae6da6823ed770e9ba529b3c8d7",
".git/objects/2c/f81d3095051e101ff2166e9140c2ef7cf005c8": "534461b4d679cd891c22e91f636a0903",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/def3f36df57a354b301cd2058c792cdc6aa63c": "c113f6bbe7230a40f92058e6c09f3062",
".git/objects/36/9dbb89225e1c3b54f8c77f6d4ec7fad4d2c378": "7d55075b250b47370ee6743d1d8719b9",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/0076d0f6c4661d47a46f16cd0299e37fa3a123": "55cffe30eb5d92e1eea0649b6948dac1",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/43/fe6b38ae187ccca2e290c138b3cba006be61b2": "57af8f769491417148e00153d7821ad4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/db1845c852ed5c7e6b5cff0a5924a914f1f0cc": "dac0c8253b2206283dc8079170a7f82b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/3efdc6b80430dfd6bdcd88aa4d5fd681e4a7fd": "d049ed79360ba9681fad1317ac439b79",
".git/objects/48/069fc4c82ac734928066969cb507c70ea7fa05": "69d26686370cba50f0283fcda30a4d11",
".git/objects/49/214c9267d1ebed95ea6889f7f336676b137d16": "4130b753b393dca7a829b7ab5110be5d",
".git/objects/4a/de0128f14bdd089da1e85d420071e17145b9ca": "cb4c3fe2fefcc578f21b1a44aca22cc7",
".git/objects/56/7a5b49357ac3f0ef8b33f759d0e213a57b3046": "7eb4421a38caafc54791161d11bee069",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/60/ad97006792858666670f51ec77e930abd28e59": "da39c44bdd08272745c15b39a16ff5aa",
".git/objects/61/35526d83c6d81537117deb9ecb12888d0acb4b": "2c8371922ed5679e421d4f85f22c4b80",
".git/objects/62/29d486d68567ff9c189362ad0570b5145f81d7": "ec3019879bd2451900f018fd4eec6087",
".git/objects/66/2c1b4e89df189de10a72c9ec25d186ad20f800": "8fb0f9897538eea8ebcc119c36bc70a1",
".git/objects/66/437ec5d77e19cb2f40753a2a1e934622c7be97": "257c47156f6667ef6ba5a280b6c309ba",
".git/objects/66/69887a4e63c4d4112b1b13e208a6bda8dcb32e": "79e31dd1d8be6b0ed8f06e294f91eebc",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6d/e07503cf8279300639f36426003f0d68930642": "f13099b0ad18dbf73793d8ad1faedbad",
".git/objects/6f/5cd2dcb2465e7b7fe9f0ee96634345f377b6c1": "be6faa7ee424005eced33cd09e7495fc",
".git/objects/75/e466c06d5ad0469ded2e79322aa2540713b86e": "6eb4a10f5f6ebfbff22c14087f6ec5f0",
".git/objects/81/12f02b23d9e5d95e70996cdf5df58f35953962": "db6fc7dbb2cf8e20186bccd0a46e1d86",
".git/objects/81/d39be53dfe7215808baac20b0341fe73c145af": "e7981aaded35c5ab2df8203e7e391ef3",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/023026cf04757f7e1da598c4ff2c918700af81": "e899ee5343cec57bf5dc243f691fe363",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/c3bff8da49a0f070c2132b2ca677f852761c9a": "66bdef1833cc1284f447a7395f8b1622",
".git/objects/9c/e7eed24b4773a102f0235001e1ee7900e32044": "69e03f49532e4143d2eb8122a709b5bf",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a5/cc08af3ef03d2cdd4ac9a9be8992b887a44241": "1896ee54fea6a29d1db3f21b28b956cc",
".git/objects/ad/3405078b2810c2fea95424456b380a8fc74893": "a6b90b18fa51b1a540125de20d2b2fcc",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/dc488ec09d650b448a8e1dd6c907aeda736ac0": "d5a5715ff304fae82a932adbd8cd767b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6b52aab8a480b68d43784873a51e9ffda9d42e": "f37de05e5b77eaff2153808c030fed55",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c1/fc3158a52194f926b8b5429b53a1893a8c0163": "1df21db9e94e4a33b3d20d6ca31a01d5",
".git/objects/c2/c2c90a198379252f025929d5e430d57430c756": "1b3f40c470e1799c08e1c5ff45a9b66b",
".git/objects/c3/b3ad2360b0469ce9b4df2fe560d8e62b38b4a7": "757b757a1f263fc8e789c9e561fe45df",
".git/objects/c4/aae7db0be23e4899d2a88735ef4d1d3cff38c0": "b36e492fcc9450bcdfcca7d458ec352d",
".git/objects/cb/edab8a33d9475068174303511f38d70d008c40": "1e0292dec58d8be9d6b12e14e66d61e5",
".git/objects/cf/7792860d71bd20490350a64055a3663b7693d2": "db3eb4387012eb99f45d91f32bfad9ed",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/6c9da6cb50c4b414443c31261b7b6b50b92ae5": "95fbdb1648d48a3cff5d822c8240e95b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d5/8b42c83a1565afe5ee38d733ef46bd9460639d": "a1236422541aaba8334d33abc2bc2874",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/17c273ec917ff6b08f465250c57e552820a22c": "a432408d1d5103238b88ca4b13d63125",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e6/5a1e8703d98ced0e54eb84c4c45ecbc1654fcc": "6e124fce1bdd1f0cec32ac591d98e67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/df0e9bd354e9b5c28b8e74bfc3ad550b69a00b": "865f5b38bc5f190a41821d9cf8ee9fe2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/cfdac7bfc7798f2c022a928b16a1e4e54ae718": "a04f49ca1beeed6386cd5d33a3a8ca71",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/b63d02153b5f03220fafb07c334fb544c3384f": "2efe02ded487bce33800e8939492d053",
".git/ORIG_HEAD": "2477210748355a2b8b10505982759bf0",
".git/refs/heads/main": "2477210748355a2b8b10505982759bf0",
".git/refs/remotes/origin/main": "b94dbc6a7ce018d0cfde8f27157a357f",
"assets/AssetManifest.bin": "ce949c34c10af87de9c69ff9ba3c69db",
=======
'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ce949c34c10af87de9c69ff9ba3c69db",
>>>>>>> 6229d486d68567ff9c189362ad0570b5145f81d7
"assets/AssetManifest.bin.json": "e6eddb58bd70a608874c1dee80c52761",
"assets/AssetManifest.json": "8974915bda1f3db72417bab4814064a7",
"assets/assets/fonts/DMSans_18pt-Medium.ttf": "126826dcb6ca7aae798a4f0c946fc925",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/images/icons8-facebook-240.png": "5e3d92158f2c2da6fd0ae526ffb2ab39",
"assets/assets/images/icons8-linkedin-480.png": "da8f60e190ac9ce48024d32de0e2107d",
"assets/assets/images/icons8-whatsapp-700.png": "5b47f378ed6f4c4496fe07b010af40f1",
"assets/assets/images/IMG_20240813_010420.jpg": "3845a2e6f14562a21ea0fd572bd14ae6",
"assets/FontManifest.json": "0fe13433d74e7c36515cea1265c195c4",
"assets/fonts/MaterialIcons-Regular.otf": "03d512059de152d2aac52be0eeef0bde",
"assets/NOTICES": "1d6fa971a9431b630b417bb3cd7996a8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
<<<<<<< HEAD
"flutter_bootstrap.js": "51207c8858113828df480ae968b13eae",
=======
"flutter_bootstrap.js": "db4d5cc939f31800c006b6c683bfd0f8",
>>>>>>> 6229d486d68567ff9c189362ad0570b5145f81d7
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
<<<<<<< HEAD
"main.dart.js": "4926f9de4fceba00c2254a2fb1bead4c",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
=======
"main.dart.js": "8b79ac4ac47cf109124aa545028330d8",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
>>>>>>> 6229d486d68567ff9c189362ad0570b5145f81d7
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
<<<<<<< HEAD
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
=======
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
>>>>>>> 6229d486d68567ff9c189362ad0570b5145f81d7
