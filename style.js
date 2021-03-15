//button add
var butaddtag = document.getElementsByClassName("add");

//arr of button add
for (var i = 0 ; i<butaddtag.length ; i++){
    butaddtag[i].addEventListener("click",add);
}

//button romove
var butdectag = document.getElementsByClassName("remove");

//arr of button remove
for (var i = 0 ; i<butdectag.length ; i++){
    butdectag[i].addEventListener("click",remove)

}

//button check
var butchecktag = document.getElementsByClassName("check");
//arr of button check
for (var i = 0 ; i<butchecktag.length ; i++){
    
    butchecktag[i].addEventListener("click",check)
}

//a link to jump to the end of the page
var butsomtag =document.getElementById("t");
butsomtag.addEventListener("click",list);


//function to display the list of proudui buy
function list (event){
    var a = document.getElementById("text")
    var b = a.innerHTML;
    var p =document.getElementsByClassName("price")
console.log(p)
var u =document.getElementsByClassName("unitilprice")
console.log(u)
var q = document.getElementsByClassName("quantity")
console.log(q)
var c = document.getElementsByClassName("check")
console.log(c)
var e = document.getElementsByClassName("esem")
console.log(e)
var x = []
var vp = []
var vu = []
var vq = []
var ep = []
for(var i =0 ; i<c.length ; i++){

    x.push(c[i].checked===true)
    vp.push(p[i].innerHTML)
    vq.push(q[i].value)
    vu.push(u[i].innerHTML)
    ep.push(e[i].innerHTML)
    }
console.log(x)
console.log(vp)
console.log(vq)
console.log(vu)
for(var j =0 ; j<c.length ; j++){
    if(x[j]===true){
        b= b+ ("     --"+vq[j]+"  *"+ep[j]+"  prix   "+vu[j]+"    "+vp[j]  ) 
        a.innerHTML=b
        }
    }    
}


//function to calculate and display the total sum of the products
function check (event) {
    var butchecktag = event.target;
    
    var trtag = butchecktag.parentElement.parentElement;
    var prtag =trtag.querySelector(".price");
    var prstr =prtag.innerHTML;
    var pr =Number(prstr);
    var trrtag =butchecktag.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    var somtag =trrtag.querySelector("#total");
    var somstr =somtag.innerHTML;
    var som =Number(somstr);
    if (butchecktag.checked===true){
        som = som + pr;
        somtag.innerHTML=som
    }
    else{
        som = som - pr;
        somtag.innerHTML=som;
    }
}


//function to calculate product quantity and price (remove)
function remove (event) {
    var butdectag = event.target;
    console.log(butdectag)
    var tdel = butdectag.parentElement;
    var inptag = tdel.querySelector(".quantity");
    var valst = inptag.value;
    console.log(valst);
    var num = Number(valst);
    if(num>0){
        num=num-1;
        inptag.value=num;
        var trtag = butdectag.parentElement.parentElement;
        var unittag =trtag.querySelector(".unitilprice");
        var unitprst =unittag.innerHTML;
        var unitpr =Number(unitprst);
        var trrtag =butdectag.parentElement.parentElement;
        var prtag = trrtag.querySelector(".price");
        var prst =prtag.innerHTML;
        var pr =Number(prst);
        pr = unitpr*num;
        prtag.innerHTML=pr;
        var butchecktag = butdectag.parentElement.parentElement;
        var t =butchecktag.querySelector(".check");
        var a = t.checked===true;
        console.log(a);
        if(a===true){
        var trrtag =butchecktag.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        var somtag =trrtag.querySelector("#total");
        var somstr =somtag.innerHTML;
        var som =Number(somstr);
        console.log(som);
        som=som-unitpr;
        somtag.innerHTML=som;
        }
    }
}


//function to calculate product quantity and price(add)
function add (event) {
    var t = [];
    var butaddtag = event.target ;
    var tdelt = butaddtag.parentElement; 
    var inputtag = tdelt.querySelector(".quantity")
    var quantity = inputtag.value;
    var number = Number(quantity);
    number=number+1,
    inputtag.value=number;
    var unitpricetag = Number(butaddtag.parentElement.parentElement.querySelector(".unitilprice").innerHTML);
    var trtag = butaddtag.parentElement.parentElement;
    var pricetag = trtag.querySelector(".price");
    var numpricetag = Number(pricetag.innerHTML)
    numpricetag=unitpricetag*number;
    pricetag.innerHTML=numpricetag;
    var butchecktag = butaddtag.parentElement.parentElement;
    var t =butchecktag.querySelector(".check");
    
        var a = t.checked===true;
        console.log(a);
        if(a===true){
        var trrtag =butchecktag.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
        var somtag =trrtag.querySelector("#total");
        var somstr =somtag.innerHTML;
        var som =Number(somstr);
        console.log(som);
        som=som+unitpricetag;
        somtag.innerHTML=som;
        }
    
}

