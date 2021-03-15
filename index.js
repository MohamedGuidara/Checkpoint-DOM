/*var totaltag = document.getElementsByClassName("total");
console.log(totaltag);*///en donne le nom de la classe
/*var totaltag = document.getElementById("total");
console.log(totaltag)*///en donne l'id
/*var totaltag =document.querySelector("#total");
console.log(totaltag.innerHTML)*///innerHTML pour doner la valeus dans total,en ajoute le # pour identifier l'id car en a utiliser la commande queryselector
/*var buttaddtag = document.getElementsByClassName("add");
console.log(buttaddtag);*///enobtient un tableau contenant la liste des des button de class add
/*var imgtag = document.getElementsByTagName("img");
console.log(imgtag);*///en obtient un tableau d'image 
/*var buttremtag = document.querySelectorAll(".remove");
console.log(buttremtag);*/

//code d'icrementation et calcul de prix en cas de click sur button add

var chektag = document.getElementsByClassName("check");
/*for (var i =0 ; i<chektag.length ; i++) {
    chektag[i].addEventListener("click",somme);
} */ //c'est une methode ,mais hammech alech namlo 2 boucle , donc en ecrit la methode d'execution de l'event dans le meme boucle


var butdectag = document.getElementsByClassName("remove");
var butaddtag = document.getElementsByClassName("add");//j'inporte tous les button pour eviter de repeter le travail pour les n produit
for (var i = 0 ; i<butaddtag.length ; i++){//boucle for a cause de n button
    butaddtag[i].addEventListener("click",add);//c'est une methode pour executer un event  ,il y a 3 methode ,la duexieme dans la video de liyes, la troisiemme dans le video de islem
    ///dans le cas de addeventlistener levennement caracteriser par click et add c'est le nom de la fonction
    /*butaddtag[i].onclick=add*///c'est la 2 methode par onclick et = nom du fonction
    chektag[i].addEventListener("click",somme);
    
}
function add (event) {
    //console.log(event);//elle retoune l'evennement , il comporte plusieur objet , ce qui nos interresse c'est le target
    //console.log(event.target);//elle retourne l7aja li nzelt aliha ouin sar l'evenement
    var butaddtag = event.target ;//donc hakka jebna l bouton
    //rq:dans le dom on ne peut pas deplacer men blasa l blasaa dans le meme niveau (exp:le bouton add et l'input)
    //la sol et de retourner ou parent puis en se deplasse vers le shado
    var tdelt = butaddtag.parentElement; //pour rentrer au parent
    //donc maintenant du parent en peut se deplacer ouin man7ebbo
    var inputtag = tdelt.querySelector(".quantity")//donc en a dans l'input
    //on va retirer la valeur dans l'input
    var quantity = inputtag.value;//donc ouselna lel valeur elli f input mais cette valeur de type string
    
    /*quantity++;//incrementation(en evite cette methode car la valeur de type string donc il faut la convertir en entier)
    inputtag.value=quantity;//mais il faut donner la vateur dans linput ou la valeur ne change pas*/
    var number = Number(quantity);
    number=number+1,
    inputtag.value=number;
    var unitpricetag = Number(butaddtag.parentElement.parentElement.querySelector(".unitilprice").innerHTML);
    var trtag = butaddtag.parentElement.parentElement;
    var pricetag = trtag.querySelector(".price");
    var numpricetag = Number(pricetag.innerHTML)
    numpricetag=unitpricetag*number;
    pricetag.innerHTML=numpricetag;
    
}
function somme (event){
    var checktag = event.target ;
    var totaltag = document.getElementById("total");
    var total = Number(totaltag.innerHTML);
    var trelt = checktag.parentElement.parentElement;
    var pricetag = trelt.querySelector(".price");
    var price = Number(pricetag.innerHTML);
    if (checktag.checked===true){
        total=total+price;
    }
    else{
        total=total-price;
    }
    totaltag.innerHTML=total
}

for (var i = 0 ; i<butdectag.length ; i++){
   // butdectag[i]=addEventListener("click",decrement);
    butdectag[i].onclick.remove;
}
function remove (event){
    var butdectag = event.target;
    var tdeltt = butdectag.parentElement;
    var inputttag = tdeltt.querySelector(".quantity");
    var quantitiy = inputttag.value;
    var numberr = Number(quantitiy);
    numberr=numberr-1;
    
    
}