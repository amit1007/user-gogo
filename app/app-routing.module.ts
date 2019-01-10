import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './Components/signup/signup.component';
import { AppComponent } from './app.component';
import { MyRidesComponent } from './Components/my-rides/my-rides.component';
import { LoginComponent } from './Components/login/login.component';
import { BookRideDetailsComponent } from './Components/book-ride-details/book-ride-details.component';
import { SignupDetailsComponent } from './Components/signup-details/signup-details.component';
import { BookRidesComponent } from './Components/book-rides/book-rides.component';
import { BookingConfirmComponent } from './Components/booking-confirm/booking-confirm.component';
import { ActiveRideComponent } from './Components/active-ride/active-ride.component';
import { PastRideComponent } from './Components/past-ride/past-ride.component';
import { BookingPageComponent } from './Components/booking-page/booking-page.component';
import { ThankYouComponent } from './Components/thank-you/thank-you.component';
import { MyProfileComponent } from './Components/my-profile/my-profile.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'mydrives', component: MyRidesComponent },
	{ path: 'signupdetails', component: SignupDetailsComponent },
	{ path:	'bookrides', component: BookRidesComponent },
	//{ path:	'', component: MyProfileComponent },
	{ path: 'bookridedetails', component: BookRideDetailsComponent},
	{ path: 'confirmbooking', component: BookingConfirmComponent},
	{ path: 'active-ride', component: ActiveRideComponent},
	{ path: 'past-ride', component: PastRideComponent},
	{ path: 'bookingpage', component: BookingPageComponent},
	{ path: 'thankyou', component: ThankYouComponent},
	{ path: 'myprofile', component: MyProfileComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule{ } 