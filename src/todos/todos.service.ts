import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/interfaces/todos.interface';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todos') private model: Model<Todo>) {}

  async findAll(): Promise<Todo[]> {
    return await this.model.find();
  }

  async findById(id: string): Promise<Todo> {
    return await this.model.findById(id);
  }

  async create(body: any): Promise<Todo> {
    return await this.model.create(body);
  }

  async update(id: string, body: any): Promise<Todo> {
    return await this.model.findByIdAndUpdate(id, body, { new: true });
  }

  async delete(id: string): Promise<any> {
    await this.model.findByIdAndDelete(id);
    return {};
  }
}
