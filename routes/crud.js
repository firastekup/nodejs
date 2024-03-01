const express = require('express');
const router = express.Router();
const Auth = require('../models/Auth');

router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;
    const auth = new Auth({ title, content });
    await auth.save();
    res.status(201).json(auth);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur Serveur');
  }
});

router.get('/', async (req, res) => {
  try {
    const auths = await Auth.find();
    res.json(auths);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur Serveur');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const auth = await Auth.findById(req.params.id);
    if (!auth) {
      return res.status(404).json({ message: 'Auth non trouvé' });
    }
    res.json(auth);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur Serveur');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { title, content } = req.body;
    const auth = await Auth.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!auth) {
      return res.status(404).json({ message: 'Auth non trouvé' });
    }
    res.json(auth);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur Serveur');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const auth = await Auth.findByIdAndDelete(req.params.id);
    if (!auth) {
      return res.status(404).json({ message: 'Auth non trouvé' });
    }
    res.json({ message: 'Auth supprimé' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Erreur Serveur');
  }
});

module.exports = router;
