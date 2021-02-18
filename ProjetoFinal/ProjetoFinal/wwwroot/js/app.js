const navigat = document.querySelector('.Nav');
const bot = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const preview = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');
const button = document.querySelector('#botao');
const inputs = document.querySelectorAll('.input');


inputs.forEach((input) => {
    input.addEventListener('focus', focusFunc);
});

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add('focus');
}


button.addEventListener('click', function () {
    alert('Reserva efetuada com sucesso!');
});

preview.forEach((preview) => {
    preview.addEventListener('click', () => {
        modal.classList.add('open');
        original.classList.add('open');

        const originalSrc = preview.getAttribute('data-original');
        original.src = `./Personagens/${originalSrc}`;

        const altText = preview.alt;
        caption.textContent = altText;
    });
});

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        modal.classList.remove('open');
    }
});

bot.addEventListener('click', () => {

    if (!botClose) {
        navigat.classList.add('close')

        if (navigat.classList.add('close')) {
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