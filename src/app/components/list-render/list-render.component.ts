//PARA FUNCIONAR O FOR IMPORTAR O COMMOM MODULE 
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
@Component({
  selector: 'app-list-render',
  standalone: true,
  //ADICIONAR ELE AQUI
  imports: [CommonModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  //lista de objetos (LEMBRE DE IMPORTAR O COMMOM MODULE)
  //Nesse caso estou importando tambem uma interface de animais
  //(na pasta APP tem um arquivo chamado "Animals.ts" 
  // é igual uma classe de animal no java) e coloco o tipo na lista
  animals: Animal[] = [
    {name:'rex', type: 'dog', age: 10},
    {name: 'tom', type: 'cat', age: 5},
    {name: 'fri', type: 'cat', age: 33},
    {name: 'bob', type: 'horse', age: 8}
  ];

  numeros = [1,2,3,4,5,6];

  //brincando com lista e eventos
  show: boolean = false;
  //methodo para mudar o status do "show"
  showList(): void{
    this.show = !this.show;
  }

  //imprimindo a idade do animal quando clico no botão
  animalDetais = '';
  showAge(animal: Animal):void {
    //grava a idade do animal na variavel
    this.animalDetais = `o pet ${animal.name} tem ${animal.age} anos!`
  }
  
}
