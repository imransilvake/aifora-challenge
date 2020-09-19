// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../widgets.pck/widgets.module';

// app
import { HOME_ROUTE } from './home-routing';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(HOME_ROUTE),
		WidgetsModule
	],
	declarations: [
		HomeComponent
	]
})

export class HomeModule {
}
