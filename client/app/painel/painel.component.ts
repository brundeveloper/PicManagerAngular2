import {
    Component,
    Input,
    OnInit,
    ElementRef
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "painel",
    templateUrl: "./painel.component.html",
    styleUrls: ["./painel.component.css"]
})
export class PainelComponent implements OnInit {
    //Propriedades da Classe
    @Input() titulo: string;
    elemento: ElementRef;

    //Construtor da Classe
    constructor(elemento: ElementRef) {
        //Seta na propriedade
        this.elemento = elemento;
    }

    //Faz o processo depois que é passado o valor da propriedade da classe
    ngOnInit() {
        //Faz ajuste limitando a quantidade de caracteres que é para ser mostrada
        this.titulo = ((this.titulo.length > 7) ?this.titulo.substr(0, 7) + "..." :this.titulo);
    }

    //Faz o fadeOut no elemento
    fadeOut(callback) {
        //Faz o fadeOut no elemento
        $(this.elemento.nativeElement).fadeOut(callback);
    }
}