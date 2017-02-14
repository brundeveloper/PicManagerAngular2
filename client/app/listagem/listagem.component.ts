import { Component } from "@angular/core";
import { FotoService } from "../foto/foto.service";
import { FotoComponent } from "../foto/foto.component";

@Component({
    moduleId: module.id,
    selector: "listagem",
    templateUrl: "./listagem.component.html"
})
export class ListagemComponent {
    //Propriedade fotos - array de objetos que guardará as fotos
    fotos: FotoComponent[] = [];

    //Propriedade com o serviço de Foto
    service: FotoService;

    //Construtor
    constructor(service: FotoService) {
        //Seta o serviço na propriedade
        this.service = service;

        ////Chama metodo do serviço que obtem a lista de fotos
        this.service.lista()
        .subscribe(fotos => {
            //Coloca o retorno na propriedade
            this.fotos = fotos;
        },
        erro => console.info(erro));
    }

    //Remove a foto
    remove(foto: FotoComponent) {
        ////Chama metodo do serviço que remove a foto
        this.service.remove(foto)
        .subscribe(
            () => {
                //
                

                //Imprime no console
                console.info("Foto removida com sucesso")
            },
            erro => console.info(erro)
        );
    }
}