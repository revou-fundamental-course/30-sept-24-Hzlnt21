document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    let celsius = parseFloat(document.getElementById('celsius').value);
    let fahrenheit;
    let calculation;

    if (isNaN(celsius)) {
        document.getElementById('calculation').value = "Please enter a valid number!";
        return;
    }

    // Celsius to Fahrenheit conversion
    fahrenheit = (celsius * 9/5) + 32;
    calculation = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;

    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('calculation').value = calculation;
});

// Reset button functionality
document.getElementById('resetBtn').addEventListener('click', function() {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('calculation').value = '';
});

// Reverse button functionality
document.getElementById('reverseBtn').addEventListener('click', function() {
    let fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (isNaN(fahrenheit)) {
        document.getElementById('calculation').value = "Please enter a valid number!";
        return;
    }
    
    let celsius = (fahrenheit - 32) * 5/9;
    let calculation = `${fahrenheit}°F - 32 × (5/9) = ${celsius.toFixed(2)}°C`;

    document.getElementById('celsius').value = celsius.toFixed(2);
    document.getElementById('calculation').value = calculation;
});

// Toggle conversion formula (for linking Fahrenheit to Celsius)
document.getElementById('toggleConversion').addEventListener('click', function(event) {
    event.preventDefault();
    let currentText = event.target.innerText;
    if (currentText === "Fahrenheit ke Celsius") {
        event.target.innerText = "Celsius ke Fahrenheit";
    } else {
        event.target.innerText = "Fahrenheit ke Celsius";
    }
});
