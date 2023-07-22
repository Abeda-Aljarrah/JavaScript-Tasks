const names = ["Abeda", "Razan", "Sawsan", "Noor"];
const ages = [22, 24, 26, 20];
const container = document.createElement("div");
container.className = "card-container";
document.body.appendChild(container);

for (i = 0; i < names.length; i++) {
    const card = document.createElement("div");
    card.className = "card"; 
    container.appendChild(card);
    const name = document.createElement("h1");
    name.id = "name"
    name.appendChild(document.createTextNode((names[i])));
    card.appendChild(name);
    const age = document.createElement("p");
    age.id = "age"
    age.appendChild(document.createTextNode((ages[i])));
    card.appendChild(age);
    const img = document.createElement("img");
    img.src = "https://picsum.photos/200/301";
    document.body.appendChild(img);
    card.appendChild(img);
    // Apply styles to the container
    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "space-between";

    // Apply styles to the cards
    card.style.border = "5px solid green";
    card.style.margin = "10px"; 
    name.style.textAlign = "center";
    age.style.textAlign = "center";
    age.style.fontSize = "30px";
}

