const navigationElement = document.querySelector(".main-navigation");
const navImage = document.getElementsByClassName("nav-icon")[0];
let timer_1;
function changeIcon() {
  clearTimeout(timer_1);
  timer_1 = setTimeout(() => {
    const computedStyle = getComputedStyle(navigationElement);
    const height = parseFloat(computedStyle.height);
    navImage.src =
      height <= 150 ? "../../img/menu-outline.svg" : "../assets/menu.svg";
  }, 1150);
  navImage.src = "../../img/menu.svg"; // Change to a different image when height is not 10 rem
}
navigationElement.addEventListener("mouseleave", changeIcon);
