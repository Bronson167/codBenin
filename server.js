const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Utilisation de body-parser pour récupérer les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint pour traiter les données du formulaire
app.post('/process-form', (req, res) => {
  const { username, email } = req.body;

  // Configurer le service d'e-mail (utilisez votre propre configuration)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bronsonbruno16@gmail.com',
      pass: 'guerilla'
    }
  });

  // Options du message
  const mailOptions = {
    from: 'bronsonbruno16@gmail.com',
    to: 'bronsonbruno16@gmail.com',
    subject: 'Nouveau formulaire de connexion',
    text: `Nom d'utilisateur: ${username}\nE-mail: ${email}`
  };

  // Envoyer l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.error(error);
    }
    console.log('E-mail envoyé :', info.response);
  });

  res.send('Données du formulaire traitées avec succès');
});

app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
