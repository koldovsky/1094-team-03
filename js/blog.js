document.addEventListener('DOMContentLoaded', function () {
    const countdownButton = document.getElementById('countdownButton');
    const timer = document.getElementById('timer');

    countdownButton.addEventListener('click', function () {
        const targetDate = new Date(new Date().getFullYear() + 1, 0, 1);
        function updateCountdown() {
            const currentDate = new Date();
            const timeDifference = targetDate - currentDate;

            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
        setInterval(updateCountdown, 1000);

        updateCountdown();
    });
});