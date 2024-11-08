function sendEmail() {
        const form = document.getElementById('contactForm');

        // FormData to handle form data for fetch request
        const formData = new FormData(form);

        // Ganti "https://formspree.io/f/your_form_id" dengan endpoint Formspree Anda
        fetch("https://formspree.io/f/movqdyea", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent',
                    text: 'Your message was successfully sent!',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Great!'
                });
                form.reset(); // Reset form setelah berhasil
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Send',
                    text: 'There was an issue sending your message. Please try again.',
                    confirmButtonColor: '#d33',
                    confirmButtonText: 'Try Again'
                });
            }
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An unexpected error occurred: ' + error,
                confirmButtonColor: '#d33',
                confirmButtonText: 'OK'
            });
        });
    }
