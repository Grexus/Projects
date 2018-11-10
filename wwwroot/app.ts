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
      { route: ['todo-list'], name: 'todo-list', title: "To-Do List", moduleId: 'views/todo-list/todo-list' },
    ]);
  }
}