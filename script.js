// Demo sensor values (replace with real sensor data in production)
let phValue = 6.8;
let ecValue = 1.2;

document.addEventListener('DOMContentLoaded', () => {
    // Autofill sensor values
    document.getElementById('ph').value = phValue;
    document.getElementById('ec').value = ecValue;

    // CTA button scrolls to form
    document.getElementById('cta-btn').addEventListener('click', () => {
        document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Form submission
    document.getElementById('dose-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const ph = parseFloat(document.getElementById('ph').value);
        const ec = parseFloat(document.getElementById('ec').value);
        const soil = document.getElementById('soil').value;
        const crop = document.getElementById('crop').value;
        // Simple AI-inspired logic for demo (replace with real ML model in production)
        let base = 20;
        if (soil === 'Sandy') base -= 2;
        if (soil === 'Clayey') base += 2;
        if (crop === 'Chickpea') base += 1.5;
        if (crop === 'Tomato') base += 1;
        if (crop === 'Wheat') base += 0.5;
        if (crop === 'Rice') base += 1.2;
        if (crop === 'Maize') base += 0.8;
        if (crop === 'Soybean') base += 1.1;
        base += (7 - ph) * 0.8;
        base += (2 - ec) * 1.2;
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
