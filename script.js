function sendEmail(){
    Email.send({
      Host : "smtp.gmail.com",
      Username : "spiritofpjgs@gmail.com",
      Password : "aduemzjvadhylfkd",
      To : 'arjunagamers777@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form Inquiry",
      Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value 
            + "<br> Subject: " + document.getElementById("subject").value
            + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message Sent Successfully")
  );
}