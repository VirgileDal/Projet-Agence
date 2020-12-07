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
let paris= new destination('Paris', 404, '/images/Paris.jpg', 4);
let abidjan = new destination('Abidjan', 856, '/images/Abidjan.jpg', 5);
let mexico= new destination('Mexique', 770,'/images/Mexico.jpg', 6);
let riodejaneiro= new destination('Rio de Janeiro', 666, '/images/RiodeJaneiro.jpg', 7);
let beyrouth = new destination('Beyrouth', 412, '/images/Beyrouth.jpg', 8);
let bagdad = new destination('Bagdad', 400, '/images/Bagdad.jpg', 9);
let lyon = new destination('Lyon', 13, '/images/Lyon.jpg', 10);
let tokyo = new destination('Tokyo', 805, '/images/Tokyo.jpg', 11);
let pekin = new destination('Pékin', 707, '/images/Pekin.jpg', 12);
let shangai = new destination('Shangai', 212, '/images/Shangai.jpg', 13);
let stalingrad= new destination('Stalingrad', 798, '/images/Stalingrad.jpg', 14);
let tchernobyl = new destination('Tchernobyl', 1000, '/images/Tchernobyl.jpg', 15);
let auschwitz= new destination('Auschwitz', 444, '/images/Auschwitz.jpg', 16);
let athenes = new destination('Athènes', 130, '/images/athenes.jpg', 17);
let hanoi = new destination('Hanoï', 520, '/images/Hanoi.jpg', 18);
let guatemala = new destination('Guatemala', 945, '/images/Guatemala.jpg', 19);
let kiev = new destination('Kiev', 477, '/images/Kiev.jpg', 20);
let zagreb = new destination('Zagreb', 169, '/images/Zagreb.jpg', 21);
let kampala = new destination('Kampala', 148, '/images/Kampala.jpg', 22);
let pyongyang= new destination('PyongYang', 510, '/images/Pyongyang.jpg', 23);
let lalune = new destination('La Lune', 100000, '/images/LaLune.jpg', 24);

Tableau = [moscou, bamako, ajaccio, milan, paris, abidjan, mexico, riodejaneiro, beyrouth, bagdad, lyon, tokyo, pekin, shangai, stalingrad, tchernobyl, auschwitz, athenes, hanoi, guatemala, kiev, zagreb, kampala, pyongyang, lalune]

function PrixTotal() {

    let nbenf = Number(document.getElementById("enfants").value);
    let nbadu = Number(document.getElementById("adultes").value);
    let duree = (document.querySelector('input[type="date"]#arrivee').valueAsNumber-document.querySelector('input[type="date"]#depart').valueAsNumber)/86400000
    let amount = (nbenf * 0.4 + nbadu) * Tableau[3].prix ; //Erreur, Il faut aller chercher la destination choisie dans le tableau
    if(document.getElementById('ouiPD').checked){
        amount += 12 * (nbmin+nbmaj);
        amount *= duree;
    }
    else{
        amount *= duree;
    }
}
PrixTotal();

let template = document.querySelector("#CalculPrix");
{
let clone = document.importNode(template.content, true);
newContent = clone.firstElementChild.innerHTML
    .replace(/{{PrixTot}}/g, PrixTotal())
    clone.firstElementChild.innerHTML = newContent
    document.body.appendChild(clone);
}