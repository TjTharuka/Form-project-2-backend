// import permission list
const { admin } = require('../../config/permissionConfig').userRoles;

module.exports.permission_list = {
  notification_get_all: {
    path: '/',
  },
  notification_get_by_id: {
    path: '/:id',
  },
  notification_save: {
    path: '/',
    granted: [admin],
  },
  notification_update: {
    path: '/',
    granted: [admin],
  },
  notification_remove: {
    path: '/:id',
    granted: [admin],
  },
};
