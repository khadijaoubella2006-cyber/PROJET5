TP5 - Travail Collaboratif avec Git et GitHub

 Description du projet:
Ce projet est une présentation simple d'une page web, sous le thème d'une bibliothèque.
Il a été réalisé dans le cadre du TP5 pour apprendre le travail collaboratif avec Git et GitHub.

Le site permet de découvrir la bibliothèque et d'utiliser deux petites fonctionnalités interactives.

 Fonctionnalités
1.  Affichage de la présentation de la bibliothèque
2.  Interactivité dynamique avec JavaScript (via `app.js`)

Structure du projet
index.html  : La structure de base de la page web
 style.css et bootstrap  : La mise en forme et le design de la page
  app.js : L'interactivité et la logique dynamique de la page
  README.md   : La documentation du projet
  
 Comment lancer le projet
1. Cloner le dépôt :
```bash
git clone https://github.com/khadijaoubella2006-cyber/PROJET5

Workflow Git utilisé 
Création et publication du dépôt sur GitHub
Création d'une branche pour l'ajout HTML / CSS
Création d'un Pull Request pour fusionner la branche
Récupération du projet avec git pull
Gestion et résolution d'un conflit lors de la fusion
Commandes principales utilisées:
git clone <url-du-depot>
git checkout -b ajout-html-css
git add .
git commit -m "Ajout html css"
git push origin ajout-html-css
git pull origin main
 Collaboration:
 Ce projet a été réalisé en binôme, chaque membre a travaillé sur sa propre branche avant de fusionner le travail via un Pull Request sur GitHub.
##  Conflit et Résolution de conflit

Pendant le travail en binôme, nous avons rencontré un conflit Git.
Les deux membres ont modifié le même fichier en même temps, et Git n'a pas pu fusionner automatiquement.

### Ce qui s'est passé :
- Khadija Ouhammane a modifié le fichier sur sa branche
- Khadija Oubella a modifié le même fichier sur sa branche
- Lors du `git pull` / fusion, Git a affiché un message de conflit

### Comment on a résolu le conflit :
1. On a ouvert le fichier qui contient le conflit
2. On a trouvé les marqueurs de Git :
```bash
<<<<<<< HEAD
... notre version ...

... version de l'autre branche ...
>>>>>>> ajout-html-css
On a choisi la bonne version et on a supprimé les marqueursOn a validé la résolution avec 
git add .
git commit -m "Résolution de conflit"
git push origin main