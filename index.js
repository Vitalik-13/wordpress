new Swiper(".myswiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const videoButton = document.querySelector(".click-button");
const video = document.querySelector(".video");

videoButton.addEventListener("click", () => {
  video.play();
  video.controls = true;
  videoButton.classList.add("none");
});

video.addEventListener("click", () => {
  if (!video.paused) {
    video.pause();
    video.controls = false;
    videoButton.classList.remove("none");
  }
});

const clicknMore = document.querySelector(".click-learn");
const learnMore = document.querySelector(".learn-more");
clicknMore.addEventListener("click", () => {
  learnMore.classList.toggle("show");
  if (learnMore.classList.contains("show")) {
    clicknMore.textContent = "Hide more";
  } else {
    clicknMore.textContent = "Learn more . . .";
  }
});

//=============================================================
const tabTitleContent = document.querySelector(".tab-title-content");
const tabParagraphContent = document.querySelector(".tab-paragrph-content");
const tabParagraphs = document.querySelectorAll(".tab-paragrph");
const tabTitles = document.querySelectorAll(".tab-title");
const wrapperTabs = document.querySelectorAll(".wrapper-item");
const itemTabPhoto = document.querySelectorAll(".item-tab-foto");
const fotoTabMain = document.querySelector(".foto-tab-content");

wrapperTabs.forEach((item, idx) => {
  wrapperTabs[idx].addEventListener("click", () => {
    tabTitleContent.textContent = tabTitles[idx].textContent;
    tabParagraphContent.textContent = tabParagraphs[idx].textContent;
    fotoTabMain.src = itemTabPhoto[idx].src;
  });
});
