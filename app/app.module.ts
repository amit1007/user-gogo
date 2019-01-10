import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { AppRoutingModule }  from './app-routing.module';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MyRidesComponent } from './Components/my-rides/my-rides.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { SignupDetailsComponent } from './Components/signup-details/signup-details.component';
import { BookRidesComponent } from './Components/book-rides/book-rides.component';
import { BookRideDetailsComponent } from './Components/book-ride-details/book-ride-details.component';
import { BookingConfirmComponent } from './Components/booking-confirm/booking-confirm.component';
import { ActiveRideComponent } from './Components/active-ride/active-ride.component';
import { PastRideComponent } from './Components/past-ride/past-ride.component';
import { BookingPageComponent } from './Components/booking-page/booking-page.component';
import { ThankYouComponent } from './Components/thank-you/thank-you.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';

@NgModule({
	declarations: [
		AppComponent,
		SignupComponent,
		RightSidebarComponent,
		MyRidesComponent,
		FooterComponent,
		LoginComponent,
		HeaderComponent,
		LeftSidebarComponent,
		SignupDetailsComponent,
		BookRidesComponent,
		BookRideDetailsComponent,
		BookingConfirmComponent,
		ActiveRideComponent,
		PastRideComponent,
		BookingPageComponent,
		ThankYouComponent,
		MyProfileComponent				 
	],
	imports: [
		BrowserModule, FormsModule, ReactiveFormsModule, 
		AppRoutingModule, 
		AgmCoreModule.forRoot({
    		apiKey: 'AIzaSyA3IPPYh8kevGnqsrWqJVPBxBo2zhvml9U'
    	}),
    	AgmDirectionModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
