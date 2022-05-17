// import permission list
const permissionList = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  school_get_all: {
    path: '/',
    granted: [
      permissionList.admin,
      permissionList.customer,
      permissionList.staff,
    ],
  },
  school_get_by_id: {
    path: '/:id',
    granted: [
      permissionList.admin,
      permissionList.customer,
      permissionList.staff,
    ],
  },
  school_save: {
    path: '/',
    granted: [permissionList.admin, permissionList.customer],
  },
  school_update: {
    path: '/',
    granted: [permissionList.admin, permissionList.customer],
  },
  school_remove: {
    path: '/:id',
    granted: [permissionList.admin],
  },
};
