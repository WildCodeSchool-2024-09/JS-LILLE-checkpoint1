const avatarImg = document.querySelector(".banner-img");

avatarImg.addEventListener("click", function () {
	avatarImg.src = "image/avatar.svg";
});

const button = document.getElementById("description-button");
button.addEventListener("click", function () {
	const userName = document.getElementById("firstname");
	const bgColor = document.querySelector(".description.pink-bg");
	const firstname = prompt("Enter your name :");
	userName.textContent = firstname;
	userName.style.color = "white";
	bgColor.style.backgroundColor = "#750ff7";
});
