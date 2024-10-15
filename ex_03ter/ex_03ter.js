document.addEventListener('DOMContentLoaded', () => {

    const planetList = document.getElementById('planet-list');
    const planetDetails = document.getElementById('planet-details');

    fetch('https:
        .then(response => response.json())
        .then(data => {
            displayPlanets(data.results);
        })
        .catch(error => console.error('Error fetching planets:', error));

    function displayPlanets(planets) {
        planets.forEach(planet => {
            const li = document.createElement('li');
            li.classList.add('planet');
            li.textContent = planet.name;
            li.addEventListener('click', () => displayPlanetDetails(planet));
            planetList.appendChild(li);
        });
    }

    function displayPlanetDetails(planet) {

        planetDetails.innerHTML = '';
        planetDetails.innerHTML = `
            <h2>${planet.name}</h2>
            <p><strong>Diameter:</strong> ${planet.diameter}</p>
            <p><strong>Climate:</strong> ${planet.climate}</p>
            <p><strong>Terrain:</strong> ${planet.terrain}</p>
            <p><strong>Population:</strong> ${planet.population}</p>`;
        fetchFilms(planet.films);
        fetchResidents(planet.residents);
    }
    function fetchFilms(films) {
        const filmList = document.createElement('ul');
        filmList.innerHTML = '<h3>Films:</h3>';
        planetDetails.appendChild(filmList);

        films.forEach(filmUrl => {
            fetch(filmUrl)
                .then(response => response.json())
                .then(film => {
                    const li = document.createElement('li');
                    li.textContent = film.title;
                    filmList.appendChild(li);
                })
                .catch(error => console.error('Error fetching films:', error));
        });
    }
    function fetchResidents(residents) {
        const residentList = document.createElement('ul');
        residentList.innerHTML = '<h3>Residents:</h3>';
        planetDetails.appendChild(residentList);

        if (residents.length === 0) {
            residentList.innerHTML = '<p>No residents</p>';
            return;
        }

        residents.forEach(residentUrl => {
            fetch(residentUrl)
                .then(response => response.json())
                .then(resident => {
                    const li = document.createElement('li');
                    li.textContent = resident.name;
                    residentList.appendChild(li);
                })
                .catch(error => console.error('Error fetching residents:', error));
        });
    }
});
























