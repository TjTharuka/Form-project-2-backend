import * as joi from 'joi';
import { sortingOrder } from './sort.config';

// Custom function to convert number to string
export const convertNumberToString = joi.extend((customJoi) => ({
  type: 'string',
  base: customJoi.string(),
  coerce: {
    from: 'number',
    method(value) {
      if (!Number.isNaN(parseFloat(value)) && Number.isFinite(value)) {
        return { value: value.toString() };
      }
      return { value };
    },
  },
}));

export const pagination = {
  limit: joi.number().integer().min(0).required(),
  page: joi.number().integer().min(1).required(),
  column: joi.number().integer().min(-1).required(),
  order: joi
    .string()
    .valid(sortingOrder.ascending, sortingOrder.descending, null, '')
    .required(),
  exclude: joi.array().allow(null, ''),
  search: joi.string().allow(null, ''),
};

export const paginationSchema = joi.object().keys({
  ...pagination,
});

export const id = joi.object().keys({
  id: joi.string().alphanum().min(24).max(24).required(),
});

export const stripeId = joi.object().keys({
  id: joi.string().min(27).max(27).required(),
});

export const fileSchema = joi
  .object()
  .keys({
    size: joi.number().min(0).required(),
    path: joi.string().required(),
    name: joi.string().required(),
    type: joi.string().required(),
  })
  .unknown(true);
