const eventDate = new Date("October 13, 2025 18:00:00").getTime();
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;
    if (timeLeft <= 0) {
        document.getElementById("countdown").innerHTML = "The concert has begun!";
        document.body.style.animation = "flash is infinite alternate";
        clearInterval(countdown);
        return;
    }
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
document.getElementById('registrationForm').addEventListener("submit", function(event) {
    event.preventDefault();
    const name = event.target[0].value.trim();
    const email = event.target[1].value.trim();
    if (name === "" || email === "") {
        alert("Please enter your name and email to register.");
        return;
    }
    alert ("Thank you for your purchase! Check your email for updates.");
        event.target.reset();
    });