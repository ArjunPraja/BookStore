const ContactUsModel = require('../models/ContactUsModel');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const addContactUs = async (req, res) => {
    const schema = Joi.object({
        fullName: Joi.string().trim().required().messages({
            'string.empty': 'Full Name is required.'
        }),
        email: Joi.string().email().required().messages({
            'string.email': 'Email is not valid.',
            'string.empty': 'Email is required.'
        }),
        message: Joi.string().min(10).required().messages({
            'string.min': 'Message must be at least 10 characters long.',
            'string.empty': 'Message is required.'
        })
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
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'No token provided', error: true });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        const userUuid = decoded.id;

         
        console.log(userUuid);

        const { fullName, email, message } = req.body;

        const newContact = new ContactUsModel({
            userUuid,
            fullName,
            email,
            message
        });

        const savedContact = await newContact.save();

        return res.status(201).json({
            message: "Contact created successfully",
            data: savedContact,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await ContactUsModel.find();
        return res.status(200).json({
            message: "Contacts retrieved successfully",
            data: contacts,
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        });
    }
};

module.exports = {
    addContactUs,
    getAllContacts
};
