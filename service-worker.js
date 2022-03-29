/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "01cdc25d895a96ae1bf063e57aa06fe7"
  },
  {
    "url": "about/index.html",
    "revision": "8f07e64ad89ca82254f641623704a1b3"
  },
  {
    "url": "assets/css/0.styles.e6cc812d.css",
    "revision": "b4e25ebacc6819588eb2aeb311ead92d"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.0d3993bc.js",
    "revision": "dc91707ad1688bc3a07dbac8efc0ad82"
  },
  {
    "url": "assets/js/10.56ade6de.js",
    "revision": "ec73d99db8736c31da901164b036bbd9"
  },
  {
    "url": "assets/js/11.5ca06e6a.js",
    "revision": "c15caa131d7ef3849e87055fe922a416"
  },
  {
    "url": "assets/js/12.0226bc21.js",
    "revision": "239f061476ef770128ca7dc698afd830"
  },
  {
    "url": "assets/js/13.c05f891e.js",
    "revision": "01b286d64a32ed4d0ada3abc85105fad"
  },
  {
    "url": "assets/js/14.e70fc07b.js",
    "revision": "a8625910ef1f48d62089ab05b9aafdf5"
  },
  {
    "url": "assets/js/15.033cc437.js",
    "revision": "8694b3c3c9ccccf54ad07d24af8c3949"
  },
  {
    "url": "assets/js/16.d4ced7bc.js",
    "revision": "13c1fabbc1d9b303ad4128b7aed36ae3"
  },
  {
    "url": "assets/js/17.01af93cd.js",
    "revision": "766fb4a2ffd75f4c572982ac1a86d5ea"
  },
  {
    "url": "assets/js/18.d89caa51.js",
    "revision": "be70fc8b51dca24328902e0dc8d9270c"
  },
  {
    "url": "assets/js/19.ccb8469e.js",
    "revision": "2f01306413441c29433e22f6a2691b25"
  },
  {
    "url": "assets/js/20.75c46d93.js",
    "revision": "0e12c91d7d25e521999866caaba4ea21"
  },
  {
    "url": "assets/js/21.3b0fbdd5.js",
    "revision": "cbbd27aa64bcfea9a0bc05aca873f010"
  },
  {
    "url": "assets/js/22.c7e759d9.js",
    "revision": "ce21501f3934e97bf0ff522b983e2a1e"
  },
  {
    "url": "assets/js/23.3effbe4d.js",
    "revision": "85c0bb71a3843151dde43371e9f72ee8"
  },
  {
    "url": "assets/js/24.2682e83b.js",
    "revision": "2bf1d376aae22130c36f5c46c4633bfe"
  },
  {
    "url": "assets/js/25.a4a4b765.js",
    "revision": "ff8383b5d84597c85fc7915eec493408"
  },
  {
    "url": "assets/js/26.8ff64e5b.js",
    "revision": "da1dd30ba6401b9e74c38157513e97b3"
  },
  {
    "url": "assets/js/27.f4ea371f.js",
    "revision": "0b3576f363fea58a109652510cbc9568"
  },
  {
    "url": "assets/js/28.76d7f04d.js",
    "revision": "8fe6ef0dd591e14c95a7c1765d90b95b"
  },
  {
    "url": "assets/js/29.1ecf48f9.js",
    "revision": "e9f3414db7cb129098b9621155a25aba"
  },
  {
    "url": "assets/js/30.dcb6d0f5.js",
    "revision": "01884a4a6335c2f1ac1982c06bd7b60c"
  },
  {
    "url": "assets/js/31.4deda165.js",
    "revision": "d657b7fc6d3ea1e849e15d3a7a33e35a"
  },
  {
    "url": "assets/js/32.6a01ffb8.js",
    "revision": "0ba17fe7157cb6921c635db5c07e8245"
  },
  {
    "url": "assets/js/33.5c6579e8.js",
    "revision": "1bbc29513895ea49af9f68e144d8d9b8"
  },
  {
    "url": "assets/js/34.90cfa555.js",
    "revision": "2578b59a7b5ddb91da89577da65ae93a"
  },
  {
    "url": "assets/js/35.f597e022.js",
    "revision": "232db0ab256bfbc15d8775fbeaec3e57"
  },
  {
    "url": "assets/js/36.dbfc473f.js",
    "revision": "f212bca51557ab9c37e545af21ecd178"
  },
  {
    "url": "assets/js/37.e7fbc3a1.js",
    "revision": "5bb79376d46f2c2f82be460c2461827a"
  },
  {
    "url": "assets/js/38.e650dffb.js",
    "revision": "4a39de90afbf3b49779772c4cb01f129"
  },
  {
    "url": "assets/js/39.f4beb9da.js",
    "revision": "377dafea53f767ff61d4ed98fe4b59bc"
  },
  {
    "url": "assets/js/4.8dd1c00f.js",
    "revision": "c41c865121db4f6331c962c66bffe976"
  },
  {
    "url": "assets/js/40.0b014cb2.js",
    "revision": "26a236305ff3cd771027ff9ec950947c"
  },
  {
    "url": "assets/js/41.d7b7cb82.js",
    "revision": "1dc559d03e38c3ee22d2a68d0f6389fd"
  },
  {
    "url": "assets/js/42.713cdd21.js",
    "revision": "2471c84da28c174c4a1d94f5a12c3fd5"
  },
  {
    "url": "assets/js/43.3ba17ec7.js",
    "revision": "345bd60221fbbf62eb452fe588ab2326"
  },
  {
    "url": "assets/js/44.2d9c0079.js",
    "revision": "cc1638739339440ff319389b1bb98272"
  },
  {
    "url": "assets/js/45.5e5fb5fd.js",
    "revision": "df30ad75bbaf968ce3784143cd41063d"
  },
  {
    "url": "assets/js/46.3ba18b64.js",
    "revision": "0182c65ef0af949a9287e0dd1e8ab19f"
  },
  {
    "url": "assets/js/47.f01b68a8.js",
    "revision": "fbb16f4a175c5441428ba90aed996869"
  },
  {
    "url": "assets/js/48.1d3723cb.js",
    "revision": "1c384c1860eadbaae8a3e2af422083c8"
  },
  {
    "url": "assets/js/49.26eb0904.js",
    "revision": "1f280f4c567cac7126e92260865e5faa"
  },
  {
    "url": "assets/js/5.70d3d4da.js",
    "revision": "6e4e822f652341a64c95b62cb28a437e"
  },
  {
    "url": "assets/js/50.1eb66da6.js",
    "revision": "14709f4856a608eb1dd11e0552c18eb2"
  },
  {
    "url": "assets/js/51.259c3e52.js",
    "revision": "e9b55ffee2ca14e84d578e51535593b7"
  },
  {
    "url": "assets/js/52.c6c2cbfd.js",
    "revision": "8b9ca6f7527122204f5eab4615d8187c"
  },
  {
    "url": "assets/js/53.6924c62e.js",
    "revision": "5d3d44242e21b314b4470d87fc99ef4b"
  },
  {
    "url": "assets/js/54.e609b5f9.js",
    "revision": "2f9328340685347a0c7f3bb6f321f2b9"
  },
  {
    "url": "assets/js/55.d8df6cf7.js",
    "revision": "5e026147c6aba3d1269f5761ac804492"
  },
  {
    "url": "assets/js/56.d4fc3083.js",
    "revision": "139360ca0ca1d2e4ae8a44223c37cc0f"
  },
  {
    "url": "assets/js/57.2bbb03c0.js",
    "revision": "aba09b81ee0efa6ae5abbdace9252549"
  },
  {
    "url": "assets/js/58.a4a0f2c7.js",
    "revision": "b4592d393493f4e1388a2de58dc6dd61"
  },
  {
    "url": "assets/js/59.d37c700b.js",
    "revision": "6fba02cd131e6cce47655302e8fe785c"
  },
  {
    "url": "assets/js/6.facfaf75.js",
    "revision": "50ee443a4ae5842ffe94153415581918"
  },
  {
    "url": "assets/js/60.e4b3d107.js",
    "revision": "638ee464fa6265a60b130b3e1cdc6d87"
  },
  {
    "url": "assets/js/61.0c7ce876.js",
    "revision": "a0f029fa63a0def12dc85a08c35d162b"
  },
  {
    "url": "assets/js/62.33ed79c9.js",
    "revision": "79923b4a73c3fc43432f2fc4330d23d0"
  },
  {
    "url": "assets/js/63.7eb6eff5.js",
    "revision": "c7c36ee1e00d45550b61c62b4f0ff898"
  },
  {
    "url": "assets/js/64.8a218eaa.js",
    "revision": "8550c9c85526e0cd69c5a34f49cb514f"
  },
  {
    "url": "assets/js/65.2a662ce0.js",
    "revision": "10ce6da3c14d23fc3aab0efa3689d624"
  },
  {
    "url": "assets/js/66.45476530.js",
    "revision": "256a5236d6ba3b842e69e5cfdface4e8"
  },
  {
    "url": "assets/js/67.5529ad7a.js",
    "revision": "f6d42fb1b8da7a5f8434fc7b0c315f83"
  },
  {
    "url": "assets/js/68.f9d8180f.js",
    "revision": "56f7ac172045bce53c554374964f9a27"
  },
  {
    "url": "assets/js/69.88bc0f05.js",
    "revision": "7904a113c75b43624f6fe909e1178757"
  },
  {
    "url": "assets/js/7.8832d181.js",
    "revision": "055ce9c440a74dfe1216f607b93e6687"
  },
  {
    "url": "assets/js/70.c0aa9dc4.js",
    "revision": "5e59c025f629216ca701499e445b3bef"
  },
  {
    "url": "assets/js/8.af450d44.js",
    "revision": "65f0cc784ab63aa42c924459b6c4abe8"
  },
  {
    "url": "assets/js/9.875aae12.js",
    "revision": "e0820518bfa354612209932d76b9883d"
  },
  {
    "url": "assets/js/app.a9b27438.js",
    "revision": "6e599f2beafe2a7e853b7bdc08cc520f"
  },
  {
    "url": "assets/js/vendors~flowchart.637f1cf0.js",
    "revision": "4f56b6847230641f47f5b0b2082a4c8f"
  },
  {
    "url": "blogs/git-emoji.html",
    "revision": "82ec87cfc1f623b7dba229e15c5e72c2"
  },
  {
    "url": "blogs/index.html",
    "revision": "7e3a0a2c76fcd6d9c94ddba49b9e6405"
  },
  {
    "url": "blogs/net-encoded-1.html",
    "revision": "fa9a12c29ddaa63556ee5afcdf599e0f"
  },
  {
    "url": "blogs/net-sqlite-encryption.html",
    "revision": "008bbcdbb595bc9243a5b7a3aabd4652"
  },
  {
    "url": "categories/index.html",
    "revision": "6fbad78846f025e27c24f2d49a0ec215"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "e83a964657c2dc085121bca843c8a445"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "f311dc749747aa85e19c7154293ca97a"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "f0d5267384de27554b30c56231036b7a"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "7d27d29794946be49da1575dfb718ec1"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "1819d3600c60f877f991a118df9ebbdb"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "60cda613e57f732d2fd4fb7f31eafccb"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "d296f8c9726a33ae1ab458d077279481"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "62f9ffd7ec9f64cfcdf616a9b75daa5d"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "69cf2ce4a9867fa42876b5ea788c4571"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "a69e4c55c8fddbc660403a90ce9f51e7"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "6cd983227d03412a623f7845c50c4283"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "03dae3a3cbc6f2d47de8862e351e9bea"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "6d251ddbdf12f46181b875ecbe9c378e"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "b344b1e39f55faeafc8f4e73c0f16031"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "3b43924a16658a5f80d9170b5912d62d"
  },
  {
    "url": "dotnetcore/examples/nacos-aspnetcore.html",
    "revision": "a4184df42a6eefae4583cd066cb52236"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "c01b73906e0cd6ac6ddbb1998dec176d"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "99733efcde9e9a39739115bf10958e4c"
  },
  {
    "url": "dotnetcore/examples/serilog-tutorial.html",
    "revision": "ead1a3391d8a60097bfc1dd14be25da2"
  },
  {
    "url": "dotnetcore/lin-cms/aspnetcore-repository-unitofwork.html",
    "revision": "109116a84a44c3a790e396508f42e794"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "b918398094d71f66b69eb7a560334b9f"
  },
  {
    "url": "dotnetcore/lin-cms/autofac.html",
    "revision": "578ad0c6beb02b1cd4128ef12e3d2d1a"
  },
  {
    "url": "dotnetcore/lin-cms/change-sqlserver.html",
    "revision": "b7b39c22b69e7a5affb26a2800188e81"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "a2459e3d9125d6041b0021c917bdebe9"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "2fddd6e354b75857d7e6cc7325419659"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "ac6daacf167771181c8dd515e2a35e41"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "317e01e30481a63b30625ea9d65c4bc5"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "73fa8a8bd867ea7dcf42eae97ad81fc5"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "57bebbd279d410bd6c81b7bb20187d6e"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "9b6bd58ae8be296bd4f4d817d87e89ad"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "cdd7d08237eda60334148fa928428eb7"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "18e2d5b481ba00d033f63658808b384c"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "4093f12d5bcd5322e43642e98a01cd42"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "0ba46d2aa69fb61f9fc4cbec5e33fea5"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "ce7708b38d7ee206a7eca851f74e2658"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "45762cc0a45b0778c83fc73666081656"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "e8f5c561c71a7155e58633f9ab99547e"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "6996c09461b9f60b3277ecdd445381e0"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "db0bdb8efc4479b8ed2b61690d71bc2f"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "b294958f1cff12f8720a1a199c733cbd"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "1faa13d4ff8d1056b627ccbf7ca3a56f"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "f704db7c39af99d85f0d4d11827876ea"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "ffd684496107b0ca2cd7c2539fc05f75"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "6acadedfbb4834b24d49f0a6d3f15eaa"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "6ef8d1265723dcc0850c4e7d76ccc428"
  },
  {
    "url": "dotnetcore/lin-cms/scriban-README.html",
    "revision": "be7e85cc498fb605b657d64c386c4d16"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "7ffa01587244334ecb0e983a06c324cb"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "69aae5f79849f13f7138aee5c34d523d"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "4bcdb1b3b3e0894f2b4957d938c310ff"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "e658b45e145f37f1df75c76c0decf251"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "e30656529f29383f82fce2f9eee94d38"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "47db5f8deeab4f19a526072289b6359b"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "images/qq.png",
    "revision": "2e5d1c071f8b17716ca66afdf777d097"
  },
  {
    "url": "images/wechat.png",
    "revision": "c34d77a2b9e836334d4380f3217581e2"
  },
  {
    "url": "index.html",
    "revision": "f6f8e3243e4238509cabd5ff5759dc80"
  },
  {
    "url": "left-logo.png",
    "revision": "bd7a4bd7b69a4500329df1b4196ab1cb"
  },
  {
    "url": "logo.png",
    "revision": "1987e15f6867ab461bbbca84687a1322"
  },
  {
    "url": "tag/GitHub/index.html",
    "revision": "ac6774e674886a8e27443087f33c9902"
  },
  {
    "url": "tag/index.html",
    "revision": "b45fa4dfff49c2a753aec0b195e3c174"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "53422eeeaade2e2a7ef70a0f1ca02b6c"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "2870e7752b7e09dfa000142be0c9c1ea"
  },
  {
    "url": "timeline/index.html",
    "revision": "0da90b0386706150b990c146cf9ac5ce"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
