import { ranya, mouad } from  './instances.js';
import { alixe, maison, couteau } from  './objet.js';
export function histoire() {
    console.log("il etait un fois deux personnage");
    ranya.sePresenter()
    mouad.sePresenter()
    console.log("Fin de l'histoire");
    console.log(`${alixe.nom} est dans la ${maison.nom} et tient un ${couteau.nom}`);
}