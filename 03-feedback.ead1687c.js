function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function p(e,t,n){var o,i,r,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function S(e){return c=e,a=setTimeout(O,t),l?y(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function O(){var e=v();if(j(e))return T(e);a=setTimeout(O,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function T(e){return a=void 0,p&&o?y(e):(o=i=void 0,f)}function h(){var e=v(),n=j(e);if(o=arguments,i=this,u=e,n){if(void 0===a)return S(u);if(s)return a=setTimeout(O,t),y(u)}return void 0===a&&(a=setTimeout(O,t)),f}return t=b(t)||0,g(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=i=a=void 0},h.flush=function(){return void 0===a?f:T(v())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form"),S=document.querySelector("textarea"),j=document.querySelector("input");y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){const t=j.value.trim(),n=S.value.trim(),o={email:t,message:n};localStorage.setItem("feedback-form-state",JSON.stringify(o))}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);e&&(j.value=t.email,S.value=t.message)}(),fifa={foifi:321,fefe:3214},console.log(fifa);
//# sourceMappingURL=03-feedback.ead1687c.js.map