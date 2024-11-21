import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SendMessageDto } from './dto/send-message.dto';
import { Chat } from './schemas/chat.schema';
import { RabbitmqService } from './rabbitmq.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private readonly chatModel: Model<Chat>,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  // Kirim pesan
  async sendMessage(sendMessageDto: SendMessageDto) {
    const message = new this.chatModel(sendMessageDto);
    await message.save();  // Simpan pesan ke DB
    await this.rabbitmqService.sendMessageNotification(message);  // Kirim notifikasi dengan RabbitMQ
    return message;
  }

  // Ambil pesan berdasarkan senderId atau receiverId
  async getMessages(senderId: string, receiverId: string) {
    return this.chatModel.find({
      $or: [{ senderId: senderId }, { receiverId: receiverId }],
    }).exec();
  }
}