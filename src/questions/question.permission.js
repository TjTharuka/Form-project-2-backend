// import permission list
const permissionList = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  question_get_all: {
    path: '/',
    granted: [
      permissionList.admin,
      permissionList.customer,
    ],
  },
  question_get_by_id: {
    path: '/:id',
    granted: [
      permissionList.admin,
      permissionList.customer,
    ],
  },
  question_save: {
    path: '/',
    granted: [permissionList.admin],
  },
  question_update: {
    path: '/',
    granted: [permissionList.admin],
  },
  question_remove: {
    path: '/:id',
    granted: [permissionList.admin],
  },
};
