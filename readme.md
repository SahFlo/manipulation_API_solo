// Fonction pour récupérer le pathId depuis l'URL
// Lorsqu'on clique sur une card, la page redirige vers une URL contenant le pathId comme paramètre de requête :

function getPathIdFromURL() {
   
    //Création d'un objet URLSearchParams
const params = new URLSearchParams(window.location.search); 
    //URLSearchParams() est une méthode JS
    //window.location.search : cette partie récupère tout ce qui se trouve après le "?" dans l'URL.
    
return params.get('pathId');
    //Cela signifie : "Va chercher la valeur associée à la clé pathId dans les paramètres de l'URL".
  }
  
// Résumé
// window.location.search : extrait la chaîne brute des paramètres d'une URL.
// URLSearchParams : transforme cette chaîne en un objet lisible et manipulable.
// params.get('clé') : récupère la valeur associée à une clé spécifique.