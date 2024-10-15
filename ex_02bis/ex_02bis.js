document.getElementById('loadDataButton').addEventListener('click', loadTemperatureData);

async function loadTemperatureData() {
  const url = 'temps.txt';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();
    parseAndDisplayData(data);

  } catch (error) {
    console.error('Erreur lors de la récupération des données:', error);
    document.getElementById('dataDisplay').textContent = 'Erreur lors du chargement des données.';
  }
}

function parseAndDisplayData(data) {

  const rows = data.split('\n');
  let result = '';
  rows.forEach(row => {
    const columns = row.split(',');
    const year = columns[0];
    const januaryTemp = columns[1];

    if (year && januaryTemp) {
      result += `${year}: January Temperature = ${januaryTemp}°C\n`;
    }
  });
  document.getElementById('dataDisplay').textContent = result;
}























