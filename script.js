//Function 1

var foot = document.querySelector('footer');
foot.addEventListener("click",function(){
	console.log("function 1 : " + "Clique"); //Affiche dans la console
});


//Function 1-bis

var foot = document.querySelector('footer');
let count = 1;
if (foot.addEventListener("click",function(){ //Ajout du compteur 
	console.log("function 1 bis :" + " " + `Clique ${count}`); //Affiche dans la console avec le compteur
	count++;
}));


//Function 2

var btn = document.getElementsByClassName("navbar-toggler")[0]; //sélection du boutton avex l'index
var navHead = document.getElementById("navbarHeader");

btn.addEventListener('click',function(){
	console.log("funtion 2 :" +" " + `${navHead.classList.toggle("collapse")}`); //Affiche sur le site et en console l'état de collapse
});


//Funtion 3

var firstCard = document.getElementsByClassName("col-md-4")[0]; //sélection de la première carte 
console.log(firstCard) 
var firstEditBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]; //sélection du premier boutton
console.log(firstEditBtn)

firstEditBtn.addEventListener("click",function(){
	firstCard.style = "color:red"; //Passe le texte en rouge
});


//Fonction 4 

var secondCard = document.getElementsByClassName("col-md-4")[1];//idem que pour la carte 1 mais on change l'index pour sélectionner la deuxième
console.log(secondCard)
var secondEditBtn = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];//idem que pour le boutton 1 mais on change l'index pour sélctionner le deuxième
console.log(secondEditBtn)

secondCard.addEventListener("click",function(){
	if(secondCard.style.color === "green"){ 
		secondCard.style.color = ""; //définit la couleur par défaut quand on re click sur le bouton 
	}
	else secondCard.style.color = "green" //Définit la couleur vert quand on click pour la première fois
});


//Function 5




