//Function 1

var foot = document.getElementsByTagName("footer")[0];
foot.addEventListener("click", function() {
	console.log("Function 1 : " + "Clique"); //Affiche dans la console
	console.log("--------------------")
});


//Function 1-bis

var foot = document.getElementsByTagName("footer")[0];
let count = 1;
if (foot.addEventListener("click",function() { //Ajout du compteur 
	console.log("Function 1 bis : " + `Clic n°${count}`); //Affiche dans la console avec le compteur
	count++; //Incrémente
	console.log("--------------------")
}));


//Function 2

var btn = document.getElementsByClassName("navbar-toggler")[0]; //Sélection du bouton avex l'index
var navHead = document.getElementById("navbarHeader");

btn.addEventListener('click',function() {
	console.log("function 2 :" +" " + `${navHead.classList.toggle("collapse")}`); //Affiche sur le site et en console l'état de collapse
});


//Function 3

var firstCard = document.getElementsByClassName("card")[0]; //Sélection de la première carte 
var firstEditBtn = document.getElementsByClassName("btn")[3]; //sélection du premier bouton

firstEditBtn.addEventListener("click",function(){
	firstCard.style = "color:red"; //Passe le texte en rouge
});


//Function 4 

var secondCard = document.getElementsByClassName("card-text")[1];//Idem que pour la carte 1 mais on change l'index pour sélectionner la deuxième
var secondEditBtn = document.getElementsByClassName("btn-outline-secondary")[1];//idem que pour le bouton 1 mais on change l'index pour sélectionner le deuxième

secondCard.addEventListener("click",function(){ //je crois que j'ai cassé le code je sais plus ce que j'ai fait :X
	if (secondCard.style.color == "")
		secondCard.style.color == "green"; 
	else secondCard.style.color == "";
});


//Function 5
var link = document.getElementsByTagName("link")[0];
var header = document.getElementsByTagName("header")[0];

function aPlusBootstrap() { //On enlève Bootstrap, attention les yeux
	if (link.rel == "none") {
		link.rel = "stylesheet";
	}
	else {
		link.rel = "none";
	}
}
header.addEventListener("dblclick", aPlusBootstrap); //Permet d'annuler la suppression parce que ça pique les yeux


// Function 6
let viewBtn = document.getElementsByClassName("btn-success"); //récupération de tous les éléments 
let cardText = document.getElementsByClassName("card-text");
let cardImg = document.getElementsByClassName("card-img-top");
let cards = document.getElementsByClassName("card");

for (let x = 0; x < viewBtn.length; x++) {
	viewBtn[x].addEventListener("mouseover", function() {

//ici on définit la taille des cards selon l'action réalisée
		if (cardText[x].style.display == "none") {
			cardText[x].style.display = "block";
		}
		else {
			cardText[x].style.display = "none";
		};

		if (cardImg[x].style.width == "20%") {
			cardImg[x].style.width = "100%";
		}
		else {
			cardImg[x].style.width = "20%";
			cardImg[x].style.margin = "auto";
		};
	});
};

