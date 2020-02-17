async function recupere_produits() {
   const resp = await fetch('data.json');
   if (resp.ok) {
      const json = await resp.json();
      return json.produits;
   }
   else throw new Error(resp.status);
}

async function affiche_produits() {
   const produits = await recupere_produits();
   console.log(produits);
}

document.addEventListener('DOMContentLoaded', function() {
   affiche_produits();
})