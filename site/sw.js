importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

workbox.setConfig({debug: false});
workbox.precaching.precacheAndRoute([{"revision":"5d340d92a00b2ddeb8a609ce2809d350","url":"404.html"},{"revision":"22d7bea6215ab2170c9c1bcab52e3ce0","url":"Abandoned Car.html"},{"revision":"6283e73272494445cfc18226ebb43a55","url":"Additional Key.html"},{"revision":"8be41af6f711cf8d64886c8ce9e48455","url":"assets/fonts/font-awesome.css"},{"revision":"7b109846b62bafa6f8d794f923802736","url":"assets/fonts/material-icons.css"},{"revision":"b06871f281fee6b241d60582ae9369b9","url":"assets/fonts/specimen/FontAwesome.ttf"},{"revision":"fee66e712a8a08eef5805a46892932ad","url":"assets/fonts/specimen/FontAwesome.woff"},{"revision":"af7ae505a9eed503f8b8e6982036873e","url":"assets/fonts/specimen/FontAwesome.woff2"},{"revision":"a37b0c01c0baf1888ca812cc0508f6e2","url":"assets/fonts/specimen/MaterialIcons-Regular.ttf"},{"revision":"012cf6a10129e2275d79d6adac7f3b02","url":"assets/fonts/specimen/MaterialIcons-Regular.woff"},{"revision":"570eb83859dc23dd0eec423a49e147fe","url":"assets/fonts/specimen/MaterialIcons-Regular.woff2"},{"revision":"46f865ec8b1a3b0cc8773b2302351d36","url":"assets/icons/logo-192.png"},{"revision":"7e1b738492fed6b7024b29ca7f72aa89","url":"assets/icons/logo-36.png"},{"revision":"da5888474d0aabbb1ee7b4019167512d","url":"assets/icons/logo-512.png"},{"revision":"11e0b222f46f246a6a26993b4a2b9774","url":"assets/icons/sbafm-192.png"},{"revision":"6d8823651a3a3d68dcfe1b5bab6d47a1","url":"assets/icons/sbafm-36.png"},{"revision":"8cbf15a50fed1b8947049b8f49a7c2c0","url":"assets/icons/sbafm-512.png"},{"revision":"840f949f01d90907c37b8bdc4cd53304","url":"assets/images/favicon.png"},{"revision":"8646916b544923cf750f42ae20fc95f2","url":"assets/images/icons/bitbucket.1b09e088.svg"},{"revision":"141c380fb0c0190cc17a609dda46c37a","url":"assets/images/icons/github.f0b8504a.svg"},{"revision":"06a25891a19fe8079d25804d7bbd1dfc","url":"assets/images/icons/gitlab.6dd19c00.svg"},{"revision":"694f9b275019d50874bb6e64ff3802b9","url":"assets/javascripts/application.718059d6.js"},{"revision":"a91cda7bea1892503744aaec2d043892","url":"assets/javascripts/application.c33a9706.js"},{"revision":"6e07dc0c1382349a876dbd6b956e1cce","url":"assets/javascripts/lunr/lunr.ar.js"},{"revision":"f85d294438d1eebcf73abcf0c2c94c31","url":"assets/javascripts/lunr/lunr.da.js"},{"revision":"1757b9d8b9c40a3ca54c472bd635539e","url":"assets/javascripts/lunr/lunr.de.js"},{"revision":"6ec6c20beea5d6cbfa3a67f1069b2d56","url":"assets/javascripts/lunr/lunr.du.js"},{"revision":"d3afc827012e177cfa159c18c62b3234","url":"assets/javascripts/lunr/lunr.es.js"},{"revision":"ad90edbb7c9b104358939d7b07de428e","url":"assets/javascripts/lunr/lunr.fi.js"},{"revision":"30ab8393b301ba1a16c105cddc71463e","url":"assets/javascripts/lunr/lunr.fr.js"},{"revision":"23c7f886baac3819df4f6e8f23dafa2d","url":"assets/javascripts/lunr/lunr.hu.js"},{"revision":"f64962a08a40b4ae72fdc0c9f54c9b50","url":"assets/javascripts/lunr/lunr.it.js"},{"revision":"bd6005a4f745e0482b807e967ebb5e9b","url":"assets/javascripts/lunr/lunr.ja.js"},{"revision":"92740e202ca53e306ab899d3c6477ce1","url":"assets/javascripts/lunr/lunr.jp.js"},{"revision":"37dce7ff7090b9f3d05dc0f88ad82fbb","url":"assets/javascripts/lunr/lunr.multi.js"},{"revision":"e9f27116acdbe83974ac6a3f425ce4f2","url":"assets/javascripts/lunr/lunr.nl.js"},{"revision":"3efa96d69fabd7479f16e1b4196d159f","url":"assets/javascripts/lunr/lunr.no.js"},{"revision":"fb8f97f7e9880e01d23910d0c5cd457a","url":"assets/javascripts/lunr/lunr.pt.js"},{"revision":"e88872db2f277dfc26aed7a20aab14f3","url":"assets/javascripts/lunr/lunr.ro.js"},{"revision":"b0bc375cc43a80832163132b8d6736ce","url":"assets/javascripts/lunr/lunr.ru.js"},{"revision":"49eef577a0f6730c48c6763a3bcc7fa7","url":"assets/javascripts/lunr/lunr.stemmer.support.js"},{"revision":"793a056108857008b2cae35afb473062","url":"assets/javascripts/lunr/lunr.sv.js"},{"revision":"7840e4e0115b83ac22508aa624d6d300","url":"assets/javascripts/lunr/lunr.th.js"},{"revision":"81d630c2fb79625ac4b095ccb6cbde80","url":"assets/javascripts/lunr/lunr.tr.js"},{"revision":"d03c4ad2d928a5f762b3d213a262129b","url":"assets/javascripts/lunr/lunr.vi.js"},{"revision":"5fc885c250841b98b37f81a531502277","url":"assets/javascripts/lunr/tinyseg.js"},{"revision":"14824fe820ca87a4d1ef0263081741cd","url":"assets/javascripts/lunr/wordcut.js"},{"revision":"0e369c803c3f5c0a2f134553558e7a0b","url":"assets/javascripts/material-components-web.min.js"},{"revision":"e87b650f2e03c495b1de968eb9db54cc","url":"assets/javascripts/modernizr.74668098.js"},{"revision":"af32c804eb539a21ff5de12432ada85f","url":"assets/javascripts/modernizr.86422ebf.js"},{"revision":"25061a4c0378228d3edc4659bfb3549c","url":"assets/stylesheets/application-palette.3e3d1dff.css"},{"revision":"4197d98a3dcbfdee1ae1cae992ad7776","url":"assets/stylesheets/application-palette.a8b3c06d.css"},{"revision":"2677892cb9de3e076ecf9549fc14d089","url":"assets/stylesheets/application.4031d38b.css"},{"revision":"7ed67272db4a79bf83064f3398204ab4","url":"assets/stylesheets/application.adb8469c.css"},{"revision":"a4bb53afc5cf74e37a9b01353866de0f","url":"assets/stylesheets/material-components-web.min.css"},{"revision":"669737c409620d9da0ad15b5df3482ff","url":"Break In.html"},{"revision":"d4a81a2b924d9beca84ebd89bf30aa27","url":"Broadcast Procedure.html"},{"revision":"875204482802746c8eff3c46edc8fa8f","url":"Defect Management.html"},{"revision":"beb8b8735c8adfa96f754cd832b01b0c","url":"img/favicon.ico"},{"revision":"ee46117bdb5f4e7393d93c69ad79c12e","url":"index.html"},{"revision":"564a9abd3b0a991e030e468ecc70a4f3","url":"Installing Floor Coverings.html"},{"revision":"67e8975e41032891c204d42ef01eaf2f","url":"Insurance Procedure.html"},{"revision":"0b3969ce6f507d53e224f29cc4b37919","url":"Lift Out Of Service.html"},{"revision":"680da645b98a3631ef2ae2a45746dc8a","url":"manifest.json"},{"revision":"142faa5dda2edeeeead43a0110cea0a1","url":"Monthly Reporting.html"},{"revision":"4ff97378984e9ca68718a762b9a924e5","url":"No Hot Water.html"},{"revision":"ba5843c0449d8101e5d91105da1821ab","url":"Noise Complaint.html"},{"revision":"00622102bba62ef2161c489c0ea67f19","url":"Occupied Storage Cage.html"},{"revision":"0405a46e285e31bb9c8627905144e083","url":"Parking Breach.html"},{"revision":"a65023210e5c3e5c681dd8e98c59f0fd","url":"Power Outage.html"},{"revision":"a49cb0abff26e0f094e325bd344eeb79","url":"Quote Request-Work Order.html"},{"revision":"2bab01659f878b0a8dc28a5eb8289140","url":"Real Estate Signage.html"},{"revision":"62fff0abceebd136096e99816b6f6683","url":"Refunding Swipe Remote.html"},{"revision":"df4e8adce9dbf026ce3b36da5ccc86cb","url":"search/search_index.json"},{"revision":"ef33dd55c99fd96eeee9c163aec369e2","url":"sitemap.xml"},{"revision":"80d925a8f7c3c827414066b2b5886acb","url":"sitemap.xml.gz"},{"revision":"569541d082b83051debebeb2300815b9","url":"Smoke Alarm Procedure.html"},{"revision":"1fd1b8ddc5092b7fba4a3912db75868c","url":"Syringe Procedure.html"},{"revision":"34c986403b0961114c21021d8a196de9","url":"Test.html"},{"revision":"d05c7153ed6fff48aecafab58240cd57","url":"Wheel Clamping.html"}]);

workbox.googleAnalytics.initialize();

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

addEventListener('message', async (event) => {
 
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log("Skip Waiting message received in SW");
    self.skipWaiting();
  }
});



workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

// Cache the underlying font files with a cache-first strategy for 1 year.
workbox.routing.registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new workbox.strategies.CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
      new workbox.expiration.Plugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);