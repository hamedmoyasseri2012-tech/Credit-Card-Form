import "./style.css";

const form = document.getElementById("payment-form");
const modal = document.getElementById("success-modal");
const doneBtn = document.getElementById("done-btn");

if (form && modal && doneBtn) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  });

  doneBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    form.reset();
  });
}