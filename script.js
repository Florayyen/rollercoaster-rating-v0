// Initial Achterbahnen-Daten
const achterbahnen = JSON.parse(localStorage.getItem("achterbahnen")) || [
  { name: "Achterbahn 1", elo: 1200 },
  { name: "Achterbahn 2", elo: 1200 },
  { name: "Achterbahn 3", elo: 1200 },
  { name: "Achterbahn 4", elo: 1200 },
];

// Elemente abrufen
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const rankingList = document.getElementById("ranking-list");

// Zufällige Achterbahnen anzeigen
function showRandomChoices() {
  const [a, b] = pickTwoRandom(achterbahnen);
  option1.textContent = a.name;
  option2.textContent = b.name;

  // Klick-Handler setzen
  option1.onclick = () => vote(a, b);
  option2.onclick = () => vote(b, a);
}

// Zwei verschiedene Achterbahnen auswählen
function pickTwoRandom(list) {
  let index1 = Math.floor(Math.random() * list.length);
  let index2;
  do {
    index2 = Math.floor(Math.random() * list.length);
  } while (index1 === index2);
  return [list[index1], list[index2]];
}

// ELO-Berechnung
function calculateElo(winner, loser) {
  const k = 32;
  const probWinner = 1 / (1 + Math.pow(10, (loser.elo - winner.elo) / 400));
  const probLoser = 1 - probWinner;

  winner.elo += Math.round(k * probLoser);
  loser.elo -= Math.round(k * probLoser);
}

// Abstimmung verarbeiten
function vote(winner, loser) {
  calculateElo(winner, loser);
  saveData();
  updateRanking();
  showRandomChoices();
}

// Ranking aktualisieren
function updateRanking() {
  rankingList.innerHTML = "";
  achterbahnen
    .sort((a, b) => b.elo - a.elo)
    .forEach((bahn) => {
      const li = document.createElement("li");
      li.textContent = `${bahn.name}: ${bahn.elo}`;
      rankingList.appendChild(li);
    });
}

// Daten speichern
function saveData() {
  localStorage.setItem("achterbahnen", JSON.stringify(achterbahnen));
}

// Start
updateRanking();
showRandomChoices();
