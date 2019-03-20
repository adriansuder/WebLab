import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent implements OnInit {
  @Input() kolor: string
  
  constructor() { }

  ngOnInit() {
  }

}
