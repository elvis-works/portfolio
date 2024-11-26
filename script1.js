function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('contactForm');
    const formData = new FormData(form); // Collect form data

    // Send the data using AJAX to your Formspree URL
    fetch('https://formspree.io/f/mrbgadbk', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            // Show success message on successful submission
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';

            // Clear the form fields
            form.reset();

            // Automatically hide the success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            alert('There was an error submitting your form. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your form. Please try again.');
    });
}

