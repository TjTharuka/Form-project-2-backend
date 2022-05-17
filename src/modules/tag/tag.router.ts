import { Router } from 'express';

import { id } from '../../config/joi.config';
import permissions from './tag.permission';
import { validateBody, validateParams } from '../../services/validator.service';
import * as schema from './tag.schema';
import * as controller from './tag.controller';

const tagRouter = Router();

tagRouter
  .route(permissions.createTag.path)
  .post(validateBody(schema.createTag), controller.createTag);

tagRouter
  .route(permissions.updateTag.path)
  .put(validateBody(schema.updateTag), controller.updateTag);

tagRouter.route(permissions.getTags.path).get(controller.getTags);
tagRouter
  .route(permissions.getTagById.path)
  .get(validateParams(id), controller.getTagById);

tagRouter
  .route(permissions.deleteTag.path)
  .delete(validateParams(id), controller.deleteTag);

export default tagRouter;
