import { Document } from 'mongoose';

export interface ITag {
  _id: string;
  name: string;
  description?: string;
  usage_count: number;
  delete_date?: Date;
}

export interface ITagMongoose extends ITag, Document {}
