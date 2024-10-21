const newAvatar = document.getElementById("avatar-img");
newAvatar.addEventListener("click", () => {
	newAvatar.src = "image/avatar.svg";
	newAvatar.alt = "A new avatar img";
});

const newDescription = document.querySelector(".description");
const newName = document.createElement("input");
newName.classList.add("change--name--color");
newName.value = "Modify text and color";
newName.style.backgroundColor = "--lightWildColor";
newName.style.textAlign = "center";
newName.style.borderColor = "white";
newName.style.borderRadius = "10%";
newName.style.marginBottom = "1rem";
newDescription.append(newName);

newName.addEventListener("click", () => {
	yourColor = prompt("Choose your color");
	yourName = prompt("Type your name");
	const newName = document.querySelector("#firstname");
	newName.innerHTML = yourName;
	newName.style.color = "white";
	// BACKGROUND
	const newBackgroundColor = document.querySelectorAll(".description");
	newBackgroundColor.forEach(function (element) {
		element.style.backgroundColor = yourColor;
	});
	// TEXT
	const newTextColor = document.querySelectorAll("h4");
	newTextColor.forEach(function (element) {
		element.style.color = yourColor;
	});
	// LINKS
	const newLinks = document.querySelectorAll("a");
	newLinks.forEach(function (element) {
		element.style.color = yourColor;
	});
});

const newFrontDevTools = document.querySelector("#front-dev-tools");
const frontTools = document.createElement("input");
frontTools.classList.add("change--list--front--tools");
frontTools.value = "Modify tools";
frontTools.style.backgroundColor = "--lightWildColor";
frontTools.style.textAlign = "center";
frontTools.style.borderColor = "white";
frontTools.style.borderRadius = "10%";
frontTools.style.marginBottom = "1rem";
newFrontDevTools.append(frontTools);

frontTools.addEventListener("click", () => {
	firstTool = prompt("Choose a first dev tool");
	secondTool = prompt("Choose a second dev tool");
	thirdTool = prompt("Choose a third dev tool");
	const newFirstli = document.getElementById("firstli");
	newFirstli.textContent = firstTool;
	const newSecondli = document.querySelector("#secondli");
	newSecondli.innerHTML = secondTool;
	const newThirdli = document.querySelector("#thirdli");
	newThirdli.innerHTML = thirdTool;
});

// CREATE TEXT BOX
const backEndBlock = document.querySelector(".backend");
const newBackDevTools = document.createElement("input");
newBackDevTools.type = "text";
newBackDevTools.placeholder = "Add your dev tools";
newBackDevTools.id = "listinput";
backEndBlock.append(newBackDevTools);

// CREATE ADD BUTTON
const addToolInput = document.createElement("input");
addToolInput.type = "submit";
addToolInput.value = "Add";
backEndBlock.append(addToolInput);

// MERGE
const backEndUl = document.querySelector("#backend-dev-tools");
const newToolList = document.createElement("li");
newToolList.innerHTML = newBackDevTools.value;
backEndUl.append(newToolList);
newBackDevTools.value = "";
