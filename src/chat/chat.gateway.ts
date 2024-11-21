import { WebSocketGateway, WebSocketServer, SubscribeMessage } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send_message')
  handleSendMessage(client: any, payload: any): string {
    this.server.emit('message_received', payload);
    return 'Message sent';
  }
}
