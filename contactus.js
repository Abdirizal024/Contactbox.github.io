

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rizalbjm7788@gmail.com",
        Password: "eobkbyunwcvcoxcq",
        To: 'rizalbjm7788@gmail.com',
        From : "rizalbjm679@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
    }).then(
        message => alert("Message Sent Succesfully. Thank You.")
    );
}
