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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var foto_component_1 = require("../foto/foto.component");
var foto_service_1 = require("../foto/foto.service");
var CadastroComponent = (function () {
    //Construtor da Classe
    function CadastroComponent(service, fb, route, router) {
        var _this = this;
        //Propriedades da Classe
        this.foto = new foto_component_1.FotoComponent();
        //Seta as validações do formulario
        this.meuForm = fb.group({
            titulo: ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ["", forms_1.Validators.required],
            descricao: [""]
        });
        //Seta o serviço de Foto
        this.service = service;
        //Seta o serviço de rota
        this.route = route;
        //Seta o roteador
        this.router = router;
        //Sobrescreve para obter o paramentros
        this.route.params.subscribe(function (params) {
            //Obtem o parametro passado
            var id = params["id"];
            //Verifica se passou ou ID
            if (id) {
                //Obtem a foto pelo id
                _this.service.buscaPorId(id)
                    .subscribe(function (foto) { return _this.foto = foto; }, function (erro) { return console.log(erro); });
            }
        });
    }
    //Cadstra a foto
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        //Cancela o evento
        event.preventDefault();
        //Chama metodo do serviço que salva a foto
        this.service.cadastra(this.foto)
            .subscribe(function () {
            //Limpa a objeto e consequentemente o formulário
            _this.foto = new foto_component_1.FotoComponent();
            //Redireciona para a rota principal
            _this.router.navigate([""]);
            //Imprime no console
            console.info("foto salva com sucesso");
        }, function (erro) { return console.info(erro); });
    };
    return CadastroComponent;
}());
CadastroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "cadastro",
        templateUrl: "./cadastro.component.html"
    }),
    __metadata("design:paramtypes", [foto_service_1.FotoService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
], CadastroComponent);
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map