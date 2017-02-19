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
var http_1 = require("@angular/http");
var FotoService = (function () {
    //Construtor da Classe
    function FotoService(http) {
        this.url = "http://localhost:3000/v1/fotos";
        //Seta o valor na propriedade
        this.http = http;
        this.headers = new http_1.Headers();
        //Monta o header avisando que é JSON
        this.headers.append("Content-type", "application/json");
    }
    //Chama url para cadastro da foto
    FotoService.prototype.cadastra = function (foto) {
        //Verifica se é para atualizar ou criar
        if (foto._id) {
            //Retorna Stream Response apos chamar URL
            return this.http.put(this.url + "/" + foto._id, JSON.stringify(foto), { headers: this.headers });
        }
        else {
            //Retorna Stream Response apos chamar URL
            return this.http.post(this.url, JSON.stringify(foto), { headers: this.headers });
        }
    };
    //Chama url para trazer a lista de fotos
    FotoService.prototype.lista = function () {
        //Mapeia o resultado da chamada à URL e retorna a resposta em JSON
        return this.http.get(this.url).map(function (res) { return res.json(); });
    };
    //Chama a url que deleta a foto
    FotoService.prototype.remove = function (foto) {
        //Retorna Stream Response apos chamar URL
        return this.http.delete(this.url + "/" + foto._id);
    };
    //Chama url que obtem a foto pelo id
    FotoService.prototype.buscaPorId = function (id) {
        //Mapeia o resultado da chamada à URL e retorna a resposta em JSON
        return this.http.get(this.url + "/" + id).map(function (res) { return res.json(); });
    };
    return FotoService;
}());
FotoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FotoService);
exports.FotoService = FotoService;
//# sourceMappingURL=foto.service.js.map