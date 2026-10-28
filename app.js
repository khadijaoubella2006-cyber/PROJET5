let livres = [
  { titre: "Le Petit Prince", auteur: "Saint-Exupéry", categorie: "Classique", prix: "80 DH", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzokjOMjBQVRYOfC0eAkwwpDlLBuCf8B-Dkjo3vdHyOw&s=10" },
  { titre: "L'Étranger", auteur: "Camus", categorie: "Roman", prix: "90 DH", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoANx-WtrNPdppXI8LB6hviC1fnVIhlAlytjTEkBhGg&s=10"},
  { titre: "Cosmos", auteur: "Carl Sagan", categorie: "Science", prix: "120 DH", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDvyxl2UlKikyZxSGMLl3ohvw46Us8FTg_Z7FJ0ru-Q&s=10" },
  { titre: "Une brève histoire du temps", auteur: "Hawking", categorie: "Science", prix: "150 DH", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGofr2VtPD_YWlPi5vc04aNflsOGuHNQovUiq08fHYeg&s=10" },
  { titre: "Histoire du Maroc", auteur: "Benjelloun", categorie: "Histoire", prix: "140 DH", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6IYH5mPjRnC9zwkJonMvguG4UFX3ddEI_Q7xmncJHQ&s=10" }
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
    zone.innerHTML += `
      <div class="livre">
        <img class="cover" src="${livre.image}" alt="${livre.titre}">
        <span class="badge-cat ${livre.categorie}">${livre.categorie}</span>
        <h3>${livre.titre}</h3>
        <p class="auteur">${livre.auteur}</p>
        <div class="livre-footer">
          <span class="prix ${livre.colorClass}">${livre.prix}</span>
          
      </div>`;
  });
  document.getElementById("nbLivres").innerText = " " + count + " livres";
}
document.getElementById("searchInput").addEventListener("input", afficher);
document.getElementById("filtreCategorie").addEventListener("change", afficher);
afficher();