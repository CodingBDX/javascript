# triangle css loader

pour réaliser un triangle il faut faire un before et un after sur une propriete
contet:''; vide puis un border avec la taille l'aspect et la couleur `border: 50px solid transparent;`
puis on applique une couleur au border-bottom-color qui permet de realiser le triangle

## duplication triangle
ensuite, nous pouvons agir sur la direction du triangle avec un `transform: rotate(190deg)`

## animation
un @keyframe qui explique la position de l'element sur une echelle de temps en %
qui agit sur l'element transform (triangle)

ensuite pour enclencher il faut appliquer une animation sur l'element `animation: name_of_animation linear time loop 0.5s` 

pour appliquer sur un 2eme triangle, on duplique le keyframe et on appliquer un autre nom puis on l'applique a un autre element en changent le deg de rotation