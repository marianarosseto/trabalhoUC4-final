"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
class Registry {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    list() {
        return this.items;
    }
    find(condition) {
        return this.items.filter(condition);
    }
}
exports.Registry = Registry;
