"use strict";var precacheConfig=[["/profile/index.html","0e978c11680bdaceaae7a8e09d04b297"],["/profile/static/css/main.eaf8c2bb.css","5ff522ee1ef14fcca1debc7d031f0e3a"],["/profile/static/js/main.1d84fa68.js","80f8cd2304fb5b7b1b4862bee750ccc2"],["/profile/static/media/avatar.6ebeb3e9.jpg","6ebeb3e9f90c2e0b0c89e5e01e818d0e"],["/profile/static/media/background.e261514d.jpg","e261514d4dba601349b63a348e179d67"],["/profile/static/media/cover.09c32fbb.png","09c32fbbd7aad64a08426a5661601428"],["/profile/static/media/cover.39949966.png","3994996600790b383887fc11a4affd0a"],["/profile/static/media/cover.491a790f.png","491a790f6f1cf7f98c83420cc1cae400"],["/profile/static/media/cover.5ddb2d98.png","5ddb2d982e9a3983a76f87d1229003c1"],["/profile/static/media/cover.5fb2412e.png","5fb2412e6cbd735f37b548b5d1d58aa9"],["/profile/static/media/cover.6aca83dc.png","6aca83dc6d5531724624b91fd2aa6567"],["/profile/static/media/cover.7d6a83b1.png","7d6a83b1ffe0c2bafacfa70bf5d7cad4"],["/profile/static/media/cover.8b0514ed.png","8b0514ed5bb2e650bc7f388c2f30961d"],["/profile/static/media/cover.9f4a22bd.png","9f4a22bd35b9298b68a6e7295a0d52ed"],["/profile/static/media/cover.a3257e5c.png","a3257e5c5e4c0ec64d833d04854c0b79"],["/profile/static/media/cover.b97cecb7.png","b97cecb704601e192cdc96271bdd5107"],["/profile/static/media/cover.e47cfa6c.png","e47cfa6c9051f0e2a73a791393decd48"],["/profile/static/media/cover.f3078220.png","f3078220786941143a6ad02e96ff90e0"],["/profile/static/media/cover.fc30f4b9.png","fc30f4b9b51caae1805ab4fe2a89c3b9"],["/profile/static/media/star.8f7bce50.svg","8f7bce509fde96e4d72c9217c6f3b775"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/profile/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});