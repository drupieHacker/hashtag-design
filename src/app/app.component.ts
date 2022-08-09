import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  imgAvatar="../assets/img/avatar.jpg";
  item1="Inicio";
  item2="Servicios";
  item3="Portafolio";
  item4="Contacto";
  articulos:any;
  
  art={
    codigo:0,
    descripcion:"",
    precio:""
  }

  constructor(private articulosServicio: ArticulosService) {}
  ngOnInit() {
  }

  alta() {
    this.articulosServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
      
      }
    });
  }


 
  

}




