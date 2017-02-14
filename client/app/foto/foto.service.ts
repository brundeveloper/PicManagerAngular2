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
    cadastra(foto: FotoComponent): Observable<Response> {
        //Retorna Stream Response apos chamar URL
        return this.http.post(this.url, JSON.stringify(foto), {headers: this.headers});
    }

    //Chama url para trazer a lista de fotos
    lista(): Observable<FotoComponent[]> {
        //Mapeia resulta da chamada à URL e retorna a resposta em JSON
        return this.http.get(this.url).map(res => res.json());
    }

    //Chama a url que deleta a foto
    remove(foto: FotoComponent): Observable<Response> {
        //Retorna Stream Response apos chamar URL
        return this.http.delete(this.url + "/" + foto._id);
    }
}