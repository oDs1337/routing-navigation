import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {
  @Input() nameFromNavBar = '';

  test: string = "dupa";

  constructor() { }

  ngOnInit(): void {
  }

}
