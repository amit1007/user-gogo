import { Component, OnInit } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from '@agm/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-book-rides',
	templateUrl: './book-rides.component.html',
	styleUrls: ['./book-rides.component.css']
})
export class BookRidesComponent implements OnInit {
	signupform: FormGroup;

	// google maps zoom level
	zoom: number = 8;

	// initial center position for the map
	lat: number = 51.673858;
	lng: number = 7.815982;

	icon = {
		url: '../../assets/images/truck.png',
		scaledSize: {
		width: 60,
		height: 30
		}
	}

	constructor(private _fb: FormBuilder) { this.createForm(); }

    ngOnInit() {
        this.signupform = this._fb.group({
            itemRows: this._fb.array([this.initItemRows()]) // here
        });
    }

	initItemRows() {
        return this._fb.group({
            // list all your form controls here, which belongs to your form array
            itemname: ['']
        });
    }
    createForm(){
        this.signupform = this._fb.group({
            itemRows: this._fb.array([])
        });
        this.signupform.setControl('itemRows', this._fb.array([]));
    }

    get itemRows(): FormArray {
        return this.signupform.get('itemRows') as FormArray;
    }

    addNewRow() {
        // control refers to your formarray
        const control = <FormArray>this.signupform.controls['itemRows'];
        // add new formgroup
        control.push(this.initItemRows());
    }

    deleteRow(index: number) {
        // control refers to your formarray
        const control = <FormArray>this.signupform.controls['itemRows'];
        // remove the chosen row
        control.removeAt(index);
    }

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

	mapClicked($event: AGMMouseEvent) {
		this.markers.push({
		lat: $event.coords.lat,
		lng: $event.coords.lng,
		draggable: true
		});
	}

	markerDragEnd(m: marker, $event: AGMMouseEvent) {
		console.log('dragEnd', m, $event);
	}

	markers: marker[] = [
		{
			lat: 51.673858,
			lng: 7.815982,
			label: '',
			draggable: true
		},
		{
			lat: 51.373858,
			lng: 7.215982,
			label: '',
			draggable: false
		},
		{
			lat: 51.723858,
			lng: 7.895982,
			label: '',
			draggable: true
		},
		{
			lat: 51.723858,
			lng: 7.895982,
			label: '',
			draggable: true
		}
	]

		
}



// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}



	
