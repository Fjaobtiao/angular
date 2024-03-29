import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from '../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', {static:true})formTarefa: NgForm; // trabalha com validacão
  tarefa:Tarefa;

  constructor(private tarefaService: TarefaService, private router: Router) { }

  ngOnInit() { //quando fizer a criação do componente, ja inicia com o método tarefa. 
    this.tarefa = new Tarefa();
  }

  cadastrar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]);
    }
  }

}
