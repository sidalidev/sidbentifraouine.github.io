!function(){"use strict";const s=["client/about.5a0e4b11.js","client/[slug].b8c7dbd3.js","client/index.6f8c3799.js","client/index.299b049c.js","client/client.0468d46c.js"].concat(["service-worker-index.html","css/fonts.css","css/global.css","css/normalize.css","favicon.ico","fonts/Mallory_Bold.ttf","fonts/Mallory_Book.ttf","fonts/Mallory_Medium.ttf","fonts/Mallory_Thin.ttf","fonts/Mallory_Ultra.ttf","images/.DS_Store","images/ector.svg","images/hr_contact.svg","images/hr_skills.svg","images/hr_tools.svg","images/icons/apollo.svg","images/icons/express.svg","images/icons/figma.svg","images/icons/flutter.svg","images/icons/gatsby.svg","images/icons/github.svg","images/icons/linkedin.svg","images/icons/next.svg","images/icons/node.svg","images/icons/prisma.svg","images/icons/react.svg","images/icons/svelte.svg","images/icons/twitter.svg","images/letter.svg","images/logo.svg","images/pizza.svg","images/skills_mobile.svg","images/skills_uxui.svg","images/skills_web.svg","images/sport.svg","images/typing.svg","images/uphf.svg","logo-192.png","logo-512.png","manifest.json"]),e=new Set(s);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1602663647622").then(e=>e.addAll(s)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(async s=>{for(const e of s)"cache1602663647622"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const t=new URL(s.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&e.has(t.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline1602663647622").then(async e=>{try{const t=await fetch(s.request);return e.put(s.request,t.clone()),t}catch(t){const i=await e.match(s.request);if(i)return i;throw t}}))))})}();
