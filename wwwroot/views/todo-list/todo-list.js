"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoList {
    constructor() {
        this.toDos = [];
        this.projectName = 'To-Do List';
        this.userInput = '';
        this.toDos = [];
    }
    addToList() {
        let newToDo = {};
        newToDo.description = this.userInput;
        newToDo.isDone = false;
        newToDo.isEditing = false;
        this.toDos.push(newToDo);
        this.userInput = '';
    }
    toggleEditing(i) {
        this.toDos[i].isEditing = !this.toDos[i].isEditing;
    }
    toggleDone(i) {
        this.toDos[i].isDone = !this.toDos[i].isDone;
    }
    remove(i) {
        this.toDos.splice(i, 1);
    }
}
exports.TodoList = TodoList;
//# sourceMappingURL=todo-list.js.map