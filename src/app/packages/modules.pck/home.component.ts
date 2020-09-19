// angular
import { Component, OnInit } from '@angular/core';

// app
import { HomeService } from './home.service';
import { WFInterface, WFBucketsInterface, WFButtonsInterface } from '../widgets.pck/work-flow/work-flow.interface';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
	public workflowContent: WFInterface;

	constructor(private _homeService: HomeService) {
	}

	ngOnInit() {
		// fetch mock data from the service
		this._homeService
			.fetchWorkFlowData()
			.subscribe((res: WFInterface) => this.workflowContent = res);
	}

	/**
	 * on bucket select
	 * @param bucket
	 */
	public onBucketSelect(bucket: WFBucketsInterface) {
		// API call to fetch data

		// fetch exisitng bucket
		const exisitngPayload = this.workflowContent && this.workflowContent['buckets']
			.filter(b => b.label === bucket.label)[0];

		// compare current and existing payload
		if (JSON.stringify(exisitngPayload) === JSON.stringify(bucket)) return;

		// update work flow input list
		this.workflowContent = {
			...this.workflowContent,
			buckets: this.workflowContent['buckets'].map(b => {
				if (b.label === bucket.label) {
					let percentage = 0;
					if (bucket.checkboxes[0] && bucket.checkboxes[0].selected) {
						percentage = 60;
					} else if (bucket.checkboxes[1] && bucket.checkboxes[1].selected) {
						percentage = 90;
					} else {
						percentage = 76;
					}

					return {
						...bucket,
						percentage
					};
				}
				return b;
			})
		};
	}

	/**
	 * on button select
	 * @param button
	 */
	public onButtonSelect(button: WFButtonsInterface) {
		console.log(button);
	}
}
