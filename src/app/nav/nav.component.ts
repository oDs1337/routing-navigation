import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() nameChanged = new EventEmitter<string>()

  title: string = "Howdy, enter your name here:"
  name: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  changeName(value: string){
    this.nameChanged.emit(value);
    this.name = value;
  }

}
