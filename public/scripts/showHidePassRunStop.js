
const togglePassRun = document.querySelector("#eye-icon-run");
const togglePassStop = document.querySelector("#eye-icon-stop");


const showHide = (toggle, pin) => {
  const type = pin.getAttribute("type") === "password" ? "text" : "password";
  pin.setAttribute("type", type);
  toggle.classList.toggle("fa-eye-slash");
  toggle.classList.toggle("fa-eye");
};

window.addEventListener(
  "load",
  togglePassRun.addEventListener("click", () => showHide(togglePassRun, pinRun))
);
window.addEventListener(
  "load",
  togglePassStop.addEventListener("click", () =>
    showHide(togglePassStop, pinStop)
  )
);
