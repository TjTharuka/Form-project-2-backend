import * as mongoose from 'mongoose';

import { ITagMongoose } from './tag.interface';

const { Schema } = mongoose;

const tagSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    usage_count: {
      type: Number,
      default: 0,
    },
    delete_date: {
      type: Date,
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } }
);

export default mongoose.model<ITagMongoose>('tag', tagSchema);
