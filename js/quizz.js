// Quizz

function changeimg() {
      document.getElementById('restart').style.display = "block";
}/*on récupère l'élément et on l'affiche à l'écran*/

function windefi1() {
      document.getElementById('winnext').style.display = "block";
}/*on récupère l'élément et on l'affiche à l'écran*/


function nextquestion (){
  document.getElementById('container').style.display = "none";
  document.getElementById('container2').style.display = "block";
}/*on rfait disparaîtrele container qui contient la première question et on affiche le deuxieme*/


/*BOUTON*/
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
