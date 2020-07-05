import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {TodoService} from '../todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoModel} from '../../model/todo.model';

@Component({
  selector: 'app-modify-todo',
  templateUrl: './modify-todo.component.html',
  styleUrls: ['./modify-todo.component.css']
})
export class ModifyTodoComponent implements OnInit {

  currentTodo;
  modifiedTodo: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private repoService: TodoService) {
    this.currentTodo = this.router.getCurrentNavigation().extras.state?.todo;
    console.log(this.currentTodo);
  }

  ngOnInit(): void {
    this.modifiedTodo = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      deadline: [null, Validators.required],
      priority: [null, Validators.required]
    });

    this.modifiedTodo.setValue({
      title: this.currentTodo.title,
      description: this.currentTodo.description,
      deadline: new Date(this.currentTodo.deadline),
      priority: this.currentTodo.priority,
    });

  }

  modifyTodo() {
    if (!this.modifiedTodo.valid) {
      return;
    }
    console.log(this.modifiedTodo.value.deadline);
    const modifiedTodo = new TodoModel(this.modifiedTodo.value.title, this.modifiedTodo.value.description, Date.parse(this.modifiedTodo.value.deadline), this.modifiedTodo.value.priority, this.currentTodo.finished, null);

    modifiedTodo.toDoId = this.currentTodo.toDoId;
    console.log(modifiedTodo);
    this.repoService.updateTodo(modifiedTodo).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/todos');
    });
  }


}
