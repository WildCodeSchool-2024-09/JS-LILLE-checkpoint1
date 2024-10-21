const avatarImg = document.querySelector(".banner-img");

avatarImg.addEventListener("click", function () {
	avatarImg.src = "image/avatar.svg";
});

const userName = document.getElementById("firstname");
const button = document.getElementById("description-button");
button.addEventListener("click", function () {
	let firstname = prompt("Enter your name :");
	userName.textContent = firstname;
	userName.style.color = "white";
});
