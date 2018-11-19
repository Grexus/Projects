import { ToDoModel } from "../../models/todo-model";

export class TodoList {

  projectName: string;
  userInput: string;
  toDos: ToDoModel[] = [];

  constructor() {
    this.projectName = 'To-Do List';
    this.userInput = '';
    this.toDos = [];
  }

  addToList() {
    let newToDo: any = {};

    newToDo.description = this.userInput;
    newToDo.isDone = false;
    newToDo.isEditing = false;
    this.toDos.push(newToDo);
    this.userInput = '';
  }

  toggleEditing(i){
    this.toDos[i].isEditing = !this.toDos[i].isEditing;
  }

  toggleDone(i) {
    this.toDos[i].isDone = !this.toDos[i].isDone;
  }

  remove(i) {
    this.toDos.splice(i, 1);
  }
}