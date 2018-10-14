var button = document.querySelector(".navigation__button");
var navigation = document.querySelector(".navigation");
var navigation_list = document.querySelector(".navigation__list");

button.addEventListener("click", function() {
  button.classList.toggle("navigation__button--active");
  navigation_list.classList.toggle("navigation__list--active");
  navigation.classList.toggle("navigation--active");
});
