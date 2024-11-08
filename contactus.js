 document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting the default way

        const form = event.target;
        const formData = new FormData(form);

        fetch(form.action, {
            method: form.method,
            headers: { 'Accept': 'application/json' },
            body: formData
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent',
                    text: 'Your email was successfully sent!',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Great!'
                });
                form.reset(); // Reset the form after successful submission
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to Send',
                    text: 'There was an issue sending your email. Please try again.',
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
    });
