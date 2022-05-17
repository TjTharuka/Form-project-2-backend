export const sortingOrder = {
  ascending: 'asc',
  descending: 'desc',
};

export const sortingColumn = {
  groups: {
    '-1': '',
    0: 'group_name',
    1: 'location',
    2: 'updatedAt',
  },
  events: {
    '-1': '',
    0: 'event_name',
    1: 'location',
    2: 'to',
    3: 'from',
  },
  user: {
    '-1': '',
    0: 'display_name',
    1: 'email',
    2: 'role',
  },
  prayers: {
    '-1': '',
    0: 'prayer',
    1: 'updated_at',
    2: 'created_at',
  },
  feed: {
    '-1': '',
    0: 'creator',
  },
  groupRequests: {
    '-1': '',
  },
  tags: {
    '-1': '',
    0: 'name',
    1: 'usage_count',
  },
  faithWall: {
    '-1': '',
    1: 'updated_at',
  },
  donations: {
    '-1': '',
    0: 'created_at',
    1: 'is_recurring',
    2: 'amount',
  },
};
