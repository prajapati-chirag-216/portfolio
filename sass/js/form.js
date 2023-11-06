const toster = document.getElementsByClassName("toster")[0];
const tosterBlink = document.getElementsByClassName("toster-blink")[0];
const tosterContent = document.getElementsByClassName("toster-content")[0];
const tosterIcon = document.getElementsByClassName("toster-icon")[0];

function submitFormHandler(event) {
  event.preventDefault();
  toster.classList.add("animate-toster");
  document.querySelector("form").reset();

  toster.style.animation =
    "move-down-notification 0.5s forwards cubic-bezier(0.68, -0.6, 0.32, 1.6)";
  tosterBlink.style.animation = "blink 0.5s forwards 5.75s";
  tosterContent.style.animation =
    "expand-toster 0.6s backwards 1.5s, move-down-notification 0.5s forwards cubic-bezier(0.68, -0.6, 0.32, 1.6)";
  tosterIcon.style.animation =
    "animate-notification 0.5s backwards 0.5s cubic-bezier(0.64, -0.85, 0.42, 1.92)";

  setTimeout(() => {
    tosterContent.style.animation = "shrink-toster 0.6s forwards";
    tosterIcon.style.animation =
      "animate-notification-reverse 0.4s forwards 0.6s";
    toster.style.animation = "fade-out-notification 0.6s backwards 1s";
  }, 5000);
}
