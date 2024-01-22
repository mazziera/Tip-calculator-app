const customInput = document.querySelector('#custom-input');
const percentageNumbers = document.querySelectorAll('.percentage-tip');

const tipAmount = document.querySelector('#tip-amount');
const totalPersonAmount = document.querySelector('#total-person');

const resetButton = document.querySelector('.reset-button');

let inputNumberPrice;
let inputNumberPeople;

percentageNumbers.forEach( (button) => {
    button.addEventListener('click', () => {

        inputNumberPrice = parseFloat(document.querySelector('.input-price').value);
        inputNumberPeople = parseInt(document.querySelector('.input-people').value);

        const percentualDiscount = button.value;
        const valueDiscount = inputNumberPrice * (percentualDiscount / 100);

        const totalTipAmount = valueDiscount / inputNumberPeople;
        const totalPerson = inputNumberPrice / inputNumberPeople ;

        if (button.value === "5" || button.value === "10" || button.value === "15" || button.value === "25" || button.value === "50"){

            tipAmount.innerHTML = '$' + totalTipAmount.toFixed(2);
            totalPersonAmount.innerHTML = '$' + totalPerson.toFixed(2);

        };      
    });
});

customInput.addEventListener('keyup', () => {

    const percentualDiscount = customInput.value;

    if (!isNaN(percentualDiscount)) {
        const valueDiscount = inputNumberPrice * (percentualDiscount / 100);

        const totalTipAmount = valueDiscount / inputNumberPeople;
        const totalPerson = inputNumberPrice / inputNumberPeople;

        tipAmount.innerHTML = '$' + totalTipAmount.toFixed(2);
        totalPersonAmount.innerHTML = '$' + totalPerson.toFixed(2);

    } else {
        
        tipAmount.innerHTML = '$0.00';
        totalPersonAmount.innerHTML = '$0.00';
    };
});

resetButton.addEventListener('click', () => {

    tipAmount.innerHTML = '$0.00';
    totalPersonAmount.innerHTML = '$0.00';
});


