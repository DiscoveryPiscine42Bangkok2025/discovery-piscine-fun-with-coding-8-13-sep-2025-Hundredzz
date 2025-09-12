// Characters (only 2 characters)
const characters = [
  { name: "Bamboo", img: "images/tigress.png", link: "ythaworn.html", intra: "ythaworn" },
  { name: "Art", img: "images/po.png", link: "asphumdo.html", intra: "asphumdo" }
];

let currentIndex = 0;

// DOM Elements
const characterImage = document.getElementById("character-image");
const characterName = document.getElementById("character-name");
const characterIntra = document.getElementById("character-intra")
const leftArrow = document.querySelectorAll(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

// Update character display
function updateCharacter() {
  characterImage.style.opacity = 0; // fade out
  setTimeout(() => {
    characterImage.src = characters[currentIndex].img;
    characterName.textContent = characters[currentIndex].name;
    characterIntra.textContent = characters[currentIndex].intra
    characterImage.style.opacity = 1; // fade in
  }, 200);
}

// Navigation
Array.from(leftArrow).forEach(element => {
  element.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  updateCharacter();
});
})

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % characters.length;
  updateCharacter();
});

// เมื่อคลิกที่ตัวละคร ให้เปลี่ยนหน้าไปตาม link
characterImage.addEventListener("click", () => {
  window.location.href = characters[currentIndex].link;
});
