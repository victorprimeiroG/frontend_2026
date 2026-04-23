let jogadorAdicionado = false;

function add() {

    if (jogadorAdicionado) {
        alert("O jogador já foi adicionado!");
        return;
    }

    const container = document.getElementById("Cards");

    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "22rem";

    card.innerHTML = `
        <img src="Lucas_Paqueta.webp" 
             class="card-img-top" 
             alt="Lucas Paqueta"
             loading="lazy">

        <div class="card-body">
            <h5 class="card-title">
                Lucas Tolentino Coelho de Lima
                <span class="badge text-bg-secondary">8,8</span>
            </h5>

            <p class="card-text">
                <strong>Nascimento:</strong> 27/08/1997 (28 anos) <br>
                <strong>Altura:</strong> 1,80 m <br>
                <strong>Posição:</strong> Meio-campista
            </p>
        </div>
    `;

    container.appendChild(card);

    jogadorAdicionado = true;
}