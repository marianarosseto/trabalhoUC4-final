import { Producer } from "./Producer";

 export class  comunityGarden extends Producer{
    private VolunteersNumbers: number

    constructor( name: string, cpf : string, quantity: number, volunteersNumbers: number){

      { super(name, cpf, quantity);
        this.VolunteersNumbers = volunteersNumbers;
      }
    }
////// present = showinfo
  public  present(): void{
        console.log("Name: "+ this.getName())
        console.log("CPF: " + this.getCpf())
        console.log(" alimentos produzidos: " + this.getQuantidadeAlimentos())
        console.log(" Numero de votuntarios:" + this.VolunteersNumbers)
    }
}
 