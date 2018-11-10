"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Decider {
    constructor() {
        this.projectName = "D-Cider",
            this.options = [],
            this.decision = '';
        this.isDecided = false;
    }
    addOption() {
        let newOption;
        newOption = this.option;
        this.options.push(newOption);
    }
    removeOption(i) {
        this.options.splice(i, 1);
    }
    decide() {
        let randomNum;
        randomNum = Math.floor(Math.random() * this.options.length);
        this.decision = this.options[randomNum];
        this.isDecided = true;
    }
}
exports.Decider = Decider;
//# sourceMappingURL=decider.js.map