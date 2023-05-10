const masterSword = document.getElementById("sword");
const pedestal = document.getElementById("pedestal");
const light = document.getElementById("light");
const itemUnlock = document.getElementById("box-item");
const playButton = document.getElementById("playButton");
let firstPhrase = "IT'S DANGEROUS TO GO ALONE! TAKE THIS.";
let secondPhrase = "COME ON! TAKE THE SWORD.";
let counter = 0;
let myTimeout;

firstPhrase = firstPhrase.split("");
secondPhrase = secondPhrase.split("");

const audioMusic = new Audio("assets/audios/temple-of-time.mp3");

playButton.addEventListener("click", () => {
  audioMusic.play().catch(function (error) {
    console.error("Error with music:", error);
  });

  document.querySelector("main").style.display = "block";
  sword.classList.add("animate-sword");
  pedestal.classList.add("animate-pedestal");
  light.classList.add("animate-light");

  setTimeout(() => letras(), 2000);
  myTimeout = setTimeout(() => letras2(), 18000);

  playButton.style.display = "none";
});

setTimeout(() => {
  masterSword.addEventListener("click", takeSword);
}, 6000);

function takeSword() {
  masterSword.removeEventListener("click", takeSword);
  const audioSword = new Audio("assets/audios/take-sword.mp3");
  audioSword.play();
  setTimeout(() => (masterSword.style.top = "120px"), 500);
  setTimeout(() => showItem(), 2000);
}

function showItem() {
  document.querySelector("h1").style.display = "none";
  audioMusic.pause();
  clearTimeout(myTimeout);
  let audioItem = new Audio("assets/audios/get-Item.mp3");
  audioItem.play();
  itemUnlock.style.visibility = "visible";
  itemUnlock.classList.add("animate__fadeInUp");
  document.querySelector("body").style.cssText +=
    "cursor: url(assets/images/sword-mouse.png), auto;";
}

function letras() {
  intervalFirstPhrase = setInterval(() => {
    document.querySelector("h1").textContent += firstPhrase[counter];
    counter++;
    if (counter == firstPhrase.length) {
      counter = 0;
      clearInterval(intervalFirstPhrase);
    }
  }, 100);
  const audiotyping = new Audio("assets/audios/typing1.mp3");
  audiotyping.play();
}

function letras2() {
  document.querySelector("h1").textContent = "";
  intervalSecondPhrase = setInterval(() => {
    document.querySelector("h1").textContent += secondPhrase[counter];
    counter++;
    if (counter == secondPhrase.length) {
      counter = 0;
      clearInterval(intervalSecondPhrase);
    }
  }, 100);
  const audiotyping = new Audio("assets/audios/typing2.mp3");
  audiotyping.play();
}
