"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.institution = void 0;
class institution {
    constructor(name, endereço, pessoasAtendidas, alimentosRecebidos) {
        this.name = name;
        this.endereço = endereço;
        this.pessoasAtendidas = pessoasAtendidas;
        this.alimentosRecebidos = alimentosRecebidos;
    }
    getNome() {
        return this.name;
    }
    getEndereco() {
        return this.endereço;
    }
    getPessoasAtendidas() {
        return this.pessoasAtendidas;
    }
    getAlimentosRecebidos() {
        return this.alimentosRecebidos;
    }
    registrar(quantidade) {
        if (quantidade <= 0) {
            throw new Error("A quantidade deve ser maior que 0");
        }
        this.alimentosRecebidos += quantidade;
    }
}
exports.institution = institution;
