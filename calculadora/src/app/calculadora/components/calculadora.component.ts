import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1:string;
  private numero2:string;
  private resultado:number;
  private operacao:string;

  constructor(private calculadoraService:CalculadoraService) { }

  ngOnInit(){
    this.limpar();
  }
/**
 * Inicializando todos os operadores para valores padrão.
 * 
 * @return void - retorna algo vazio/neutro
 */

  limpar():void{
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Retorna o valor concatenado. rara o separador decimal.
   * 
   * @param numAtual string
   * @param numConcat string
   * @return string
   */

  concatenaNumero(numAtual:string, numConcat:string): string {
    //caso contenha aenhas '0' ou null, reinicializar o valor
    if (numAtual === '0' || numAtual === null){
      numAtual = '';
   }

    // primeiro digito é '.', concatena '0' antes do ponto
   if (numConcat === '.' && numAtual === ''){
     return '0.';
   }

   // Caso '.' digitado e já contenha um '.', apenas retorno
   if (numConcat === '.' && numAtual.indexOf('.') > -1){
     return numAtual;
   }

   return numAtual + numConcat;

  }

  /**
   * Adiciona o numero selecionado
   * para o calculo posteriormente
   * 
   * @param numero string
   * @return void
   * 
   */

  adicionaNumero(numero:string):void{
    if (this.operacao === null){
      this.numero1 == this.concatenaNumero(this.numero1, numero)
    } else {
      this.numero2 = this.concatenaNumero(this.numero2, numero)
    }
  }



}
