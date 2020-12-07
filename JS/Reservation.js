function PrixTotal() {

    let nbenf = Number(document.getElementById("enfants").value);
    let nbadu = Number(document.getElementById("adultes").value);
    let dureeSejour = (document.querySelector('input[type="date"]#arrivee').valueAsNumber-document.querySelector('input[type="date"]#depart').valueAsNumber)/86400000 //Ecart en jour entre le départ et le retour (millisecondes a la base)
    let amount = (nbenf * 0.4 + nbadu) * prixcroi[sejour_id].prix ; 
    if(document.getElementById('ouiPD').checked){
        amount += 12 * (nbmin+nbmaj);
        amount *= dureeSejour;
    }
    else{
        amount *= dureeSejour;
    }
}
PrixTotal();