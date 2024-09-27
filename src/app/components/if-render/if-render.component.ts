//para funcionar o IF-ELSE tem que importar o commomModule
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  standalone: true,
  //E importar aqui
  imports: [CommonModule],
  templateUrl: './if-render.component.html',
  styleUrl: './if-render.component.css'
})
export class IfRenderComponent {
  canShow: boolean = true;
  name = 'joao';
}
