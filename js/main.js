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

const badgeEl = document.querySelector("header .badges");

// lodash 라이브러리 : _.throttle(함수, 시간(ms))
// 일정 시간에 한 번만 실행되도록 제한 걸기 / scroll 이벤트에서 많이 사용됨
window.addEventListener("scroll", _.throttle(function () {

  if (window.scrollY > 500) {

    // 배지 숨기기
    // badgeEl.style.display = 'none';
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });

  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });

  }
}, 300));

const fadeEls = document.querySelectorAll(".visual .fade-in");

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, // 0.7, 1.4, 2.1 초 후 동작
    opacity: 1
  });
});