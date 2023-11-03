let t1,
  count = 1;
const p1 = document.getElementsByClassName("footer-plate-text")[0];
const p2 = document.getElementsByClassName("footer-plate-text")[1];
function change() {
  if (count % 2 != 0) {
    p1.style.animation = "moov-down-1 .6s forwards";
    p2.style.animation = "moov-up-2 .6s .1s forwards";
  } else {
    p2.style.animation = "moov-down-2 .6s forwards";
    p1.style.animation = "moov-up-1 .6s .1s forwards";
  }
  count++;
}
change();
clearInterval(t1);
setInterval(change, 5000);
