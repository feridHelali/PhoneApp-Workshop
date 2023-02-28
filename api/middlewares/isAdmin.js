const formatResponse = require("../utilities/format.response");

const isAdmin = (req, res, next) => {
    if (req.user.role !== "Admin") {
        res.json(formatResponse("Error", "You are not allowed"))
    }
    next()
}

module.exports = isAdmin;