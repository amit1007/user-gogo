import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

	rating:number;

	recordList:any[]=[  
		{'Title':'Driver', 'starList':[true,true,true,true,true]},  
		{'Title':'Vehicle', 'starList':[true,true,true,true,true]},   
	]; 

	constructor() { }

	ngOnInit() {
	}
	 

	setStarTable(record:any,data:any){  
		this.rating=data+1;  
		var tableList = this.recordList.find(function (obj: any) { return obj.Title === record.Title });  
		for(var i=0;i<=4;i++){  
			if(i<=data){  
  				tableList.starList[i]=false;  
			}  
			else{  
  				tableList.starList[i]=true;  
			}  
		}  
	}  
	

	// setStar(data:any){
	// 	this.rating=data+1;                               
	// 	for(var i=0;i<=4;i++){ 

	// 		if(i<=data){  
	// 			this.starList[i]=false;  
	// 		}  
	// 		else{  
	// 			this.starList[i]=true;  
	// 		}  
	// 	}	  
	// } 

}
