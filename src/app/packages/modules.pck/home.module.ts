// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// app
import { HOME_ROUTE } from './home-routing';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		RouterModule.forChild(HOME_ROUTE)
	],
	declarations: [
		HomeComponent
	]
})

export class HomeModule {
}
