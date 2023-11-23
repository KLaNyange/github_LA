export class Cs29{
    constructor(prenom, sexe, age){
        this.prenom = prenom,
        this.sexe = sexe,
        this.age = age
    }
    sePresenter(){
        console.log(`coucou je suis ${this.prenom}`);
    }
}