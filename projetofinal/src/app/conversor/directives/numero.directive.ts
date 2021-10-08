import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor{

  OnTouched: any;
  OnChange: any;
  

  constructor(private el:ElementRef) { }

  /**
   * Implementa evento de keyup para o elemento da diretiva.
   * @param $event 
   */

  @HostListener('keyup',['$event'])onkeyUp($event:any){
    let valor = $event.target.value;
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if(posDecimais > 0){
      valor = valor.substr(0, posDecimais) + "." + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.OnChange(valor);
  }

  // Regitra a fução a ser chamada para atualizar o valor do modal.

  registerOnChange(fn:any):void {
    this.OnChange = fn;
  }

  // Regitra a fução a ser chamada para atualizar o valor do touched.

  registerOnTouched(fn: any): void {
    this.OnTouched = fn;
  }

  // Obtem o valor contido no model

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

}
