const image = document.querySelector(".avatar");

image.addEventListener("click", function () {
  if (image.src.includes("image/avatar-bis.png")) {
    image.src = "image/avatar.svg";
  } else {
    image.src = "image/avatar-bis.png";
  }
});
