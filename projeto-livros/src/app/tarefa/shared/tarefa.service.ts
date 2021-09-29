import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable()
export class TarefaService {

  constructor() { }

  // aqui criamos todas as tarefas do CRUD
  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : []; // aqui estamos transformando os arquivos STRING que são armazenados no localStorage para JSON, pois a aplicação trabalha com objeto.
  }

  cadastrar(tarefa: Tarefa): void { // esse void não retorna nada
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas)
  }

  buscarPorId(id: number):Tarefa {
    const tarefas : Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id)
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas : Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs)=>{
    if( tarefa.id === obj.id){
      objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number):void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefas => tarefas.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number):void {
    const tarefas : Tarefa[] = this.listarTodos();
    tarefas.forEach((obj,index,objs)=>{
      if (id === obj.id){
        objs[index].estoque = !obj.estoque;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
