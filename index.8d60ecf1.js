!function(){function t(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("https://pixabay.com/api/?key=32144711-033503d2fc66376fdc1e9e47c&q=beautiful+girl&image_type=photo&orientation=horizontal&page=".concat(t,"&per_page=30")).then((function(t){return t.json()}))}var n=document.querySelector(".js-fetch-box");function a(t){var a=t.map((function(t){return'<div class="box"><a class="large-image" href="#" data-large="'.concat(t.largeImageURL,'"><img class="box-img" src="').concat(t.webformatURL,'" alt="').concat(t.tags,'" width="400px" ></a><p>').concat(t.tags,"</p></div>")})).join("");n.innerHTML=a}function e(t,n){return allPages=Math.ceil(t/n)}var i=document.querySelector(".js-pagination-box"),l=0,o=0;function c(t,n){var a="",e=t-1,c=t+2,s=t+1;l=t,t>1?a+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-left btn-rotate"></button></li>':1===t&&(a+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-rotate link-pag--hidden" ></button></li>'),t>1&&(a+='<li class="item-pag"><button type="button" class="link-pag" >1</button></li>'),t>4&&(a+='<li class="item-pag"><button type="button" class="link-pag" >...</button></li>'),t>3&&(a+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(t-2,"</button></li>")),t>2&&(a+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(e,"</button></li>")),a+='<li class="item-pag">\n        <button type="button" class="link-pag" >'.concat(t,"</button>\n      </li>"),n-1>t&&(a+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(s,"</button></li>")),n-2>t&&(a+='<li class="item-pag"><button type="button" class="link-pag" >'.concat(c,"</button></li>")),n-3>t&&(a+='<li class="item-pag"><button type="button" class="link-pag" >...</button></li>'),n>t&&(a+='<li class="item-pag">\n        <button type="button" class="link-pag" >'.concat(n,"</button>\n      </li>")),n>t?a+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn btn-right"></button></li>':n===t&&(a+='<li class="item-pag"><button type="button" class="link-pag link-pag--btn link-pag--hidden"></button></li>'),i.innerHTML=a,function(t,n){t===n?o=5:t<=5&&(o=0,o+=t);i.children[o].firstElementChild.classList.add("current")}(t,n)}i.addEventListener("click",(function(n){if(Boolean(n.target.closest(".btn-right")))return void t(l+=1).then((function(t){a(t.hits),c(l,e(t.totalHits,t.hits.length))}));if(Boolean(n.target.closest(".btn-left")))return void t(l-=1).then((function(t){a(t.hits),c(l,e(t.totalHits,t.hits.length))}));if("BUTTON"!==n.target.nodeName)return;if("..."===n.target.textContent)return;var i=Number(n.target.textContent);t(i).then((function(t){a(t.hits),c(i,e(t.totalHits,t.hits.length))}))}));var s=document.querySelector(".backdrop");var r=document.querySelector(".backdrop");t().then((function(t){var n=Math.ceil(t.totalHits/t.hits.length);a(t.hits),c(1,n);for(var e=document.querySelectorAll(".large-image"),i=0;i<e.length;i+=1){e[i].addEventListener("click",(function(t){var n,a;console.log(t.currentTarget.dataset.large),t.preventDefault(),n=t.currentTarget.dataset.large,a='<div class="modal"><img class="modal-img box-img" src="'.concat(n,'" alt=""></div>'),s.innerHTML=a,r.classList.remove("is-hidden")}))}console.log(e),console.log("dsa")})),r.addEventListener("click",(function(t){if(t.target.classList.contains("backdrop")){var n="true"===r.getAttribute("aria-expanded")||!1;r.setAttribute("aria-expanded",!n),r.classList.add("is-hidden"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)}}))}();
//# sourceMappingURL=index.8d60ecf1.js.map
