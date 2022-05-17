import { Response } from 'express';

export const successWithData = (data: any, res: Response): Response => {
  return res.json({
    status: true,
    data,
  });
};

export const successWithMessage = (
  message: string,
  res: Response
): Response => {
  return res.json({
    status: true,
    msg: message,
  });
};

export const customError = (message: any, res: Response): Response => {
  return res.status(422).json({
    status: false,
    code: message.code,
    message: message.message,
  });
};

export const internalErrorHandle = (
  message: string,
  res: Response
): Response => {
  return res.status(422).json({
    status: false,
    message,
  });
};
