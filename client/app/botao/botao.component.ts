import {
    Component,
    Input,
    Output,
    EventEmitter
} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "botao",
    templateUrl: "./botao.component.html"
})
export class BotaoComponent {
    //Propriedades
    @Input() nome: string = "OK";
    @Input() estilo: string = "btn-default";
    @Input() tipo: string = "button";
    @Input() desabilitado: boolean = false;
    @Output() acao = new EventEmitter();
    @Input() confirmacao: boolean = false;

    //Metodo para rodar função
    executaAcao(){
        //Verifica se precisa de confirmação
        if (this.confirmacao){
            //Exige confirmação do usuario
            if (confirm("Deseja excluir?")){
                //Dispara evento
                this.acao.emit(null);
            }

            //Sai do Metodo
            return;
        }

        //Dispara evento
        this.acao.emit(null);
    }
}