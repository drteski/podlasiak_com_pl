import smoothscroll from"./smoothscroll.min.js";smoothscroll.polyfill();const mainWrapper=document.querySelector(".wrapper");if(mainWrapper){const a=()=>{const e=document.querySelector(".onload-logo-container");setTimeout(()=>mainWrapper.removeAttribute("style"),2300);setTimeout(()=>{e.classList.add("wrapper--active"),mainWrapper.classList.remove("wrapper--active"),setTimeout(()=>e.remove(),100)},2400)};document.addEventListener("DOMContentLoaded",a)}const languageBar=document.querySelector(".language-flag");if(languageBar){const d=document.querySelectorAll(".lang"),e=document.querySelector(".language-title");d.forEach(n=>{n.addEventListener("mouseenter",()=>{var t=languageBar.offsetTop,a=n.firstElementChild.getAttribute("alt"),a=(e.firstElementChild.innerHTML=""+a,e.classList.add("language-title--active"),window.innerHeight);let r,o;r=a<850?(o=languageBar.getBoundingClientRect().right-n.getBoundingClientRect().x+32,n.offsetTop+t):(o=languageBar.getBoundingClientRect().right-n.getBoundingClientRect().x+64,n.offsetTop+t-10),e.setAttribute("style",`top: ${r}px; right: ${o}px`)}),n.addEventListener("mouseleave",()=>{e.classList.remove("language-title--active")})})}const header=document.querySelector(".header-container");if(header){const l=document.querySelector(".main-navbar"),m=document.querySelector(".hamburger-icon"),n=document.getElementById("a"),o=document.getElementById("b"),p=document.getElementById("c"),q=document.querySelector(".navbar"),r=document.querySelectorAll(".menu-link"),s=()=>{var e=window.scrollY;30<=e&&l.classList.add("main-navbar--active"),e<30&&l.classList.remove("main-navbar--active")},t=()=>{n.classList.toggle("a"),o.classList.toggle("c"),p.classList.toggle("b")},u=e=>{window.removeEventListener("scroll",s);var a=window.scrollY;t(),q.classList.contains("navbar--active")&&e.currentTarget===m&&window.addEventListener("scroll",s),l.classList.contains("main-navbar--active")&&30<=a?q.classList.toggle("navbar--active"):l.classList.contains("main-navbar--active")&&a<=30?(l.classList.toggle("main-navbar--active"),q.classList.toggle("navbar--active")):(q.classList.toggle("navbar--active"),l.classList.toggle("main-navbar--active"))},v=e=>{document.querySelector(""+e.target.dataset.target).scrollIntoView({behavior:"smooth"}),window.addEventListener("scroll",s)};m.addEventListener("click",u),r.forEach(e=>{e.addEventListener("click",u)}),r.forEach(e=>{e.addEventListener("click",v)}),window.addEventListener("scroll",s)}const arrow=document.querySelector(".arrow-cont");if(arrow){const D=()=>{document.querySelector("main").scrollIntoView({behavior:"smooth"})};arrow.addEventListener("click",D)}const form=document.querySelector(".form__body");if(form){const F=form.querySelector(".contact-cta"),G=e=>{const t=document.querySelector(".contact-form");t.classList.add("contact-form--active"),form.classList.add("form__body--active"),t.dataset.message=e,F.classList.remove("contact-cta--active"),setTimeout(()=>{form.classList.remove("form__body--active"),t.classList.remove("contact-form--active")},3e3)},H=e=>{e=e.filter(e=>""===e.value);if(0===e.length)return!0;e.forEach(e=>e.parentNode.classList.add("body__input-container--active"))},I=form.querySelectorAll(".form-input__field"),J=e=>{e.currentTarget.parentNode.classList.contains("body__input-container--active")&&e.currentTarget.parentNode.classList.remove("body__input-container--active"),""===e.currentTarget.value&&e.currentTarget.parentNode.classList.add("body__input-container--active")},K=(I.forEach(e=>{e.addEventListener("keyup",J)}),e=>{e.preventDefault();const t=form.querySelector("#userName"),a=form.querySelector("#email"),r=form.querySelector("#subject"),o=form.querySelector("#text");H([t,a,r,o])&&a.value.match("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$")&&(F.classList.add("contact-cta--active"),fetch("/send",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({userName:t.value,email:a.value,subject:r.value,text:o.value})}).then(e=>e.json()).then(e=>{e=e.message.layout.contact.form.message;G(e),t.value="",a.value="",r.value="",o.value=""})),H([t,a,r,o])});F.addEventListener("click",K)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInNtb290aHNjcm9sbCIsIm1haW5XcmFwcGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsIm9ubG9hZFJlbW92ZXIiLCJsb2FkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwibGFuZ3VhZ2VCYXIiLCJmbGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZsYWdzIiwibGFuZ3VhZ2VCYXJQb3NpdGlvbiIsIm9mZnNldFRvcCIsInRpbGUiLCJjb3VudHJ5TmFtZSIsImZpcnN0RWxlbWVudENoaWxkIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIZWlnaHQiLCJtb2JpbGVIZWlnaHRWaWV3IiwibW9iaWxlV2lkdGhWaWV3IiwiaW5uZXJIVE1MIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibGV0IiwicGFnZUhlaWdodCIsInNldEF0dHJpYnV0ZSIsIngiLCJyaWdodCIsImhlYWRlciIsImljb24xIiwiaWNvbjMiLCJuYXZiYXJTY3JvbGxTdHlsaW5nIiwid2luZG93IiwibmF2YmFyIiwiaGFtYnVyZ2VyQW5pbWF0aW9uSGFuZGxlciIsInRvZ2dsZSIsImljb24yIiwiZ2V0RWxlbWVudEJ5SWQiLCJuYXYiLCJtb2JpbGVNZW51SGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb250YWlucyIsImFkZCIsImUiLCJkYXRhc2V0IiwiYmVoYXZpb3IiLCJzY3JvbGxZIiwiaWNvbiIsInBvc2l0aW9uIiwibWFpbkNvbnRlbnQiLCJmb3JtIiwic2Nyb2xsSGFuZGxlciIsImNvbnRhY3RDb250YWluZXIiLCJ0YXJnZXQiLCJtZW51SXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImVtcHR5SW5wdXRzIiwibGVuZ3RoIiwiZW1wdHlJbnB1dCIsImlucHV0RmllbGRzIiwicXVlcnlTZWxlY3RvckFsbCIsImFycm93IiwiY3VycmVudFRhcmdldCIsImlucHV0cyIsIm1haWxIYW5kbGVyIiwidGV4dCIsImVtcHR5SW5wdXRDaGVja2VyIiwic3VibWl0QnRuIiwiY29udGFjdEZvcm1Qb3B1cCIsIm1lc3NhZ2UiLCJoZWFkZXJzIiwic3RyaW5naWZ5IiwidXNlck5hbWUiLCJlbWFpbCIsInZhbHVlIiwic3ViamVjdCIsIml0ZW1zIiwibGF5b3V0IiwiY29udGFjdCIsInBhcmVudE5vZGUiLCJzaW5nbGVFbXB0eUlucHV0SGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwibWF0Y2giLCJmZXRjaCIsIm1ldGhvZCIsIkFjY2VwdCIsIkNvbnRlbnQtVHlwZSIsImJvZHkiLCJKU09OIiwidGhlbiIsInJlcyIsImpzb24iXSwibWFwcGluZ3MiOiJPQUFPQSxpQkFBa0Isd0JBR3pCQSxhQUFNQyxTQUFjQyxFQUNwQixNQUFJRCxZQUFhQyxTQUFBQyxjQUFBLFVBQUEsRUFBakIsR0FDQ0YsWUFBZSxDQUFmLE1BQ0NHLEVBQVUsS0FBVixNQUNBQyxFQUFXSCxTQUFNRCxjQUFZSyx3QkFBMEIsRUFBdkRELFdBQ01FLElBQUFBLFlBQWdCRCxnQkFBTSxPQUFBLEVBQUEsSUFBQSxFQVE3QkosV0FQb0IsS0FBbEJNLEVBQ0FQLFVBQVlRLElBQUFBLGlCQUFpQixFQUE3QlIsWUFDQUksVUFBaUJHLE9BQUtFLGlCQUFjLEVBQXBDTCxXQUNBLElBQUFHLEVBQUFFLE9BQUEsRUFBQSxHQUFBLENBQUQsRUFJeUIsSUFBQSxDQUMzQixFQUVBUixTQUFNUyxpQkFBY1QsbUJBQXVCRSxDQUFBLENBRTNDLENBRkEsTUFJQ08sWUFBYVQsU0FBU0MsY0FBYyxnQkFBa0IsRUFGdkQsR0FLRVMsWUFBS0MsQ0FKTixNQUtFQyxFQUFNQyxTQUFBQSxpQkFBc0JKLE9BQVlLLEVBQ3hDQyxFQUFNQyxTQUFXZixjQUFRZ0IsaUJBQWtCQyxFQUg3Q04sRUFLRUcsUUFBS1IsSUFKTkcsRUFLQ0MsaUJBQWdCLGFBQVVRLEtBSjFCLElBS0FOLEVBQW1CSixZQUFBSyxVQUNuQkUsRUFBSUksRUFBZ0JILGtCQUFBQyxhQUFB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dGhzY3JvbGwgZnJvbSAnLi9zbW9vdGhzY3JvbGwubWluLmpzJztcclxuXHJcbnNtb290aHNjcm9sbC5wb2x5ZmlsbCgpO1xyXG5jb25zdCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwcGVyJyk7XHJcbmlmIChtYWluV3JhcHBlcikge1xyXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IHtcclxuXHRcdGNvbnN0IGxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25sb2FkLWxvZ28tY29udGFpbmVyJyk7XHJcblx0XHRzZXRUaW1lb3V0KCgpID0+IG1haW5XcmFwcGVyLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKSwgMjMwMCk7XHJcblx0XHRjb25zdCBvbmxvYWRSZW1vdmVyID0gKCkgPT4ge1xyXG5cdFx0XHRsb2FkLmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXItLWFjdGl2ZScpO1xyXG5cdFx0XHRtYWluV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCd3cmFwcGVyLS1hY3RpdmUnKTtcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiBsb2FkLnJlbW92ZSgpLCAxMDApO1xyXG5cdFx0fTtcclxuXHJcblx0XHRzZXRUaW1lb3V0KG9ubG9hZFJlbW92ZXIsIDI0MDApO1xyXG5cdH07XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHJlbmRlcik7XHJcbn1cclxuXHJcbmNvbnN0IGxhbmd1YWdlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlLWZsYWcnKTtcclxuXHJcbmlmIChsYW5ndWFnZUJhcikge1xyXG5cdGNvbnN0IGZsYWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhbmcnKTtcclxuXHRjb25zdCB0aWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlLXRpdGxlJyk7XHJcblxyXG5cdGZsYWdzLmZvckVhY2goKGZsYWcpID0+IHtcclxuXHRcdGZsYWcuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcclxuXHRcdFx0Y29uc3QgbGFuZ3VhZ2VCYXJQb3NpdGlvbiA9IGxhbmd1YWdlQmFyLm9mZnNldFRvcDtcclxuXHRcdFx0Y29uc3QgY291bnRyeU5hbWUgPSBmbGFnLmZpcnN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZSgnYWx0Jyk7XHJcblx0XHRcdHRpbGUuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MID0gYCR7Y291bnRyeU5hbWV9YDtcclxuXHRcdFx0dGlsZS5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZS10aXRsZS0tYWN0aXZlJyk7XHJcblx0XHRcdGNvbnN0IHBhZ2VIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0XHRcdGxldCBtb2JpbGVXaWR0aFZpZXc7XHJcblx0XHRcdGxldCBtb2JpbGVIZWlnaHRWaWV3O1xyXG5cdFx0XHRpZiAocGFnZUhlaWdodCA8IDg1MCkge1xyXG5cdFx0XHRcdG1vYmlsZUhlaWdodFZpZXcgPVxyXG5cdFx0XHRcdFx0bGFuZ3VhZ2VCYXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgLVxyXG5cdFx0XHRcdFx0ZmxhZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS54ICtcclxuXHRcdFx0XHRcdDMyO1xyXG5cdFx0XHRcdG1vYmlsZVdpZHRoVmlldyA9IGZsYWcub2Zmc2V0VG9wICsgbGFuZ3VhZ2VCYXJQb3NpdGlvbjtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRtb2JpbGVIZWlnaHRWaWV3ID1cclxuXHRcdFx0XHRcdGxhbmd1YWdlQmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0IC1cclxuXHRcdFx0XHRcdGZsYWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueCArXHJcblx0XHRcdFx0XHQ2NDtcclxuXHRcdFx0XHRtb2JpbGVXaWR0aFZpZXcgPSBmbGFnLm9mZnNldFRvcCArIGxhbmd1YWdlQmFyUG9zaXRpb24gLSAxMDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aWxlLnNldEF0dHJpYnV0ZShcclxuXHRcdFx0XHQnc3R5bGUnLFxyXG5cdFx0XHRcdGB0b3A6ICR7bW9iaWxlV2lkdGhWaWV3fXB4OyByaWdodDogJHttb2JpbGVIZWlnaHRWaWV3fXB4YFxyXG5cdFx0XHQpO1xyXG5cdFx0fSk7XHJcblx0XHRmbGFnLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcblx0XHRcdHRpbGUuY2xhc3NMaXN0LnJlbW92ZSgnbGFuZ3VhZ2UtdGl0bGUtLWFjdGl2ZScpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcbn1cclxuXHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItY29udGFpbmVyJyk7XHJcblxyXG5pZiAoaGVhZGVyKSB7XHJcblx0Y29uc3QgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2YmFyJyk7XHJcblx0Y29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXItaWNvbicpO1xyXG5cdGNvbnN0IGljb24xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2EnKTtcclxuXHRjb25zdCBpY29uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiJyk7XHJcblx0Y29uc3QgaWNvbjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYycpO1xyXG5cdGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcclxuXHRjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1saW5rJyk7XHJcblxyXG5cdGNvbnN0IG5hdmJhclNjcm9sbFN0eWxpbmcgPSAoKSA9PiB7XHJcblx0XHRjb25zdCBwb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cdFx0aWYgKHBvc2l0aW9uID49IDMwKSB7XHJcblx0XHRcdG5hdmJhci5jbGFzc0xpc3QuYWRkKCdtYWluLW5hdmJhci0tYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0XHRpZiAocG9zaXRpb24gPCAzMCkge1xyXG5cdFx0XHRuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1uYXZiYXItLWFjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbWJ1cmdlckFuaW1hdGlvbkhhbmRsZXIgPSAoKSA9PiB7XHJcblx0XHRpY29uMS5jbGFzc0xpc3QudG9nZ2xlKCdhJyk7XHJcblx0XHRpY29uMi5jbGFzc0xpc3QudG9nZ2xlKCdjJyk7XHJcblx0XHRpY29uMy5jbGFzc0xpc3QudG9nZ2xlKCdiJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgbW9iaWxlTWVudUhhbmRsZXIgPSAoZSkgPT4ge1xyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5hdmJhclNjcm9sbFN0eWxpbmcpO1xyXG5cclxuXHRcdGNvbnN0IHBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XHJcblx0XHRoYW1idXJnZXJBbmltYXRpb25IYW5kbGVyKCk7XHJcblx0XHRpZiAoXHJcblx0XHRcdG5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmJhci0tYWN0aXZlJykgJiZcclxuXHRcdFx0ZS5jdXJyZW50VGFyZ2V0ID09PSBpY29uXHJcblx0XHQpIHtcclxuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5hdmJhclNjcm9sbFN0eWxpbmcpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKFxyXG5cdFx0XHRuYXZiYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLW5hdmJhci0tYWN0aXZlJykgJiZcclxuXHRcdFx0cG9zaXRpb24gPj0gMzBcclxuXHRcdCkge1xyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLS1hY3RpdmUnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKFxyXG5cdFx0XHRuYXZiYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLW5hdmJhci0tYWN0aXZlJykgJiZcclxuXHRcdFx0cG9zaXRpb24gPD0gMzBcclxuXHRcdCkge1xyXG5cdFx0XHRuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi1uYXZiYXItLWFjdGl2ZScpO1xyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnbmF2YmFyLS1hY3RpdmUnKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0bmF2LmNsYXNzTGlzdC50b2dnbGUoJ25hdmJhci0tYWN0aXZlJyk7XHJcblx0XHRuYXZiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi1uYXZiYXItLWFjdGl2ZScpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoZSkgPT4ge1xyXG5cdFx0Y29uc3QgdGFyZ2V0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7ZS50YXJnZXQuZGF0YXNldC50YXJnZXR9YCk7XHJcblx0XHR0YXJnZXRJdGVtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG5hdmJhclNjcm9sbFN0eWxpbmcpO1xyXG5cdH07XHJcblxyXG5cdGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2JpbGVNZW51SGFuZGxlcik7XHJcblxyXG5cdG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9iaWxlTWVudUhhbmRsZXIpO1xyXG5cdH0pO1xyXG5cclxuXHRtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG5cdFx0aXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNjcm9sbEhhbmRsZXIpO1xyXG5cdH0pO1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBuYXZiYXJTY3JvbGxTdHlsaW5nKTtcclxufVxyXG5cclxuY29uc3QgYXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJyb3ctY29udCcpO1xyXG5cclxuaWYgKGFycm93KSB7XHJcblx0Y29uc3QgYXJyb3dIYW5kbGVyID0gKCkgPT4ge1xyXG5cdFx0Y29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblx0XHRtYWluQ29udGVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHR9O1xyXG5cdGFycm93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXJyb3dIYW5kbGVyKTtcclxufVxyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtX19ib2R5Jyk7XHJcblxyXG5pZiAoZm9ybSkge1xyXG5cdGNvbnN0IHN1Ym1pdEJ0biA9IGZvcm0ucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtY3RhJyk7XHJcblxyXG5cdGNvbnN0IGNvbnRhY3RGb3JtUG9wdXAgPSAobWVzc2FnZSkgPT4ge1xyXG5cdFx0Y29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0LWZvcm0nKTtcclxuXHRcdGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1mb3JtLS1hY3RpdmUnKTtcclxuXHRcdGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybV9fYm9keS0tYWN0aXZlJyk7XHJcblx0XHRjb250YWN0Q29udGFpbmVyLmRhdGFzZXQubWVzc2FnZSA9IG1lc3NhZ2U7XHJcblx0XHRzdWJtaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdC1jdGEtLWFjdGl2ZScpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnZm9ybV9fYm9keS0tYWN0aXZlJyk7XHJcblx0XHRcdGNvbnRhY3RDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdC1mb3JtLS1hY3RpdmUnKTtcclxuXHRcdH0sIDMwMDApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGVtcHR5SW5wdXRDaGVja2VyID0gKGl0ZW1zKSA9PiB7XHJcblx0XHRjb25zdCBlbXB0eUlucHV0cyA9IGl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS52YWx1ZSA9PT0gJycpO1xyXG5cdFx0aWYgKGVtcHR5SW5wdXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRydWU7XHJcblx0XHRlbXB0eUlucHV0cy5mb3JFYWNoKChlbXB0eUlucHV0KSA9PlxyXG5cdFx0XHRlbXB0eUlucHV0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnYm9keV9faW5wdXQtY29udGFpbmVyLS1hY3RpdmUnKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBpbnB1dEZpZWxkcyA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLmZvcm0taW5wdXRfX2ZpZWxkJyk7XHJcblxyXG5cdGNvbnN0IHNpbmdsZUVtcHR5SW5wdXRIYW5kbGVyID0gKGUpID0+IHtcclxuXHRcdGlmIChcclxuXHRcdFx0ZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG5cdFx0XHRcdCdib2R5X19pbnB1dC1jb250YWluZXItLWFjdGl2ZSdcclxuXHRcdFx0KVxyXG5cdFx0KVxyXG5cdFx0XHRlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKFxyXG5cdFx0XHRcdCdib2R5X19pbnB1dC1jb250YWluZXItLWFjdGl2ZSdcclxuXHRcdFx0KTtcclxuXHRcdGlmIChlLmN1cnJlbnRUYXJnZXQudmFsdWUgPT09ICcnKVxyXG5cdFx0XHRlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFxyXG5cdFx0XHRcdCdib2R5X19pbnB1dC1jb250YWluZXItLWFjdGl2ZSdcclxuXHRcdFx0KTtcclxuXHR9O1xyXG5cdGlucHV0RmllbGRzLmZvckVhY2goKGlucHV0cykgPT4ge1xyXG5cdFx0aW5wdXRzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgc2luZ2xlRW1wdHlJbnB1dEhhbmRsZXIpO1xyXG5cdH0pO1xyXG5cdGNvbnN0IG1haWxIYW5kbGVyID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnN0IHVzZXJOYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdXNlck5hbWUnKTtcclxuXHRcdGNvbnN0IGVtYWlsID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjZW1haWwnKTtcclxuXHRcdGNvbnN0IHN1YmplY3QgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNzdWJqZWN0Jyk7XHJcblx0XHRjb25zdCB0ZXh0ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcjdGV4dCcpO1xyXG5cdFx0Y29uc3QgcmVnRXhwciA9ICdbYS16MC05Ll8lKy1dK0BbYS16MC05Li1dKy5bYS16XXsyLH0kJztcclxuXHRcdGlmIChcclxuXHRcdFx0ZW1wdHlJbnB1dENoZWNrZXIoW3VzZXJOYW1lLCBlbWFpbCwgc3ViamVjdCwgdGV4dF0pICYmXHJcblx0XHRcdGVtYWlsLnZhbHVlLm1hdGNoKHJlZ0V4cHIpXHJcblx0XHQpIHtcclxuXHRcdFx0c3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtY3RhLS1hY3RpdmUnKTtcclxuXHRcdFx0ZmV0Y2goYC9zZW5kYCwge1xyXG5cdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxyXG5cdFx0XHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG5cdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuXHRcdFx0XHRcdHVzZXJOYW1lOiB1c2VyTmFtZS52YWx1ZSxcclxuXHRcdFx0XHRcdGVtYWlsOiBlbWFpbC52YWx1ZSxcclxuXHRcdFx0XHRcdHN1YmplY3Q6IHN1YmplY3QudmFsdWUsXHJcblx0XHRcdFx0XHR0ZXh0OiB0ZXh0LnZhbHVlLFxyXG5cdFx0XHRcdH0pLFxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcdC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcblx0XHRcdFx0LnRoZW4oKGpzb24pID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IHsgbWVzc2FnZSB9ID0ganNvbi5tZXNzYWdlLmxheW91dC5jb250YWN0LmZvcm07XHJcblx0XHRcdFx0XHRjb250YWN0Rm9ybVBvcHVwKG1lc3NhZ2UpO1xyXG5cdFx0XHRcdFx0dXNlck5hbWUudmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdGVtYWlsLnZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHRzdWJqZWN0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHR0ZXh0LnZhbHVlID0gJyc7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRlbXB0eUlucHV0Q2hlY2tlcihbdXNlck5hbWUsIGVtYWlsLCBzdWJqZWN0LCB0ZXh0XSk7XHJcblx0fTtcclxuXHJcblx0c3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFpbEhhbmRsZXIpO1xyXG59XHJcbiJdfQ==
