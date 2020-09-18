// angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app
import { APP_ROUTES } from './app-routing';
import { AppComponent } from './app.component';
import { FrameModule } from './packages/frame.pck/frame.module';

@NgModule({
	imports: [
		// angular
		BrowserModule,
		HttpClientModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(APP_ROUTES, { onSameUrlNavigation: 'reload' }),

		// frame
		FrameModule,
	],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule {
}
