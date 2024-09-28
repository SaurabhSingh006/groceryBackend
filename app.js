const express = require("express");
const affiliateRouter = require("./routes/affiliatesRoutes");

// Start express app
const app = express();

app.get('/', (req,res, next) => {
    res.status(200).json({
        name: "Hiiiii"
    });
});

app.use('/api/v1/affiliates', affiliateRouter);

module.exports = app;