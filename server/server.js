//dependancies
require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();
const morgan = require('morgan');

//logger
app.use(morgan('dev'))

//middleware
app.use(express.json())

//create restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query(
        "INSERT INTO restaurant (name, location, price_range) values ($1, $2, $3) returning *",
        [req.body.name, req.body.location, req.body.price_range]
        );
        res.status(201).json({
        status: "success",
        data: {
            restraunt: results.rows[0],
        }
    });
}
catch (err) {
    console.log(err)
}
});

//update restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
    const results = await db.query(
        "UPDATE restaurant SET name = $1, location = $2, price_range = $3 where id = $4 returning *",
    [req.body.name, req.body.location, req.body.price_range, req.params.id]);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: results.rows[0],
        },
    });
} catch (err) {
    console.log(err);
}
});


//get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

    try {
    const results = await db.query("select * from restaurant");
    res.status(200).json({
        status: "success",
        results: results.rows.length,
        data: {
            restaurant: results.rows,
        },
    });
} catch (err) {
    console.log(err);
};
});

//get a single restaurant
app.get("/api/v1/restaurants/:id", async (req, res) => {
       try {
        const results = await db.query("select * from restaurant where id =$1", [req.params.id]);
        res.status(200).json({
        status: "success",
        data: {
            restaurant: results.rows[0],
        },
    });
} catch (err) {
    console.log(err);
};
});

//delete restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const results = await db.query ("DELETE FROM restaurant where id = $1", [req.params.id])
        res.status(204).json({
        status: "success"
    });
} catch (err) {
    console.log(err);
}
});


//listener
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});