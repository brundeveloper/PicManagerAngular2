"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var BotaoComponent = (function () {
    function BotaoComponent() {
        //Propriedades
        this.nome = "OK";
        this.estilo = "btn-default";
        this.tipo = "button";
        this.desabilitado = false;
        this.acao = new core_1.EventEmitter();
        this.confirmacao = false;
    }
    //Metodo para rodar função
    BotaoComponent.prototype.executaAcao = function () {
        //Verifica se precisa de confirmação
        if (this.confirmacao) {
            //Exige confirmação do usuario
            if (confirm("Deseja excluir?")) {
                //Dispara evento
                this.acao.emit(null);
            }
            //Sai do Metodo
            return;
        }
        //Dispara evento
        this.acao.emit(null);
    };
    return BotaoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BotaoComponent.prototype, "nome", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BotaoComponent.prototype, "estilo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BotaoComponent.prototype, "tipo", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BotaoComponent.prototype, "desabilitado", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BotaoComponent.prototype, "acao", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BotaoComponent.prototype, "confirmacao", void 0);
BotaoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "botao",
        templateUrl: "./botao.component.html"
    })
], BotaoComponent);
exports.BotaoComponent = BotaoComponent;
//# sourceMappingURL=botao.component.js.map