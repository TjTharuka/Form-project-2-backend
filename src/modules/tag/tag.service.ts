import { pathOr } from 'ramda';

import config from '../../config/config';
import * as sortingConfig from '../../config/sort.config';
import tagConfig from '../../config/tag.config';
import TagModel from './tag.model';
import { ITag, ITagMongoose } from './tag.interface';
import * as repository from '../../services/repository.service';
import { setLimitToPositiveValue } from '../../services/common.service';
// import { removePrayerRequestTags } from '../prayer-request/prayer-request.service';
// import { removeScriptureTags } from '../scripture/scripture.service';

/**
 * Create new tag
 * @param body
 */
export const createTag = async (body: ITag): Promise<ITagMongoose> => {
  const currentTags = await getTags({
    limit: 0,
    page: 1,
    column: -1,
    order: '',
    status: config.status.active,
  });

  if (currentTags.recordsTotal >= tagConfig.maxLimit) {
    throw new Error(`Maximum tag limit is ${tagConfig.maxLimit}`);
  }

  body.name = body.name.trim();
  const tagExists = currentTags.tags.some((tag) => tag.name === body.name);

  if (tagExists) {
    throw new Error('Tag already exists.');
  }

  const tag = new TagModel(body);
  return repository.save(tag);
};

/**
 * Get tag by id
 * @param tagId
 */
export const getTagById = async (tagId: string): Promise<ITagMongoose> => {
  return repository.findOne(TagModel, {
    _id: tagId,
  });
};

/**
 * Get all tags
 * @param body
 */
export const getTags = async (
  body: IPagination
): Promise<{
  tags: Array<ITagMongoose>;
  recordsTotal: number;
  recordsFiltered: number;
}> => {
  const { limit, column, order, page, status, name, search } = body;
  let recordsTotal;
  let tags;
  const sortQuery = {};
  let matchQuery = {};
  let sortingOrder = order === sortingConfig.sortingOrder.descending ? -1 : 1;
  let sortingColumn = sortingConfig.sortingColumn.tags[column];

  // Set sorting column and order if they are not specified
  if (!column || +column === -1) {
    sortingColumn = 'created_at';
    sortingOrder = !order ? -1 : sortingOrder;
  }

  sortQuery[sortingColumn] = sortingOrder;

  if (status === config.status.active) {
    matchQuery = {
      delete_date: null,
    };
  } else if (status === config.status.inactive) {
    matchQuery = {
      delete_date: { $ne: null },
    };
  }

  if (name) {
    matchQuery = {
      ...matchQuery,
      name,
    };
  }

  const prePaginationQuery = [
    {
      $match: matchQuery,
    },
  ];

  recordsTotal = await repository.findByAggregateQuery(TagModel, [
    ...prePaginationQuery,
    { $count: 'count' },
  ]);

  recordsTotal = pathOr(0, [0, 'count'], recordsTotal);

  const pageLimit = setLimitToPositiveValue(limit, recordsTotal);

  const paginationQuery = [
    { $sort: sortQuery },
    { $skip: page ? pageLimit * (page - 1) : 0 },
    { $limit: +pageLimit || +recordsTotal },
  ];

  if (!search) {
    tags = await repository.findByAggregateQuery(TagModel, [
      ...prePaginationQuery,
      ...paginationQuery,
    ]);
  } else {
    const searchQuery = [
      ...prePaginationQuery,
      {
        $match: {
          name: { $regex: search, $options: 'i' },
        },
      },
    ];

    const data = await repository.findByAggregateQuery(TagModel, [
      {
        $facet: {
          tags: [...searchQuery, ...paginationQuery],
          recordsTotal: [...searchQuery, { $count: 'count' }],
        },
      },
    ]);

    tags = pathOr([], [0, 'tags'], data);
    recordsTotal = pathOr(0, [0, 'recordsTotal', 0, 'count'], data);
  }

  const recordsFiltered = tags ? tags.length : 0;

  return {
    tags,
    recordsTotal,
    recordsFiltered,
  };
};

/**
 * Update tag
 * @param body
 */
export const updateTag = async (body: {
  _id: string;
  name?: string;
  description?: string;
}): Promise<ITagMongoose> => {
  return repository.updateOne(
    TagModel,
    {
      _id: body._id,
    },
    body,
    {
      new: true,
    }
  );
};

/**
 * Increase/reduce tag usage count
 * @param body
 */
export const increaseReduceTagUsageCount = async (body: {
  tagIds: Array<string>;
  incrementAmount: number;
}): Promise<any> => {
  return repository.updateMany(
    TagModel,
    {
      _id: body.tagIds,
    },
    {
      $inc: {
        usage_count: body.incrementAmount,
      },
    }
  );
};

/**
 * Delete tag
 * @param tagId
 */
export const deleteTag = async (tagId: string): Promise<ITagMongoose> => {
  // await removePrayerRequestTags(tagId);
  // await removeScriptureTags(tagId);
  return repository.updateOne(
    TagModel,
    {
      _id: tagId,
    },
    { delete_date: new Date() },
    {
      new: true,
    }
  );
};

interface IPagination {
  limit: number;
  column: number;
  order: string;
  page: number;
  status?: string;
  name?: string;
  search?: string;
}
