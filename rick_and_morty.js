
const btnCarregar = document.getElementById("btnCarregar");
const cards = document.getElementById("cards");

async function carregarDados() {

    cards.innerHTML = "";

    // 🔥 API do Rick and Morty
    const resposta = await fetch("https://rickandmortyapi.com/api/character");
    const data = await resposta.json();

    // lista de personagens
    const lista = data.results;

    lista.slice(0, 6).forEach(item => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Status: ${item.status}</p>
            <p>Espécie: ${item.species}</p>
        `;

        cards.appendChild(card);
    });
}

btnCarregar.addEventListener("click", carregarDados);