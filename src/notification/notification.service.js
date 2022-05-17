// import repository
const repository = require('./notification.repository');
// import express
const { query } = require('express');
// collection name for the errors
const collectionName = 'notification';
// object ID for mongodb
const ObjectId = require('mongodb').ObjectID;

/**
 * COUNT all data set
 * @input
 * @output {array}
 */
module.exports.count = async (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.count(query);
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
 * GET all data set
 * @input
 * @output {array}
 */
module.exports.getAll = async (queryParams) => {
  return new Promise(async (resolve, reject) => {
    const query = { is_deleted: false };
    try {
      const count = await this.count(query);
      const data = await repository.findAll(query, queryParams);
      if (!data || data.length == 0) {
        resolve({
          count,
          value: [],
        });
      } else {
        resolve({
          count,
          value: data,
        });
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
        reject(`No data found from given ${collectionName} id`);
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
      const data = await repository.updateSingleObject(
        { _id: ObjectId(id), is_deleted: false },
        obj
      );

      if (!data) {
        reject(`No data found from given ${collectionName} id`);
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
      const data = await repository.updateSingleObject(
        { _id: ObjectId(id), is_deleted: false },
        { is_deleted: true }
      );
      if (!data) {
        reject(`No data found from given ${collectionName} id`);
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
