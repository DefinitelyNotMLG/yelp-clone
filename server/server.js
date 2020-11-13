require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api/v1/restaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["macdonalds", "wendys"],
        },
    });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
});