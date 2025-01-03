import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.controller';

@Module({
  imports: [MongooseModule.forRoot('STRING'), TasksModule],
})
export class AppModule {}
