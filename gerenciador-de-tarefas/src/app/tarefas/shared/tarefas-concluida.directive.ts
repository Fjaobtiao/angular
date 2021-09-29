import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefasConcluida]'
})
export class TarefasConcluidaDirective implements OnInit {

  @Input() tarefasConcluida:boolean;

  constructor(private el:ElementRef) { }

  ngOnInit(){
    if(this.tarefasConcluida){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
