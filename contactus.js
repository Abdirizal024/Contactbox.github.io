

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "cydney.november@moneychair.org",
        Password: "3FC95FD6BB044828EDFFC94961EE78F4A62E",
        To: 'rizalbjm7788@gmail.com',
        From : "rizalbjm679@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
    }).then(
        message => alert("Message Sent Succesfully. Thank You.")
    );
}
