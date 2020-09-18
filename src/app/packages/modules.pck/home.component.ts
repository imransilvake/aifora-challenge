// angular
import { Component, OnInit } from '@angular/core';

// app
import { HomeService } from './home.service';
import { WorkflowItemsInterface } from './home.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	public workflowItems: WorkflowItemsInterface[];

	constructor(private _homeService: HomeService) {
	}

	ngOnInit() {
		// fetch mock data from the service
		this._homeService
			.fetchWorkFlowData()
			.subscribe((res: WorkflowItemsInterface[]) => this.workflowItems = res);
	}

	/**
	 * on payload change
	 * @param payload
	 */
	public onPayloadChange(payload: WorkflowItemsInterface) {
		console.log(payload);
	}
}
