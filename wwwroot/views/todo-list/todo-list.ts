import { ToDoModel } from "../../models/to-do-model";

export class Home {

  appName: string;
  userInput: string;
  toDos: ToDoModel[] = [];
  aa: number;

  constructor() {
    this.appName = 'To-Do List';
    this.userInput = '';
    this.toDos = [];
    this.aa = 2;
  }

  addToList() {
    let newToDo: any = {};

    newToDo.description = this.userInput;
    newToDo.isDone = false;
    this.toDos.push(newToDo);
    this.userInput = '';
  }


  // Finish Edit Function ! ! !
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