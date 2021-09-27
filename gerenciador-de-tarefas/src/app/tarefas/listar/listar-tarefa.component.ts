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
    this.tarefas = this.listarTodos();
    this.tarefas =[
      new Tarefa(1, "Tarefa 01", false),
      new Tarefa(2, "Tarefa 02", true)
    ]
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

}
