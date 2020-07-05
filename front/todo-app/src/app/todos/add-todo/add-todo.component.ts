import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoModel} from '../../model/todo.model';
import {TodoService} from '../todo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  addTodoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private todoService: TodoService, private router: Router) {
  }

  ngOnInit(): void {

    this.addTodoForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      deadline: [null, Validators.required],
      priority: [null, Validators.required]
    });
  }


  addTodo() {

    if (!this.addTodoForm.valid) {
      return;
    }
    console.log(this.addTodoForm.value);
    const value = this.addTodoForm.value;
    const newTodo = new TodoModel(value.title, value.description, Date.parse(value.deadline), value.priority, false, null);
    console.log(newTodo);
    this.todoService.addTodo(newTodo).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/todos');
    });


  }

}
