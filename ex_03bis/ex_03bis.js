let currentPage = 1;
let searchQuery = '';

function display_planet_info(planets) {
    const ul = document.getElementById('planet-list');
    ul.innerHTML = '';

    planets.forEach(planet => {
        const li = document.createElement('li');
        li.classList.add('planet');
        li.innerHTML = `
            <strong>Nom:</strong> ${planet.name}<br>
            <strong>Diamètre:</strong> ${planet.diameter} km<br>
            <strong>Climat:</strong> ${planet.climate}<br>
            <strong>Terrain:</strong> ${planet.terrain}<br>
            <strong>Population:</strong> ${planet.population}
        `;
        ul.appendChild(li);
    });
}

async function fetch_planet_info(page = 1, search = '') {

    let url = `https:

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`);
        }
        const data = await response.json();
        let planets = data.results;
        if (search) {
            planets = planets.filter(planet => planet.name.toLowerCase().includes(search.toLowerCase()));
        }
        display_planet_info(planets);
        document.getElementById('prev').disabled = !data.previous;
        document.getElementById('next').disabled = !data.next;
    } catch (error) {
        console.error('Erreur lors de la récupération des données des planètes:', error);
    }
}
document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    fetch_planet_info(currentPage, searchQuery);
});
document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetch_planet_info(currentPage, searchQuery);
    }
});
document.getElementById('search').addEventListener('input', (event) => {
    searchQuery = event.target.value;
    fetch_planet_info(currentPage, searchQuery);
});























