const bcryptjs = require('bcryptjs');
const UserModel = require('../models/UserModel');
const Joi = require('joi');

const registerUser = async (req, res) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            'string.email': 'Email is not valid.'
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': 'Password must be at least 6 characters long.'
        }),
        name: Joi.string().trim(),
        contactNo: Joi.string().trim(),
        age: Joi.number().integer().required().messages({
            'number.base': 'Age must be a number.'
        }),
        city: Joi.string().trim(),
        state: Joi.string().trim(),
        country: Joi.string().trim()
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
        const { email, password, name, contactNo, age, city, state, country } = req.body;

        // Extract username from email
        const username = email.split('@')[0];

        let user = await UserModel.findOne({ email });

        if (user) {
            if (!user.isActive) {
                user.isActive = true;
                await user.save();
                return res.status(200).json({
                    message: "User activated successfully",
                    data: user,
                    success: true
                });
            } else {
                return res.status(400).json({
                    message: "User already exists",
                    error: true
                });
            }
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new UserModel({
            username,
            email,
            password: hashedPassword,
            name,
            contactNo,
            age,
            city,
            state,
            country,
            isActive: true
        });

        const userSave = await newUser.save();

        return res.status(201).json({
            message: "User created successfully",
            data: userSave,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
};

module.exports = registerUser;
        