// import permission list
const permissionList = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  paper_get_all: {
    path: '/',
    granted: [
      permissionList.admin,
      permissionList.customer,
      permissionList.staff,
    ],
  },
  paper_get_by_id: {
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
  paper_save: {
    path: '/',
    granted: [permissionList.admin, permissionList.customer],
  },
  paper_update: {
    path: '/',
    granted: [permissionList.admin, permissionList.customer],
  },
  paper_remove: {
    path: '/:id',
    granted: [permissionList.admin],
  },
};
