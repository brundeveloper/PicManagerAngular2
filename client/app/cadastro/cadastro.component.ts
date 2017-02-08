import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Http, Headers } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {
    //Propriedades da Classe
    foto: FotoComponent = new FotoComponent();
    http: Http;

    //Construtor da Classe
    constructor(http: Http) {
        //Seta na propriedade da Classe
        this.http = http;
    }

    //Cadstra a foto
    cadastrar(event) {
        //Cancela o evento
        event.preventDefault();

        //Variavel com a instancia de Headers
        let headers = new Headers();

        //Monta o header avisando que é JSON
        headers.append("Content-type", "application/json");

        //Chama url que salva a foto
        this.http.post("v1/fotos", JSON.stringify(this.foto), {headers: headers})
        .subscribe(() => {
            //Limpa a objeto e consequentemente o formulário
            this.foto = new FotoComponent();

            //
            console.info("foto salva com sucesso");
        },
        erro => console.info(erro));
    }
}