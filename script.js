const MIN_SIZE = 10;
const MAX_SIZE = 20;
const MIN_DURATION = 2000;
const MAX_DURATION = 5000;

const snowflakesContainer = document.getElementById("snowflakes-container");
const changePrecipation = document.querySelector("#snow-vs-rain");
let qualityOfPrecipation = document.querySelector("#quality");
let quality = 500;
let color = document.querySelector("#click-color");
color.addEventListener("click", () => {
  let color = color.value;

})

let wind = document.querySelector("#wind");

let qualityInput = setInterval(() => createSnowflake(), quality);
qualityOfPrecipation.addEventListener("input", () => {
  switch (qualityOfPrecipation.value) {
    case "0":
      quality = 100000000;
      break;
    case "1":
      quality = 500;
      break;
    case "2":
      quality = 250;
      break;
    case "3":
      quality = 125;
      break;
    case "4":
      break;
    
  }
  clearInterval(qualityInput)
  qualityInput = setInterval(() => createSnowflake(), quality);
})

setInterval(() => createSnowflake(), 50);

function randint(lo, hi) {
  return Math.random() * (hi - lo) + lo;
}

function randomIcon() {
  if (Math.random() > changePrecipation.value) {
    return "fa-snowflake";
  } else {
    return "fa-tint";
  }
}

function createSnowflake() {
  const snowFlake = document.createElement("i");

  snowFlake.classList.add("fas", randomIcon());
  snowFlake.style.left = randint(0, 100) + "%";
  snowFlake.style.opacity = Math.random();
  snowFlake.style.transform = `rotate (${wind.value * -1})`
  snowFlake.style.fontSize = randint(MIN_SIZE, MAX_SIZE) + "px";
  snowFlake.style.color = color.value;

  snowflakesContainer.appendChild(snowFlake);

  snowFlake
    .animate(
      { transform: `translate(${wind.value}vw, 100vh) rotate(${wind.value * -1}deg)`},
      { duration: randint(MIN_DURATION, MAX_DURATION) }
    )
    .finished.then(() => snowFlake.remove());
}

