import { Producer } from "./Producer";

export class familyFarmer extends Producer {

    private size: number;

    constructor(name: string, cpf: string, quantity: number, size: number) {

        super(name, cpf, quantity);

        this.size = size;
    }

  

    public present(): void {

        console.log("Name: " + this.getName());
        console.log("CPF: " + this.getCpf());
        console.log("alimentos produzidos: " + this.getQuantidadeAlimentos());
        console.log("tamanho da propriedade: " + this.size);
    }
}