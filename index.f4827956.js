!function(){function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://pixabay.com/api/?key=32144711-033503d2fc66376fdc1e9e47c&q=beautiful+girl&image_type=photo&orientation=horizontal&page=".concat(t,"&per_page=30")).then((function(t){return t.json()}))}var n=document.querySelector(".js-fetch-box");function a(t){var a=t.map((function(t){return'<div class="box"><a class="large-image" href="#" data-large="'.concat(t.largeImageURL,'"><img class="box-img" src="').concat(t.webformatURL,'" alt="').concat(t.tags,'" width="400px" ></a><p>').concat(t.tags,"</p></div>")})).join("");n.innerHTML=a}function i(t,n){return allPages=Math.ceil(t/n)}var l=document.querySelector(".js-pagination-box"),e=0,o=0;function s(t,n){var a="",i=t-1,s=t+2,c=t+1;e=t,t>1?a+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-left btn-rotate"></button></li>':1===t&&(a+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-rotate link-pag--hidden" ></button></li>'),t>1&&(a+='<li class="item-pag"><button type="button" class="link-pag" >1</button></li>'),t>4&&(a+='<li class="item-pag"><button type="button" class="link-pag" >...</button></li>'),t>3&&(a+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(t-2,"</button></li>")),t>2&&(a+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(i,"</button></li>")),a+='<li class="item-pag">\n        <button type="button" class="link-pag" >'.concat(t,"</button>\n      </li>"),n-1>t&&(a+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(c,"</button></li>")),n-2>t&&(a+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(s,"</button></li>")),n-3>t&&(a+='<li class="item-pag"><button type="button" class="link-pag" >...</button></li>'),n>t&&(a+='<li class="item-pag">\n        <button type="button" class="link-pag" >'.concat(n,"</button>\n      </li>")),n>t?a+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-right"></button></li>':n===t&&(a+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn link-pag--hidden"></button></li>'),l.innerHTML=a,function(t,n){t===n?o=5:t<=5&&(o=0,o+=t);l.children[o].firstElementChild.classList.add("current")}(t,n)}l.addEventListener("click",(function(n){if(Boolean(n.target.closest(".btn-right")))return void t(e+=1).then((function(t){a(t.hits),s(e,i(t.totalHits,t.hits.length))}));if(Boolean(n.target.closest(".btn-left")))return void t(e-=1).then((function(t){a(t.hits),s(e,i(t.totalHits,t.hits.length))}));if("BUTTON"!==n.target.nodeName)return;if("..."===n.target.textContent)return;var l=Number(n.target.textContent);t(l).then((function(t){a(t.hits),s(l,i(t.totalHits,t.hits.length))}))})),t().then((function(t){a(t.hits),s(1,i(t.totalHits,t.hits.length))}))}();
//# sourceMappingURL=index.f4827956.js.map
