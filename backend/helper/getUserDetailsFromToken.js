// const jwt = require('jsonwebtoken');
// const UserModel = require('../models/UserModel');
// const mongoose = require('mongoose');

// // Hardcoded secret key (not recommended for production)
// const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

// const getUserDetailsFromToken = async (token) => {
//     if (!token) {
//         return {
//             message: "Session expired",
//             logout: true,
//         };
//     }

//     try {
//         const decoded = jwt.verify(token, JWT_SECRET_KEY);
//         const { id, role,email } = decoded;
//         console.log(id)
//         let user;
//         if (role === 'admin') {
//             // Use ObjectId to properly query by _id in the Admins collection
//             user = await mongoose.connection.db.collection('Admins').findOne({ uuid:id });
//         } else {
//             user = await UserModel.findOne({uuid:id}).select('-password');
//         }

//         if (!user) {
//             return {
//                 message: "User not found",
//                 logout: true,
//             };
//         }

//         return user;
//     } catch (error) {
//         return {
//             message: "Invalid token",
//             error: true,
//         };
//     }
// };

// module.exports = getUserDetailsFromToken;



// getUserDetailsFromToken.js                      
const jwt = require('jsonwebtoken');
const UserModel = require('../models/UserModel');
const mongoose = require('mongoose');

const JWT_SECRET_KEY = process.env.JWT_SECREAT_KEY;

const getUserDetailsFromToken = async (token) => {
    if (!token) {
        return {
            message: "Session expired",
            logout: true,
        };
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET_KEY);
        const { id, role } = decoded;

        let user;
        if (role === 'admin') {
            user = await mongoose.connection.db.collection('Admins').findOne({ uuid: id });
        } else {
            user = await UserModel.findOne({ uuid: id }).select('-password');
        }

        if (!user) {
            return {
                message: "User not found",
                logout: true,
            };
        }

        return user;
    } catch (error) {
        return {
            message: "Invalid token",
            error: true,
        };
    }
};

module.exports = getUserDetailsFromToken;