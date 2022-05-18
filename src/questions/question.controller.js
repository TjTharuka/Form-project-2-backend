// import service
const service = require('./question.service');
// import response service to handle the output
const response = require('../../services/responseService');

// GET all questions
module.exports.getAll = async (req, res) => {
  try {
    
    const output = await service.getAll(req.query);
    return response.successWithPaginationData(output, res);
  } catch (error) {
    return response.customError(error, res);
  }
};

// GET single question 
module.exports.getOne = async (req, res) => {
  try { 
    const output = await service.getById(req.params.id);
    return response.successWithData(output, res);
  } catch (error) {
    return response.customError(error, res);
  }
};

// GET single question by Name 
module.exports.getSearch = async (req, res) => {
  try { 
    const output = await service.getBysearch(req.query.schoolName);
    return response.successWithData(output, res);
  } catch (error) {
    return response.customError(error, res);
  }
};

// POST single object
module.exports.postData = async (req, res) => {      
  console.log('👍👍',req.body);
  try {
    const output = await service.save(req.body.quactions);
    return response.successWithData(output, res);
  } catch (error) {
    console.log(error);
    return response.customError(error, res);
  }
};

// PUT single object 
module.exports.putData = async (req, res) => {
  try {
    const output = await service.updateSingleObj(req.body);
    return response.successWithData(output, res);
  } catch (error) {
    return response.customError(error, res);
  }
};




// Delete single question
module.exports.deleteData = async (req, res) => { 
  try {
    const output = await service.DeleteSingleObject(req.params.id);
    

    return  response.successWithData(output, res);
  } catch (error) {
    return response.customError(error, res);    
  }
};