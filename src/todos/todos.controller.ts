import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Todo } from 'src/interfaces/todos.interface';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private service: TodosService) {}

  @Get()
  findAll(): Promise<Todo[]> {
    return this.service.findAll();
  }

  @Get(':id')
  finById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Post()
  create(@Body() body: Todo) {
    return this.service.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Todo) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
