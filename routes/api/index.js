const router = require("express").Router();
const authRoutes = require("./authRoutes");

// Book routes
router.use("/signin", authRoutes);

module.exports = router;
