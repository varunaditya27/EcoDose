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
    document.getElementById('dose-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const ph = parseFloat(document.getElementById('ph').value);
        const moisture = parseFloat(document.getElementById('moisture').value);
        const n = parseFloat(document.getElementById('n').value);
        const p = parseFloat(document.getElementById('p').value);
        const k = parseFloat(document.getElementById('k').value);
        const crop = document.getElementById('crop').value;
        // Simple AI-inspired logic for demo (replace with real ML model in production)
        let base = 20;
        base += (7 - ph) * 0.7;
        base += (30 - moisture) * 0.15;
        base += (100 - n) * 0.05;
        base += (60 - p) * 0.04;
        base += (80 - k) * 0.03;
        if (crop === 'Tomato') base += 1;
        const dosage = Math.max(8, Math.round(base * 10) / 10);
        showResult(dosage);
    });

    // Footer subscribe (dummy)
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thanks for subscribing! 🚀');
        this.reset();
    });
});

function showResult(dosage) {
    document.getElementById('result-section').style.display = 'flex';
    // Animate number counter
    let counter = 0;
    const target = dosage;
    const step = Math.max(0.1, target / 40);
    const counterElem = document.getElementById('dosage-counter');
    counterElem.textContent = '0';
    const interval = setInterval(() => {
        counter += step;
        if (counter >= target) {
            counterElem.textContent = target;
            clearInterval(interval);
        } else {
            counterElem.textContent = counter.toFixed(1);
        }
    }, 25);
    // Animate bar
    const bar = document.getElementById('dosage-bar');
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = Math.min(100, (dosage / 30) * 100) + '%';
    }, 200);
    // Scroll to result
    document.getElementById('result-section').scrollIntoView({ behavior: 'smooth' });
}
