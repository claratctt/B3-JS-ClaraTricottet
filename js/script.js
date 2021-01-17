const button = document.querySelector('button');
const nav = document.querySelector('nav');
const backdrop = document.querySelector('.backdrop');

/* quand le button estc lqiué alorson ajoute la classe open*/
button.addEventListener('click', () => {
  nav.classList.add('open');
});

/* quand on clique sur le bouton on retire la classe open */
backdrop.addEventListener('click', () => {
  nav.classList.remove('open');
});

//Obtenir toutes les valeurs et affichage des données
const show = setInterval(() => {

// Définit la date
const date = new Date();
const todayDate = date.getDate();
const months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
const thismonth = months[date.getMonth()];

//Ajoute 0 quand 1 Minutes puis Affiche 01
function addZero(number) {
        return (parseInt(number, 10) < 10 ? '0' : '') + number;
    }

const hours = date.getHours();
const minutes = date.getMinutes();

const days = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const thisday = days[date.getDay()];

//Affiche les données à l'écran
document.querySelector('.hours').innerHTML = addZero(hours);
document.querySelector('.minutes').innerHTML = addZero(minutes);
document.querySelector('#days').innerHTML = thisday;
document.querySelector('#month').innerHTML = thismonth;
document.querySelector('#today').innerHTML = todayDate;

}, 1000);










const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["le chocolat", "la bière", "les crêpes", "et surtout la bière"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
