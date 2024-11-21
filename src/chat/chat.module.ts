import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './schemas/chat.schema';
import { RabbitmqService } from './rabbitmq.service';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  ],
  controllers: [ChatController],
  providers: [ChatService, RabbitmqService],
  exports: [ChatService, RabbitmqService],
})
export class ChatModule {}
