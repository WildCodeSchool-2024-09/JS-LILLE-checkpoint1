const avatarImg = document.querySelector(".banner-img");

avatarImg.addEventListener("click", function () {
	avatarImg.src = "image/avatar.svg";
});

const button = document.getElementById("description-button");
button.addEventListener("click", function () {
	const userName = document.getElementById("firstname");
	const bgColor = document.getElementsByClassName("description pink-bg");
	const textColor = document.getElementsByClassName("pink-text");
	const linkColor = document.querySelectorAll("a");

	const chooseColor = prompt("Enter a color :");
	const firstname = prompt("Enter your name :");

	userName.textContent = firstname;
	userName.style.color = "white";

	// iteration of bgColor to apply style to each element of the HTML collection
	for (let i = 0; i < bgColor.length; i++) {
		bgColor[i].style.backgroundColor = chooseColor;
	}

	// iteration of textColor to apply style to each element of the HTML collection
	for (let i = 0; i < textColor.length; i++) {
		textColor[i].style.color = chooseColor;
	}

	for (let i = 0; i < linkColor.length; i++) {
		linkColor[i].style.color = chooseColor;
	}
});

const columnButton = document.querySelector(".column-button");
columnButton.addEventListener("click", function () {
	const vsCode = document.getElementById("VScode");
	const github = document.getElementById("Github");
	const terminal = document.getElementById("Terminal");
	vsCode.textContent = "VScode";
	github.textContent = "Github";
	terminal.textContent = "Terminal";
});
