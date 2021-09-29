import { Component, OnInit } from '@angular/core';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]; // Essa tarefa vem lá de Models

  constructor(private tarefaService : TarefaService) { }

  // esse ngOnInit esta diretamente ligado ao ciclo de vida
  ngOnInit() { 
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  alterarStatus(tarefa:Tarefa):void{
    if(confirm('Deseja alterar o status do estoque do livro"'+tarefa.titulo+'"?')){ 
      this.tarefaService.alterarStatus(tarefa.id);
      this.listarTodos();
    }
}

}
