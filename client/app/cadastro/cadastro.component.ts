import { Component } from "@angular/core";
import { FotoComponent } from "../foto/foto.component";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { FotoService } from "../foto/foto.service";

@Component({
    moduleId: module.id,
    selector: "cadastro",
    templateUrl: "./cadastro.component.html"
})
export class CadastroComponent {
    //Propriedades da Classe
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    service: FotoService;

    //Construtor da Classe
    constructor(service: FotoService, fb: FormBuilder) {
        //Seta as validações do formulario
        this.meuForm = fb.group({
            titulo: ["", Validators.compose([ Validators.required, Validators.minLength(4) ])],
            url: ["", Validators.required],
            descricao: [""]
        });

        //Seta o serviço de Foto
        this.service = service;
    }

    //Cadstra a foto
    cadastrar(event) {
        //Cancela o evento
        event.preventDefault();

        //Chama metodo do serviço que salva a foto
        this.service.cadastra(this.foto)
        .subscribe(() => {
            //Limpa a objeto e consequentemente o formulário
            this.foto = new FotoComponent();

            //Imprime no console
            console.info("foto salva com sucesso");
        },
        erro => console.info(erro));
    }
}