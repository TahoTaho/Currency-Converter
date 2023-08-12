
const baseCurrencyOptions = document.getElementById('base-currency');
const currenciesOptions = document.getElementById('currencies');
const inputField1 = document.getElementById('input-field-1');
const inputField2 = document.getElementById('input-field-2');
const API_KEY = "8a1bc7b29b06d06a95aaf39c";
const result = parseInt(inputField2.value);

function convertCurrency(baseCurrency, currencies, amount) {
    let oReq = new XMLHttpRequest();
    oReq.open("GET", "https://v6.exchangerate-api.com/v6/" + API_KEY + "/pair/" + baseCurrency + "/" + currencies + "/" + amount);
    oReq.send();
    oReq.addEventListener("load", function() {
        let response = JSON.parse(this.responseText);
        let convertedValue = response.conversion_result;
        inputField2.value = convertedValue;
    });
}

function getValue() {
    const convertFrom = baseCurrencyOptions.value;
    const convertTo = currenciesOptions.value
    const userInput1 = parseInt(inputField1.value);
    convertCurrency(convertFrom, convertTo, userInput1);
}










