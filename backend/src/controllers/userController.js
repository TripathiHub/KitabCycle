const User = require("../models/User")
async function createProfile(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json({
            message: "profile created successfully",
            user
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error"
        })
    }
}
module.exports = {
    createProfile
}

