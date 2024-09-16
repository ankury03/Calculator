const display = document.querySelector('[name = "display"]');

function clearDisplay(){
    display.value = '';
}

function Delete(){
    display.value = display.value.slice(0,-1);
}

function appendToDisplay(value){
    display.value += value;
}

function Calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '%' || key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        Calculate();
    } else if (key === 'Backspace') {
        Delete();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});