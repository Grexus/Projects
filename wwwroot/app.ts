import { RouterConfiguration, Router } from 'aurelia-router';

export class App {

  showSidebar: boolean = false;
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    this.router .navigateToRoute
    config.title = 'MG Projects';
    config.options.pushState = true;
    config.options.hashChange = true;
    config.options.root = '';
    config.map([
      { route: [''], name: 'home', title: "Home", moduleId: 'views/home/home' },
      { route: ['ticTacToe'], name: 'TicTacToe', title: "Tic Tac Toe", moduleId: 'views/ticTacToe/ticTacToe' },
      { route: ['decider'], name: 'decider', title: "D-Cider", moduleId: 'views/decider/decider' },
      { route: ['toDo-list'], name: 'toDo-list', title: "To-Do List", moduleId: 'views/todo-list/todo-list' },
    ]);
  }

  public toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}