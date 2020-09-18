// angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

// app
import { WorkFlowComponent } from './work-flow.component';
import { PercentageCircleComponent } from '../percentage-circle/percentage-circle.component';

describe('WorkFlowComponent', () => {
	let component: WorkFlowComponent;
	let fixture: ComponentFixture<WorkFlowComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ReactiveFormsModule],
			declarations: [WorkFlowComponent, PercentageCircleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WorkFlowComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
