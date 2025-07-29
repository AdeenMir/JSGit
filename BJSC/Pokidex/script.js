const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const input = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

const img = document.getElementById('pokeImg');
const nameEl = document.getElementById('pokeName');
const idEl = document.getElementById('pokeId');
const typesEl = document.getElementById('pokeTypes');
const heightEl = document.getElementById('pokeHeight');
const weightEl = document.getElementById('pokeWeight');
const statsEl = document.getElementById('pokeStats');
const messageEl = document.getElementById('message');

async function fetchPokemon(query) {
  try {
    messageEl.textContent = "Loading...";
    const res = await fetch(`${API_URL}${query.toLowerCase()}`);
    if (!res.ok) throw new Error("Pokémon not found!");
    const data = await res.json();
    renderPokemon(data);
    messageEl.textContent = "";
  } catch (err) {
    messageEl.textContent = err.message;
    clearData();
  }
}

function renderPokemon(poke) {
  img.src = poke.sprites.other["official-artwork"].front_default || "";
  img.alt = poke.name;

  nameEl.textContent = capitalize(poke.name);
  idEl.textContent = `#${poke.id}`;
  typesEl.textContent = poke.types.map(t => capitalize(t.type.name)).join(', ');
  heightEl.textContent = `${poke.height / 10} m`;
  weightEl.textContent = `${poke.weight / 10} kg`;

  statsEl.innerHTML = '';
  poke.stats.forEach(stat => {
    const li = document.createElement('li');
    li.textContent = `${capitalize(stat.stat.name)}: ${stat.base_stat}`;
    statsEl.appendChild(li);
  });
}

function clearData() {
  img.src = "";
  nameEl.textContent = "Name";
  idEl.textContent = "#000";
  typesEl.textContent = "---";
  heightEl.textContent = "---";
  weightEl.textContent = "---";
  statsEl.innerHTML = "";
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

searchBtn.addEventListener('click', () => {
  const query = input.value.trim();
  if (query) fetchPokemon(query);
});
