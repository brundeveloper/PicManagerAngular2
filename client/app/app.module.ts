import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";

import { FotoModule } from "./foto/foto.module";
import { PainelModule } from "./painel/painel.module";

import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

import "rxjs/add/operator/map";

@NgModule({
    imports: [ BrowserModule, HttpModule, FotoModule, PainelModule ],
    declarations: [ AppComponent, ListagemComponent, CadastroComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}