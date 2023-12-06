document.addEventListener('DOMContentLoaded', function () {
    const ageConfirmationModal = document.getElementById('ageConfirmation');
    const confirmButton = document.getElementById('confirmButton');
    const rejectButton = document.getElementById('rejectButton');
    const blogSection = document.querySelector('.blog');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                ageConfirmationModal.style.display = 'block';
                observer.disconnect();
            }
        });
    });


    observer.observe(blogSection);

    confirmButton.addEventListener('click', function () {
        ageConfirmationModal.style.display = 'none';
        console.log('User confirmed age.');
    });

    rejectButton.addEventListener('click', function () {
        ageConfirmationModal.style.display = 'none';
        console.log('User rejected age.');
        window.scrollTo(0, 0);
    });
});
