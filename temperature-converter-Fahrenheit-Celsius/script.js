function convert() {
    var fahrenheit = parseFloat(document.getElementById('fahrenheitInput').value);
    var celsius = (fahrenheit - 32) / 1.8;
    document.getElementById('celsiusResult').innerText = 'Temperatura em Celsius: ' + celsius.toFixed(2);
}