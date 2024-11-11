let boxes = document.querySelectorAll(".box");

let currentPlayer = "X";

let wordsContainer = document.getElementById("wordsContainer");

let conteneur = document.getElementById("conteneur");

let twoPlayersButton = document.getElementById("twoPlayersButton");

let AiPlayersButton = document.getElementById("AiPlayersButton");

let contreAi = false;

let rowlenght = 4;

function initgame() {
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        box.addEventListener("click", () => {
            if (box.textContent === "") {
                box.textContent = currentPlayer;

                // Vérifie si le joueur actuel a gagné avant de changer de joueur
                if (checkWin()) {
                    wordsContainer.innerHTML = "Le joueur " + currentPlayer + " a gagné!";
                    return; // Arrête la fonction pour éviter de continuer le jeu après une victoire
                } else if (matchNul()) {
                    wordsContainer.innerHTML = "Match nul";
                    return; // Arrête la fonction pour éviter de continuer le jeu après un match nul
                }

                // Change le joueur
                currentPlayer = (currentPlayer === "X") ? "O" : "X";
                wordsContainer.textContent = "C'est au tour du joueur : " + currentPlayer;
            }
        });
    }
}


function ChoicePlayer() {
    twoPlayersButton.classList.remove("hidden");
    twoPlayersButton.addEventListener("click", () => {
        conteneur.classList.remove("hidden");
        twoPlayersButton.classList.add("hidden");
        wordsContainer.textContent = "C'est au tour du joueur " + currentPlayer;
        initgame();
    });
}

ChoicePlayer();

function checkWin() {
    // Variables pour chaque cellule de la grille 6x7
    let c1 = boxes[0].textContent, c2 = boxes[1].textContent, c3 = boxes[2].textContent, c4 = boxes[3].textContent, c5 = boxes[4].textContent, c6 = boxes[5].textContent, c7 = boxes[6].textContent;
    let c8 = boxes[7].textContent, c9 = boxes[8].textContent, c10 = boxes[9].textContent, c11 = boxes[10].textContent, c12 = boxes[11].textContent, c13 = boxes[12].textContent, c14 = boxes[13].textContent;
    let c15 = boxes[14].textContent, c16 = boxes[15].textContent, c17 = boxes[16].textContent, c18 = boxes[17].textContent, c19 = boxes[18].textContent, c20 = boxes[19].textContent, c21 = boxes[20].textContent;
    let c22 = boxes[21].textContent, c23 = boxes[22].textContent, c24 = boxes[23].textContent, c25 = boxes[24].textContent, c26 = boxes[25].textContent, c27 = boxes[26].textContent, c28 = boxes[27].textContent;
    let c29 = boxes[28].textContent, c30 = boxes[29].textContent, c31 = boxes[30].textContent, c32 = boxes[31].textContent, c33 = boxes[32].textContent, c34 = boxes[33].textContent, c35 = boxes[34].textContent;
    let c36 = boxes[35].textContent, c37 = boxes[36].textContent, c38 = boxes[37].textContent, c39 = boxes[38].textContent, c40 = boxes[39].textContent, c41 = boxes[40].textContent, c42 = boxes[41].textContent;

    // Vérifications horizontales
    if (c1 == c2 && c2 == c3 && c3 == c4 && c1 != "") return c1;
    if (c2 == c3 && c3 == c4 && c4 == c5 && c2 != "") return c2;
    if (c3 == c4 && c4 == c5 && c5 == c6 && c3 != "") return c3;
    if (c4 == c5 && c5 == c6 && c6 == c7 && c4 != "") return c4;

    if (c8 == c9 && c9 == c10 && c10 == c11 && c8 != "") return c8;
    if (c9 == c10 && c10 == c11 && c11 == c12 && c9 != "") return c9;
    if (c10 == c11 && c11 == c12 && c12 == c13 && c10 != "") return c10;
    if (c11 == c12 && c12 == c13 && c13 == c14 && c11 != "") return c11;

    if (c15 == c16 && c16 == c17 && c17 == c18 && c15 != "") return c15;
    if (c16 == c17 && c17 == c18 && c18 == c19 && c16 != "") return c16;
    if (c17 == c18 && c18 == c19 && c19 == c20 && c17 != "") return c17;
    if (c18 == c19 && c19 == c20 && c20 == c21 && c18 != "") return c18;

    if (c22 == c23 && c23 == c24 && c24 == c25 && c22 != "") return c22;
    if (c23 == c24 && c24 == c25 && c25 == c26 && c23 != "") return c23;
    if (c24 == c25 && c25 == c26 && c26 == c27 && c24 != "") return c24;
    if (c25 == c26 && c26 == c27 && c27 == c28 && c25 != "") return c25;

    if (c29 == c30 && c30 == c31 && c31 == c32 && c29 != "") return c29;
    if (c30 == c31 && c31 == c32 && c32 == c33 && c30 != "") return c30;
    if (c31 == c32 && c32 == c33 && c33 == c34 && c31 != "") return c31;
    if (c32 == c33 && c33 == c34 && c34 == c35 && c32 != "") return c32;

    if (c36 == c37 && c37 == c38 && c38 == c39 && c36 != "") return c36;
    if (c37 == c38 && c38 == c39 && c39 == c40 && c37 != "") return c37;
    if (c38 == c39 && c39 == c40 && c40 == c41 && c38 != "") return c38;
    if (c39 == c40 && c40 == c41 && c41 == c42 && c39 != "") return c39;

    // Vérifications verticales
    if (c1 == c8 && c8 == c15 && c15 == c22 && c1 != "") return c1;
    if (c8 == c15 && c15 == c22 && c22 == c29 && c8 != "") return c8;
    if (c15 == c22 && c22 == c29 && c29 == c36 && c15 != "") return c15;

    if (c2 == c9 && c9 == c16 && c16 == c23 && c2 != "") return c2;
    if (c9 == c16 && c16 == c23 && c23 == c30 && c9 != "") return c9;
    if (c16 == c23 && c23 == c30 && c30 == c37 && c16 != "") return c16;

    if (c3 == c10 && c10 == c17 && c17 == c24 && c3 != "") return c3;
    if (c10 == c17 && c17 == c24 && c24 == c31 && c10 != "") return c10;
    if (c17 == c24 && c24 == c31 && c31 == c38 && c17 != "") return c17;

    if (c4 == c11 && c11 == c18 && c18 == c25 && c4 != "") return c4;
    if (c11 == c18 && c18 == c25 && c25 == c32 && c11 != "") return c11;
    if (c18 == c25 && c25 == c32 && c32 == c39 && c18 != "") return c18;

    if (c5 == c12 && c12 == c19 && c19 == c26 && c5 != "") return c5;
    if (c12 == c19 && c19 == c26 && c26 == c33 && c12 != "") return c12;
    if (c19 == c26 && c26 == c33 && c33 == c40 && c19 != "") return c19;

    if (c6 == c13 && c13 == c20 && c20 == c27 && c6 != "") return c6;
    if (c13 == c20 && c20 == c27 && c27 == c34 && c13 != "") return c13;
    if (c20 == c27 && c27 == c34 && c34 == c41 && c20 != "") return c20;

    if (c7 == c14 && c14 == c21 && c21 == c28 && c7 != "") return c7;
    if (c14 == c21 && c21 == c28 && c28 == c35 && c14 != "") return c14;
    if (c21 == c28 && c28 == c35 && c35 == c42 && c21 != "") return c21;

    // Vérifications diagonales montantes
    if (c22 == c16 && c16 == c10 && c10 == c4 && c22 != "") return c22;
    if (c29 == c23 && c23 == c17 && c17 == c11 && c29 != "") return c29;
    if (c36 == c30 && c30 == c24 && c24 == c18 && c36 != "") return c36;

    if (c23 == c17 && c17 == c11 && c11 == c5 && c23 != "") return c23;
    if (c30 == c24 && c24 == c18 && c18 == c12 && c30 != "") return c30;
    if (c37 == c31 && c31 == c25 && c25 == c19 && c37 != "") return c37;

    if (c31 == c25 && c25 == c19 && c19 == c13 && c31 != "") return c31;
    if (c38 == c32 && c32 == c26 && c26 == c20 && c38 != "") return c38;

    if (c39 == c33 && c33 == c27 && c27 == c21 && c39 != "") return c39;

    // Vérifications diagonales descendantes
    if (c4 == c10 && c10 == c16 && c16 == c22 && c4 != "") return c4;
    if (c5 == c11 && c11 == c17 && c17 == c23 && c5 != "") return c5;
    if (c6 == c12 && c12 == c18 && c18 == c24 && c6 != "") return c6;

    // Si aucune combinaison gagnante n'est trouvée, retourner une chaîne vide
    return "";
}



function matchNul() {
    // Affectation de chaque cellule à une variable distincte
    let c1 = boxes[0].textContent;
    let c2 = boxes[1].textContent;
    let c3 = boxes[2].textContent;
    let c4 = boxes[3].textContent;
    let c5 = boxes[4].textContent;
    let c6 = boxes[5].textContent;
    let c7 = boxes[6].textContent;

    let c8 = boxes[7].textContent;
    let c9 = boxes[8].textContent;
    let c10 = boxes[9].textContent;
    let c11 = boxes[10].textContent;
    let c12 = boxes[11].textContent;
    let c13 = boxes[12].textContent;
    let c14 = boxes[13].textContent;

    let c15 = boxes[14].textContent;
    let c16 = boxes[15].textContent;
    let c17 = boxes[16].textContent;
    let c18 = boxes[17].textContent;
    let c19 = boxes[18].textContent;
    let c20 = boxes[19].textContent;
    let c21 = boxes[20].textContent;

    let c22 = boxes[21].textContent;
    let c23 = boxes[22].textContent;
    let c24 = boxes[23].textContent;
    let c25 = boxes[24].textContent;
    let c26 = boxes[25].textContent;
    let c27 = boxes[26].textContent;
    let c28 = boxes[27].textContent;

    let c29 = boxes[28].textContent;
    let c30 = boxes[29].textContent;
    let c31 = boxes[30].textContent;
    let c32 = boxes[31].textContent;
    let c33 = boxes[32].textContent;
    let c34 = boxes[33].textContent;
    let c35 = boxes[34].textContent;

    let c36 = boxes[35].textContent;
    let c37 = boxes[36].textContent;
    let c38 = boxes[37].textContent;
    let c39 = boxes[38].textContent;
    let c40 = boxes[39].textContent;
    let c41 = boxes[40].textContent;
    let c42 = boxes[41].textContent;

    // Vérification si toutes les cellules sont remplies
    if (
        c1 !== "" && c2 !== "" && c3 !== "" && c4 !== "" && c5 !== "" && c6 !== "" && c7 !== "" &&
        c8 !== "" && c9 !== "" && c10 !== "" && c11 !== "" && c12 !== "" && c13 !== "" && c14 !== "" &&
        c15 !== "" && c16 !== "" && c17 !== "" && c18 !== "" && c19 !== "" && c20 !== "" && c21 !== "" &&
        c22 !== "" && c23 !== "" && c24 !== "" && c25 !== "" && c26 !== "" && c27 !== "" && c28 !== "" &&
        c29 !== "" && c30 !== "" && c31 !== "" && c32 !== "" && c33 !== "" && c34 !== "" && c35 !== "" &&
        c36 !== "" && c37 !== "" && c38 !== "" && c39 !== "" && c40 !== "" && c41 !== "" && c42 !== ""
    ) {
    }
}
