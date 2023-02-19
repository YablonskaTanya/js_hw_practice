const btnList = document.querySelector(".js-tags");
let selectedTags = null;
const btnClick = btnList.addEventListener("click", onButtonClick);

function onButtonClick(e) {
  const btn = e.target;

  if (btn.nodeName !== "BUTTON") {
    return;
  }

  const currentActiveBtn = document.querySelector(".tags__btn--active");

  btn.classList.add("tags__btn--active");

  if (currentActiveBtn) {
    currentActiveBtn.classList.remove("tags__btn--active");
  }
  selectedTags = btn.dataset.value;
  console.log(selectedTags);
}

// const btnList = document.querySelector(".js-tags");
// const selectedTags = new Set();

// const btnClick = btnList.addEventListener("click", onButtonClick);

// function onButtonClick(e) {
//   const btn = e.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains("tags__btn--active");

//   if (btn.nodeName !== "BUTTON") {
//     return;
//   }

//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle("tags__btn--active");
//   selectedTags.add(tag);
// }

// console.log(selectedTags);
