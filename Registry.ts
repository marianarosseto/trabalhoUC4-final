export class Registry<T> {

    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    list(): T[] {
        return this.items;
    }

    find(condition: (item: T) => boolean): T[] {
        return this.items.filter(condition);
    }
}