function getSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('#relogio');
const comecar = document.querySelector('#começar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getSeconds(segundos);
    }, 1000)

}


comecar.addEventListener('click', function(event){
    clearInterval(timer);
    iniciaRelogio();
    relogio.style.color = 'black';
});
pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.style.color = 'red';
});
zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.style.color = 'black';
});