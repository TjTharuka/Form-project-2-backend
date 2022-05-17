// import permission list
const permissionList = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  classroom_get_all: {
    path: '/',
    granted: [
      permissionList.admin,
      permissionList.customer,
      permissionList.staff,
    ],
  },
  classroom_get_by_id: {
    path: '/:id',
    granted: [
      permissionList.admin,
      permissionList.customer,
      permissionList.staff,
    ],
  },
  search_by_name: {
    path: '/:schoolName',
    granted: [
      permissionList.admin,
      permissionList.customer,
      permissionList.staff,
    ],
  },
  classroom_save: {
    path: '/',
    granted: [permissionList.admin, permissionList.customer],
  },
  classroom_update: {
    path: '/',
    granted: [permissionList.admin, permissionList.customer],
  },
  classroom_remove: {
    path: '/:id',
    granted: [permissionList.admin],
  },
};
