const asyncErrorWrapper = require("express-async-handler");
const { searchHelper, paginationHelper } = require("./queryMiddlewareHelper");

const userQueryMiddleware = function (model, options) {
  return asyncErrorWrapper(async function (req, res, next) {
    let query = model.find();

    query = searchHelper("name", query, req);

    const total = await model.countDocuments();
    const paginationResult = await paginationHelper(total, query, req);

    query = paginationResult.query;
    pagination = paginationResult.pagination;

    const queryResult = await query.find();
    
    res.queryResult ={
        success: true,
        count:queryResult.length,
        pagination:pagination,
        data:queryResult

    } 

    next();
  });
};

module.exports = userQueryMiddleware;
