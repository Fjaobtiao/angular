// interface DadosAPI{
//     nome:String
//     idade:Number
// };

// function pegarDadosAPI():DadosAPI {
//     return {
//         nome:"Jota",
//         idade:47
//     }
// };

// let dados = pegarDadosAPI();

// let soma;

// soma = 2 + 5

// console.log(soma)

// criando uma classe
// class Pessoa{
//     nome!:string
//     idade!:number
//     cpf!:string

//     constructor(nome:string,idade:number,cpf:string){
//         this.nome = nome
//         this.idade = idade // o primeiro idade vem do atributo da classe. O segundo vem do Contructor
//         this.cpf = cpf
//     }
//     escreverPropriedades(){
//         console.log(this.nome)
//         console.log(this.idade)
//         console.log(this.cpf)
//     }

// }

// let pessoa = new Pessoa("jota", 47, "111.111.111-11");

// pessoa.escreverPropriedades();

class Carro{
    marca!:string
    km!:number
    modelo!:string

    constructor(marca:string,km:number,modelo:string){
        this.marca = marca
        this.km = km
        this.modelo = modelo
    }
    passarCaracteristicas(){
        console.log(this.marca)
        console.log(this.km)
        console.log(this.modelo)
    }
}
let carro = new Carro("renault",13000,"duster");

carro.passarCaracteristicas();