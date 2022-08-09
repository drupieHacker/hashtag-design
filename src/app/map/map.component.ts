import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {
contactHeader="Dirección";
dir="Calle 317 #208 Col. Nueva Atzacoalco C.P 07420";
branding="Hashtag Design";
phone="5626188251";
constructor() { }

  ngOnInit(): void {
  }

}
