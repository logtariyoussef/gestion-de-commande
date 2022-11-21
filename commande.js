


 let products=JSON.parse(localStorage.getItem('products'));
//console.log(products);
//const nomproduit=products.nameProduct;

 const container=document.querySelector('.container');
  // console.log(container.children);

  
  function eventListeners(){

    window.addEventListener('DOMContentLoaded',()=> {
        loadResume();
       
    })
}
    

 

function loadResume(){
    products.forEach(product =>addProduct(product)//pour chaque produit dans localsotrage on execute addproduct
        );
 }


 //ajouter les produits from qui sont dans localsotrage
 function addProduct(product){

    const cartItem=document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML=`<img src="${product.imgSrc}" alt="">
    <div class = "cart-item-info">
      <span class = "cart-item-name">${product.nameProduct}</span><br>
      <span class = "cart-item-price">${product.price}</span><br>
            
    </div>`

    container.children[3].appendChild(cartItem);
    updateResume();
    updateTotal();
  
  
 
 }

 eventListeners();

const sousTotal=document.querySelector('.sou');
const nbrProduct=document.querySelector('.nbp');
const livraison=document.querySelector('.liv');
const Total=document.querySelector('.tot');



 //calcul des soustotal des produits et le nbre de produits

function calculSousTotal(){
   
    let total = products.reduce((acc, product) => {
        let price = parseFloat(product.price.substr(1)); // removing dollar sign
        return acc += price;
    }, 0); // adding all the prices
    return{
        total,
        productCount: products.length
    }
}


//modifier le soustotal et le nombre des produits
function updateResume(){
    let cartInfo=calculSousTotal();
   nbrProduct.textContent=cartInfo.productCount;
  sousTotal.textContent='$'+ cartInfo.total;
 /* let prixTotal=calculTotal();
  Total.textContent='$'+prixTotal.Ptotal;*/
}

//calculer le total

function calculTotal(){
    updateResume();
 let prixLiv=parseFloat(livraison.textContent.substring(1));//pour enlever le dollar 
 let prixSousTotal=parseFloat(sousTotal.textContent.substring(1));
 let Ptotal=0;
 Ptotal+=prixLiv+prixSousTotal;
 return(Ptotal)
}
//update le prix total
function updateTotal(){
    let prixTotal=calculTotal();
    Total.textContent='$'+prixTotal;

}

//commencer le crud


//cliquer sur submit
//document.getElementById("confirmer").addEventListener("click",AjoutData);

let tabData=[];

//function ajout data

function AjoutData(e){
    e.preventDefault();
    let formData=readData();
          tabData.push(formData);
          setData(formData);
          let a=JSON.parse( localStorage.getItem('Data'));
          insertdata(a);
          //store in localstorage
          
          // getData();
          /*insertdata(obj);*/
          reset(); 
          document.getElementById("update").addEventListener("click",update);
          



}




//fonction read data

function readData(){
    
    formData={};
    formData["prenom"]=document.getElementById('prenom').value ;
    formData["nom"]=document.getElementById('nom').value ;
    formData["Tel"]=document.getElementById('tel').value ;
    formData["Adresse"]=document.getElementById('adresse').value ;
   // console.log(formData);
    return formData;
    
}




//
let x=calculTotal();
//fonction insert data

 function insertdata(formData){
    //getData();
    
    var tr=document.createElement('tr');
    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    var td5=tr.appendChild(document.createElement('td'));
    var td6=tr.appendChild(document.createElement('td'));
   
    for(let i=0;i<formData.length;i++){
        td1.innerHTML=formData[i].nom;
        td2.innerHTML=formData[i].prenom;
        td3.innerHTML=formData[i].Tel;
        td4.innerHTML=formData[i].Adresse;
        td5.innerHTML='$'+ x;
        td6.innerHTML=`<i class="fa-solid fa-trash-can" onclick="deleterow(this)"></i>
        <i class="fa-solid fa-pen-to-square" onclick="Edit(this)" ></i>`;
    
        var table=document.getElementById("storelist").getElementsByTagName("tbody")[0];
        
        table.appendChild(tr);
    }

   

    
    


 }
 

//function reset
 function reset(){
    document.getElementById('prenom').value ="";
    document.getElementById('nom').value="" ;
    document.getElementById('tel').value="" ;
    document.getElementById('adresse').value="" ;
 }

 //delete function
 // function delete
 function deleterow(element){
   // console.log(element);
    
  element.parentElement.parentElement.remove();
    
 }

 //function edit
 var selectedRow=null;
 
function Edit(element){
    
   selectedRow=element.parentElement.parentElement;
   //console.log(selectedRow);
   document.getElementById("nom").value=selectedRow.cells[0].innerHTML;
   document.getElementById("prenom").value=selectedRow.cells[1].innerHTML;
   document.getElementById("tel").value=selectedRow.cells[2].innerHTML;
   document.getElementById("adresse").value=selectedRow.cells[3].innerHTML;

         
     }
    
   //function update


   
// function update
function update(e){
    e.preventDefault();
    selectedRow.cells[0].innerHTML=document.getElementById("nom").value;
    selectedRow.cells[1].innerHTML=document.getElementById("prenom").value;
    selectedRow.cells[2].innerHTML=document.getElementById("tel").value;
    selectedRow.cells[3].innerHTML=document.getElementById("adresse").value;
    
     
}



//localstorage for crud

function setData(formData){
  //  tabData.push(formData);
    localStorage.setItem('Data',JSON.stringify(tabData));
}

/*
function getData(){
   
    let a=JSON.parse( localStorage.getItem('Data'));
    //console.log(a);
    
    return(a);
}*/

/*
function getData(){
    let data=localStorage.getItem('Data');
   
    if(data){
      return  (JSON.parse(data));
    }else{
        setData();
    }
    
}*/
