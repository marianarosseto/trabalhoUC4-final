"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.familyFarmer = void 0;
const Producer_1 = require("./Producer");
class familyFarmer extends Producer_1.Producer {
    constructor(name, cpf, quantity, size) {
        super(name, cpf, quantity);
        this.size = size;
    }
    present() {
        console.log("Name: " + this.getName());
        console.log("CPF: " + this.getCpf());
        console.log("alimentos produzidos: " + this.getQuantidadeAlimentos());
        console.log("tamanho da propriedade: " + this.size);
    }
}
exports.familyFarmer = familyFarmer;
