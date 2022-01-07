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
    "revision": "64bc511ccc14b2eb95856c0e2b6b5361"
  },
  {
    "url": "about/index.html",
    "revision": "9f551dffe6e32acd80e82036723d0c56"
  },
  {
    "url": "assets/css/0.styles.029b0c51.css",
    "revision": "3a03a48bba6bf03ae81ebb7acefae694"
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
    "url": "assets/js/1.d2d86360.js",
    "revision": "045d92634ab4561912f818e59c0daa1f"
  },
  {
    "url": "assets/js/10.0fe96159.js",
    "revision": "cc12c6c0045fcdad99eca3431df5cb4e"
  },
  {
    "url": "assets/js/11.43d1c4ef.js",
    "revision": "4187021d4e88a59cdc390b9f68594bc3"
  },
  {
    "url": "assets/js/12.20b86cf6.js",
    "revision": "29c6334980b0026c5802d0cbcb50ace3"
  },
  {
    "url": "assets/js/13.1faa3adb.js",
    "revision": "6ba0ddddc48c813a7a1c2f4ef7907705"
  },
  {
    "url": "assets/js/14.ea234964.js",
    "revision": "6d07663307cfa8f1e31dd2441ebd31cd"
  },
  {
    "url": "assets/js/15.771c75dd.js",
    "revision": "3f7c78df60c97b1d79b2466d24169f99"
  },
  {
    "url": "assets/js/16.5361f77e.js",
    "revision": "c499f96c6bd66e0e79afb8834e234dd6"
  },
  {
    "url": "assets/js/17.02a4a767.js",
    "revision": "f17f0bc804daed85b1192a1f58300785"
  },
  {
    "url": "assets/js/18.e59814e4.js",
    "revision": "3a823229f9bbcf06209b99a80ff11587"
  },
  {
    "url": "assets/js/19.0cce07a3.js",
    "revision": "963559caca714e13c7121e560560c06f"
  },
  {
    "url": "assets/js/20.1c609785.js",
    "revision": "7d600d15c4dbce55863ea3d536653a71"
  },
  {
    "url": "assets/js/21.b12ae85f.js",
    "revision": "5e441946758c9eebc84537accaea196b"
  },
  {
    "url": "assets/js/22.8ffb8eab.js",
    "revision": "6db19f846e748a044e56bf98278fe8b5"
  },
  {
    "url": "assets/js/23.ce9b26f8.js",
    "revision": "70d82573b5ada6dd949b33d468447e62"
  },
  {
    "url": "assets/js/24.dd8777b3.js",
    "revision": "e5a7b99f29ffef076781eb44f3afd880"
  },
  {
    "url": "assets/js/25.8d4184e6.js",
    "revision": "7c263d727e0155edcf57d14b86178137"
  },
  {
    "url": "assets/js/26.8873ca06.js",
    "revision": "889b2a9a74c865d1385b448e086a0983"
  },
  {
    "url": "assets/js/27.3deca905.js",
    "revision": "3584d46c101986964e7eae31a37cb357"
  },
  {
    "url": "assets/js/28.aecc8346.js",
    "revision": "e1105773a703f3047617a102660a855d"
  },
  {
    "url": "assets/js/29.0c5ad765.js",
    "revision": "594ff76fc7f8678f6648cb6cbb96c1d5"
  },
  {
    "url": "assets/js/30.0372372d.js",
    "revision": "31a254182e77f304f07c21f9799fd841"
  },
  {
    "url": "assets/js/31.06c1315d.js",
    "revision": "48d44d9027f0eeb2cac57d87dde175b0"
  },
  {
    "url": "assets/js/32.81c32d7b.js",
    "revision": "0d4530adc47935c257ca743af73530e4"
  },
  {
    "url": "assets/js/33.5bdc4f00.js",
    "revision": "82da4d25d484b232dc36466e9124ce8d"
  },
  {
    "url": "assets/js/34.32d11ae2.js",
    "revision": "3153ffbc15d7b332aed0888b681a9906"
  },
  {
    "url": "assets/js/35.e86e8bfe.js",
    "revision": "3e86e18f93d5982b2003bef3c01341fd"
  },
  {
    "url": "assets/js/36.52756e99.js",
    "revision": "d2b064002d279da9f6723d3708571e14"
  },
  {
    "url": "assets/js/37.7cd19cb4.js",
    "revision": "6bc35b056c9e1bc6b01503eff2e15dc2"
  },
  {
    "url": "assets/js/38.a93b811d.js",
    "revision": "3759318d903a81034ba31bd5460c69e2"
  },
  {
    "url": "assets/js/39.9c71a35c.js",
    "revision": "e6afc28503bfa189a3eefe4a38f5d40b"
  },
  {
    "url": "assets/js/4.879a87f6.js",
    "revision": "961f871d1e6864ed84c5078fd93df302"
  },
  {
    "url": "assets/js/40.918f93c9.js",
    "revision": "e36631f23eb434a75a533432d91ea911"
  },
  {
    "url": "assets/js/41.2c6c85ce.js",
    "revision": "d35d58b7798e1aa2d750462d24793ad4"
  },
  {
    "url": "assets/js/42.cd8d747e.js",
    "revision": "2b62126be04b8b11b365a39c7a3a33ad"
  },
  {
    "url": "assets/js/43.4ac17139.js",
    "revision": "25133e9c50639ece25e482a5d584a859"
  },
  {
    "url": "assets/js/44.7d143fec.js",
    "revision": "c729387d77e43f18b9f8c1c98988c327"
  },
  {
    "url": "assets/js/45.98391c3e.js",
    "revision": "fecc2def5155620478f5d60d58722869"
  },
  {
    "url": "assets/js/46.ee6f2873.js",
    "revision": "a4d8d1febc2f0eb3c63827f13b1c69cc"
  },
  {
    "url": "assets/js/47.cbb9f27a.js",
    "revision": "c43924e10dc37d76e920028e7d6806a2"
  },
  {
    "url": "assets/js/48.645b9ae8.js",
    "revision": "6fe600cfce3794cc0af6ed758ece5974"
  },
  {
    "url": "assets/js/49.542a791b.js",
    "revision": "02fcf38e3831d616c18a60aad23c54c3"
  },
  {
    "url": "assets/js/5.259f7897.js",
    "revision": "d871803a361a6cfae89e3b27e00294b0"
  },
  {
    "url": "assets/js/50.600ab369.js",
    "revision": "bf56b2eb78b54a11b8dec08d1aa5bec2"
  },
  {
    "url": "assets/js/51.c4c10c79.js",
    "revision": "f62228babd49ea634dbd54a98e3a6113"
  },
  {
    "url": "assets/js/52.3e327fa9.js",
    "revision": "53629267f86129b3674819297800c232"
  },
  {
    "url": "assets/js/53.cd05c09e.js",
    "revision": "62e9b6415edc0d75d21e1444ab19d700"
  },
  {
    "url": "assets/js/54.f4c722db.js",
    "revision": "7335e190514df3efa592d118f5cf7cc5"
  },
  {
    "url": "assets/js/55.b8e6ce47.js",
    "revision": "2689a41584eaf85adf5be665a8110fba"
  },
  {
    "url": "assets/js/56.ac10c336.js",
    "revision": "2ed551d6d89d9c635b896cf87b56b264"
  },
  {
    "url": "assets/js/57.d00a5816.js",
    "revision": "d2269c7f4ba96296a944c69a9b9ada94"
  },
  {
    "url": "assets/js/58.39e0f85b.js",
    "revision": "0c6cd8bb8359f978fdeb59d1de7d7935"
  },
  {
    "url": "assets/js/59.b7d94695.js",
    "revision": "916a548df46e8e8fa04cb6f9d6390436"
  },
  {
    "url": "assets/js/6.9e014455.js",
    "revision": "6b090fd08895b5e8e57420759e6550dd"
  },
  {
    "url": "assets/js/60.f56c4fb9.js",
    "revision": "bfe2f94a95b44fc7b92f4f86e5da4c51"
  },
  {
    "url": "assets/js/61.604b5355.js",
    "revision": "bc3934fc0a9d9b12fc7ea5682f84fb9c"
  },
  {
    "url": "assets/js/7.8de21655.js",
    "revision": "e5460a6225a62504da7541e5307065ce"
  },
  {
    "url": "assets/js/8.8e0e1879.js",
    "revision": "bdf222d1d211fa9a55c87d87fd3c6ff5"
  },
  {
    "url": "assets/js/9.beca26b2.js",
    "revision": "e824efe6449d49b738cda5cd3ec07a9a"
  },
  {
    "url": "assets/js/app.be89d5e5.js",
    "revision": "073c972ad6f1919c7835bf62baae9d4e"
  },
  {
    "url": "assets/js/vendors~flowchart.2b65b5d3.js",
    "revision": "cff73f96d725ddfa076f240d71c27fe1"
  },
  {
    "url": "blogs/freesql-sqlitecore-SQLCipher.html",
    "revision": "04cdb376a0c9754b0582d25a67eaf4a7"
  },
  {
    "url": "blogs/git-emoji.html",
    "revision": "f91e41c6223df736cac77e6e2c2cee64"
  },
  {
    "url": "blogs/index.html",
    "revision": "15e2ec36dafcd74b4bb13fb8798b389b"
  },
  {
    "url": "blogs/net-encoded-1.html",
    "revision": "99b0ab700ca2cb38bb4b39ca709205f6"
  },
  {
    "url": "blogs/net-sqlite-encryption.html",
    "revision": "b71556338779f2a016f24789c2ae62cc"
  },
  {
    "url": "categories/index.html",
    "revision": "7456ce277bc2800462d97aa8b8dde4e9"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "0e5ca0f67baa70f7c5e45281a13dce50"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "f9f6b2d8de1c58e4978e41dccb79acd4"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "93c45f584de71f66a075f9aef6063aec"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "df5cdf1a18c81295d802677bf703bdab"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "88c2434299965745f1afa46145cd1027"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "7d57335a84a57a8f809f53f3a5fe6531"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "04c7f9b672cbcdd65ee8c7182772783e"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "ca18bb688368c20f082c6a93ddeb6000"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "7d8186589337e963b8b89b254296c26a"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "69e7deaca8282dea7c0733f7dae57815"
  },
  {
    "url": "dotnetcore/examples/nacos-aspnetcore.html",
    "revision": "e1156554f17796d07ce0dbd7de149c58"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "85adf5fdbb796525e2c64e6b42953ffb"
  },
  {
    "url": "dotnetcore/examples/serilog-tutorial.html",
    "revision": "7c93191278c62a916ffe7767d1cd9d29"
  },
  {
    "url": "dotnetcore/lin-cms/aspnetcore-repository-unitofwork.html",
    "revision": "595c09f47730cb206f88c9e09b80fc09"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "11a54df051822895b7f9cb00a297d000"
  },
  {
    "url": "dotnetcore/lin-cms/autofac.html",
    "revision": "10a84868a192b57493940f78732eddab"
  },
  {
    "url": "dotnetcore/lin-cms/change-sqlserver.html",
    "revision": "6ae60c1e9144bd23429584de10d4f144"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "c5b6ecf96472ab41b3c09e11b886e870"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "dc4bb0669ebefedcf38973e3fc939c4b"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "d124467e0446581b442bba3b6af2b729"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "7f05316a52f322ff62fed3afcb30bcf9"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "ecd7fc001b39b28131a1c35556f91a19"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "4ddf80b08d67776d2465817f2d56d126"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "ff91571618da29bf1c74cb50a1cb2dae"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "ac0d086a8fc08cdae7c904b8ec5ca027"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "c03c4d6db9477d7caf83129b00d22c40"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "b79361bfc92271384c4f18f44c423160"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "76e3da2896c871d305959de7ddc9af21"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "9ee2a0dc364b3a41ce5b71a6bf0ccb32"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "d2a2ee62aaa0d29affec63b0a4f440b6"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "eba354bbbfa1da3002166ceef8f93f8b"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "2e3e0e9d79ced58bd834101dc982fbd4"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "105888d94a913e3cf6f5281239c87563"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "e1107ba8646d5d2c6feb0d96b338a0ce"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "b01b9164a9b5d925a88d8e1914292cde"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "ff63de912684d2691a0c5757e9d43b2a"
  },
  {
    "url": "dotnetcore/lin-cms/scriban-README.html",
    "revision": "d5847c7157d7129e430b2fd3bf925c46"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "10ba48c21744d8dd94524fca87429b2e"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "200e29c3f30ee7eafb169ff9aa34c038"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "8dafc187bad3097177835e9913f55f04"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "230ee3c3ebb6266822381ba2f1b850a5"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "e8d7434207c21e51700bb34ab973d24a"
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
    "revision": "666d1c712797eed9be32e7ab667e0c41"
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
    "revision": "19a472f1a0b5cc3d8cf144f45e20254f"
  },
  {
    "url": "tag/index.html",
    "revision": "4701af613443c6b0e13f1ee0af835778"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "11cf916b0d603ac0ea64c8978b7719d0"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "d93031bc4ab884e2e32d053acc705fdd"
  },
  {
    "url": "timeline/index.html",
    "revision": "859514995c572901c891753f07da0936"
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
