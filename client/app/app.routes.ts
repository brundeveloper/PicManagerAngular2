import { RouterModule, Routes } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

//Monta as rotas
const appRoutes: Routes = [{
    path: "",
    component: ListagemComponent
},
{
    path: "cadastro",
    component: CadastroComponent
},
{
    path: "cadastro/:id",
    component: CadastroComponent
},
{
    path: "**",
    //component: ListagemComponent
    redirectTo: ""
}];

//Compila e exporta as rotas
export const routing = RouterModule.forRoot(appRoutes);

