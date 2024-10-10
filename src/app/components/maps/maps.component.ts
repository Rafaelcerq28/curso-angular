import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {

  latitude = 53.34909368665719;
  longitude = -6.239063557671709;
  center: google.maps.LatLngLiteral = { lat: 40.730610, lng: -73.935242}; // Nova York como exemplo
  zoom = 12;
}
//53.34909368665719, -6.239063557671709