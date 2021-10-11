import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularcliRoutes } from './angularcli/angularcli-routing.module';
import { DatabidingRoutes } from './databinding/databinding-routing.module';
import { DiretivasRoutes } from './diretivas/diretivas-routing.module';
import { HomeRoutes } from './home/home-routing.module';
import { PipesRoutes } from './pipes/pipes-routing.module';
import { ServiceRoutes } from './services/services-routing.module';

export const router : Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    ...HomeRoutes,
    ...DatabidingRoutes,
    ...AngularcliRoutes,
    ...DiretivasRoutes,
    ...ServiceRoutes,
    ...PipesRoutes
]; 


@NgModule({ 
    imports : [ RouterModule.forRoot(router) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {} 