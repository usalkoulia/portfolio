//навигация

var button = document.querySelector(".navigation__button");
var navigation = document.querySelector(".navigation");
var navigation_list = document.querySelector(".navigation__list");

button.addEventListener("click", function() {
  button.classList.toggle("navigation__button--active");
  navigation_list.classList.toggle("navigation__list--active");
  navigation.classList.toggle("navigation--active");
});

// отложить загрузку картинок вне вьюпорта

var srcsets = document.querySelectorAll("[data-srcset]");
var srcs = document.querySelectorAll("[data-src]");

Array.from(srcsets).forEach(function(srcset) {
  var value = srcset.getAttribute("data-srcset");
  srcset.setAttribute("srcset", value);
  srcset.removeAttribute("data-srcset");
});

Array.from(srcs).forEach(function(src) {
  var value = src.getAttribute("data-src");
  src.setAttribute("src", value);
  src.removeAttribute("data-src");
});

// плавная прокрутка

new SmoothScroll('a[href*="#"]');
