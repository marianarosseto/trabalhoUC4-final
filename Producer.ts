 export abstract class Producer{

  private  name: string
   private cpf : string
   private quantity: number

   constructor(  name: string, cpf : string, quantity: number){
    this.name= name
    this.cpf=cpf
    this.quantity= quantity
   }
 getName(): string {
        return this.name;
    }

    getCpf(): string {
        return this.cpf;
    }
    getQuantidadeAlimentos(): number {
        return this.quantity;
    }

    ////// present = showinfo
     public abstract present(): void
}
