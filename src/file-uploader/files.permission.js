// import permission list
const { admin,customer,staff } = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  files_get_by_id: {
    path: '/:id',
    granted: [
      admin,
      customer,
      staff,
    ],
  },
  filesAdd: {
    path: '/',
    granted: [admin],
  },
  filesDelete: {
    path: '/:id',
    granted: [admin],
  },
};
