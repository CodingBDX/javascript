## drawing box

pour centrer l'application , nous faisons un height:100vh et display:flex, et flex-direction:column qui permet de bien centrer le canvas

pour interargir avec les elements du toolbox, il faut faire un `.toolbox > *, qui selectionne l'ensemble des elements dedans

Pour faire un margin sur le dernier element `.toolbox > *:last-child {}` permet de uniquement selectionner le dernier element

## dessiner
Pour cela nous utilisons la function ctx, nous appelons d'abord l'espace ou on va draw getelementbydid (canvas)
puis nous lui indiquons la forme que ça va prendre avec un getContext 2d
ensuite ctx.beginpath pour dire que nous allons lancer un chemin
ctx.moveto ou lineto pour dire l'utilisation du pinceau que nous voulons puis un ctx.fill() pour lancer le tout

enfin en appelant les functions, nous indiquons ce que nous voulons tracer 

## add event
un addeventlistener sur le canvas sur la pression de la souris `mousedown` puis dans la function, nous indiquons que c'est la ou nous appuyons x = e.offsetx
du coup nous appliquons la function drawline sur les axe x et y en passant la variable mousemove et un isPressed sur true pour indiquer que nous maintenons le clique