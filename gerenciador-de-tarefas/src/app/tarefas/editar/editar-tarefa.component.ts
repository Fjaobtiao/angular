import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'; // permite usar um artificio para capturar um id pela rota

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa', {static:true})formTarefa:NgForm;
  tarefa:Tarefa;


  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id']; // esse snapshop  //permite pegar o id para usar na função // o sinal de + transfroma o ID em número
    this.tarefa = this.tarefaService.buscarPorId(id);
  }

  atualizar():void {
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas'])
    }
  }

}
