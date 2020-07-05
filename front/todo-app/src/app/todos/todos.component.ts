import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TodoModel} from '../model/todo.model';
import {TodoService} from './todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Array<TodoModel> = [];
  running = true;

  constructor(private router: Router, private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.getTodos().subscribe(list => {
      console.log(list)
      this.running = false;
      this.todos = (list as []).reverse();
    });
  }

  modifyTodo(todo) {
    this.router.navigateByUrl('/modifyTodo', {state: {todo}});
  }

  addTodo() {
    this.router.navigateByUrl('/addTodo');
  }

  delete(todo) {
      this.todoService.deleteTodo(todo).subscribe((res) => {
        this.todos.splice(this.todos.indexOf(todo), 1);
      });

  }

  finish(todo) {
      this.todoService.updateTodo(todo).subscribe(res => {

      });
  }

}
