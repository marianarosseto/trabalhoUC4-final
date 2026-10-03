"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comunityGarden = void 0;
const Producer_1 = require("./Producer");
class comunityGarden extends Producer_1.Producer {
    constructor(name, cpf, quantity, volunteersNumbers) {
        {
            super(name, cpf, quantity);
            this.VolunteersNumbers = volunteersNumbers;
        }
    }
    ////// present = showinfo
    present() {
        console.log("Name: " + this.getName());
        console.log("CPF: " + this.getCpf());
        console.log(" alimentos produzidos: " + this.getQuantidadeAlimentos());
        console.log(" Numero de votuntarios:" + this.VolunteersNumbers);
    }
}
exports.comunityGarden = comunityGarden;
