"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
class Producer {
    constructor(name, cpf, quantity) {
        this.name = name;
        this.cpf = cpf;
        this.quantity = quantity;
    }
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    getQuantidadeAlimentos() {
        return this.quantity;
    }
}
exports.Producer = Producer;
