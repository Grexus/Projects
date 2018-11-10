import { RouterConfiguration, Router } from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    this.router .navigateToRoute
    config.title = 'Aurelia';
    config.options.pushState = true;
    config.options.hashChange = true;
    config.options.root = '';
    config.map([
      { route: [''], name: 'home', title: "Tes", moduleId: 'views/home/home' },
      { route: ['home2'], name: 'home2', title: "JHDSA", moduleId: 'views/home/home2' },
    ]);
  }
}

// import { ToDoModel } from "./models/to-do-model";

// export class App {

//   appName: string;
//   userInput: string;
//   toDos: ToDoModel[] = [];
//   aa: number;

//   constructor() {
//     this.appName = 'To-Do List';
//     this.userInput = '';
//     this.toDos = [];
//     this.aa = 2;
//   }

//   addToList() {
//     let newToDo: any = {};

//     newToDo.description = this.userInput;
//     newToDo.isDone = false;
//     this.toDos.push(newToDo);
//     this.userInput = '';
//   }


//   // Finish Edit Function ! ! !
//   editToDo(i) {
//     this.toDos[i].description = 'edited';
//   }

//   toggleDone(i) {
//     this.toDos[i].isDone = !this.toDos[i].isDone;

//     // if (this.toDos[i].isDone) {
//     //   this.toDos[i].isDone = false;
//     // } else {
//     //   this.toDos[i].isDone = true;
//     // }
//   }

//   remove(i) {
//     this.toDos.splice(i, 1);
//   }
// }
