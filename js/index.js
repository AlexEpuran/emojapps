/** @format */

let myEmojis = ["🎮", "⚽", "☀️", "🍔", "🚀"];

const pushMeBtn = document.getElementById("name-btn");
const refreshMeBtn = document.getElementById("refresh-btn");
const nameInput = document.getElementById("nameInput");
const formInput = document.getElementById("name-input");
const header = document.getElementById("header");
const label = document.querySelector("label");
const emojiContainer = document.getElementById("emoji-container");
let emojiInput = document.querySelector("#emoji-input");
const pushBtn = document.querySelector("#push-btn");
const unshiftBtn = document.querySelector("#unshift-btn");
const popBtn = document.querySelector("#pop-btn");
const shiftBtn = document.querySelector("#shift-btn");

function getName() {
  console.log(formInput[0].value);
  const newSpan = document.createElement("span");
  header.prepend(newSpan);
  newSpan.innerHTML = nameInput.value;
  nameInput.value = "";
  pushMeBtn.style.display = "none";
  nameInput.style.display = "none";
  label.style.display = "none";
  refreshMeBtn.style.display = "block";
}

function renderEmoji() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    const renderSpan = document.createElement("span");
    emojiContainer.append(renderSpan);
    renderSpan.textContent = myEmojis[i];
  }
}

renderEmoji();

pushMeBtn.addEventListener("click", getName);

pushBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    renderEmoji();
  }
});

unshiftBtn.addEventListener("click", () => {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    renderEmoji();
  }
});

popBtn.addEventListener("click", () => {
  myEmojis.pop();
  renderEmoji();
});

shiftBtn.addEventListener("click", () => {
  myEmojis.shift();
  renderEmoji();
});
