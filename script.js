// BMI Calculation
document.getElementById('calculate').addEventListener('click', function() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = "<p>Please enter valid height and weight.</p>";
        return;
    }

    const heightInMeters = height /100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2);

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('result').innerHTML = `
        <div class="result-box">
            <p>Your BMI is: ${bmiRounded}</p>
            <p>Category: ${category}</p>
        </div>
    `;
});



