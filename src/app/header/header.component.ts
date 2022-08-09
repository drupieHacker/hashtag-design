import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
title="Hashtag Design";
content="Empresa dedicada al arte, publicidad, fotografía y storyboard";
img="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?cs=srgb&dl=pexels-daian-gan-102127.jpg&fm=jpg";  
encabezado1="Misión";
encabezado2="Visión";
encabezado3="Valores";
encabezado4="Filosofía";
text1="Amabilidad";
text2="Honestidad";
text3="Respeto";
text4="Humildad";
text5="Confianza";
text6="Fidelidad";
constructor() { }

  ngOnInit(): void {
  }

}
