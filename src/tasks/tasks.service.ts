import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './models/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  async getAllTasks(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async getTaskById(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async createTask(task: Partial<Task>): Promise<Task> {
    const newTask = new this.taskModel(task);
    return newTask.save();
  }

  async updateTask(id: string, task: Partial<Task>): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, task, { new: true }).exec();
  }

  async deleteTask(id: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
