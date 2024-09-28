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
  constructor() { }


private apiUrl = 'http://localhost:3000/animals';

  remove(animals:Animal[],animal:Animal){
    //filtra os animais na lista e retorna quando for diferente do animal clicado 
    return animals.filter((a) => animal.name !== a.name);
  }


}
