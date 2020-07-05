import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoModel} from '../../model/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: TodoModel;
  @Output() deleteEvent = new EventEmitter();
  @Output() modifyEvent = new EventEmitter();
  @Output() finishEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteEvent.emit(this.todo);
  }
  modify() {
    this.modifyEvent.emit(this.todo);
  }
  finish() {
    this.todo.finished = true;
    this.finishEvent.emit(this.todo);
  }

}
