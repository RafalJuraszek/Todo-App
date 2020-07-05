import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {TodoModel} from '../model/todo.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TodoService {
  BASIC_URL: string = 'http://localhost:4200/api/';

  showHeader = new EventEmitter();

  constructor(private httpService: HttpClient) {
  }

  getTodos() {
    return this.httpService.get(this.BASIC_URL + 'toDos');
  }

  addTodo(todo) {
    return this.httpService.post(this.BASIC_URL + 'toDos', todo);
  }

  deleteTodo(todo) {
    return this.httpService.delete(this.BASIC_URL + 'toDos/' + todo.toDoId);
  }

  updateTodo(updatedTodo) {
    return this.httpService.patch(this.BASIC_URL + 'toDos/' + updatedTodo.toDoId, updatedTodo);
  }


}
