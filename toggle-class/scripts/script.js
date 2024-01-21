const button = document.querySelector(".btn");
const content = document.querySelector(".content");

button.addEventListener("click", () => {
  content.classList.toggle("open");

  button.innerHTML === "Button" ? (button.innerHTML = "Close") : (button.innerHTML = "Button");
});
