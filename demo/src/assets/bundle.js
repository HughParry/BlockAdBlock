(()=>{"use strict";var t;t=function(t){console.log("Ads are ".concat(t?"blocked":"not blocked")),function(t){var e=document.body;if(t){e.innerHTML="";var o=document.createElement("h1");o.textContent="This site requires ads for some reason. Disable adblock to see content, or watch below video to learn more",e.appendChild(o);var n=document.createElement("video");n.setAttribute("src","https://shattereddisk.github.io/rickroll/rickroll.mp4"),n.setAttribute("width","560"),n.setAttribute("height","315"),n.setAttribute("controls","true"),n.setAttribute("autoplay","true"),n.setAttribute("muted","true"),n.setAttribute("loop","true"),e.appendChild(n),n.play().catch((function(t){console.error("Video playback failed:",t);var o=document.createElement("button");o.textContent="Play Video",o.onclick=function(){return n.play()},e.appendChild(o)}))}}(t)},fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",{method:"HEAD",mode:"no-cors"}).then((function(e){t(e.redirected)})).catch((function(){t(window.navigator.onLine)}))})();