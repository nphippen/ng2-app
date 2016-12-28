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
var angularfire2_1 = require('angularfire2');
var TodoDataService = (function () {
    //idSubject: Subject<any>;
    function TodoDataService(af) {
        // Placeholder for last id so we can simulate
        // automatic incrementing of id's
        this.lastId = 0;
        // Placeholder for todo's
        this.todos = [];
        this.items = af.database.list('/item');
        console.log(this.items);
    }
    TodoDataService.prototype.addItem = function (newName) {
        this.items.push({ text: newName });
    };
    TodoDataService.prototype.updateItem = function (key) {
        this.items.update(key, { complete: true });
    };
    TodoDataService.prototype.deleteItem = function (key) {
        this.items.remove(key);
    };
    TodoDataService.prototype.deleteEverything = function () {
        this.items.remove();
    };
    TodoDataService.prototype.addTodo = function (todo) {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.items.push(todo);
        console.log(this.items);
        return this;
    };
    // Simulate DELETE /todos/:id
    TodoDataService.prototype.deleteTodoById = function (id) {
        this.todos = this.todos
            .filter(function (todo) { return todo.id !== id; });
        return this;
    };
    TodoDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], TodoDataService);
    return TodoDataService;
}());
exports.TodoDataService = TodoDataService;
//# sourceMappingURL=todo-data.service.js.map