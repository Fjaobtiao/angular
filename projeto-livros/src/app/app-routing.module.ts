import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// As rotas serão armazenadas em objetos

export const router : Routes = [

]; // as rotas terão o comportamento de Routes. Dentro dos couchetes teremos as rotas. O exporte é para usarmos essa rotas em outros lugares

// para referenciar esse modulo em outros lugares
@NgModule({ // Esse é um decorador. Dentro colocamos os imports e exports
    imports : [ RouterModule.forRoot(router) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {} 