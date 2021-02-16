const navigat = document.querySelector('.Nav');
const bot = document.querySelector('.btn');

let botClose = false;
let navOpen = false;

bot.addEventListener('click', () => {

  if(!botClose)
  {
    navigat.classList.add('close')

    if(navigat.classList.add('close'))
    {
       bot.style.display == 'none';
    }
  }
});





/*let botao = document.querySelector('#botao');


botao.addEventListener('click', () => {
   document.getElementById(botao).style.display == 'none';

});
document.getElementById('botao').onclick = function() {
  document.getElementById('search').classList.add("visible");
  document.getElementById('clear').classList.add("visible");
  document.getElementById('search').focus();
  document.getElementById('botao').classList.add("hide");
}
document.getElementById('clear').onclick = function() {
  document.getElementById('botao').classList.remove("hide");
  document.getElementById('search').classList.remove("visible");
  document.getElementById('clear').classList.remove("visible");
}*/