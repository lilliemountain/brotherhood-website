import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-image-title',
  templateUrl: './top-image-title.component.html',
  styleUrls: ['./top-image-title.component.css']
})
export class TopImageTitleComponent implements OnInit {

  @Input() imageUrl: string;
  @Input() title: string;
  @Input() subTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
