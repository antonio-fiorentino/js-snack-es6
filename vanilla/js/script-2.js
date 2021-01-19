// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono...
// solo nomi e falli subiti e stampiamo tutto in console.
function randomNumber(min, max) {
  var result = Math.floor(Math.random() * (max + 1 - min) + min);
  return result;
};

var squadre = [
  {'nome': 'Milan', 'punti': '0', 'falliSubiti': '0'},
  {'nome': 'Inter', 'punti': '0', 'falliSubiti': '0'},
  {'nome': 'Roma', 'punti': '0', 'falliSubiti': '0'},
  {'nome': 'Lazio', 'punti': '0', 'falliSubiti': '0'},
  {'nome': 'Napoli', 'punti': '0', 'falliSubiti': '0'},
  {'nome': 'Cosenza', 'punti': '0', 'falliSubiti': '0'},
];

for (let i = 0; i < squadre.length; i++) {
  let thisTeam = squadre[i]
  thisTeam.punti = randomNumber(0, 80);
  thisTeam.falliSubiti  = randomNumber(0, 50);
}

const nuovaSquadra = [];

for (let i = 0; i < squadre.length; i++) {
  let thisTeam = squadre[i];

  const{'nome', 'falliSubiti'} = thisTeam;
  nuovaSquadra.push({
    'nome',
    'falliSubiti',
  })
}
 console.log(squadre);
