window.addEventListener('load', () => {
    /* para los botones y la pantalla de las operaciones */
    const keypadButtons = document.getElementsByClassName('keypad-button'); /* en el tutorial decía no usar query, aunqu eno entedi muy bien porque después dijo que si */
    const display = document.querySelector('.calculator-display'); 
    /* para iterar */
    const keypadButtonsArray = Array.from(keypadButtons);
    
    /* lo que pasa cuando se pica un botón*/
    keypadButtonsArray.forEach( (button) => {

        button.addEventListener('click', () => {
            /* eso es para invocar las funciones cada que se pique "x" botón, aunque sigo confundida y solo seguí el tutorial*/
            calculadora(button, display);
        });

    });
});

function calculadora(button, display) {
    /* estos son los botones que pueden borrar, dar el resultado ,etc */
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;
    
        default:
            actualizar(display, button);
            break;
    }

}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
}

function actualizar(display, button) {
    
    if(display.innerHTML == 0){
        display.innerHTML = '';
    }

    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    if(display.innerHTML != 0) {
        display.innerHTML = 0;
    }
}

/* la calculadora la hice siguiendi el siguiente tutorial:
https://www.youtube.com/watch?v=0GC-jvB8yNs&ab_channel=Developeando
me tardé aprixmadamente tres horas, aunque sigo sin entder todo, pero lo explican muy bien y sencillo(: */