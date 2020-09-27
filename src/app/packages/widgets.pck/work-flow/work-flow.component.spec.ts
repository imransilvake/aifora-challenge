// angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// app
import { WorkFlowComponent } from './work-flow.component';
import { PercentageCircleComponent } from '../percentage-circle/percentage-circle.component';
import { WFBucketsInterface } from './work-flow.interface';
import { WFBucketTypes } from './work-flow.enum';

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

	it('should create WorkFlowComponent', () => {
		expect(component).toBeTruthy();
	});

	it('should calculate correct sum value of a bucket', () => {
		// pass dummy data
		const result = component.sumTotalBucketValue([{
			key: 'Started',
			value: 100,
			selected: false
		}, {
			key: 'Todo',
			value: 600,
			selected: false
		}]);

		// expect
		expect(result).toBe(700);
	});

	it('should set current index on selecting an bucket', () => {
		// update selected index
		component.onBucketSelect(null, 2);

		// expect
		expect(component.selectedIndex).toBe(2);
	});

	it('should emit correct payload to the parent component', () => {
		// add values to form group
		const payload = [];
		payload['Planned'] = [];
		payload['Planned'].push(new FormControl(true));
		payload['Planned'].push(new FormControl(true));
		component.form = new FormGroup(
			{ cb: new FormControl(payload) }
		);

		// detect value changes
		component.bucketSelect
			.subscribe((bucket: WFBucketsInterface) => {
				expect(bucket.id === WFBucketTypes.ALL).toBeFalsy();
				expect(bucket.label).toBe('Planned');
				expect(bucket.checkboxes[0].key).toBe('Started');
				expect(bucket.checkboxes[0].selected).toBeTruthy();
				expect(bucket.checkboxes[1].key).toBe('Todo');
				expect(bucket.checkboxes[1].selected).toBeTruthy();
			});

		// call method with sending bucket info
		component.onBucketSelect({
			id: 'planned',
			label: 'Planned',
			percentage: 10,
			checkboxes: [{
				key: 'Started',
				value: 100,
				selected: false
			}, {
				key: 'Todo',
				value: 600,
				selected: false
			}]
		}, 1);
	})
});
