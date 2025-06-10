const express = require("express")
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
    try{
        const {email,password } = req.body;
        const check = await User.findOne({email})
        if(check){
            res.status(400).send("User already exists")
        }
        const newUser = new User({
            email,
            password,
            createdAt:new Date()
        })

        await newUser.save()

        const token = jwt.sign({
            id: newUser._id,
            email:newUser.email,
        })
        res.status()
    }

}

const loginUser = async (req, res) => {
    
}

module.exports = { signupUser, loginUser }
