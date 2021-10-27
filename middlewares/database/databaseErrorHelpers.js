const CustomError = require("../../helpers/error/CustomError");
const User = require("../../models/User");
const asyncErrorWrapper = require("express-async-handler");
const Question = require("../../models/Question");


const checkUserexist = asyncErrorWrapper(async(req,res,next)=>{
    const {id} = req.params;
    const user = await User.findById(id);

    if(!user){
        return next(new CustomError("There is no such user with that id",400))
    }
    req.data=user
    next();
})

const checkQuestionexist = asyncErrorWrapper(async(req,res,next)=>{
    const question_id = req.params.id || req.params.question_id;
    const question = await Question.findById(question_id);

    if(!question){
        return next(new CustomError("There is no such question with that id",400))
    }
    req.data=question
    next();
})

module.exports={
    checkUserexist,
    checkQuestionexist
}