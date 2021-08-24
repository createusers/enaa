const dinamic = document.querySelector(".dinamic"),
  dns = dinamic.querySelectorAll(".dn .header");

let isBack = false;

dns.forEach((dn) => {
  dn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "H") {
      if (!isBack) {
        scroll(8);
      } else {
        scroll(92, true);
        isBack = false;
      }
    } else if (e.target.innerHTML == "B") {
      if (!isBack) {
        scroll(108);
      } else {
        scroll(0);
      }
    } else {
      if (!isBack) {
        scroll(200);
        isBack = true;
      } else {
        scroll(100);
      }
    }
  });
});

function scroll(height, h = false) {
  if (!h) {
    dinamic.style.transform = `translateY(-${height}vh)`;
  } else {
    dinamic.style.transform = `translateY(${height}vh)`;
  }
}
