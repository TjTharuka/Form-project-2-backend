// import repository
const repository = require('./card.repository');

/**
 * GET all data set
 * @input
 * @output {array}
 */
module.exports.getAll = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.findAll();
      if (!data || data.length == 0) {
        resolve([]);
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * GET single object
 * @input {id}
 * @output {obj}
 */
module.exports.getById = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.findById({ _id: id });

      if (!data || data.length == 0) {  
        reject('No data found from given id');
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * POST object
 * @input {object}
 * @output {object}
 */
module.exports.save = async (obj) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.save(obj);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * PUT object
 * @input {objId}
 * @output {object}
 */
module.exports.updateSingleObj = async (obj) => {
  return new Promise(async (resolve, reject) => {
    const id = obj._id;
    delete obj._id;
    try {
      const data = await repository.updateSingleObject({ _id: id }, obj);
      if (!data) {
        reject('No data found from given id');
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * DELETE object
 * @input {objId}
 * @output {object}
 */
module.exports.DeleteSingleObject = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.removeObject({ _id: id });
      if (!data) {
        reject('No data found from given id');
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
