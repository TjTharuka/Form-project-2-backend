const array = require("joi/lib/types/array");

module.exports.arrayExtractKeyValue = (array=[], key) => {
  return array.map(item=>item[key])
};
