/*            EXERCICE OBJECT
 * Declarer un Objet student avec name , favoriteFood et city 
 * Recuperer le nombre de caracteres dans chaques proprieté puis les additionner pour obtenir un nombre 
 * Si le nombre est pair, afficher dans la console "pair"
 * Si le nombre est impair, afficher dans la console "impaire"
 * Plusieurs solutions possibles 
 * Object.keys()=> recupère les proprieté 
 * Object.values() => recupère les valeurs
 */

let student={ // Créer le dictionnaire avec clés et valeurs
    name: "Gabriel",
    favoriteFood: "Roïgabrageldi",
    city: "Marines"
};

let valeurs=Object.values(student); // Sort les valeurs de student pour les mettre dans valeurs
console.log(valeurs);
let nombre=0;  // Définit nombre
valeurs.forEach((valeurs)=> { // Pour toute valeur présente dans valeurs, on compte sa longueur et n l'ajoute à nombre
    nombre+=valeurs.length
})
if((nombre%2)==0){ // Si le reste de nombre%2 est 0, alors il est pair, sinon impair
    console.log("Pair");
}else{
    console.log("Impair");
}