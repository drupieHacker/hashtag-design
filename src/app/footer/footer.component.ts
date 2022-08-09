import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
title_head="Hashtag Design";
copy="Hashtag Design es una empresa enfocada a la ilustración, publicida, fotografía, RRSS y más.";
link1="https://www.instagram.com/alex_design2402/";  
link1_head="Instagram";
link2="https://www.youtube.com/channel/UCH_nmv3pv6fLGVA-BE2p7NA";
link2_head="Youtube";
constructor() { }

  ngOnInit(): void {
  }

}
