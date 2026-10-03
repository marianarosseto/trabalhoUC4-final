"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
/// perguntra pq nao ta indo. acabei de implementar a interface no food
class Food {
    constructor(name, category, quantityFood, produtoresponsável) {
        if (quantityFood < 0) {
            throw new Error(" a quantidad não pode ser negativa");
        }
        this.name = name;
        this.category = category;
        this.quantityFood = quantityFood;
        this.produtoresponsável = produtoresponsável;
    }
    getNome() {
        return this.name;
    }
    adicionarQunatidade(valor) {
        if (valor <= 0) {
            throw new Error(" a quantidade adicionada deve ser maior que 0  ");
        }
        this.quantityFood += valor;
    }
    retirarQuantidade(valor) {
        if (valor <= 0) {
            throw new Error(" a quantidade retirada deve ser maior que 0  ");
        }
        if (valor > this.quantityFood) {
            throw new Error(" quantidade insuficiente ");
        }
        this.quantityFood -= valor;
    }
    disponivel() {
        return this.quantityFood;
    }
    donate(valor) {
        this.retirarQuantidade(valor);
    }
}
exports.Food = Food;
