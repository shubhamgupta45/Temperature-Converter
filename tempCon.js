function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;
    celsiusInput.value = celsiusValue.toFixed(2);
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
}
