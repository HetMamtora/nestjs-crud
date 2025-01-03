import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import * as dotenv from 'dotenv';

dotenv.config();

console.log('process.env.MONGODB_URI', process.env.MONGODB_URI);
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), TasksModule],
})
export class AppModule {}
