// import service
const service = require('./files.service');

const {
  customError,
  successWithMessage,
  successWithData,
} = require('../../services/responseService');



// GET single file 
module.exports.getOne = async (req, res) => { 
  try { 
    const output = await service.getById(req.params.id);
    // return successWithData(output.new_filename, res);
    return res.end(output.original_filename);
    // return successWithData(output, res);
  } catch (error) {
    return customError(error, res);
  }
};




/**
 * Save file
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.saveFile = async (req, res) => {
  try {
    const file = await service.saveFile(req);
    return successWithData(file, res);
  } catch (error) {
    return customError(`${error}`, res);
  }
};

/**
 * Delete file
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
module.exports.deleteFile = async (req, res) => {
  try {
    await service.deleteFile(req.params.id);
    return successWithMessage('File deleted.', res);
  } catch (error) {
    return customError(`${error}`, res);
  }
};
