import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Account } from '../../auth/schemas/account.schema';

@Schema({ timestamps: true })
export class Profile extends Document {
  @Prop({ required: true })
  fullname: string;

  @Prop()
  gender: string;

  @Prop()
  birthday: Date;

  @Prop()
  horoscope: string;

  @Prop()
  zodiac: string;

  @Prop()
  height: number;

  @Prop()
  weight: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true })
  account: Account;
}

export const ProfileSchema = SchemaFactory.createForClass(Profile);
