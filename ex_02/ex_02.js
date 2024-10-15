document.getElementById('loadDataButton').addEventListener('click', loadTemperatureData);

async function loadTemperatureData() {
  const url = 'temps.txt';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.text();

    document.getElementById('dataDisplay').textContent = data;

  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    document.getElementById('dataDisplay').textContent = 'Erreur lors du chargement des données.';
  }
}























