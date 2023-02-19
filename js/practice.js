// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }
// document.addEventListener("keydown", (event) => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });

// const refs = {
//   showMeButton: document.querySelector(".showMeButton"),
//   input: document.querySelector(".input"),
//   outputText: document.querySelector(".outputText"),
// };

// const onShowMeButtonClick = (event) => {
//   refs.outputText.textContent = refs.input.value;
//   refs.input.value = "";
// };

// refs.showMeButton.addEventListener("click", onShowMeButtonClick);

const refs = {
  decreaseBtn: document.querySelector(".dicrease"),
  increaseBtn: document.querySelector(" .increase"),
  container: document.querySelector(".container"),
};

const boxEl = document.createElement("div");

boxEl.style.width = "40px";
boxEl.style.height = "40px";
boxEl.style.backgroundColor = "tomato";
boxEl.classList.add("box");

refs.container.append(boxEl);
const box = document.querySelector(" .box");
refs.increaseBtn.addEventListener("click", onIncreaseBtnClick);
refs.decreaseBtn.addEventListener("click", onDecreaseBtnClick);

function onDecreaseBtnClick(e) {
  const width = Number.parseint(box.style.width);
  const height = Number.parseInt(box.style.height);
  box.style.width = "$(width - 10)px";
  box.style.height = "$height - 10}px";
  console.log(height);
}
function onIncreaseBtnClick(e) {
  const width = Number.parseInt(box.style.width);
  const height = Number - parseInt(box.style.height);
  box.style.width = `$(width + 10)px`;
  box.style.height = `$theight + 18)px`;
  console.log(height);
}
