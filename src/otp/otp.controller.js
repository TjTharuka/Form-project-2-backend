// import service
const service = require('./otp.service');
// import response service to handle the output
const {
  successWithPaginationData,
  customError,
  successWithData,
} = require('../../services/responseService');

// GET all data set
module.exports.getAll = async (req, res) => {
  try {
    const output = await service.getAll(req.query);
    return successWithPaginationData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// GET single object
module.exports.getOne = async (req, res) => {
  try {
    const output = await service.getById(req.params.id);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// POST single object
module.exports.post = async (req, res) => {
  try {
    const output = await service.save(req.body);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// PUT single object
module.exports.put = async (req, res) => {
  try {
    const output = await service.updateSingleObj(req.body);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};

// Delete single object
module.exports.delete = async (req, res) => {
  try {
    const output = await service.DeleteSingleObject(req.params.id);
    return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};
