import { Producer } from "./Producer"
import { Donatable } from "./interface";

/// perguntra pq nao ta indo. acabei de implementar a interface no food

export class Food implements Donatable  {

     private name: string
   private category: string
   private quantityFood: number
     private produtoresponsável:  Producer

   public  constructor( name: string,  category: string,  quantityFood: number,  produtoresponsável:  Producer){

    if (quantityFood< 0){
        throw new Error(" a quantidad não pode ser negativa")
    }

        this.name= name
        this.category= category
        this.quantityFood= quantityFood
        this.produtoresponsável= produtoresponsável }
        
        getNome(): string {
            return this.name;
        }

        adicionarQunatidade(valor: number): void{
            if( valor <= 0 ){
                throw new Error(" a quantidade adicionada deve ser maior que 0  ")
            }
            this.quantityFood += valor;
        }

        retirarQuantidade(valor: number): void{
            if( valor <= 0 ){
                throw new Error(" a quantidade retirada deve ser maior que 0  ")
            }

            if ( valor> this.quantityFood){
                throw new Error(" quantidade insuficiente ")
            }
            this.quantityFood -= valor;
        }

        disponivel():number{
            return this.quantityFood
        }

        donate(valor: number): void{
            this.retirarQuantidade(valor)
        }
     }

    