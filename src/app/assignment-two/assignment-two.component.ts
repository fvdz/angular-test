import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-two',
  templateUrl: './assignment-two.component.html',
  styleUrls: ['./assignment-two.component.css']
})
export class AssignmentTwoComponent implements OnInit {

  username = '';

  // own implementation needs all the code below, if you use the 
  // solution code you only need the assign the username variable. 
  // the business logic has been put in the template instead of the class
  // not my preference but it much less code.

  // Important lesson!
  // The teacher put the logic in the template because there is only
  // one statement executed .. the changing of the username. if there was
  // more code to be executed then the logic wouldnt be in the template but in 
  // the class.


  // enableButtonStatus = false;

  // constructor() { }

  ngOnInit() {
  }

  // onUpdateUsername() {
    // Enable the button
    // this.enableButtonStatus = true;

    // Check if username is not empty
    // if( this.username === '' )
      // this.enableButtonStatus = false;
  // }

  // onUsernameReset() {
    // reset the username
    // this.username = '';
  // }
}
