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
            { route: [''], name: 'home', title: "Tes", moduleId: 'views/home/home' },
            { route: ['home2'], name: 'home2', title: "JHDSA", moduleId: 'views/home/home2' },
        ]);
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map