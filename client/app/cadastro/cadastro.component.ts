import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { FotoComponent } from "../foto/foto.component";
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
    route: ActivatedRoute;
    router: Router;

    //Construtor da Classe
    constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute, router: Router) {
        //Seta as validações do formulario
        this.meuForm = fb.group({
            titulo: ["", Validators.compose([ Validators.required, Validators.minLength(4) ])],
            url: ["", Validators.required],
            descricao: [""]
        });

        //Seta o serviço de Foto
        this.service = service;

        //Seta o serviço de rota
        this.route = route;

        //Seta o roteador
        this.router = router;

        //Sobrescreve para obter o paramentros
        this.route.params.subscribe(params => {
            //Obtem o parametro passado
            let id = params["id"];

            //Verifica se passou ou ID
            if (id){
                //Obtem a foto pelo id
                this.service.buscaPorId(id)
                .subscribe(
                    foto => this.foto = foto,
                    erro => console.log(erro)
                );
            }
        });
    }

    //Cadstra a foto
    cadastrar(event) {
        //Cancela o evento
        event.preventDefault();

        //Chama metodo do serviço que salva a foto
        this.service.cadastra(this.foto)
        .subscribe(
            () => {
                //Limpa a objeto e consequentemente o formulário
                this.foto = new FotoComponent();

                //Redireciona para a rota principal
                this.router.navigate([""]);

                //Imprime no console
                console.info("foto salva com sucesso");
            },
            erro => console.info(erro)
        );
    }
}