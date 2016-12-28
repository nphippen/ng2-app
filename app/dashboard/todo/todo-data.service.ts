import { Injectable } from '@angular/core';
import {Todo} from './todo';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodoDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  items: FirebaseListObservable<any>;
  //idSubject: Subject<any>;
  
  constructor(af: AngularFire) {
    this.items = af.database.list('/item');
    console.log(this.items)
     
  }

  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string) {
    this.items.update(key, { complete: true });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }
  
  
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.items.push(todo);
    console.log(this.items);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }



  
  

}