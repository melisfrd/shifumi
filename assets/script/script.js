let button = document.querySelector("button");
let symbols = document.querySelectorAll(".symbol");
let winBox = document.querySelector(".win");
// console.log()
let choices = [];
pv2.style.transform = "scaleX(-1)";

// Parcourir la liste symbols
for (let s of symbols) {
  // push chaque symbole dans le tableau choices
  choices.push(s);

  // click event => attribut la valeur cliqué dans la div playerChoice
  s.addEventListener("click", () => {
    playerChoice.innerHTML = s.outerHTML;
  });
}

// click event sur le bouton 'FIGHT'
button.addEventListener("click", () => {
  // créer un choix aléatoire pour le computer et attribuer la valeur dans la div computerChoice
  let shuffle = Math.floor(Math.random() * choices.length);
  let symbol = choices[shuffle].outerHTML;
  computerChoice.innerHTML = symbol;

  // déclarer deux variable qui contiennent les valeurs de playerChoice & computerChoice
  let p = playerChoice.firstElementChild.id;
  let c = computerChoice.firstElementChild.id;

  // créer un span à faire apparaitre dans la barre de pv à chaque victoire
  let span = document.createElement("span");
  span.classList.add("spanColor");

  // définir les conditions
  if (
    (p === "rock" && c === "katana") ||
    (p === "flower" && c === "rock") ||
    (p === "katana" && c === "flower")
  ) {
    pv1.appendChild(span);
  } else if (p === c) {
  } else {
    pv2.appendChild(span);
  }

  setTimeout(() => {
    remove();
  }, 700);

  if (pv1.children.length === 5) {
    winBox.style.display = "block";
    win.innerText = `You Win !`;
    setTimeout(() => {
      removeSpan();
    }, 1000);
  } else if (pv2.children.length === 5) {
    winBox.style.display = "block";
    win.innerText = `You Loose !`;
    setTimeout(() => {
      removeSpan();
    }, 1200);
  }
});

let remove = () => {
  playerChoice.innerHTML = "";
  computerChoice.innerHTML = "";
};

let removeSpan = () => {
  pv1.innerHTML = "";
  pv2.innerHTML = "";
  winBox.style.display = "none";
};
