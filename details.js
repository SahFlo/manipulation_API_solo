// Fonction pour récupérer le pathId depuis l'URL
// Lorsqu'on clique sur une card, la page redirige vers une URL contenant le pathId comme paramètre de requête :

function getPathIdFromURL() {
    const params = new URLSearchParams(window.location.search);     
    return params.get('pathId');
  }
  
// Résumé
// window.location.search : extrait la chaîne brute des paramètres d'une URL.
// URLSearchParams : transforme cette chaîne en un objet lisible et manipulable.
// params.get('clé') : récupère la valeur associée à une clé spécifique.


  // Fonction pour afficher les détails
  async function fetchAndDisplayDetails() {
    const pathId = getPathIdFromURL();
    if (!pathId) {
      document.getElementById('details-container').innerText = 'Aucun identifiant trouvé dans l’URL.';
      return;
    }
  
    try {
      const response = await fetch('https://api.fbi.gov/wanted');
      const data = await response.json();
  
      // Trouver la personne correspondant au pathId
      const person = data.items.find(item => item.pathId === pathId);
  
      if (!person) {
        document.getElementById('details-container').innerText = 'Aucune personne trouvée pour cet identifiant.';
        return;
      }
  
      // Afficher les informations
      const container = document.getElementById('details-container');
  
      const img = document.createElement('img');
      img.src = person.images[0]?.original || 'https://via.placeholder.com/400';
      img.alt = person.title || 'Image non disponible';
  
      const title = document.createElement('h2');
      title.textContent = person.title || 'Nom non disponible';
  
      const description = document.createElement('p');
      description.textContent = person.description || 'Pas de description disponible';
  
      container.appendChild(img);
      container.appendChild(title);
      container.appendChild(description);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      document.getElementById('details-container').innerText = 'Erreur lors de la récupération des données.';
    }
  }
  
  // Appeler la fonction pour afficher les détails
  fetchAndDisplayDetails();