import {
    Component,
    Input,
    OnInit
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "painel",
    templateUrl: "./painel.component.html"
})
export class PainelComponent implements OnInit {
    //Propriedades da Classe
    @Input() titulo: string;

    //Construtor da Classe
    constructor() {}

    //Faz o processo depois que é passado o valor da propriedade da classe
    ngOnInit() {
        //Faz ajuste limitando a quantidade de caracteres que é para ser mostrada
        this.titulo = ((this.titulo.length > 7) ?this.titulo.substr(0, 7) + "..." :this.titulo);
    }
}