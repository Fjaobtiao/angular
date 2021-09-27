export class Tarefa {
    constructor(
        public id?: number, // esse interrogação quer dizer que nenhum atributo é obrigatório para a criação do objeto
        public nome?: string,
        public concluida?: boolean
    ){

    }
}