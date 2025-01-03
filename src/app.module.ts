import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://nestjsCRUD:crudnestjs1324@crud-operations.qlifh.mongodb.net/?retryWrites=true&w=majority&appName=CRUD-operations',
    ),
    TasksModule,
  ],
})
export class AppModule {}
