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
var foto_service_1 = require("../foto/foto.service");
var ListagemComponent = (function () {
    //Construtor
    function ListagemComponent(service) {
        var _this = this;
        //Propriedade fotos - array de objetos que guardará as fotos
        this.fotos = [];
        //Propriedade com uma mensagem
        this.mensagem = "";
        //Seta o serviço na propriedade
        this.service = service;
        //Chama metodo do serviço que obtem a lista de fotos
        this.service.lista()
            .subscribe(function (fotos) {
            //Coloca o retorno na propriedade
            _this.fotos = fotos;
        }, function (erro) { return console.info(erro); });
    }
    //Remove a foto
    ListagemComponent.prototype.remove = function (foto) {
        var _this = this;
        ////Chama metodo do serviço que remove a foto
        this.service.remove(foto)
            .subscribe(function () {
            //Copia o array de fotos
            var novasFotos = _this.fotos.slice(0);
            //Obtem o indice da foto
            var indice = novasFotos.indexOf(foto);
            //Remove a foto do array
            novasFotos.splice(indice, 1);
            //Atribui na propriedade o array de fotos atualizado
            _this.fotos = novasFotos;
            //Mesangem para o usuario
            _this.mensagem = "Foto removida com sucesso";
            //Imprime no console
            console.info("Foto removida com sucesso");
        }, function (erro) {
            //Mesangem para o usuario
            _this.mensagem = "Foto removida com sucesso";
            //Imprime no console
            console.info(erro);
        });
    };
    return ListagemComponent;
}());
ListagemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "listagem",
        templateUrl: "./listagem.component.html"
    }),
    __metadata("design:paramtypes", [foto_service_1.FotoService])
], ListagemComponent);
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map