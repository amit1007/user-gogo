import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

  constructor() { }

public lat: Number = 24.799448
public lng: Number = 120.979021
 
public origin: any
public destination: any
public markerOpts: any
public options: any

  ngOnInit() {
  	this.getDirection();

  	this.options = {
    				suppressMarkers: true,
  				};
  	
  	this.markerOpts = {
  					origin: {
    					icon: '',
  					},
  					destination: {
    					icon: './assets/images/truck.png',
    					color: '#CC0000',
						fontFamily: '',
						fontSize: '14px',
						fontWeight: 'bold',
						text: 'Some Text',
  					},
				};
  }

  getDirection() {
  		this.origin = { lat: 24.799448, lng: 120.979021 }
  		this.destination = { lat: 24.799524, lng: 120.975017 }
  }

}

