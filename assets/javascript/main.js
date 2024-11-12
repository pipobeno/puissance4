let boxes = document.querySelectorAll(".box");

let currentPlayer = "X";

let wordsContainer = document.getElementById("wordsContainer");

let conteneur = document.getElementById("conteneur");

let twoPlayersButton = document.getElementById("twoPlayersButton");

let restart = document.getElementById("restart");


function initgame() {
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        box.addEventListener("click", () => {
            // On calcule la colonne sur laquelle l'utilisateur a cliqué
            let col = i % 7;  // Cela permet de déterminer la colonne en fonction de l'index

            // On cherche la première case vide de bas en haut dans cette colonne
            for (let row = 5; row >= 0; row--) {
                // On calcule l'index de la case dans la grille
                let currentBox = boxes[row * 7 + col];
                if (currentBox.textContent === "") {
                    currentBox.textContent = currentPlayer;
                    if (currentPlayer === "X") {
                        currentBox.classList.add("playerX");
                    } else {
                        currentBox.classList.add("playerO");
                    }
                    if (checkWin()) {
                        wordsContainer.innerHTML = "Le joueur " + currentPlayer + " a gagné!";
                        return;
                    }
                    else if (matchNul()) {
                        wordsContainer.innerHTML = "Match nul";
                        return;
                    }
                    if (currentPlayer === "X") {
                        currentPlayer = "O";
                    } else {
                        currentPlayer = "X";
                    }
                    wordsContainer.textContent = "C'est au tour du joueur : " + currentPlayer;
                    break;
                }
            }
        });
    }
}



function ChoicePlayer() {
    twoPlayersButton.classList.remove("hidden");
    twoPlayersButton.addEventListener("click", () => {
        restart.classList.remove("hidden");
        wordsContainer.classList.remove("hidden");
        conteneur.classList.remove("hidden");
        twoPlayersButton.classList.add("hidden");
        wordsContainer.textContent = "C'est au tour du joueur " + currentPlayer;
        initgame();
    });
}

ChoicePlayer();

function checkWin() {
    const rows = 6;
    const cols = 7;
    const winLength = 4;


    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let player = boxes[row * cols + col].textContent; // Jeton à la position actuelle
            if (player === "") continue; // Passe cette case si elle est vide


            if (col + winLength - 1 < cols && player === boxes[row * cols + (col + 1)].textContent &&
                player === boxes[row * cols + (col + 2)].textContent &&
                player === boxes[row * cols + (col + 3)].textContent) {
                return player;
            }


            if (row + winLength - 1 < rows && player === boxes[(row + 1) * cols + col].textContent &&
                player === boxes[(row + 2) * cols + col].textContent &&
                player === boxes[(row + 3) * cols + col].textContent) {
                return player;
            }


            if (row + winLength - 1 < rows && col + winLength - 1 < cols &&
                player === boxes[(row + 1) * cols + (col + 1)].textContent &&
                player === boxes[(row + 2) * cols + (col + 2)].textContent &&
                player === boxes[(row + 3) * cols + (col + 3)].textContent) {
                return player;
            }


            if (row - (winLength - 1) >= 0 && col + winLength - 1 < cols &&
                player === boxes[(row - 1) * cols + (col + 1)].textContent &&
                player === boxes[(row - 2) * cols + (col + 2)].textContent &&
                player === boxes[(row - 3) * cols + (col + 3)].textContent) {
                return player;
            }
        }
    }

    return "";
}



function matchNul() {
    // Parcourt toutes les cases et vérifie si chacune est remplie
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].textContent === "") {
            // Si une case est vide, ce n'est pas un match nul
        }
    }
}

function replay() {
    restart.addEventListener("click", () => {
        location.reload();
    }
    )
}

replay()