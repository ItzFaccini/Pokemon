import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Lista dos 151 Pokémon originais
const pokemons = [
  "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard",
  "Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree",
  "Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata",
  "Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew",
  "Sandslash","Nidoran♀","Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking",
  "Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat",
  "Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth",
  "Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape",
  "Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra",
  "Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel",
  "Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash",
  "Slowpoke","Slowbro","Magnemite","Magneton","Farfetch’d","Doduo","Dodrio",
  "Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter",
  "Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode",
  "Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung",
  "Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan",
  "Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther",
  "Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras",
  "Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar",
  "Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres",
  "Dratini","Dragonair","Dragonite","Mewtwo","Mew"
];

app.get("/captura", (req, res) => {
  const user = req.query.user || "Um treinador misterioso";

  // 1 em 5 chance de falha
  const falha = Math.random() < 0.2;
  if (falha) {
    return res.send(`💨 ${user} jogou uma Pokébola... mas o Pokémon escapou! 😢`);
  }

  // Escolhe Pokémon aleatório
  const pokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

  // 1 em 25 chance de ser shiny
  const shiny = Math.random() < 0.04;
  const nomeFinal = shiny ? `✨ ${pokemon} SHINY ✨` : pokemon;

  res.send(`🪄 ${user} jogou uma Pokébola... e capturou um ${nomeFinal}! 🎉`);
});

app.listen(port, () => console.log(`Servidor Pokémon rodando na porta ${port}`));
