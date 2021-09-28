export class Tarefa {
    constructor(
        public id?: number, // esse interrogação quer dizer que nenhum atributo é obrigatório para a criação do objeto
        public titulo?: string,
        public num_pag?: number,
        public autor?: string,
        public isbn?: string,
        public edicao?: string,
        public editora?: string
    ){

    }
}