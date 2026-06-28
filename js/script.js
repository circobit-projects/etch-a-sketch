// Get body
const body = document.querySelector("body");
body.style.gap = "2rem";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.height = "100vh";
body.style.backgroundColor = "rgb(205, 235, 114)";

// Set vars to track numbers of rows and cols
const rows = 16;
const columns = 16;

// Create title div
const titleDiv = document.createElement("div");
titleDiv.className = "titleDiv";
titleDiv.textContent = "Etch-A-Sketch";
titleDiv.style.fontSize = "24px";
titleDiv.style.fontWeight = "700";

// Append titleDiv to body
body.appendChild(titleDiv);

// Create grid div
const gridDiv = document.createElement("div");
gridDiv.className = "gridDiv";
gridDiv.style.width = "600px";
gridDiv.style.height = "600px";
gridDiv.style.display = "flex";
gridDiv.style.flexDirection = "column";

// Append gridDiv to body
body.appendChild(gridDiv);

// Create rows within gridDiv
for (let i = 0; i < rows; i++) {
	const divToCreate = document.createElement("div");
	divToCreate.className = "divRow";
	divToCreate.style.display = "flex";
	divToCreate.style.flex = "1";
	gridDiv.appendChild(divToCreate);
};

// Get rows divs
const rowsDivs = document.querySelectorAll(".divRow");
// Convert to array to be able to use the forEach method
const rowsDivsArray = [...rowsDivs]

// Create divs that imitates columns within the rows
rowsDivsArray.forEach(element => {
	// Iterate over the rows and create the divs inside (Items)
	for (let i = 0; i < columns; i++) {
		const divToCreate = document.createElement("div");
		divToCreate.className = "divItem";
		divToCreate.style.border = "1px solid";
		divToCreate.style.flex = "1";
		element.appendChild(divToCreate);
	};
});

