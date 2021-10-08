import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { ConversorRoutes } from './conversor/conversor-routing.module';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { JodoDaVelhaRoutes } from './jogo-da-velha/jogo-da-velha-routing.module';
import { TarefaRoutes } from './tarefas';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'/dashboard',
        pathMatch: 'full'
    },
    ...DashboardRoutes,
    ...CalculadoraRoutes,
    ...ConversorRoutes,
    ...JodoDaVelhaRoutes,
    ...TarefaRoutes
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
