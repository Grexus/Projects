"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    configureRouter(config, router) {
        this.router = router;
        this.router.navigateToRoute;
        config.title = 'Aurelia';
        config.options.pushState = true;
        config.options.hashChange = true;
        config.options.root = '';
        config.map([
            { route: [''], name: 'home', title: "Home", moduleId: 'views/home/home' },
            { route: ['todo-list'], name: 'todo-list', title: "To-Do List", moduleId: 'views/todo-list/todo-list' },
            { route: ['decider'], name: 'decider', title: "D-Cider", moduleId: 'views/decider/decider' },
        ]);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map