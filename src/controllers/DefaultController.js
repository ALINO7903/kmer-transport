const { Router } = require("express");

const DefaultController ={
    getHomePage: async (req, res) =>{
        return res.status(200).send('This is the home page');
    },

    login: async(req, res) =>{
        return res.status(200).send('This is the login page');
    }
}

module.exports = DefaultController;