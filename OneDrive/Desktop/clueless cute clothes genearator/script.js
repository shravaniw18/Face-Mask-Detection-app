const outfits = [
  "out1.jfif",
  "out2.jfif",
  "out3.jfif",
  "out4.jfif",
  "out5.jfif",
  "out6.jfif",
  "out7.jfif",
  "out8.jfif",
  "out9.jfif",
  "out10.jfif",
  "out11.jfif",
  "out12.jfif",
  "out13.jfif",
  "out14.jfif",
  "out15.jfif"
];


let currentIndex = 0;
const img = document.getElementById("outfit-img");

function showOutfit() {
  img.src = `images/outfits/${outfits[currentIndex]}`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % outfits.length;
  showOutfit();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + outfits.length) % outfits.length;
  showOutfit();
});

document.getElementById("randomBtn").addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * outfits.length);
  showOutfit();
});

// show first outfit on page load
showOutfit();
