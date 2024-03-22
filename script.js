window.addEventListener('deviceorientation', handleOrientation);

function handleOrientation(event) {
    let alpha = event.alpha;
    let beta = event.beta;
    let gamma = event.gamma;

    let average = (beta + gamma) / 2;

    document.getElementById("gyroscope").innerText = Math.round(average) + "°";

    const pointer = document.getElementById('pointer');
    const box = document.getElementById('box');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');

    beta = Math.max(-45, Math.min(beta, 45));
    gamma = Math.max(-45, Math.min(gamma, 45));

    pointer.style.left = `${50 - gamma}%`;
    pointer.style.top = `${50 - beta}%`;

    if (Math.abs(beta + gamma) < .5) {
        pointer.style.borderColor = "#00cf23";
        box.style.borderColor = "#00cf23";
        box.style.boxShadow = "0 0 20px #00cf23";
        line1.style.backgroundColor = "#00cf2340";
        line2.style.backgroundColor = "#00cf2340";
    } else {
        pointer.style.borderColor = "#ff0000";
        box.style.borderColor = "#fff";
        box.style.boxShadow = "unset";
        line1.style.backgroundColor = "#ffffff1a";
        line2.style.backgroundColor = "#ffffff1a";
    }
}