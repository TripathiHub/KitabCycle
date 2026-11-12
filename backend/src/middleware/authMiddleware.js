const admin = require("../config/firebaseAdmin");
async function verifyToken(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authentication token missing"
            });
        }
        const token = authHeader.split(" ")[1];
        const decodedToken = await admin.verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        })
    }

}
module.exports = verifyToken;