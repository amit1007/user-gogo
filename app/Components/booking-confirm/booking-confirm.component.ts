import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-confirm',
  templateUrl: './booking-confirm.component.html',
  styleUrls: ['./booking-confirm.component.css']
})
export class BookingConfirmComponent implements OnInit {

	lat: number = 51.678418;
	lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

  canceltrip(){
 	console.log("here");
  }

}
