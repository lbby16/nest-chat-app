import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { Profile, ProfileSchema } from './schemas/profile.schema';
import { Account, AccountSchema } from '../auth/schemas/account.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Profile.name, schema: ProfileSchema },
      { name: Account.name, schema: AccountSchema },
    ]),
  ],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
