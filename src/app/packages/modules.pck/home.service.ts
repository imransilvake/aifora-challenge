// angular
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// app
import { WorkflowItemsInterface } from './home.interface';

@Injectable({ providedIn: 'root' })
export class HomeService {
	/**
	 * fetch mock data
	 */
	public fetchWorkFlowData(): Observable<WorkflowItemsInterface[]> {
		return of(
			[{
				all: true,
				content: {
					stock: {
						label: 'Total Stocks',
						value: 5012
					},
					planning: {
						label: 'In Planning',
						value: 1253
					}
				}
			}, {
				label: 'New',
				percentage: 76,
				checkboxes: [{
					key: 'successes',
					value: 812,
					selected: true
				}, {
					key: 'exceptions',
					value: 127,
					selected: false
				}]
			}, {
				label: 'Approval',
				percentage: 18,
				checkboxes: [{
					key: 'option 1',
					value: 200,
					selected: false
				}, {
					key: 'option 2',
					value: 50,
					selected: false
				}]
			}, {
				label: 'Planned',
				percentage: 10,
				checkboxes: [{
					key: 'started',
					value: 100,
					selected: false
				}, {
					key: 'todo',
					value: 600,
					selected: false
				}]
			}]
		);
	}
}
