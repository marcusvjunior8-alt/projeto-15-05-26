
const btnCarregar = document.getElementById("btnCarregar");
const cards = document.getElementById("cards");

async function carregarDados() {

    cards.innerHTML = "";

    const resposta = await fetch("https://dragonball-api.com/api/characters");
    const data = await resposta.json();

    const lista = data.items || data.results || data;

    lista.slice(0, 6).forEach(item => {

        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Raça: ${item.race || "Desconhecido"}</p>
            <p>Ki: ${item.ki || item.maxKi || "Desconhecido"}</p>
        `;

        cards.appendChild(card);
    });
}

btnCarregar.addEventListener("click", carregarDados);