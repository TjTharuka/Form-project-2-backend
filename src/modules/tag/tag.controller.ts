import { Request, Response } from 'express';

import { customError, successWithData } from '../../services/response.service';
// import {
//   getTokenFromHeader,
// getUserByToken,
// } from '../../services/validator.service';
import * as service from './tag.service';

/**
 * Create new tag
 * @param req
 * @param res
 */
export const createTag = async (req: Request, res: Response) => {
  try {
    const result = await service.createTag(req.body);
    return successWithData(result, res);
  } catch (error) {
    return customError(error, res);
  }
};

/**
 * Update tag
 * @param req
 * @param res
 */
export const updateTag = async (req: Request, res: Response) => {
  try {
    const result = await service.updateTag(req.body);
    return successWithData(result, res);
  } catch (error) {
    return customError(error, res);
  }
};

/**
 * Get tag by id
 * @param req
 * @param res
 */
export const getTagById = async (req: Request, res: Response) => {
  try {
    // const token = await getTokenFromHeader(req);
    // await getUserByToken(token);
    const result = await service.getTagById(req.params.id);
    return successWithData(result, res);
  } catch (error) {
    return customError(error, res);
  }
};

/**
 * Get tags
 * @param req
 * @param res
 */
export const getTags = async (req: Request, res: Response) => {
  try {
    const result = await service.getTags(req.body);
    return successWithData(result, res);
  } catch (error) {
    return customError(error, res);
  }
};

/**
 * Delete tag
 * @param req
 * @param res
 */
export const deleteTag = async (req: Request, res: Response) => {
  try {
    const result = await service.deleteTag(req.params.id);
    return successWithData(result, res);
  } catch (error) {
    return customError(error, res);
  }
};
