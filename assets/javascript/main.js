let boxes = document.querySelectorAll(".box");

let currentPlayer = "X";

let wordsContainer = document.getElementById("wordsContainer");

let conteneur = document.getElementById("conteneur");

let twoPlayersButton = document.getElementById("twoPlayersButton");

function initgame() {
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        box.addEventListener("click", () => {
            // Calculer l'index de la colonne (en fonction de la grille 7x6)
            let col = i % 7;  // La colonne de la case cliquée

            // Chercher la première case vide de bas en haut dans la colonne
            for (let row = 5; row >= 0; row--) {  // On commence de la dernière ligne
                let currentBox = boxes[row * 7 + col];  // Calculer l'index de la case dans la grille
                if (currentBox.textContent === "") {
                    // Placer le jeton dans cette case
                    currentBox.textContent = currentPlayer;
                    currentBox.classList.add(currentPlayer === "X" ? "playerX" : "playerO");

                    // Vérifier si le joueur actuel a gagné
                    if (checkWin()) {
                        wordsContainer.innerHTML = "Le joueur " + currentPlayer + " a gagné!";
                        return;
                    } else if (matchNul()) {
                        wordsContainer.innerHTML = "Match nul";
                        return;
                    }

                    // Passer au joueur suivant
                    currentPlayer = (currentPlayer === "X") ? "O" : "X";
                    wordsContainer.textContent = "C'est au tour du joueur : " + currentPlayer;
                    break; // Sortir de la boucle une fois le jeton placé
                }
            }
        });
    }
}


function ChoicePlayer() {
    twoPlayersButton.classList.remove("hidden");
    twoPlayersButton.addEventListener("click", () => {
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

    // Parcourt chaque case de la grille
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
