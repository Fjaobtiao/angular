import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]; // Essa tarefa bem lá de Models

  constructor(private tarefaService : TarefaService) { }

  // esse ngOnInit esta diretamente ligado ao ciclo de vida
  ngOnInit() { 
    this.tarefas = this.listarTodos()
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  alterarStatus(tarefa:Tarefa):void{
    if(confirm('Deseja alterar o status da Tarefa"'+tarefa.nome+'"?')){ 
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  remover($event:any, tarefa:Tarefa):void{      // esse $event:any para de atualizar a página
    $event.preventDefault();  // aqui fala para o navegador que quando remover, não é 	para fazer nada. Não atualizar.
    if (confirm('Deseja remover a tarefa "' + tarefa.nome+ '"?')) {
          this.tarefaService.remover(tarefa.id);
          this.tarefas = this.listarTodos();
    }
  }

}