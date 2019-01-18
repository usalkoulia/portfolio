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

for (var i = 0; i < srcsets.length; i++) {
  var value = srcsets[i].getAttribute("data-srcset");
  srcsets[i].setAttribute("srcset", value);
  srcsets[i].removeAttribute("data-srcset");
}

for (var i = 0; i < srcs.length; i++) {
  var value = srcs[i].getAttribute("data-src");
  srcs[i].setAttribute("src", value);
  srcs[i].removeAttribute("data-src");
}

// плавная прокрутка

new SmoothScroll("a[href*='#']");

// отправка формы

var form = document.querySelector("#contacts-form");
var username = document.querySelector("#user-name");
var email = document.querySelector("#email");
var comment = document.querySelector("#comment");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  fetch("https://tzfpol08y5.execute-api.us-east-2.amazonaws.com/default/message", {
    method: "POST",
    body: JSON.stringify({
      name: username.value,
      email: email.value,
      comment: comment.value,
    }),
    headers: {
      "x-api-key": "wEYyOQJ5Y26FHMrFmJRpf4n4ok6u8OLF1IakR0cs",
      "content-type": "application/json",
    }
  }).then(function(response) {
    if (response.status === 200) {
      var successWrapper = document.querySelector(".contacts__form");
      successWrapper.classList.add("contacts__form--success");
      username.value = "";
      email.value = "";
      comment.value = "";

      setTimeout(function() {
        successWrapper.classList.remove("contacts__form--success");
      }, 3000);
    } else {
      throw new Error("Not 200 response");
    }
  }).catch(function() {
    var errorWrapper = document.querySelector(".contacts__form");
    errorWrapper.classList.add("contacts__form--error");
    setTimeout(function() {
      errorWrapper.classList.remove("contacts__form--error");
    }, 3000);
  });
});
