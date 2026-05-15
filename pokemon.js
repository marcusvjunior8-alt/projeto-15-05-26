
const btnCarregar = document.getElementById("btnCarregar");
const cards = document.getElementById("cards");

async function carregarDados() {

    cards.innerHTML = "";

    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await resposta.json();

    const lista = data.results;

    lista.slice(0, 6).forEach((item, index) => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png" alt="${item.name}">
            <h3>${item.name}</h3>
        `;

        cards.appendChild(card);
    });
}

btnCarregar.addEventListener("click", carregarDados);