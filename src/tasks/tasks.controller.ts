import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { Task } from './models/task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(@Body() task: Partial<Task>): Promise<Task> {
    return this.tasksService.createTask(task);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() task: Partial<Task>,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTask(id);
  }
}
