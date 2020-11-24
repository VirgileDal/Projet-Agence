class Destination {
    constructor (lieu, petit_dej, prix_adulte, nb_adultes, nb_enfants) {
        this.lieu = lieu;
        this.petit_dej = petit_dej;
        this.prix_adulte = prix_adulte;
        this.nb_adultes = nb_adultes;
        this.nb_enfants = nb_enfants;
    }
    prix_total () {
        return this.prix_adulte * (this.nb_adultes + 0,4) + 12 * petit_dej;
    }
}