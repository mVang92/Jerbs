const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JerbsSchema = new Schema({
    company: {type: String, required: true},
    jobTitle: {type: String, required: true},
    jobDescription: {type: String},
    datePosted: {type: String},
    thoughts: [{}]
});

const Jerbs = mongoose.model("Jerbs", JerbsSchema);

module.exports = Jerbs;