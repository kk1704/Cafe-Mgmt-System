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

module.exports = { createUser }