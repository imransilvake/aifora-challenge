// angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

// app
import { AppComponent } from './app.component';
import { FrameModule } from './packages/frame.pck/frame.module';
import { APP_ROUTES } from './app-routing';

describe('PercentageCircleComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterModule.forRoot(APP_ROUTES),
				FrameModule
			],
			declarations: [AppComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create AppComponent', () => {
		expect(component).toBeTruthy();
	});
});
