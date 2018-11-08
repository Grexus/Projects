export class App {
  constructor() {
    this.appName = 'To-Do List';
    this.userInput = '';
    this.toDos = [];
  }

  addToList(){
    let newToDo = {};

    newToDo.description = this.userInput;
    newToDo.isDone = false;
    this.toDos.push(newToDo);
    this.userInput = '';
  }


  // Finish Edit Function ! ! !
  editToDo(i){
    this.toDos[i].description = 'edited';
  }

  toggleDone(i){
    // this.toDos[i].isDone = !this.toDos[i].isDone;

    if(this.toDos[i].isDone){
      this.toDos[i].isDone = false;
    } else {
      this.toDos[i].isDone = true;
    }
  }

  remove(i){
    this.toDos.splice(i, 1);
  }
}
