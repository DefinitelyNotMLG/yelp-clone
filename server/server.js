//dependancies
require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require('morgan');

//logger
app.use(morgan('dev'))

//middleware
app.use(express.json())

//create restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: ["macdonalds", "wendys"],
        },
    });
});

//update restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["macdonalds", "wendys"],
        },
    });
});


//grab all restaurants
app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["macdonalds", "wendys"],
        },
    });
});

//grab a single restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["macdonalds", "wendys"],
        },
    });
});

//delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success"
    });
});


//listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});