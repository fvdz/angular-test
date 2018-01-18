import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css']
})
export class AssignmentThreeComponent implements OnInit {
  toggleSecret: boolean = false;
  total = 0;
  clicks= [0];

  constructor() { }

  ngOnInit() {
  }

  onToggleClick() {
    this.toggleSecret = !this.toggleSecret;
    ++this.total;    
    this.clicks.push(this.total);
  }

  getColor(){
    if(this.total >= 5)
      return 'blue';
    else return 'red';
  }
}
