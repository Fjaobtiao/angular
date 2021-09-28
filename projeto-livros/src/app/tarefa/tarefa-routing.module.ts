import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';

export const TarefaRoutes : Routes = [
{
    path:'tarefas',
    redirectTo: 'tarefa/listar'
},
{
    path:'tarefa/listar',
    component: ListarTarefaComponent
},
{
    path:'tarefa/cadastrar',
    component: CadastrarTarefaComponent
}


];
