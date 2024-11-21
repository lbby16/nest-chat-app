import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-chat'),
    AuthModule,
    ChatModule,
    ProfileModule,
  ],
})
export class AppModule {}
