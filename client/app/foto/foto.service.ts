import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { FotoComponent } from "./foto.component";
import { Observable } from "rxjs";

@Injectable()
export class FotoService {
    //Propriedades da Classe
    http: Http;
    headers: Headers;
    url: string = "http://localhost:3000/v1/fotos";
    
    //Construtor da Classe
    constructor(http: Http) {
        //Seta o valor na propriedade
        this.http = http;
        this.headers = new Headers();

        //Monta o header avisando que é JSON
        this.headers.append("Content-type", "application/json");
    }

    //Chama url para cadastro da foto
    cadastra(foto: FotoComponent): Observable<MensagemCadastro> {
        //Verifica se é para atualizar ou criar
        if (foto._id){
            //Retorna Stream Response apos chamar URL
            return this.http
                .put(this.url + "/" + foto._id, JSON.stringify(foto), {headers: this.headers})
                .map(() => new MensagemCadastro("Foto alterada com sucesso", false));
        }
        else {
            //Retorna Stream Response apos chamar URL
            return this.http
                .post(this.url, JSON.stringify(foto), {headers: this.headers})
                .map(() => new MensagemCadastro("Foto incluida com sucesso", true));
        }
    }

    //Chama url para trazer a lista de fotos
    lista(): Observable<FotoComponent[]> {
        //Mapeia o resultado da chamada à URL e retorna a resposta em JSON
        return this.http.get(this.url).map(res => res.json());
    }

    //Chama a url que deleta a foto
    remove(foto: FotoComponent): Observable<Response> {
        //Retorna Stream Response apos chamar URL
        return this.http.delete(this.url + "/" + foto._id);
    }

    //Chama url que obtem a foto pelo id
    buscaPorId(id: string): Observable<FotoComponent> {
        //Mapeia o resultado da chamada à URL e retorna a resposta em JSON
        return this.http.get(this.url + "/" + id).map(res => res.json());
    }
}

//Classe com o Padrão de retorno de mensagem de cadastro
export class MensagemCadastro {
    //Propriedades da classe
    private _mensagem: string;
    private _inclusao: boolean;

    //Construtor da Classe
    constructor(mensagem: string, inclusao: boolean){
        //Seta os valores nas propriedades
        this._mensagem = mensagem;
        this._inclusao = inclusao;
    }

    //Metodo getters e setters
    public get mensagem(): string {
        return this._mensagem;
    }
    public get inclusao(): boolean {
        return this._inclusao;
    }
}