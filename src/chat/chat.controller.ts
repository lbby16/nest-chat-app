import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  // Endpoint untuk mengirim pesan
  @Post('send')
  async sendMessage(@Body() sendMessageDto: SendMessageDto) {
    return this.chatService.sendMessage(sendMessageDto);
  }

  // Endpoint untuk mengambil pesan berdasarkan senderId dan receiverId
  @Get(':senderId/:receiverId')
  async getMessages(
    @Param('senderId') senderId: string,
    @Param('receiverId') receiverId: string
  ) {
    return this.chatService.getMessages(senderId, receiverId);
  }
}