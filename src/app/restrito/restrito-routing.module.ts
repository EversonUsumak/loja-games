import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { RestritoComponent } from './restrito.component';


const restritoRoutes: Routes = [
    {
        path: 'restrito', component: RestritoComponent, children: [
           
            { path: 'lista', component: ListaProdutoComponent}
            
        ]
    },

    { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' }
]

@NgModule({
    imports: [RouterModule.forChild(restritoRoutes)],
    exports: [RouterModule]
})
export class RestritoRoutingModule {
}
