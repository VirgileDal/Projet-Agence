class Destination {
    constructor (lieu, prix_enfant, prix_adulte, nb_adultes, nb_enfants) {
        this.lieu = lieu;
        this.prix_adulte = prix_adulte;
        this.prix_enfant = prix_enfant;
        this.nb_adultes = nb_adultes;
        this.nb_enfants = nb_enfants;
    }
    prix_total () {
        return this.prix_adulte * this.nb_adultes + this.prix_enfant * this.nb_enfants;
    }
}