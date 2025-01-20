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
  { name: "Jurassic World: The Ride", park: "Universal Studios Hollywood", elo: 1200 },
  { name: "California Screamin’", park: "Disney California Adventure", elo: 1200 },
{ name: "Rock 'n' Roller Coaster", park: "Disney's Hollywood Studios", elo: 1200 },
{ name: "Radiator Springs Racers", park: "Disney California Adventure", elo: 1200 },
{ name: "Journey to Atlantis", park: "SeaWorld Orlando", elo: 1200 },
{ name: "Iron Rattler", park: "Six Flags Fiesta Texas", elo: 1200 },
{ name: "Texas Giant", park: "Six Flags Over Texas", elo: 1200 },
{ name: "Wonder Woman Golden Lasso Coaster", park: "Six Flags Fiesta Texas", elo: 1200 },
{ name: "Superman Krypton Coaster", park: "Six Flags Fiesta Texas", elo: 1200 },
{ name: "Nitro", park: "Six Flags Great Adventure", elo: 1200 },
{ name: "Medusa", park: "Six Flags Discovery Kingdom", elo: 1200 },
{ name: "Viper", park: "Six Flags Magic Mountain", elo: 1200 },
{ name: "Colossus the Fire Dragon", park: "Lagoon", elo: 1200 },
{ name: "Cannibal", park: "Lagoon", elo: 1200 },
{ name: "Wild Mouse", park: "Lagoon", elo: 1200 },
{ name: "Monster", park: "Adventureland (Iowa)", elo: 1200 },
{ name: "Outlaw Run", park: "Silver Dollar City", elo: 1200 },
{ name: "Time Traveler", park: "Silver Dollar City", elo: 1200 },
{ name: "Powder Keg", park: "Silver Dollar City", elo: 1200 },
{ name: "Wildfire", park: "Silver Dollar City", elo: 1200 },
{ name: "Dragon Khan", park: "PortAventura Park", elo: 1200 },
{ name: "Red Force", park: "Ferrari Land", elo: 1200 },
{ name: "Flying Aces", park: "Ferrari World", elo: 1200 },
{ name: "Formula Rossa", park: "Ferrari World", elo: 1200 },
{ name: "Yukon Striker", park: "Canada's Wonderland", elo: 1200 },
{ name: "Behemoth", park: "Canada's Wonderland", elo: 1200 },
{ name: "Vortex", park: "Canada's Wonderland", elo: 1200 },
{ name: "Thunder Run", park: "Canada's Wonderland", elo: 1200 },
{ name: "The Swarm", park: "Thorpe Park", elo: 1200 },
{ name: "Saw: The Ride", park: "Thorpe Park", elo: 1200 },
{ name: "Stealth", park: "Thorpe Park", elo: 1200 },
{ name: "Nemesis Inferno", park: "Thorpe Park", elo: 1200 },
{ name: "Oblivion", park: "Alton Towers", elo: 1200 },
{ name: "Rita", park: "Alton Towers", elo: 1200 },
{ name: "Galactica", park: "Alton Towers", elo: 1200 },
{ name: "Wicker Man", park: "Alton Towers", elo: 1200 },
{ name: "Black Mamba", park: "Phantasialand", elo: 1200 },
{ name: "Winja’s Fear & Force", park: "Phantasialand", elo: 1200 },
{ name: "Chiapas", park: "Phantasialand", elo: 1200 },
{ name: "Talocan", park: "Phantasialand", elo: 1200 },
{ name: "Fluch von Novgorod", park: "Hansa-Park", elo: 1200 },
{ name: "Schwur des Kärnan", park: "Hansa-Park", elo: 1200 },
{ name: "Desert Race", park: "Heide Park Resort", elo: 1200 },
{ name: "Krake", park: "Heide Park Resort", elo: 1200 },
{ name: "Big Loop", park: "Heide Park Resort", elo: 1200 },
{ name: "Scream", park: "Heide Park Resort", elo: 1200 },
{ name: "Flying Dinosaur", park: "Universal Studios Japan", elo: 1200 },
{ name: "Hollywood Dream: The Ride", park: "Universal Studios Japan", elo: 1200 },
{ name: "Space Fantasy", park: "Universal Studios Japan", elo: 1200 },
{ name: "Do-Dodonpa", park: "Fuji-Q Highland", elo: 1200 },
{ name: "Takabisha", park: "Fuji-Q Highland", elo: 1200 },
{ name: "Eejanaika", park: "Fuji-Q Highland", elo: 1200 },
{ name: "Fujiyama", park: "Fuji-Q Highland", elo: 1200 },
{ name: "Steel Dragon 2000", park: "Nagashima Spa Land", elo: 1200 },
{ name: "Arashi", park: "Nagashima Spa Land", elo: 1200 },
{ name: "Acrobat", park: "Nagashima Spa Land", elo: 1200 },
{ name: "White Cyclone", park: "Nagashima Spa Land", elo: 1200 },
{ name: "T-Express", park: "Everland", elo: 1200 },
{ name: "Atlantis Adventure", park: "Lotte World", elo: 1200 },
{ name: "Battlestar Galactica: Human", park: "Universal Studios Singapore", elo: 1200 },
{ name: "Battlestar Galactica: Cylon", park: "Universal Studios Singapore", elo: 1200 },
{ name: "Hair Raiser", park: "Ocean Park Hong Kong", elo: 1200 },
{ name: "Abyss Turbo Drop", park: "Ocean Park Hong Kong", elo: 1200 },
{ name: "Timber Mountain Log Ride", park: "Knott's Berry Farm", elo: 1200 },
{ name: "GhostRider", park: "Knott's Berry Farm", elo: 1200 },
{ name: "Xcelerator", park: "Knott's Berry Farm", elo: 1200 },
{ name: "Silver Bullet", park: "Knott's Berry Farm", elo: 1200 },
{ name: "HangTime", park: "Knott's Berry Farm", elo: 1200 },
{ name: "Montezooma's Revenge", park: "Knott's Berry Farm", elo: 1200 },
{ name: "Patriot", park: "Worlds of Fun", elo: 1200 },
{ name: "Mamba", park: "Worlds of Fun", elo: 1200 },
{ name: "Timber Wolf", park: "Worlds of Fun", elo: 1200 },
{ name: "Wild Thing", park: "Valleyfair", elo: 1200 },
{ name: "Renegade", park: "Valleyfair", elo: 1200 },
{ name: "Steel Venom", park: "Valleyfair", elo: 1200 },
{ name: "Corkscrew", park: "Valleyfair", elo: 1200 },
{ name: "Tatsu", park: "Six Flags Magic Mountain", elo: 1200 },
{ name: "Full Throttle", park: "Six Flags Magic Mountain", elo: 1200 },
{ name: "Green Lantern: First Flight", park: "Six Flags Magic Mountain", elo: 1200 },
{ name: "Superman Escape from Krypton", park: "Six Flags Magic Mountain", elo: 1200 },
{ name: "Ninja", park: "Six Flags Magic Mountain", elo: 1200 },
{ name: "Revolution", park: "Six Flags Magic Mountain", elo: 1200 },
{ name: "Apocalypse", park: "Six Flags Magic Mountain", elo: 1200 },
{ name: "Batman The Ride", park: "Six Flags Over Georgia", elo: 1200 },
{ name: "Goliath", park: "Six Flags Over Georgia", elo: 1200 },
{ name: "Mind Bender", park: "Six Flags Over Georgia", elo: 1200 },
{ name: "Superman: Ultimate Flight", park: "Six Flags Over Georgia", elo: 1200 },
{ name: "The Great American Scream Machine", park: "Six Flags Over Georgia", elo: 1200 },
{ name: "Python", park: "Busch Gardens Tampa Bay", elo: 1200 },
{ name: "Vekoma Boomerang", park: "Multiple Parks", elo: 1200 },
{ name: "Vortex", park: "Carowinds", elo: 1200 },
{ name: "Afterburn", park: "Carowinds", elo: 1200 },
{ name: "Ricochet", park: "Carowinds", elo: 1200 },
{ name: "Copperhead Strike", park: "Carowinds", elo: 1200 },
{ name: "Intimidator", park: "Carowinds", elo: 1200 },
{ name: "Thunder Road", park: "Carowinds", elo: 1200 },
{ name: "Dueling Dragons", park: "Universal’s Islands of Adventure", elo: 1200 },
{ name: "Fireball", park: "Dreamland Margate", elo: 1200 },
{ name: "Thunderbolt", park: "Dreamland Margate", elo: 1200 },
{ name: "Scenic Railway", park: "Dreamland Margate", elo: 1200 },
{ name: "Mine Train", park: "Dollywood", elo: 1200 },
{ name: "Mystery Mine", park: "Dollywood", elo: 1200 },
{ name: "Barnstormer", park: "Dollywood", elo: 1200 },
{ name: "Wipeout", park: "Adventure Wonderland", elo: 1200 },
{ name: "Wild Train", park: "Tripsdrill", elo: 1200 },
{ name: "Karacho", park: "Tripsdrill", elo: 1200 },
{ name: "Hals-über-Kopf", park: "Tripsdrill", elo: 1200 },
{ name: "Volldampf", park: "Tripsdrill", elo: 1200 },
{ name: "Cannibal", park: "Lagoon", elo: 1200 },
{ name: "Psyclone", park: "Magic Springs", elo: 1200 },
{ name: "Lightning Run", park: "Kentucky Kingdom", elo: 1200 },
{ name: "Kentucky Flyer", park: "Kentucky Kingdom", elo: 1200 },
{ name: "Rollo Coaster", park: "Idlewild and SoakZone", elo: 1200 },
{ name: "Phantom's Revenge", park: "Kennywood", elo: 1200 },
{ name: "Steel Curtain", park: "Kennywood", elo: 1200 },
{ name: "Thunderbolt", park: "Kennywood", elo: 1200 },
{ name: "Jack Rabbit", park: "Kennywood", elo: 1200 },
{ name: "Racer", park: "Kennywood", elo: 1200 },
{ name: "Excalibur", park: "Funtown Splashtown USA", elo: 1200 }
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

