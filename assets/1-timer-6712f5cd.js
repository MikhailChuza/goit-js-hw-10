import{f as S,i as g}from"./vendor-9808d4ac.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const r=document.querySelector("button[data-start]"),i=document.querySelector("#datetime-picker"),d=document.querySelector("[data-days]"),u=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");r.disabled=!0;let m;const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){e[0]<=y.defaultDate?(g.show({title:"",message:"Please choose a date in the future"}),r.disabled=!0):(r.disabled=!1,m=e[0]),console.log(e[0])}};S(i,y);r.addEventListener("click",b);function b(){i.disabled=!0,r.disabled=!0;const e=setInterval(()=>{const n=Date.now(),a=m-n,s=L(a),t=C(s);d.textContent=t[0],u.textContent=t[1],l.textContent=t[2],f.textContent=t[3],d.textContent==="00"&&u.textContent==="00"&&l.textContent==="00"&&f.textContent==="00"&&(clearInterval(e),i.disabled=!1,r.disabled=!0)},1e3)}function C(e){return[e.days.toString().padStart(2,"0"),e.hours.toString().padStart(2,"0"),e.minutes.toString().padStart(2,"0"),e.seconds.toString().padStart(2,"0")]}function L(e){const o=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:o,hours:c,minutes:h,seconds:p}}
//# sourceMappingURL=1-timer-6712f5cd.js.map
