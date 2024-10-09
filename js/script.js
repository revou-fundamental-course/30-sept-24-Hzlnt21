document.getElementById('temperature-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const temp = parseFloat(document.getElementById('temperature').value);
    const conversionType = document.getElementById('conversion').value;
    const resultElement = document.getElementById('conversion-result');
    const calcElement = document.getElementById('calculation');

    let result = 0;
    let calcString = '';

    if (conversionType === 'c_to_f') {
        result = (temp * 9 / 5) + 32;
        calcString = `${temp}°C * (9 / 5) + 32 = ${result.toFixed(2)}°F`;
    } else {
        result = (temp - 32) * 5 / 9;
        calcString = `(${temp}°F - 32) * (5 / 9) = ${result.toFixed(2)}°C`;
    }

    resultElement.textContent = `Hasil: ${result.toFixed(2)}`;
    calcElement.textContent = `Langkah: ${calcString}`;
    document.getElementById('result').classList.remove('hidden');
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('temperature-form').reset();
    document.getElementById('result').classList.add('hidden');
});

document.getElementById('reverse').addEventListener('click', function() {
    const conversionSelect = document.getElementById('conversion');
    conversionSelect.value = (conversionSelect.value === 'c_to_f') ? 'f_to_c' : 'c_to_f';
});
