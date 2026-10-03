export class institution {

    private name: string;
    private endereço: string;
    private pessoasAtendidas: number;
    private alimentosRecebidos: number;

    constructor(
        name: string,
        endereço: string,
        pessoasAtendidas: number,
        alimentosRecebidos: number
    ) {
        this.name = name;
        this.endereço = endereço;
        this.pessoasAtendidas = pessoasAtendidas;
        this.alimentosRecebidos = alimentosRecebidos;
    }

    getNome(): string {
        return this.name;
    }

    getEndereco(): string {
        return this.endereço;
    }

    getPessoasAtendidas(): number {
        return this.pessoasAtendidas;
    }

    getAlimentosRecebidos(): number {
        return this.alimentosRecebidos;
    }

    registrar(quantidade: number): void {

        if (quantidade <= 0) {
            throw new Error("A quantidade deve ser maior que 0");
        }

        this.alimentosRecebidos += quantidade;
    }
}