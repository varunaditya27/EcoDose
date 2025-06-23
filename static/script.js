// Demo sensor values (replace with real sensor data in production)
let phValue = 6.8;
let moistureValue = 22.5;
let nValue = 80;
let pValue = 40;
let kValue = 60;
let cropValue = 'Tomato';

document.addEventListener('DOMContentLoaded', () => {
    // Autofill sensor values
    document.getElementById('ph').value = phValue;
    document.getElementById('moisture').value = moistureValue;
    document.getElementById('n').value = nValue;
    document.getElementById('p').value = pValue;
    document.getElementById('k').value = kValue;
    document.getElementById('crop').value = cropValue;

    // CTA button scrolls to form
    document.getElementById('cta-btn').addEventListener('click', () => {
        document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Form submission
    document.getElementById('dose-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        const ph = parseFloat(document.getElementById('ph').value);
        const moisture = parseFloat(document.getElementById('moisture').value);
        const n = parseFloat(document.getElementById('n').value);
        const p = parseFloat(document.getElementById('p').value);
        const k = parseFloat(document.getElementById('k').value);
        const crop = document.getElementById('crop').value;
        const model = document.getElementById('model').value;
        // Send data to backend for prediction
        try {
            const response = await fetch('/predict', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    pH: ph,
                    moisture: moisture,
                    nitrogen: n,
                    phosphorus: p,
                    potassium: k,
                    model: model
                })
            });
            const result = await response.json();
            if (response.ok && result.dosage !== undefined) {
                showResult(result.dosage);
            } else {
                showResult('?', result.error || 'Prediction failed.');
            }
        } catch (err) {
            showResult('?', 'Server error.');
        }
    });

    // Footer subscribe (dummy)
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for subscribing! 🚀');
        this.reset();
    });
});

function showResult(dosage, message) {
    document.getElementById('result-section').style.display = 'flex';
    // Animate number counter
    let counter = 0;
    const target = typeof dosage === 'number' ? dosage : 0;
    const step = Math.max(0.1, (target) / 40);
    const counterElem = document.getElementById('dosage-counter');
    counterElem.textContent = '0';
    const interval = setInterval(() => {
        counter += step;
        if (counter >= target) {
            counterElem.textContent = dosage;
            clearInterval(interval);
        } else {
            counterElem.textContent = counter.toFixed(1);
        }
    }, 25);
    // Animate bar
    const bar = document.getElementById('dosage-bar');
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = typeof dosage === 'number' ? Math.min(100, (target / 30) * 100) + '%' : '0';
    }, 200);
    // Show error or success message
    const msgElem = document.querySelector('.success-message');
    if (message) {
        msgElem.textContent = message;
        msgElem.style.color = '#c0392b';
    } else {
        msgElem.textContent = 'Optimal dosage calculated for your soil!';
        msgElem.style.color = '#588157';
    }
    // Scroll to result
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
}
