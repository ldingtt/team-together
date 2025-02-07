// import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import {} from 'googlemaps';
//
// declare module 'googlemaps';
//
// @Component({
//   selector: 'app-google-map',
//   templateUrl: './google-map.component.html',
//   styleUrls: ['./google-map.component.scss']
// })
// export class GoogleMapComponent implements OnInit {
//     @ViewChild('map', {static: true}) mapElement: ElementRef;
//     map: google.maps.Map;
//     constructor() { }
//
//     ngOnInit() {
//         var mapProp = {
//             center: new google.maps.LatLng(18.5793, 73.8143),
//             zoom: 15,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         this.map = new google.maps.Map(this.mapElement.nativeElement, mapProp);
//     }
//
// }

import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';

declare module 'googlemaps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements AfterViewInit {
  title = 'angular-gmap';
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  map: google.maps.Map;
  lat = 37.349693;
  lng = -121.940329;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: 'Hello World!'
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    //this.marker.setMap(this.map);
  }
}
