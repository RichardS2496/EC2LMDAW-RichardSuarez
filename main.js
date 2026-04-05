const year = new Date().getFullYear();
document.getElementById("year").textContent = year;

const btnBackStart = document.getElementById("btn-back-start");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 720) {
    btnBackStart.classList.add("visible");
  } else {
    btnBackStart.classList.remove("vivible");
  }

  if (window.scrollY < 720) {
    btnBackStart.classList.remove("visible");
  }
});
