import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@NgModule({
 imports: [
    FormsModule,
    BrowserModule
  ]
})

@Component({
    moduleId: module.id,
  selector: 'todo-cmp',
  templateUrl: 'todo.component.html',
  styleUrls: [],
  providers: [TodoDataService]
})
export class TodoComponent implements OnInit {

  newTodo: Todo = new Todo();
  items: FirebaseListObservable<any>;
  
  constructor(private todoDataService: TodoDataService) {
       this.items = todoDataService.items;
    }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(key: string) {
    this.todoDataService.updateItem(key);
  }

  removeTodo(key: string) {
    this.todoDataService.deleteItem(key);
  }

  // get todos() {
  //   return this.todoDataService.getAllTodos();
  // }
  
  ngOnInit() {
  }

}