import { Injectable } from '@nestjs/common';
import * as amqp from 'amqplib';
import { Chat } from './schemas/chat.schema';

@Injectable()
export class RabbitmqService {
  private readonly rabbitMqUrl = 'amqp://localhost';
  private readonly queue = 'message_notifications';
  private connection: amqp.Connection;
  private channel: amqp.Channel;

  // Initialize connection and channel once
  async init() {
    try {
      this.connection = await amqp.connect(this.rabbitMqUrl);
      this.channel = await this.connection.createChannel();

      // Ensure the queue exists with durability
      await this.channel.assertQueue(this.queue, { durable: true });

      console.log('Connected to RabbitMQ');
    } catch (error) {
      console.error('Error connecting to RabbitMQ:', error);
      throw new Error('Failed to connect to RabbitMQ');
    }
  }

  // Send Message Notification to RabbitMQ Queue
  async sendMessageNotification(message: Chat) {
    try {
      // Ensure the connection and channel are initialized
      if (!this.channel || !this.connection) {
        await this.init(); // Reinitialize if necessary
      }

      // Send the message to the queue with persistence
      this.channel.sendToQueue(this.queue, Buffer.from(JSON.stringify(message)), { persistent: true });

      console.log('Message sent to queue:', message);
    } catch (error) {
      console.error('Error sending message to RabbitMQ:', error);
      throw new Error('Failed to send message notification');
    }
  }

  // Close connection and channel gracefully
  async close() {
    try {
      if (this.channel) {
        await this.channel.close();
      }
      if (this.connection) {
        await this.connection.close();
      }
      console.log('RabbitMQ connection closed');
    } catch (error) {
      console.error('Error closing RabbitMQ connection:', error);
    }
  }
}
