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
	});

	it('should have correct stroke dash-array with 50% percentage', () => {
		component.percentage = 50;
		component.calculateStrokeDashArray();
		const strokeDasharray = component.strokeDasharray;

		expect(component.percentage).toBe(50);
		expect(strokeDasharray).toBe('calc(0.5 * calc(6.28 * 139)) calc(6.28 * 139)');
	});
});
