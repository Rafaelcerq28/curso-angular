//para enviar evento da classe filho para a pai:
//importar  Output, EventEmitter 
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.css'
})
export class ChangeNumberComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick():void{
    //envia o  @Output() changeNumber:
    this.changeNumber.emit();
  }
}
