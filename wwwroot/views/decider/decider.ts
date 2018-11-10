export class Decider {

    projectName: string;
    option: string;
    options: string[];
    decision: string;
    isDecided: boolean;

    constructor(){
        this.projectName = "D-Cider",
        this.options = [],
        this.decision = '';
        this.isDecided = false
    }

    addOption(){
        let newOption: string;

        newOption = this.option;
        this.options.push(newOption);
    }

    removeOption(i){
        this.options.splice(i, 1);
    }

    decide(){
        let randomNum: number;

        randomNum = Math.floor(Math.random() * this.options.length);
        this.decision = this.options[randomNum];
        this.isDecided = true;
    }
}