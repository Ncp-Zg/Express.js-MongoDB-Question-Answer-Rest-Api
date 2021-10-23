const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const QuestionSchema = new Schema({
    title : {
        type :String,
        required : [true,"Please provide a title"],
        minlength : [10,"Please provide at least 10 characters"],
        uniqe : true
        // Bu bir sorudur. bu-bir-sorududr
    },
    content : {
        type: String,
        required : [true,"Please provide a content"],
        minlength : [20,"Please provide at least 20 characters"],
        
    },
    slug : String,
    createdAt : {
        type: Date,
        default : Date.now
    },
    user : {
        type:mongoose.Schema.ObjectId,
        required : true,
        ref : "User"
    }
});

module.exports = mongoose.model("Question",QuestionSchema);