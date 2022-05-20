// import model
const { quality } = require('jimp');
const { arrayExtractKeyValue } = require('../../services/arrayKeyValueExtractorService');
const model = require('./question.model');
const { save:savePaper} = require('../paper/paper.repository');


// count
module.exports.count = (query) => {
  return new Promise((resolve, reject) => {
    model
      .count(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// find all
module.exports.findAll = (query,limit=0,skip=0) => {
  return new Promise((resolve, reject) => {

    model
      .find(query)
      .limit(limit) 
      .skip(skip)
      .populate('fileId')
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// get By Id
module.exports.findById = (query) => {
  return new Promise((resolve, reject) => {
    model
      .findById(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// save object
module.exports.save = (obj) => {
  return new Promise((resolve, reject) => {
     model.insertMany(obj.quactions)
      .then(async(data) => {
        // extract all quacation ids
        const extractedIdArray=arrayExtractKeyValue(data,'id');
        // create new paper object
        const paperObject={...obj,quactions:extractedIdArray,}
        // save to paper
        await savePaper(paperObject);
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// update object
module.exports.updateSingleObject = (query, obj) => {
  return new Promise((resolve, reject) => {
    
    model
    .findOneAndUpdate(query, obj, { new: true, safe: true })
    .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

// remove object
module.exports.removeObject = (query) => {
  return new Promise((resolve, reject) => {
    model
      .findByIdAndDelete(query)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
