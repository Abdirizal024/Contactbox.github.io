 function handleFormSubmit(event) {
        event.preventDefault(); // Mencegah pengiriman default formulir

        const form = event.target;

        // Mengirim data ke Formspree
        fetch(form.action, {
            method: form.method,
            headers: { 'Accept': 'application/json' },
            body: new FormData(form)
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent',
                    text: 'Your message has been successfully sent!',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK'
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
