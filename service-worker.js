"use strict";var precacheConfig=[["/VmemPublic/index.html","b1a861277dea3844e575463c54679e64"],["/VmemPublic/static/css/main.d9ad5eb1.css","278928f6c7b5572f54fd8f26ebf3ddcb"],["/VmemPublic/static/js/main.6c80aa99.js","d1be54066e31b4cbed8127629fa8f77d"],["/VmemPublic/static/media/AmericanCaptainCyrillic.12634e98.woff","12634e98bcb68f12fb75b0dd05cbe470"],["/VmemPublic/static/media/AmericanCaptainCyrillic.15365f04.eot","15365f049eb1b12aea7209479f3867c2"],["/VmemPublic/static/media/AmericanCaptainCyrillic.45b8df60.ttf","45b8df60b9d580ab8ae54a9167b70eff"],["/VmemPublic/static/media/AmericanCaptainCyrillic.f70c510e.woff2","f70c510e9ac621861cee726c0ba9945e"],["/VmemPublic/static/media/CollectEmAllBBRUSBYLYAJKA.10983cc4.ttf","10983cc45446c9894d41bddba66190aa"],["/VmemPublic/static/media/CollectEmAllBBRUSBYLYAJKA.22cf6086.woff2","22cf60867891e8e77ad566137cf40a2b"],["/VmemPublic/static/media/CollectEmAllBBRUSBYLYAJKA.75767d59.eot","75767d59fa72b8bf8dd3592bc359cc0f"],["/VmemPublic/static/media/CollectEmAllBBRUSBYLYAJKA.92bbd1a5.woff","92bbd1a5ba85880b394c622e017b02dd"],["/VmemPublic/static/media/Compact.154dc235.eot","154dc235eadcfd74a3b9aba77e93f1d9"],["/VmemPublic/static/media/Compact.60f990b4.woff2","60f990b4c7ec8c74106d50fa9af9498e"],["/VmemPublic/static/media/Compact.7f57e87c.ttf","7f57e87c50dab4bae536536c2bc5eaf7"],["/VmemPublic/static/media/Compact.a8e77b0b.woff","a8e77b0b4a458c43b0a1f2e6d5ec4e92"],["/VmemPublic/static/media/Gagalin-Regular.1aa5f9f5.ttf","1aa5f9f56f7557ff1345481584024b3c"],["/VmemPublic/static/media/Gagalin-Regular.9a2b49dc.eot","9a2b49dcd94acec25f5321397bed1f8a"],["/VmemPublic/static/media/Gagalin-Regular.cb644aa9.woff","cb644aa9478b1c6fed371fb59ca0989e"],["/VmemPublic/static/media/Gagalin-Regular.d79316a5.woff2","d79316a5fca445664dceafd9b03a4479"],["/VmemPublic/static/media/Impact.1bb26d9b.eot","1bb26d9ba46ab80e055851be680688fe"],["/VmemPublic/static/media/Impact.9d914f7a.woff","9d914f7ae9ffcfa674a19def484f0360"],["/VmemPublic/static/media/Impact.af2f6b6a.ttf","af2f6b6a6409e2bdb4a1d5fdea850d8c"],["/VmemPublic/static/media/Impact.f57997d4.woff2","f57997d44cc3e34c27259736e4ace92c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/VmemPublic/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});