/**
* Serviço responsável por executar as operações da calculadora.
*
*@autor Jota Nascimento <jotafnascimento@gmail.com>
*@since 1.0
*
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

/* Definindo as constantes utilizadas para identificar as operaçÕes de calculo
*/

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**
   * Método que calcula uma operação matemática dado dois números e uma operação.
   * Suporta as operação de soma, subtração, divisão e multiplicação.
   * @param num1 number
   * @param num2 number
   * @param operacao string operação a ser executada 
   * @returns number Resultado da Operação
   */


  calcular(num1:number, num2:number, operacao:string): number {
    let resultado:number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
    }

    switch(operacao) {
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
    }

    switch(operacao) {
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
    }

    switch(operacao) {
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
        default:
          resultado = 0;
    }
    return resultado;

  }
}
