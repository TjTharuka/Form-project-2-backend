// import permission list
const permissionList = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  userAnswers_get_all: {
    path: '/',
    granted: [
      permissionList.admin,
      permissionList.customer,
    ],
  },
  userAnswers_get_by_id: {
    path: '/:id',
    granted: [
      permissionList.admin,
      permissionList.customer,
    ],
  },
  userAnswers_save: {
    path: '/',
    granted: [permissionList.admin],
  },
  userAnswers_update: {
    path: '/',
    granted: [permissionList.admin],
  },
  userAnswers_remove: {
    path: '/:id',
    granted: [permissionList.admin],
  },
};
