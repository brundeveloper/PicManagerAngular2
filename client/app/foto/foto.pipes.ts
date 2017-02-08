import { Pipe, PipeTransform } from "@angular/core";
import { FotoComponent } from "./foto.component";

@Pipe({
    name: "filtroPorTitulo"
})
export class FiltroPorTitulo implements PipeTransform {
    //Metodo que transforma
    transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {
        //Coloca o texto digitado em caixa baixa
        digitado = digitado.toLowerCase();

        //Retorna lista filtrada
        return fotos.filter(foto => {
            //Retorna a foto se obedecera regra do filtro
            return foto.titulo.toLowerCase().includes(digitado);
        });
    }
}