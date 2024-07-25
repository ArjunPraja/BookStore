const bcryptjs = require('bcryptjs');
const mongoose = require('mongoose');
const UserModel = require('../models/UserModel');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const logoutUser = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'No token provided', error: true });
        }

        const token = authHeader.split(' ')[1];
        // const token =req.cookies.token;
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        const userUuid = decoded.id;

        const user = await UserModel.findOne({ uuid: userUuid });

        if (!user) {
            return res.status(404).json({ message: 'User not found', error: true });
        }

        user.status = false;
        await user.save();

        return res.status(200).json({
            message: "User is non-active on web",
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
};

module.exports = logoutUser;
