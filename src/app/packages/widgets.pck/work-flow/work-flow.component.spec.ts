// angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

// app
import { WorkFlowComponent } from './work-flow.component';
import { PercentageCircleComponent } from '../percentage-circle/percentage-circle.component';
import { WorkflowItemsInterface } from '../../modules.pck/home.interface';

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

	it('should set current index on selecting an item', () => {
		// update selected index
		component.onClickSelectItem(null, 2);

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
		component.payloadChange
			.subscribe((item: WorkflowItemsInterface) => {
				expect(item.all).toBeFalsy();
				expect(item.label).toBe('Planned');
				expect(item.checkboxes[0].key).toBe('Started');
				expect(item.checkboxes[0].selected).toBeTruthy();
				expect(item.checkboxes[1].key).toBe('Todo');
				expect(item.checkboxes[1].selected).toBeTruthy();
			});

		// call method with sending item
		component.onClickSelectItem({
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
