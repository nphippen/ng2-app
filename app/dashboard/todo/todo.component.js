"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var todo_1 = require('./todo');
var todo_data_service_1 = require('./todo-data.service');
var TodoComponent = (function () {
    function TodoComponent(todoDataService) {
        this.todoDataService = todoDataService;
        this.newTodo = new todo_1.Todo();
        this.items = todoDataService.items;
    }
    TodoComponent.prototype.addTodo = function () {
        this.todoDataService.addTodo(this.newTodo);
        this.newTodo = new todo_1.Todo();
    };
    TodoComponent.prototype.toggleTodoComplete = function (key) {
        this.todoDataService.updateItem(key);
    };
    TodoComponent.prototype.removeTodo = function (key) {
        this.todoDataService.deleteItem(key);
    };
    // get todos() {
    //   return this.todoDataService.getAllTodos();
    // }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ]
        }),
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-cmp',
            templateUrl: 'todo.component.html',
            styleUrls: [],
            providers: [todo_data_service_1.TodoDataService]
        }), 
        __metadata('design:paramtypes', [todo_data_service_1.TodoDataService])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map