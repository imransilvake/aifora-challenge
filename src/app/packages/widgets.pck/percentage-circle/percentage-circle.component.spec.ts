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

	it('should create PercentageCircleComponent', () => {
		expect(component).toBeTruthy();
	});

	it('should have percentage Input() as type number property', () => {
		component.percentage = 50;
		expect(typeof component.percentage).toBe('number');
		expect(component.percentage).toBe(50);
	});
});
