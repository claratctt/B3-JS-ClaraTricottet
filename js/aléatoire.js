
/*JEU2*/
var RandomNumber =  Math.floor(Math.random() * 100) + 1;/*génère un nombre aléatoire entre 0et 100*/
const AffichageHistorique = document.getElementById ('t');
const Resultat = document.getElementById('resultat');
const Essayer = document.getElementById('essayer');/*récupère les essais de l'utilisateur*/
const B = document.getElementById('b');
var NbreEssai = 1;


function Tester() {
  var NbrUser = Number(Essayer.value);
  if (NbreEssai === 1) {
    AffichageHistorique.textContent = 'Vos test : ';
  }/*si l'utilisateur fait un essai, on récupère et on affiche ses essais*/

  AffichageHistorique.textContent += NbrUser + '';

  if (NbrUser === RandomNumber) {
     Resultat.textContent = 'Bravo!';
   }/*si la valeur du nombre rentrée par l'utilisateur est égal au nimbre aléatoire alors on affiche bravo*/


  else if (NbreEssai === 3) {
    Resultat.textContent= 'GAME OVER. Le bon nombre :' +RandomNumber; B.disabled = true;
    }  else  Resultat.textContent = 'Faux!';
    NbreEssai++;
    Essayer.value = '';
    Essayer.focus();
  }/*si le nombre d'essais de l'utilisateur est égal à 3 -> game over et on affiche le bon résultat */

/*BOUTON*/
  const button = document.querySelector('button');
  const nav = document.querySelector('nav');
  const backdrop = document.querySelector('.backdrop');

  /* quand le button est cliqué alors on ajoute la classe open*/
  button.addEventListener('click', () => {
    nav.classList.add('open');
  });

  /* quand on clique sur le bouton on retire la classe open */
  backdrop.addEventListener('click', () => {
    nav.classList.remove('open');
  });
