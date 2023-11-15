// Sélectionnez le bouton "Connecter"
var connectBtn = document.getElementById("connectBtn");

// Sélectionnez le conteneur du formulaire de connexion
var loginFormContainer = document.getElementById("loginFormContainer");

// Ajoutez un gestionnaire d'événement de clic au bouton "Connecter"
connectBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Empêche le comportement de lien par défaut
  
  // Ajoutez une classe CSS pour afficher le formulaire de connexion
  loginFormContainer.classList.add("show");
});


const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'codbenin@gmail.com',
      pass: 'COD+229BEN'
    }
  });


  
//---------------------------------------------------------------------------------------

// Gestion de la soumission du formulaire
  const mailOptions = {
    from: 'bronsonbruno16@gmail.com',
    to: event.queryStringParameters.email, // User's email from form submission
    subject: 'Remerciement',
    text: 'Merci de joindre COD-Benin!'
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred while sending the email' })
    };
  }
};



document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");

  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Get form data and send a POST request to the serverless function
    const formData = new FormData(loginForm);
    const response = await fetch('/.netlify/functions/sendEmail', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      // Email sent successfully, you can handle the UI accordingly
    } else {
      // Handle error case
    }
  });
});




