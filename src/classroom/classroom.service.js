// import repository
const repository = require('./classroom.repository');
const appendService = require('../../services/searchFieldAppendService');
// import ObjectId
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
      if (!data || data.length === 0) {
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
    let query = { is_deleted: false };
    
    // search by class_Room_Name
    query = appendService.appendQueryParams(queryParams, 'class_Room_Name', query);
    // search by body
    query = appendService.appendQueryParams(queryParams, 'body', query);
    // search by school_id
    query = appendService.appendQueryParams(queryParams, 'school_id', query,true);
    // search by student_count
    query = appendService.appendQueryParams(queryParams, 'student_count', query, true);

    
    
    
    try {
      
      const count = await this.count(query);
      const data = await repository.findAll(query,parseInt(queryParams.limit),parseInt(queryParams.skip));
      
     
      
      if (!data || data.length == 0) {
        resolve({
          count:0,
          value: data,
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
        reject('No data found from given id');
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};


module.exports.getBysearch = async (searchResult) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await repository.find({class_Room_Name:searchResult});


      if (!data || data.length == 0) {  
        reject('No data found from given searchResult');
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
      const data = await repository.updateSingleObject(

        { _id: ObjectId(id),is_deleted: false },
        {is_deleted: true}
      );
      if (!data) {
        reject(`No data found from given  id`);
      } else {
        resolve(data);
      }
    } catch (error) {
      reject(error);
    }
  });
};
