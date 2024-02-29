const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const user = require ('../models/user')
const router = express.Router();


router.post('/register', async (req,res) =>{
    try {
        const {username,password}=req.body;
        const user = new User ({username,password})
        await user.save();
        res.status(201).send('User Registred succesfully');
    } catch (error){
        res.status(400).send(error.message)
    }
})