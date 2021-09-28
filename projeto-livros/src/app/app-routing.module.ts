import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarefaRoutes } from './tarefa';

// As rotas serão armazenadas em objetos

export const router : Routes = [
    {
        path: '',
        redirectTo:'tarefa/listar',
        pathMatch:'full'
    },
    ...TarefaRoutes// esse operador faz um merge (concatena) com outros arrays que possam exixtir
]; // as rotas terão o comportamento de Routes. Dentro dos couchetes teremos as rotas. O exporte é para usarmos essa rotas em outros lugares

// para referenciar esse modulo em outros lugares
@NgModule({ // Esse é um decorador. Dentro colocamos os imports e exports
    imports : [ RouterModule.forRoot(router) ], // o forRoot é padaro do angular
    exports : [ RouterModule,
    ]
})

export class AppRoutingModule {} 
