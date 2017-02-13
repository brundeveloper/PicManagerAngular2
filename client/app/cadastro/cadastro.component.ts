import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { Http } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {
    //Propriedades da Classe
    foto: FotoComponent = new FotoComponent();
    http: Http;
    meuForm: FormGroup;

    //Construtor da Classe
    constructor(http: Http, fb: FormBuilder) {
        //Seta na propriedade da Classe
        this.http = http;
        this.meuForm = fb.group({
            titulo: ["", Validators.compose([ Validators.required, Validators.minLength(4) ])],
            url: ["", Validators.required],
            descricao: [""]
        });
    }

    //Cadstra a foto
    cadastrar(event) {
        //Cancela o evento
        event.preventDefault();

        //Chama url que salva a foto
        /*this.http.post("v1/fotos", JSON.stringify(this.foto), {headers: headers})
        .subscribe(() => {
            //Limpa a objeto e consequentemente o formulário
            this.foto = new FotoComponent();

            //Imprime no console
            console.info("foto salva com sucesso");
        },
        erro => console.info(erro));*/
    }
}