const User = require('../models/user')

const createUser = async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            contactNumber: req.body.contactNumber,
            email: req.body.email,
            password: req.body.password,
            status: 'true',
            role: 'admin'
        })
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ message: 'Email already exists' });
        } else {
            res.status(500).json({ message: 'An error occurred' });
        }
    }
}

const login = async (req, res) => {
    try {
        const user = await User.findAll({
            where: { email: req.body.email }
        })
        if (user.length == 0) {
            res.status(401).json({ message: 'User is not registered.' })
        } else if (user[0].password != req.body.password) {
            res.status(401).json({ message: 'Password is wrong, Try again with correct password.' })
        } else if (user[0].status == false) {
            res.status(401).json({ message: 'User account is not yet activated' })
        } else if (user[0].password == req.body.password) {
            res.status(200).json({ message: 'Successfully logged in.. Congratulations...' })
        }
    } catch (error) {
        res.status(500).json({ message: "Something went worng, Please try again later.." })
    }
}

const forgetPassword = async (req, res) => {
    try {
        const user = await User.findAll({
            where: { email: req.body.email }
        })
        if (user.length == 0) {
            res.status(401).json({ message: 'User is not registered.' })
        } else {
            res.status(200).send(`Your password is ${user[0].password}`)
        }

    } catch (error) {
        res.status(500).json({ message: "Something went worng, Please try again later.." })
    }
}

module.exports = { createUser, login, forgetPassword }