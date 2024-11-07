


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "rizalbjm7788@gmail.com",
        Password: "blxvjntdxvvdctlf",
        To: 'rizalbjm7788@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Inquery on iVishMusic.com",
        Body : "Name : "+ document.getElementById("name").value
         +"<br> Email : "+ document.getElementById("email").value
         +"<br> Phone No. : "+ document.getElementById("phone").value
         +"<br> Messege : "+ document.getElementById("messege").value
    }).then(
        message => alert("Message Sent Succesfully. Thank You.")
    );
}
