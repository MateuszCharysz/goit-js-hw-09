!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("6JpON");var r=console.log,i=document.querySelector(".form"),a=i.elements,l=a.delay,u=a.step,c=a.amount;r(l),r(u),r(c);i.addEventListener("submit",(function(e){var n,o,t,r,i,a,d;e.preventDefault(),n=l.valueAsNumber,o=u.valueAsNumber,t=c.valueAsNumber,d=setInterval((a=Math.random()>.3,new Promise((function(e,n){a?e({position:"".concat(r),time:"".concat(i)}):n({position:"".concat(r),time:"".concat(i)})})),void(t===r&&clearInterval(d))),o),setTimeout(d,n)}))}();
//# sourceMappingURL=03-promises.72700675.js.map
