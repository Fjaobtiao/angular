export class Tarefa {
    constructor(
        public id?: number, // esse interrogação quer dizer que nenhum atributo é obrigatório para a criação do objeto
        public titulo?: string,
        public autor?: string,
        public editora?: string,
        public categoria?: string,
        public estoque?: boolean
    ){

    }
}