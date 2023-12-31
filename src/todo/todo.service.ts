import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return this.todoRepository.save(todo);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return this.todoRepository.findOne({ where: { id } });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.findOne({ where: { id } });
    if (todo) {
      this.todoRepository.merge(todo, updateTodoDto);
      return this.todoRepository.save(todo);
    }
    return null;
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
