const searchEl = document.querySelector(".search");

// document.querySelector(".search input"); 은 .search 안에 있는 input 을 다시 찾는 것
// 찾아 놓은 요소인 searchEl 안에서 input 요소를 찾음 (최적화)
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", () => {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

searchInputEl.addEventListener("blur", () => {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
  //searchInputEl.removeAttribute("placeholder");
});
