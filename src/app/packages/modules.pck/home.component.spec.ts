// angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

// app
import { HomeComponent } from './home.component';
import { WidgetsModule } from '../widgets.pck/widgets.module';
import { HomeService } from './home.service';
import { WorkflowItemsInterface } from './home.interface';

describe('PercentageCircleComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let homeService: HomeService

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				WidgetsModule
			],
			declarations: [HomeComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		// spy fetchWorkFlowData from HomeService to get mock data
		homeService = TestBed.get(HomeService);
		spyOn(homeService, 'fetchWorkFlowData')
			.and.returnValue(
				of([
					{
						label: 'New',
						percentage: 76,
						checkboxes: [{
							key: 'Successes',
							value: 812,
							selected: true
						}, {
							key: 'Exceptions',
							value: 127,
							selected: false
						}]
					}
				])
			);
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create HomeComponent', () => {
		expect(component).toBeTruthy();
	});

	it('should have been called "fetchWorkFlowData" one time', () => {
		expect(homeService.fetchWorkFlowData).toHaveBeenCalled();
		expect(homeService.fetchWorkFlowData).toHaveBeenCalledTimes(1);
	});

	it('should have work flow data', () => {
		homeService.fetchWorkFlowData()
			.subscribe((res: WorkflowItemsInterface[]) => {
				expect(res.length).toBe(1);
				expect(res[0].label).toBe('New');
				expect(res[0].percentage).toBe(76);
			});
	});
});
