let livres = [
  { titre: "Le Petit Prince", auteur: "Saint-Exupéry", categorie: "Roman" },
  { titre: "L'Étranger", auteur: "Camus", categorie: "Roman" },
  { titre: "Cosmos", auteur: "Carl Sagan", categorie: "Science" },
  { titre: "Une brève histoire du temps", auteur: "Hawking", categorie: "Science" },
  { titre: "Histoire du Maroc", auteur: "Benjelloun", categorie: "Histoire" }
];
function afficher(){
  let zone = document.getElementById("zonePrincipale");
  let recherche = document.getElementById("searchInput").value.toLowerCase();
  let filtre = document.getElementById("filtreCategorie").value;
  zone.innerHTML = "";
  let count = 0;
  livres.forEach((livre) => {
    if (!livre.titre.toLowerCase().includes(recherche) && !livre.auteur.toLowerCase().includes(recherche)) return;
    if (filtre !== "tous" && livre.categorie !== filtre) return;
    count++;
    zone.innerHTML += `<div class="livre">
      <h3>${livre.titre}</h3>
      <p>${livre.auteur} - ${livre.categorie}</p>
    </div>`;
  });
  document.getElementById("nbLivres").innerText = count + " livres";
}
document.getElementById("searchInput").addEventListener("input", afficher);
document.getElementById("filtreCategorie").addEventListener("change", afficher);
afficher();