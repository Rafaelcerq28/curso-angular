import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

//Importar esses caras para trabalhar com APIs
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ListService {

  //importar o httpClient
  constructor(private httpClient: HttpClient) {
  }


private apiUrl = 'http://localhost:3000/animals';
private apiUrlpok = '';
  remove(id:number){
    //filtra os animais na lista e retorna quando for diferente do animal clicado 
    return this.httpClient.delete<Animal>(`${this.apiUrl}/${id}`);
  }

  //method que faz o request para a nossa api
  getAll(): Observable<Animal[]>{
    return this.httpClient.get<Animal[]>(this.apiUrl);    
  }

  getPokemon(): Observable<any>{
    this.apiUrlpok = 'https://pokeapi.co/api/v2/pokemon/pikachu'
    return this.httpClient.get(this.apiUrlpok);
  }

  getItem(id:number): Observable<Animal> {
    //faz a requisição concatenando o id
    return this.httpClient.get<Animal>(`${this.apiUrl}/${id}`);
  }
}
