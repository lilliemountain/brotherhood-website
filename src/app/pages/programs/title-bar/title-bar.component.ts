import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() title: string;
  @Input() subTitle: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.imageUrl);
  }

}
