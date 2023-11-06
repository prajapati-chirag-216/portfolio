const sections = document.querySelectorAll(".section");
sections.forEach((sec, ind) => {
  let top = window.scrollY;
  let offset = sec.offsetTop - 450;
  let height = sec.offsetHeight;
  if (top >= offset && top < offset + height) {
    sec.classList.add("show-animate");
    if (ind == 2) {
      const elements = document.getElementsByClassName("education-details");
      Array.from(elements).forEach((ele) => {
        ele.classList.add("show-animate");
      });
      const dividers = document.getElementsByClassName("education-divider");
      Array.from(dividers).forEach((ele) => {
        ele.classList.add("show-animate");
      });
    }
    // if want to use repeating animation on scroll,
  }
});
window.onscroll = () => {
  sections.forEach((sec, ind) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 450;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
      if (ind == 2) {
        const elements = document.getElementsByClassName("education-details");
        const dividers = document.getElementsByClassName("education-divider");
        Array.from(dividers).forEach((ele) => {
          ele.classList.add("show-animate");
        });
        Array.from(elements).forEach((ele) => {
          ele.classList.add("show-animate");
        });
      }
      if (ind == 3) {
        const elements = document.getElementsByClassName("project-container");
        Array.from(elements).forEach((ele) => {
          ele.classList.add("show-animate");
        });
      }
      // if want to use repeating animation on scroll,
    } else {
      // sec.classList.remove("show-animate");
    }
  });
};

// console.log(document.getElementsByClassName("menu-icon-btn")[0]);
// const icons = document.querySelectorAll(".menu-icon");
// icons.forEach((icon, ind) => {
//   icon.addEventListener("click", () => {
//     if (ind == 0) {
//     }
//     if (ind == 1) {
//       console.log("ran");
//       document.getElementsByClassName("container")[0].scrollTo += 300;
//     }
//     if (ind == 2) {
//     } else {
//     }
//   });
// });
