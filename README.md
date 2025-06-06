# name
chat a adopter
## description
Ce projet est une petite application web interactive permettant d’afficher un catalogue de races de chats à adopter, en s'appuyant sur l’API publique TheCatAPI (https://api.thecatapi.com/v1/breeds). Les données récupérées incluent le nom, l’origine, et l’image de chaque race. Si une image n’est pas disponible, une image par défaut est utilisée pour assurer un affichage homogène. L’interface permet également à l’utilisateur de filtrer les races par pays d’origine.
Le projet repose sur trois technologies principales :

HTML : structure de base incluant un titre, un menu déroulant de filtrage (<select>), et un conteneur principal pour les cartes de chats.

CSS : mise en forme avec des cartes stylisées, alignement en grille, ombres et responsive design.

JavaScript : logique de récupération des données via fetch(), affichage dynamique dans le DOM, gestion des filtres et des événements.

Plusieurs méthodes d’itération sont utilisées :
forEach() : pour créer et insérer dynamiquement les cartes de chaque chat.
filter() : pour filtrer la liste selon le pays d’origine sélectionné.

Le projet utilise aussi plusieurs événements JavaScript :
DOMContentLoaded : déclenché lorsque le DOM est entièrement chargé, pour lancer le chargement des données via l’API.
change : appliqué au menu déroulant <select> pour détecter un changement de sélection et filtrer les chats affichés.
click : utilisé pour gérer des interactions possibles avec les cartes (par exemple, pour liker un chat).
toggle : utilisé pour activer/désactiver un affichage (ex. : mode sombre).

Ces événements permettent de rendre l’application interactive, dynamique et réactive aux actions de l’utilisateur. 

