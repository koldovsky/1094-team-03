const endDate = new Date(2023, 11, 8, 23, 59, 59);



function updateCountdown() {
    const now = new Date();
    const timeDifference = endDate - now;
    const day = document.querySelector('#days')
    const hour = document.querySelector('#hours')
    const minute = document.querySelector('#minutes')
    const second = document.querySelector('#seconds')

    if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        day.textContent = days + 'д'
        hour.textContent = hours + 'г'
        minute.textContent = minutes + 'хв'
        second.textContent = seconds + 'с'
    } else {
        document.getElementById('countdown').innerHTML = 'Акція завершилась!';
    }
}

setInterval(updateCountdown, 1000);

updateCountdown();