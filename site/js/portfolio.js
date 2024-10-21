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

	const link = document.querySelectorAll("a");
	link.forEach((lien) => (lien.style.color = couleur));
});
const modify = document.querySelector("#modify");
modify.addEventListener("click", () => {
	const frontli = document.querySelector("#front-dev-tools");
	console.log(frontli);
	newli = ["VS code", "Github", "Terminal"];
	frontli.innerHTML = "";
	for (let i = 0; i < newli.length; i++) {
		liste = document.createElement("li");
		liste.innerText = newli[i];
		frontli.appendChild(liste);
	}
});

const form = document.querySelector("#form");
const addListe = document.querySelector("#addme");
const backListe = document.querySelector("#backListe");

form.onsubmit = function (event) {
	event.preventDefault();
	const nouvelleListe = document.createElement("li");
	nouvelleListe.innerHTML = addListe.value;
	backListe.appendChild(nouvelleListe);
	addListe.value = "";
};
