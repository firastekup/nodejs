const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('./models/User');

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "L'utilisateur existe déjà" });
    }

    user = new User({ email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    res.status(200).json({ message: "Utilisateur enregistré avec succès" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur Serveur');
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Identifiants invalides" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Identifiants invalides" });
    }

    res.status(200).json({ message: "Connexion réussie" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur Serveur');
  }
});

module.exports = router;
