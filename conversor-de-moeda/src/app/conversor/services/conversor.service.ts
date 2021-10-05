import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ConversaoResponse, Conversao } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=81c296ccfd7dde75af77d9ec45e59fca";

  constructor(private http:HttpClient) { }

  /**
   * 
   * Realizar a chamada para a API de conversão de moedas.
   * 
   */

  converter(conversao : Conversao): Observable<any>{
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
    return this.http.get(this.BASE_URL + params)
  }

  /**
   * Retonar a cotação para um dado de resposta(response)
   * @param conversaoResponse 
   * @param conversao 
   * @returns number 
   */

  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao):number{
    if(ConversaoResponse === undefined){
      return 0;
    }
    return conversaoResponse.rates[conversao.moedaPara];

  }

  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if(conversaoResponse === undefined){
      return '0';
    }
    return (1/conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string{
    if(conversaoResponse === undefined){
      return ''; 
    }
    return conversaoResponse.date;
  }


}
