
fetch('https:
  .then(response => response.json())
  .then(data => {
    const dogImg = document.getElementById('dog-image');
    dogImg.src = data.message;
    dogImg.classList.add('loaded');
  })
  .catch(error => console.error('Erreur lors du chargement de l\'image de chien:', error));


const weatherApiKey = 'VOTRE_CLE_API';
fetch(`https:
  .then(response => response.json())
  .then(data => {
    if (data.cod === 200) {
      document.getElementById('weather-data').textContent = 
        `Météo à ${data.name} : ${data.weather[0].description}, Température : ${data.main.temp}°C`;
    } else {
      document.getElementById('weather-data').textContent = "Erreur: Impossible de charger la météo.";
    }
  })
  .catch(error => console.error('Erreur lors du chargement de la météo:', error));


fetch('https:
  .then(response => response.json())
  .then(data => {
    document.getElementById('joke').textContent = data.joke;
  })
  .catch(error => console.error('Erreur lors du chargement de la blague:', error));


fetch('https:
  .then(response => response.json())
  .then(data => {
    document.getElementById('crypto-price').textContent = 
      `Prix du Bitcoin : $${data.bitcoin.usd}`;
  })
  .catch(error => console.error('Erreur lors du chargement du prix du Bitcoin:', error));


const nasaApiKey = 'VOTRE_CLE_API';
fetch(`https:
  .then(response => response.json())
  .then(data => {
    const nasaImg = document.getElementById('nasa-image');
    nasaImg.src = data.url;
    nasaImg.classList.add('loaded');
    document.getElementById('nasa-description').textContent = data.explanation;
  })
  .catch(error => console.error('Erreur lors du chargement de l\'image NASA:', error));
























