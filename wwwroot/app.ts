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
      { route: [''], name: 'home', title: "Home", moduleId: 'views/home/home' },
      { route: ['toDo-list'], name: 'toDo-list', title: "To-Do List", moduleId: 'views/todo-list/todo-list' },
      { route: ['decider'], name: 'decider', title: "D-Cider", moduleId: 'views/decider/decider' },
      { route: ['ticTacToe'], name: 'TicTacToe', title: "Tic Tac Toe", moduleId: 'views/ticTacToe/ticTacToe' },
    ]);
  }
}