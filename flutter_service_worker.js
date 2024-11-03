'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "07f89318c6b0301bc945ce5349a262ce",
".git/config": "52465a3dec6f2fd7ce289c2e3420ccf2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "858b1c03ddf746f20c25da87a03316d1",
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
".git/index": "4f4d791e37cc9d038f949ffb937b74cb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c64bc10a83b92d9f350f6810a08c8e33",
".git/logs/refs/heads/main": "46a2d34e9b1597cd7d6dd94ea811f22c",
".git/logs/refs/remotes/origin/main": "59c13af598e453daba626e845a3654f0",
".git/logs/refs/stash": "1465e4282f7186abace919a917cb06c7",
".git/objects/02/4fcd92c56b42fa455bb970cd51146041d024ac": "f30f7db7606aad293c8e0419f883ef31",
".git/objects/03/9ade6e2b5fd85ac4769c030332b9776e2209ff": "f113a194e45f31f1a60ee3a000708405",
".git/objects/06/88b48efe5d5a0e0c98ab8e068f89e1e43d0e83": "a868e509757bebb6aa1bd26e2840ee0d",
".git/objects/07/07e15c3ae09c0e97cc716cf329063a95f5d168": "9827236014351ca337d41d4a8597d7bc",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/1ae0b789a2f42869ae9a58e5dd70a8e2afd107": "eaa031df7fcec3e748978dee27ed3eba",
".git/objects/0c/2768cf103c39e0d0b8a00f9b2ca4f66e5c328f": "681369c61f92ca93566aff3728381a3f",
".git/objects/15/29732dc3eaf9ec9755c2dc35ef26aabe9276f6": "dd3c47b37b6336a3180d46765ec8bebe",
".git/objects/15/a20ff1fc3ee942f56bb9d8ed223cfcdd29c31c": "1e3b6a5a02fcbf9653f3a566b1eb4287",
".git/objects/17/2cb385bf7ee5403d4d02b40f06a22eb2c0a9fb": "09d5a8929172ca205d22f269751911e3",
".git/objects/18/8957b496d2dcdaef0463bde490c9dcd15097b3": "92bbd8eb7ccf513aecf68798c7765ba9",
".git/objects/19/b04a05713491b48fd7236e5791e2662b723fe2": "232c6ebe6d803aa74e86d35881cb61fd",
".git/objects/1a/a4d5c62afe2658e61c692b121634c48a268a04": "8527e0dbbcc5c4ee9b566457a4728f94",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/7ee0d917b25ccf7ae1b1d5f056a48d5852bd8f": "f49b19d91266fe5f8d100e3556d48a9d",
".git/objects/22/cbee012c00043820fa5ff82fe011c7e720c81b": "bd19df2d4c81ca609d0ecacd410c3bd1",
".git/objects/24/50860e72e0e99727ab706c7000d915b327eace": "53ce120a915ae369e13128f1e85a563b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e1233f287a9ec50a9aeb2da239a4cce3af3641": "86c7ef09c87c505c24b68120bea94f0a",
".git/objects/28/d383ccde7e47a69e63687251a2cb73ed0055fe": "8489eab5563ba14b2741104812832d32",
".git/objects/28/e8effeb5c72ac84f52f1d8f0a44ef086c8d3e2": "1e07ee675ad1d8c44682c3c96ea18eaa",
".git/objects/2a/2a63d3fcfb3fb70aa406936a7c719e09948b3d": "aea9c39c8b08fc49017e76ab6018f181",
".git/objects/2b/f784da9c8ad3f4760d7ee8ccfc446667eabf49": "8605eae6da6823ed770e9ba529b3c8d7",
".git/objects/2c/f81d3095051e101ff2166e9140c2ef7cf005c8": "534461b4d679cd891c22e91f636a0903",
".git/objects/2e/0267f66c8d3fe5ece8a434e259f06bb9a68708": "52fdae5a1b50c2f2d74ea8954791ec53",
".git/objects/2e/31488b7b5de1c14c37342c46c949fae8e30077": "f23929a6bc7fcafe30b9e7552ab35e7e",
".git/objects/31/42051a1e453f8ed502c0121b40c3ea059a829d": "a088c331c4f1eac230a2b3f75ce50875",
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
".git/objects/4b/3453706d1d79ba616321b616f41de32eab1b4e": "bf4dc85540c29829fbd3371a9c0d0058",
".git/objects/4e/a55dff49a7d562fad422aaf0ef2f680b373458": "1a8f3dee3ce8b8a03c45016c8013a56a",
".git/objects/51/b51d27f03d36a394e692b3246f81ed52648ac4": "8d5d60d67c536bc4cde4f915d4bc1045",
".git/objects/56/053a54c51f47cbd4970ee73a84372074a94ba6": "2c57a305cd2d6dc011265bcb3a1040c4",
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
".git/objects/74/a377ebd59a63be7228a2c312c21e9191523488": "7b7bd9e826a44a7b60ae2008beb6d057",
".git/objects/75/e466c06d5ad0469ded2e79322aa2540713b86e": "6eb4a10f5f6ebfbff22c14087f6ec5f0",
".git/objects/76/4e9d216a89b263e33334add0db4bed105a3f71": "ccd85aedd3fbfd51b83955a7e8945bc6",
".git/objects/7f/394fcd2f618203b1359dd7e1ae1917a11fa017": "a744335a3b410877c43ecf30d37e24bc",
".git/objects/81/12f02b23d9e5d95e70996cdf5df58f35953962": "db6fc7dbb2cf8e20186bccd0a46e1d86",
".git/objects/81/d39be53dfe7215808baac20b0341fe73c145af": "e7981aaded35c5ab2df8203e7e391ef3",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/384e369e1692ef766db030df812014f2c81079": "507243d747da883dd449dadf86237e98",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/023026cf04757f7e1da598c4ff2c918700af81": "e899ee5343cec57bf5dc243f691fe363",
".git/objects/90/342c8a1466507af9e2743caed1ef1821fc5760": "1c3a54bdf4b0f6fbdd4807f0d58d2e11",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/96/bc2dbefd3fc55003f1eb1c969ceb2d9ddf7404": "39734563ef6a15c321993bc69ba635ef",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/b2b107809266bc77177c409d7874c292ea4a47": "d16d819fd1a6c8282e7e43ebed84bbdd",
".git/objects/98/c3bff8da49a0f070c2132b2ca677f852761c9a": "66bdef1833cc1284f447a7395f8b1622",
".git/objects/99/d713790e06451aac0d6ba21e50a03f0c463e44": "924fa00e29ba164f0d01518c3aacf011",
".git/objects/9c/e7eed24b4773a102f0235001e1ee7900e32044": "69e03f49532e4143d2eb8122a709b5bf",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/a5/cc08af3ef03d2cdd4ac9a9be8992b887a44241": "1896ee54fea6a29d1db3f21b28b956cc",
".git/objects/ab/9d1977ab9aed515486d7aed9e2ec38f3fd3ef0": "0a01e0d0f1706c1067bdeb8a5cc79f47",
".git/objects/ad/3405078b2810c2fea95424456b380a8fc74893": "a6b90b18fa51b1a540125de20d2b2fcc",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/dc488ec09d650b448a8e1dd6c907aeda736ac0": "d5a5715ff304fae82a932adbd8cd767b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/6b52aab8a480b68d43784873a51e9ffda9d42e": "f37de05e5b77eaff2153808c030fed55",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/435af67530e8f2c6eac6b851bb0e1327cf59c3": "06945a3c30941ab7fead83283d3427af",
".git/objects/c1/fc3158a52194f926b8b5429b53a1893a8c0163": "1df21db9e94e4a33b3d20d6ca31a01d5",
".git/objects/c2/9ed0c4b01eb8c9ed98efc2830e9fafc5f8fc75": "884b66889948e0cf155910bcbe0ce103",
".git/objects/c2/c2c90a198379252f025929d5e430d57430c756": "1b3f40c470e1799c08e1c5ff45a9b66b",
".git/objects/c3/a9cfe2d0809da2f2100c95fa321f33668a505d": "c02fe81c20585eb67bd1b8e28df3ede6",
".git/objects/c3/b3ad2360b0469ce9b4df2fe560d8e62b38b4a7": "757b757a1f263fc8e789c9e561fe45df",
".git/objects/c4/aae7db0be23e4899d2a88735ef4d1d3cff38c0": "b36e492fcc9450bcdfcca7d458ec352d",
".git/objects/c6/0ac5685450da90c28b88403a9207d091c248de": "4e508ac8cd9ca0f6a7b9ada7e0c4ae04",
".git/objects/c6/ad26e869e42f36d166db725adb7d5c7a3f12ea": "690ecbb42b5e08eacd971d86f127fdf9",
".git/objects/cb/edab8a33d9475068174303511f38d70d008c40": "1e0292dec58d8be9d6b12e14e66d61e5",
".git/objects/cf/7792860d71bd20490350a64055a3663b7693d2": "db3eb4387012eb99f45d91f32bfad9ed",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/6c9da6cb50c4b414443c31261b7b6b50b92ae5": "95fbdb1648d48a3cff5d822c8240e95b",
".git/objects/d2/81dd8e25075b5ede57eb54673005ef790d0250": "4f4443dc2888c8df093c2deae0ba1b4e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/3bca67d575617375e8c50ac32bf3abbff85782": "30dbcca43e686c68befdaa9e8acb7e9f",
".git/objects/d5/8b42c83a1565afe5ee38d733ef46bd9460639d": "a1236422541aaba8334d33abc2bc2874",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/a674a89fc316dd74d633c459d92b6efe85ba33": "9a1cdad8664717022f625ffb6005b257",
".git/objects/da/17c273ec917ff6b08f465250c57e552820a22c": "a432408d1d5103238b88ca4b13d63125",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/f827c5d21eafbc894b36554332fdd73287c54f": "76567edfc5f9aa11af1b1bf130b4cac8",
".git/objects/de/2e6bd64bb8b58d3a1481921029dcad97868e76": "2fe83c62e01a751569935f6241c64790",
".git/objects/e6/38ad766584da3c17aa2dd0f5a7bab981b73178": "ed852dd7da536870e909cdd455ac5865",
".git/objects/e6/5a1e8703d98ced0e54eb84c4c45ecbc1654fcc": "6e124fce1bdd1f0cec32ac591d98e67b",
".git/objects/eb/8b7146b8cf14ce8b17e8698748002acf193835": "5ddc38dbbb5cea08451058ceb3bdd506",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/df0e9bd354e9b5c28b8e74bfc3ad550b69a00b": "865f5b38bc5f190a41821d9cf8ee9fe2",
".git/objects/ed/e4f7f6cc4af7c1130854bd5670ee82131b46c4": "6a43df9170e781f700f1ed5c4f0eb383",
".git/objects/ef/9bb95ad172a0c447912157e839acec9e7e5e48": "82c7d85fe8d12654a4ed3142b58822f4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/c3b892b2586ff4b97ddc9675627da3a3973c6b": "a3bc2f4f70791ad6d8024318eaafa8e6",
".git/objects/f8/cfdac7bfc7798f2c022a928b16a1e4e54ae718": "a04f49ca1beeed6386cd5d33a3a8ca71",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/b63d02153b5f03220fafb07c334fb544c3384f": "2efe02ded487bce33800e8939492d053",
".git/ORIG_HEAD": "cabb99912009b7570e96745e0284eb73",
".git/refs/heads/main": "c3ad038286d0f0c7b002071bde53c87a",
".git/refs/remotes/origin/main": "c3ad038286d0f0c7b002071bde53c87a",
".git/refs/stash": "be04d0e9c1db20dfb18d797cf44be096",
"assets/AssetManifest.bin": "39645b4205544c6854138952e7b8c7e4",
"assets/AssetManifest.bin.json": "fa62c7729ed43d6047bf5fc6957d5660",
"assets/AssetManifest.json": "ce5e88d6585ce4f337313ed0d0414033",
"assets/assets/fonts/DMSans_18pt-Medium.ttf": "126826dcb6ca7aae798a4f0c946fc925",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/images/app/app1.png": "e2e6db44446a92852b88509cac67cdad",
"assets/assets/images/app/cart.png": "34b61db484c6f1c5326014063dbb830a",
"assets/assets/images/app/favrot.png": "0c83c259ca2653a56a775baa5cdb388d",
"assets/assets/images/app/map.png": "b53c5876a5ea4eb84e551c04f0c62430",
"assets/assets/images/app/product.png": "10ee5c143ceeac91e907b47b2f3b70a2",
"assets/assets/images/app/profile.png": "96db569ca32541e3985eec1af5a717ac",
"assets/assets/images/app/sizzling_home.png": "e78ddd897ae2dc413aa7d4fd473676e8",
"assets/assets/images/family%2520kloud/calender%2520screnn.png": "2c3f09ce56a59274f31b31f7588db7b4",
"assets/assets/images/family%2520kloud/calender.png": "5ba9b640ba7cbe21c1642788cf42ecb8",
"assets/assets/images/family%2520kloud/chats.png": "629fd52c055641fe46eaf29029940d1a",
"assets/assets/images/family%2520kloud/home.png": "318a2c57dcdf1bfa0ba55b4a76b85217",
"assets/assets/images/family%2520kloud/profile.png": "16e634ec346e39cd8e6fd4ccbd202b9e",
"assets/assets/images/family%2520kloud/signup.png": "a7286ec31692a188e5a322754f44afc5",
"assets/assets/images/family%2520kloud/task.png": "93db7a83d207cbb7cda230c13d68f176",
"assets/assets/images/icons8-facebook-240.png": "5e3d92158f2c2da6fd0ae526ffb2ab39",
"assets/assets/images/icons8-linkedin-480.png": "da8f60e190ac9ce48024d32de0e2107d",
"assets/assets/images/icons8-whatsapp-700.png": "5b47f378ed6f4c4496fe07b010af40f1",
"assets/assets/images/IMG_20240813_010420.jpg": "3845a2e6f14562a21ea0fd572bd14ae6",
"assets/assets/images/purchase/buy.png": "ec67350ae3d9cb0af18b0ce6aa19edf5",
"assets/assets/images/uc/purchase.png": "43896462b78b683681fa1089ca4dcdd9",
"assets/assets/images/uc/splash.png": "8b0e6cacfada87e9ba6f2ba8ace0806e",
"assets/assets/images/web/date.png": "79a255fa0a8ba0f7d904bc46cbeaee08",
"assets/assets/images/web/detail%2520product2.png": "6a4839d754592bd9cccbb9fb444a2189",
"assets/assets/images/web/home.png": "6dcbad45e5ca8a85386a5e732539d3d5",
"assets/assets/images/web/home1.png": "0ddfd14a670fd1535756301324dac341",
"assets/assets/images/web/product.png": "4fd84bf8587669d85a27b96bd13545ec",
"assets/assets/images/web/product1.png": "84e2cc8cb2965c7912199096c0a2d003",
"assets/assets/images/web/signup.png": "56e6baddfdd05476ba9f8a881f6f9970",
"assets/assets/images/web%25202/add.png": "9b411fc4db71b2ed465a502cdef8d9a4",
"assets/assets/images/web%25202/category.png": "6f6a24642afc5a49478d660db54e1927",
"assets/assets/images/web%25202/chat.png": "b11d1aa28f7b6216532ba1dc4af2aad2",
"assets/assets/images/web%25202/p.png": "738ab5790594c7bc30ee16b6ecb798c5",
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
"flutter_bootstrap.js": "72d3edb18a2c35cf623fae36e0a0a27c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "131e6106fd807bb089fd2de86bfcdd0c",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
