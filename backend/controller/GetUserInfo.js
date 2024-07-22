// const getUserDetailsFromToken = require('../helper/getUserDetailsFromToken');

// const userDetails = async (req, res) => {
//     try {
//         const user = await getUserDetailsFromToken(req.cookies.token);

//         return res.status(200).json({
//             message: "User Details",
//             data: user,
//             role: req.user.role
//         });
//     } catch (error) {
//         return res.status(400).json({
//             message: error.message || error,
//         });
//     }
// };

// module.exports = userDetails;


// GetUserInfo.js              
const getUserDetailsFromToken = require('../helper/getUserDetailsFromToken');

const userDetails = async (req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: "Authorization header missing" });
        }

        const token = authHeader.split(' ')[1];
        const user = await getUserDetailsFromToken(token);

        if (user.error) {
            return res.status(400).json({ message: user.message });
        }

        return res.status(200).json({
            message: "User Details",
            data: user,
            role: user.role
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
        });
    }
};

module.exports = userDetails;