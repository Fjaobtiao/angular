import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home/home-routing.module';

export const router : Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch: 'full'
    },
    ...HomeRoutes
]; 


@NgModule({ 
    imports : [ RouterModule.forRoot(router) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {} 