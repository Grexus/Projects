"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Home {
    constructor() {
        this.toDos = [];
        this.appName = 'To-Do List';
        this.userInput = '';
        this.toDos = [];
        this.aa = 2;
    }
    addToList() {
        let newToDo = {};
        newToDo.description = this.userInput;
        newToDo.isDone = false;
        this.toDos.push(newToDo);
        this.userInput = '';
    }
    editToDo(i) {
        this.toDos[i].description = 'edited';
    }
    toggleDone(i) {
        this.toDos[i].isDone = !this.toDos[i].isDone;
    }
    remove(i) {
        this.toDos.splice(i, 1);
    }
}
exports.Home = Home;
//# sourceMappingURL=home.js.map