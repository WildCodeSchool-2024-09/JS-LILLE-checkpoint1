const avatar = document.querySelector(".avatar");
avatar.addEventListener("click", () => {
	avatar.src = "image/avatar.svg";
});
const button = document.querySelector(".nameButton");
button.addEventListener("click", () => {
	nom = prompt("What's your name ?");
	const firstname = document.querySelector("#firstname");
	firstname.style.color = "white";
	firstname.innerText = nom;

	couleur = prompt("Enter a color");
	const pinkBg = document.querySelectorAll(".pink-bg");
	pinkBg.forEach((bg) => (bg.style.backgroundColor = couleur));

	const pinkText = document.querySelectorAll(".pink-text");
	pinkText.forEach((text) => (text.style.color = couleur));
});
