import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
    moduleId: module.id,
    selector: "listagem",
    templateUrl: "./listagem.component.html"
})
export class ListagemComponent {
    //Propriedade fotos - array de objetos que guardará as fotos
    fotos: Object[] = [];

    //Construtor
    constructor(http: Http) {
        //Obtem resposta do servidor
        http.get("http://localhost:3000/v1/fotos")
        .map(res => res.json()) //Mapeia retornando a resposta em JSON
        .subscribe(fotos => {
            //Coloca o retorno na propriedade
            this.fotos = fotos;
        },
        erro => console.info(erro)//Imprime o erro
        );
    }
}