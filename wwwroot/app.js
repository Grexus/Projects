"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class App {
    constructor() {
        this.showSidebar = false;
    }
    configureRouter(config, router) {
        this.router = router;
        this.router.navigateToRoute;
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
    toggleSidebar() {
        this.showSidebar = !this.showSidebar;
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map