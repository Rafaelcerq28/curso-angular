//PARA FUNCIONAR O FOR IMPORTAR O COMMOM MODULE 
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';  
//Importando a interface Animal
import { Animal } from '../../Animal';

//Importando o service 
//Comando para criar uma service ng generate service <pasta>/nome
//depois de importar adicionar no construtor
import { ListService } from '../../service/list.service';


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
  animals: Animal[] = []; //declarando um array do tipo animals mas vazio 

  numeros = [1,2,3,4,5,6];
//private nomeParaOService: NomeDoServiceQueVouUsar
  constructor(private listService: ListService){
    this.getAnimals();
  }

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
  
  removeAnimal(animal:Animal){
    console.log(`removendo animal...${animal.name}`);
    //chama o metodo remove da listService e atualiza a lista de animais
    this.animals = this.listService.remove(this.animals,animal);
  }

  getAnimals(): void{
    //adicionando o subscribe porque o angular pede isso quando usamos observable
    //atribuindo os animais no meu this.animals que é o array
    //this.listService.getAll().subscribe((animals => (this.animals = animals)));
  }
}
