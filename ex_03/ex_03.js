function display_planet_info(planet) {
    const ul = document.getElementById('planet-list');
    const li = document.createElement('li');
    li.classList.add('planet');
    li.innerHTML = `
        <strong>Nom:</strong> ${planet.name}<br>
        <strong>Diamètre:</strong> ${planet.diameter} km<br>
        <strong>Climat:</strong> ${planet.climate}<br>
        <strong>Terrain:</strong> ${planet.terrain}<br>
        <strong>Population:</strong> ${planet.population}`;
    ul.appendChild(li);
}

async function fetch_planet_info(planetId) {
    const url = `https:
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }
        const planet = await response.json();
        display_planet_info(planet);
    } catch (error) {
        console.error('Erreur lors de la récupération des données de la planète:', error);
    }
}
const numberOfPlanets = 42; 
document.getElementById('loadPlanetButton').addEventListener('click', function() {
    for (let i = 1; i <= numberOfPlanets; i++) {
        fetch_planet_info(i);
    }
});
























