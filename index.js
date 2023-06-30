const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const movieRoute = require("./routes/movies");

// SET UP
const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json({ limit: "50mb"}));
app.use(morgan("common"));
dotenv.config();

// Connect to mongoDB;
mongoose.connect((process.env.MONGOOSE_URL), { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to DB")
    })



// ROUTES
app.use('/v1/movies', movieRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}....`)
})