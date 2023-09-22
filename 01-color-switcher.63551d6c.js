!function(){let t=document.querySelector("body"),e=document.querySelector('button[data-start="start"]'),r=document.querySelector('button[data-stop="stop"]'),o=null;e.addEventListener("click",function(e){null!==(o=setInterval(()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`},1e3))&&(e.target.setAttribute("disabled",""),r.removeAttribute("disabled"))}),r.addEventListener("click",function(r){clearInterval(o),r.target.setAttribute("disabled",""),t.style.removeProperty("background-color"),e.removeAttribute("disabled");// test(e);
}),// default availability state for button 'Stop'
r.setAttribute("disabled","");//   if (e.target.hasAttribute('disabled')) {
//     e.target.setAttribute('disabled', '');
//   } else {
//     e.target.removeAttribute('disabled');
//   }
// }
}();//# sourceMappingURL=01-color-switcher.63551d6c.js.map

//# sourceMappingURL=01-color-switcher.63551d6c.js.map
