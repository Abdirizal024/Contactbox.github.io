

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "marquise.raycen@moneychair.org",
        Password: "A9EA10F226E3768A358E8AC226F252152029",
        To: 'rizalbjm7788@gmail.com',
        From : "rizalbjm679@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
    }).then(
        message => alert("Message Sent Succesfully. Thank You.")
    );
}
