const endDate = new Date(2023, 11, 8, 23, 59, 59);

  function updateCountdown() {
    const now = new Date();
    const timeDifference = endDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      document.getElementById('countdown').innerHTML = `${days}д ${hours}г ${minutes}хв ${seconds}с`;
    } else {
      document.getElementById('countdown').innerHTML = 'Акція завершилась!';
    }
  }

  setInterval(updateCountdown, 1000);

  updateCountdown();