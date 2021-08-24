const DCon = document.querySelector(".dn.d .content "),
  showArea = DCon.querySelector(".show-area"),
  hiddenArea = DCon.querySelector(".hidden-area"),
  DLink = DCon.querySelector("p.link");

DLink.addEventListener("click", () => {
  showArea.style.opacity = "0";
  DCon.style.backgroundColor = "#383838";
  hiddenArea.style.opacity = "1";
  hiddenArea.style.zIndex = "1";
  setTimeout(() => {
    hiddenArea.querySelector("img").style.transform = "scale(1)";
    setTimeout(() => {
      hiddenArea.querySelector("p").style.opacity = "1";
    }, 500);
  }, 1000);
});
