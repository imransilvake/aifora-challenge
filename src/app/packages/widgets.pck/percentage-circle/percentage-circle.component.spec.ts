// angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// app
import { PercentageCircleComponent } from './percentage-circle.component';

describe('PercentageCircleComponent', () => {
	let component: PercentageCircleComponent;
	let fixture: ComponentFixture<PercentageCircleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PercentageCircleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PercentageCircleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
