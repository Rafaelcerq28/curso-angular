import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
show: boolean = false;
phrase = "Ola";
//definição de metodo no typescript: nomeDoMetodo(): TipoDoMetodo{}
showMessage(): void{
  //this.show = true;
  this.show = !this.show; //fazendo assim o evento vai sempre chamar o oposto do show mudando o seu valor
                          // o nome disso é toogle
}

mouseOverMessage(): void{
  this.phrase = "meu nome é Rafael";

}

mouseLeftMessage(): void{
  this.phrase = "Olá"
}

}
