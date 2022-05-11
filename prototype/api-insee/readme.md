# api insee
fetch de api officiel de l'insee

## recuperation credential
pour autoriser le fetch, il faut recuperer la cle sur le site de l'insee et faire un 



`curl -k -d "grant_type=client_credentials" \
            -H "Authorization: Basic VzVUOXV1N2d3U2x3V2txMDlwNTJtMFp2TTUwYTp2TzR2cnpWYlFQSkRQUHl4QUdZcE1mQmphbm9h" \
             https://api.insee.fr/token`

on recupere l'id ou la class dans lequel on veut travailler
const ul = document.getElementById('entreprises'); puis on lui attribue une variable

`const url = 'https://entreprise.data.gouv.fr/api/sirene/v1/full_text/montpellier';`

pour rendre la request plus lisible, on compact l'url dans une variable

la function pour recuperer l'api est construite comme ceci
fetch(url).then((resp) => resp.json()).then(function (data) {}.catch(function (error) {
console.log(error);
});

a la fin on catch les errors

generalement on nomme data, les informations recuperer
`let entreprises = data.etablissement;`
avec le nom de la variable json pour recuperer les données qui nous interesses ici etablissement



return entreprises.map(function (entreprise) {
ensuite nous pouvons map ou foreach car la donnée entreprise contient plusieurs informations


`let td = document.createElement('td');`
Il faut bien sur creer plusieurs elements pour que nos données soit enregistrées dans un tableau


`document.querySelector('#entreprise_nom').innerHTML = `${entreprise.l1_normalisee}`;`
nous prenoms l'id que nous avons choisi puis nous lui passons .innerhtml qui permet d'injecter nos données dans notre fichier html, ici `${entreprise.l1_normalisee} = à data.etablissement.l1_normalisee


eviter d'afficher les valeurs null, il suffit simplement de faire un else
```php
${entreprise.ladonnee ? entrepriseladonnee : "pas d'adresse"}
```
on afficher la donnee ou rien ''
