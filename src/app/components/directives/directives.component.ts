import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent implements OnInit{
  size = 40;
  font = 'Arial';
  color = 'red';
  
  constructor(){}
  ngOnInit(): void {
  }

}
