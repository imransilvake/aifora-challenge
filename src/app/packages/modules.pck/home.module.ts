// angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from '../widgets.pck/widgets.module';

// app
import { HOME_ROUTE } from './home-routing';
import { HomeComponent } from './home.component';

@NgModule({
	imports: [
		RouterModule.forChild(HOME_ROUTE),
		WidgetsModule
	],
	declarations: [
		HomeComponent
	]
})

export class HomeModule {
}
