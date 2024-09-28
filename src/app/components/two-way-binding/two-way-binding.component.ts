import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

//Importar para o binding funcionar
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {
name: string = '';
}
