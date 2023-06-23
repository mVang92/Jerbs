const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1/jerbs", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to database."))
    .catch(error => console.log(error));

app.listen(PORT, () => console.log(`API Server now listening on PORT ${PORT}!`));