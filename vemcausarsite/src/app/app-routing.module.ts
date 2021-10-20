import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoRoutes } from './pages/contato/contato-routing.module';
import { HomeRoutes } from './home/home-routing.module';

export const router : Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    ...HomeRoutes,
    ...ContatoRoutes
]; 


@NgModule({ 
    imports : [ RouterModule.forRoot(router) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {} 