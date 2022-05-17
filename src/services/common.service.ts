import * as repository from './repository.service';
import config from '../config/config';
import { sortingOrder } from '../config/sort.config';

export const setLimitToPositiveValue = (
  limit: number,
  recordsTotal: any
): number => {
  let positiveLimit;
  if (limit == null || limit <= 0 || Number.isNaN(limit)) {
    if (recordsTotal > 0) {
      positiveLimit = recordsTotal;
    } else {
      positiveLimit = 1;
    }
  } else {
    positiveLimit = limit;
  }

  return positiveLimit;
};

/**
 * Check if 2 arrays are equal (does not work with object arrays)
 * @param arr1
 * @param arr2
 */
export const arraysEqual = (arr1, arr2) => {
  if (arr1 === arr2) return true;
  if (arr1 == null || arr2 == null) return false;
  if (arr1.length !== arr2.length) return false;

  arr1.sort();
  arr2.sort();

  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

/**
 * Check if the given identity already exists in the provided collection
 * @param identity
 * @param Model
 */
const identityExists = async (identity: string, Modal) => {
  const record = await repository.findOne(Modal, { identity });
  return !!record;
};

/**
 * Change the given name and append random four digit number
 * @param name
 * @param limit
 */
const changeName = async (name: string, limit: number, Model) => {
  const groupLimit = 10000;
  if (limit < groupLimit) {
    limit += 1;
    const primaryName = name.substring(0, name.lastIndexOf('-') + 1);
    const newName = primaryName + Math.floor(Math.random() * groupLimit);
    const finalName = (await identityExists(newName, Model))
      ? changeName(name, limit, Model)
      : newName;
    return finalName;
  }
  throw new Error('Please choose a different name');
};

/**
 * Check if the given name exists in the db and change it
 * @param name
 * @param Model
 */
export const createIdentity = async (
  name: string,
  Model,
  identity?: string
) => {
  const startInt = 1;
  if (name !== '' && name !== ' ' && name) {
    const formattedName = name
      .trim()
      .split(' ')
      .join('-')
      .toLowerCase()
      .replace(/\//g, '-');
    const charsReplacedIdentity = await replaceReservedCharacters(
      formattedName,
      ''
    );
    let exists;
    if (identity && identity === charsReplacedIdentity) {
      exists = '';
    } else {
      exists = await identityExists(charsReplacedIdentity, Model);
    }
    const newName = exists
      ? await changeName(`${charsReplacedIdentity}-`, startInt, Model)
      : charsReplacedIdentity;
    return newName;
  }
  throw new Error('Name is required to generate identity');
};

/**
 * Replace reserved special characters
 * @param identity
 * @param replaceValue
 */
export const replaceReservedCharacters = (identity: string, replaceValue?) => {
  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
  for (let i = 0; i < config.dbEscapeCharacters.length; i++) {
    const regex = new RegExp(`\\${config.dbEscapeCharacters[i]}`, 'g');
    identity = identity.replace(
      regex,
      `${
        replaceValue != null
          ? replaceValue
          : `\\${config.dbEscapeCharacters[i]}`
      }`
    );
  }
  return identity;
};

/**
 * Group objects in array by property
 * @param array
 * @param property
 * @returns {Array}
 */
export const groupBy = (array, property) => {
  let i = 0;
  let val;
  let index;
  const values: any = [];
  const result: any = [];

  for (; i < array.length; i++) {
    val = array[i][property];
    index = values.indexOf(val);
    if (index > -1) {
      result[index].push(array[i]);
    } else {
      values.push(val);
      result.push([array[i]]);
    }
  }
  return result;
};

/**
 * Sort object array
 * @param array
 * @param objectKey
 * @param sortOrder
 */
export const sortObjectArray = (
  array,
  objectKey: string,
  sortOrder: string
) => {
  return array.sort((a, b) => {
    return sortOrder === sortingOrder.descending
      ? b[objectKey] - a[objectKey]
      : a[objectKey] - b[objectKey];
  });
};
