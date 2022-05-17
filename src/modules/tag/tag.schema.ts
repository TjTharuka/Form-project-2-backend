import * as joi from 'joi';

import config from '../../config/config';
import { pagination } from '../../config/joi.config';

const { status } = config;

export const createTag = joi.object().keys({
  name: joi.string().trim().max(30).required(),
  description: joi.string().trim().max(5000),
});

export const updateTag = joi
  .object()
  .keys({
    _id: joi.string().alphanum().min(24).max(24).required(),
    name: joi.string().trim().max(30),
    description: joi.string().trim().max(5000),
  })
  .or('name', 'description');

export const getTags = joi.object().keys({
  ...pagination,
  status: joi.string().valid(status.active, status.inactive),
});
