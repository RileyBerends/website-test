let percentage = 0;

const bar = document.getElementById("bar");
const percentageText = document.getElementById("percentage");
const loader = document.getElementById("loader");
const mainContent = document.getElementById("main-content");

const loading = setInterval(() => {
  percentage++;

  percentageText.textContent = percentage + "%";
  bar.style.width = percentage + "%";

  if (percentage === 100) {
    percentageText.textContent = "100%... wacht, hij gaat door?";
  }

  if (percentage >= 169) {
    clearInterval(loading);

    setTimeout(() => {
      loader.classList.add("loader-hidden");
      mainContent.style.display = "block";
    }, 600);
  }
}, 35);
