// Fichier pour tester l'API

// Fonction asynchrone pour récupérer les données
async function fetchApiData() {
  try {
    const response = await fetch('https://api.fbi.gov/wanted');
    const data = await response.json();
    
   // console.log('Données récupérées :', data); OK
    
   const container = document.getElementById('wanted-list'); //DOM

   // Parcourir les données et créer une card pour chaque personne
   data.items.forEach(person => {
   
       // Création de la card
       const card = document.createElement('div');
       card.classList.add('card');

       // Ajouter l'image
       const img = document.createElement('img');
       img.src = person.images[0].thumb;
       img.alt = person.title || 'Image non disponible';

       // Ajouter le titre
       const title = document.createElement('h2');
       title.textContent = person.title || 'Nom non disponible';

       // Ajouter tout dans la card
       card.appendChild(img);
       card.appendChild(title);

       // Ajouter un gestionnaire de clic
       card.addEventListener('click', () => {
        window.location.href = `details.html?pathId=${person.pathId}`;
      });
      
       // Ajouter la card au conteneur
       container.appendChild(card);
   });

  } catch (error) {
    // Gestion des erreurs
    console.error('Erreur lors de la récupération des données :', error);
  }
}

function showDetails(person) {
  const detailsContainer = document.getElementById('details'); // Conteneur pour les détails
  detailsContainer.innerHTML = ''; // Vider les anciens détails

  // Créer un conteneur de détails
  const detailCard = document.createElement('div');
  detailCard.classList.add('detail-card');

  // Ajouter une image
  const img = document.createElement('img');
  img.src = person.images[0]?.original || 'https://via.placeholder.com/400';
  img.alt = person.title || 'Image non disponible';

  // Ajouter un titre
  const title = document.createElement('h2');
  title.textContent = person.title || 'Nom non disponible';

  // Ajouter une description
  const description = document.createElement('p');
  description.textContent = person.description || 'Pas de description disponible';

  // Ajouter tout dans la carte de détails
  detailCard.appendChild(img);
  detailCard.appendChild(title);
  detailCard.appendChild(description);

  // Afficher la carte de détails
  detailsContainer.appendChild(detailCard);
}

// Appeler la fonction
fetchApiData();