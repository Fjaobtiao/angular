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
class Pessoa{

    constructor(private nome:string,private idade:number,private cpf:string){
        this.nome = nome
        this.idade = idade // o primeiro idade vem do atributo da classe. O segundo vem do Contructor
        this.cpf = cpf
    }
    escreverPropriedades(){
        console.log(this.nome)
        console.log(this.idade)
        console.log(this.cpf)
    }

    getNome(){
        return this.nome;
    }

    setNome(nome:string){
        this.nome = nome;
    }

    getIdade(){
        return this.idade;
    }

    setIdade(idade:number){
        this.idade = idade;
    }

    getCpf(){
        return this.cpf;
    }

    setCpf(cpf:string){
        this.cpf = cpf;
    }

}

let pessoa = new Pessoa("jota", 47, "111.111.111-11");

console.log(pessoa.getIdade())



// class Carro{
//     marca!:string
//     km!:number
//     modelo!:string

//     constructor(marca:string,km:number,modelo:string){
//         this.marca = marca
//         this.km = km
//         this.modelo = modelo
//     }
//     passarCaracteristicas(){
//         console.log(this.marca)
//         console.log(this.km)
//         console.log(this.modelo)
//     }
// }
// let carro = new Carro("renault",13000,"duster");

// // carro.passarCaracteristicas();

// interface propriedadesCarros{
//     marca: string
// }

// class Carro implements propriedadesCarros{
//     marca!:string
// }

