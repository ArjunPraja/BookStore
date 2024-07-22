const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const loginUser = async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Validation errors",
            errors: error.details,
            error: true
        });
    }

    try {
        const { email, password } = req.body;
        console.log(email,password);

        const admin = await mongoose.connection.db.collection('Admins').findOne({ email });
        if (admin) {
            const isMatch = await bcryptjs.compare(password, admin.password);
            if (!isMatch) {
                return res.status(400).json({
                    message: "Invalid credentials for admin",
                    error: true
                });
            }
            const tokenData = { id: admin.uuid, email: admin.email, role: 'admin'};
            const token = jwt.sign(tokenData, JWT_SECRET_KEY, { expiresIn: '1d' });
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'None' });
            return res.status(200).json({
                message: "Admin logged in successfully",
                role:"admin",
                token:token,
                success: true
            });
        }

        const user = await UserModel.findOne({ email });
        if (user) {
            const isMatch = await bcryptjs.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                    message: "Invalid credentials for user",
                    error: true
                });
            }
            const tokenData = { id: user.uuid, email: user.email, role: 'user'};
            const token = jwt.sign(tokenData, JWT_SECRET_KEY, { expiresIn: '1d' });
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'None' });
            return res.status(200).json({
                message: "user logged in successfully",
                role:"user",
                token:token,
                success: true
            });
        }

        return res.status(400).json({
            message: "User does not exist",
            error: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
};

module.exports = loginUser;