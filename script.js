// Achterbahnen-Daten
const achterbahnen = JSON.parse(localStorage.getItem("achterbahnen")) || [
  { name: "Kingda Ka", park: "Six Flags Great Adventure", elo: 1200 },
  { name: "Top Thrill Dragster", park: "Cedar Point", elo: 1200 },
  { name: "Steel Vengeance", park: "Cedar Point", elo: 1200 },
  { name: "Millennium Force", park: "Cedar Point", elo: 1200 },
  { name: "Fury 325", park: "Carowinds", elo: 1200 },
  { name: "El Toro", park: "Six Flags Great Adventure", elo: 1200 },
  { name: "Taron", park: "Phantasialand", elo: 1200 },
  { name: "Expedition GeForce", park: "Holiday Park", elo: 1200 },
  { name: "Nemesis", park: "Alton Towers", elo: 1200 },
  { name: "Silver Star", park: "Europa-Park", elo: 1200 },
  { name: "Colossos", park: "Heide Park Resort", elo: 1200 },
  { name: "Shambhala", park: "PortAventura Park", elo: 1200 },
  { name: "Helix", park: "Liseberg", elo: 1200 },
  { name: "Twisted Colossus", park: "Six Flags Magic Mountain", elo: 1200 },
  { name: "Goliath", park: "Six Flags Magic Mountain", elo: 1200 },
  { name: "The Smiler", park: "Alton Towers", elo: 1200 },
  { name: "Intimidator 305", park: "Kings Dominion", elo: 1200 },
  { name: "Leviathan", park: "Canada's Wonderland", elo: 1200 },
  { name: "Zadra", park: "Energylandia", elo: 1200 },
  { name: "Hyperion", park: "Energylandia", elo: 1200 },
  { name: "The Voyage", park: "Holiday World", elo: 1200 },
  { name: "Iron Gwazi", park: "Busch Gardens Tampa Bay", elo: 1200 },
  { name: "Hades 360", park: "Mt. Olympus Water & Theme Park", elo: 1200 },
  { name: "The Beast", park: "Kings Island", elo: 1200 },
  { name: "Thunderhead", park: "Dollywood", elo: 1200 },
  { name: "Lightning Rod", park: "Dollywood", elo: 1200 },
  { name: "Batman: The Ride", park: "Six Flags Over Georgia", elo: 1200 },
  { name: "Raptor", park: "Cedar Point", elo: 1200 },
  { name: "Montu", park: "Busch Gardens Tampa Bay", elo: 1200 },
  { name: "Alpengeist", park: "Busch Gardens Williamsburg", elo: 1200 },
  { name: "Kraken", park: "SeaWorld Orlando", elo: 1200 },
  { name: "Mako", park: "SeaWorld Orlando", elo: 1200 },
  { name: "SheiKra", park: "Busch Gardens Tampa Bay", elo: 1200 },
  { name: "Kumba", park: "Busch Gardens Tampa Bay", elo: 1200 },
  { name: "Phoenix", park: "Knoebels", elo: 1200 },
  { name: "Mystic Timbers", park: "Kings Island", elo: 1200 },
  { name: "Wicked Cyclone", park: "Six Flags New England", elo: 1200 },
  { name: "Cyclone", park: "Luna Park", elo: 1200 },
  { name: "Superman: The Ride", park: "Six Flags New England", elo: 1200 },
  { name: "Banshee", park: "Kings Island", elo: 1200 },
  { name: "Apollo's Chariot", park: "Busch Gardens Williamsburg", elo: 1200 },
  { name: "Storm Chaser", park: "Kentucky Kingdom", elo: 1200 },
  { name: "Raging Bull", park: "Six Flags Great America", elo: 1200 },
  { name: "Maverick", park: "Cedar Point", elo: 1200 },
  { name: "X2", park: "Six Flags Magic Mountain", elo: 1200 },
  { name: "Flight of Passage", park: "Disney's Animal Kingdom", elo: 1200 },
  { name: "Guardians of the Galaxy: Cosmic Rewind", park: "EPCOT", elo: 1200 },
  { name: "Big Thunder Mountain Railroad", park: "Disneyland", elo: 1200 },
  { name: "Space Mountain", park: "Disneyland", elo: 1200 },
  { name: "Incredicoaster", park: "Disney California Adventure", elo: 1200 },
  { name: "Pirates of the Caribbean Battle for the Sunken Treasure", park: "Shanghai Disneyland", elo: 1200 },
  { name: "Wildfire", park: "Kolmården Wildlife Park", elo: 1200 },
  { name: "Lisebergbanan", park: "Liseberg", elo: 1200 },
  { name: "Kärnan", park: "Hansa-Park", elo: 1200 },
  { name: "Falcon's Fury", park: "Busch Gardens Tampa Bay", elo: 1200 },
  { name: "Blue Fire", park: "Europa-Park", elo: 1200 },
  { name: "Wodan Timburcoaster", park: "Europa-Park", elo: 1200 },
  { name: "Big Grizzly Mountain Runaway Mine Cars", park: "Hong Kong Disneyland", elo: 1200 },
  { name: "Tron Lightcycle Power Run", park: "Shanghai Disneyland", elo: 1200 },
  { name: "Icon", park: "Blackpool Pleasure Beach", elo: 1200 },
  { name: "Revolution", park: "Blackpool Pleasure Beach", elo: 1200 },
  { name: "Valravn", park: "Cedar Point", elo: 1200 },
  { name: "Rougarou", park: "Cedar Point", elo: 1200 },
  { name: "Magnum XL-200", park: "Cedar Point", elo: 1200 },
  { name: "Gemini", park: "Cedar Point", elo: 1200 },
  { name: "GateKeeper", park: "Cedar Point", elo: 1200 },
  { name: "Wildcat", park: "Hersheypark", elo: 1200 },
  { name: "Skyrush", park: "Hersheypark", elo: 1200 },
  { name: "Fahrenheit", park: "Hersheypark", elo: 1200 },
  { name: "Candymonium", park: "Hersheypark", elo: 1200 },
  { name: "Storm Runner", park: "Hersheypark", elo: 1200 },
  { name: "Cobra's Curse", park: "Busch Gardens Tampa Bay", elo: 1200 },
  { name: "Loch Ness Monster", park: "Busch Gardens Williamsburg", elo: 1200 },
  { name: "Dragon Challenge", park: "Universal's Islands of Adventure", elo: 1200 },
  { name: "Incredible Hulk Coaster", park: "Universal's Islands of Adventure", elo: 1200 },
  { name: "Revenge of the Mummy", park: "Universal Studios Orlando", elo: 1200 },
  { name: "Hagrid's Magical Creatures Motorbike Adventure", park: "Universal's Islands of Adventure", elo: 1200 },
  { name: "VelociCoaster", park: "Universal's Islands of Adventure", elo: 1200 },
  { name: "Jurassic World: The Ride", park: "Universal Studios Hollywood", elo: 1200 }
];


// Elemente abrufen
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const rankingList = document.getElementById("ranking-list");

// Zufällige Achterbahnen anzeigen
function showRandomChoices() {
  const [a, b] = pickTwoRandom(achterbahnen);
  option1.innerHTML = `<div>${a.name}</div><div>${a.park}</div>`;
  option2.innerHTML = `<div>${b.name}</div><div>${b.park}</div>`;

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
      li.textContent = `${bahn.name} (${bahn.park}): ${bahn.elo}`;
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
