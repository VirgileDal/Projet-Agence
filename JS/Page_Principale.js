class Destination {
    constructor (lieu, prix, image, id) {
        this.lieu = lieu;
        this.prix = prix;
        this.image = image;
        this.id = id;
    }
}

let moscou = new destination('Moscou', 300, '/images/Moscou.jpg', 0);
let bamako = new destination('Bamako', 617, '/images/Ajaccio.jpg', 1);
let ajaccio = new destination('Ajaccio', 457, '/images/Ajaccio.jpg', 2);
let milan = new destination('Milan', 358, '/images/Milan.jpg', 3);

Tab = [moscou, bamako, ajaccio, milan]

let template = document.querySelector("#destination2");
for (const k of Tableau) {
    let clone = document.importNode(template.content, true);
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{lieu}}/g, k.lieu)
        .replace(/{{prix}}/g, k.prix);
        clone.firstElementChild.innerHTML = newContent
        document.body.appendChild(clone);
}