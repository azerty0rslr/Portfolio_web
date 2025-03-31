window.onload = function () {
    document.body.style.height = "100vh";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    ajouterHeader();
    ajouterMain();
};

function ajouterHeader() {
    const header = document.createElement("header");

    const img = document.createElement("img");
    img.src = "banniere.jpg";
    img.style.width = "100vw";
    img.style.height = "10rem";
    header.append(img);

    const nav = document.createElement("nav");
    header.append(nav);

    const ul = document.createElement("ul");
    nav.append(ul);
    ul.style.listStyle = "none";
    ul.style.padding = "0";
    ul.style.display = "flex";
    ul.style.gap = "0.5rem";

    for (let i = 1; i < 5; i++) {
        const li = document.createElement("li");
        li.innerText = "Page " + i;
        li.style.backgroundColor = "lightblue";
        li.style.padding = "0.5rem";
        li.style.border = "0.1rem solid black";
        li.style.flex = "1";
        li.style.textAlign = "center";
        li.style.transition = "background-color 0.3s"; // Animation de transition pour un effet fluide

        // Ajouter les événements de survol
        li.addEventListener("mouseenter", function () {
            li.style.backgroundColor = "lightgreen"; // Couleur lors du survol
        });

        li.addEventListener("mouseleave", function () {
            li.style.backgroundColor = "lightblue"; // Rétablir la couleur initiale
        });

        ul.append(li);
    }

    document.body.append(header);
}

function ajouterMain() {
    const main = document.createElement("main");
    main.innerHTML = `
        <section class="section-1"></section>
        <section class="section-2-1"></section>
        <section class="section-2-2"></section>
    `;
    const section1 = main.querySelector(".section-1");
    const section21 = main.querySelector(".section-2-1");
    const section22 = main.querySelector(".section-2-2");

    main.style = `
        flex: 1;
        display: grid;
        gap: 0.5rem;
        padding: 0.5rem;
    `;
    section1.style = `
        grid-column: 1;
        grid-row: 1 / 5;
        background-color: lightblue;
    `;
    section21.style = `
        grid-column: 2 / 4;
        grid-row: 1 / 3;
        background-color: lightblue;
    `;
    section22.style = `
        grid-column: 2 / 4;
        grid-row: 3 / 5;
        background-color: lightblue;
    `;

    document.body.append(main);
}
