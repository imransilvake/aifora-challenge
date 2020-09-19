// angular
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// app
import { WFBucketCheckboxInterface, WFBucketsInterface, WFButtonsInterface } from './work-flow.interface';
import { WFBucketTypes } from './work-flow.enum';

// for unique id
let componentId = 0;

@Component({
	selector: 'app-work-flow',
	templateUrl: './work-flow.component.html',
	styleUrls: ['./work-flow.component.scss']
})

export class WorkFlowComponent implements OnInit {
	@Input() data: WFBucketsInterface[];
	@Output() bucketSelect: EventEmitter<WFBucketsInterface> = new EventEmitter<WFBucketsInterface>();
	@Output() buttonSelect: EventEmitter<WFButtonsInterface> = new EventEmitter<WFButtonsInterface>();

	public selectedIndex = -1;
	public selectedBucketType;
	public form: FormGroup;
	public uniqueComponentId = ++componentId;
	public bucketTypeAll = WFBucketTypes.ALL;

	ngOnInit() {
		// initialize the work flow form
		this.initWorkFlowForm();
	}

	/**
	 * keep track of for loop
	 * @param index
	 */
	public trackByFn(index: number) {
		return index;
	}

	/**
	 * initialize the work flow form
	 */
	public initWorkFlowForm() {
		// fill form with checkboxes data 
		if (this.data && this.data['buckets'] && this.data['buckets'].length) {
			const buckets = this.data['buckets'];
			const payload = [];
			for (let i = 0; i < buckets.length; i++) {
				if (buckets[i].id !== this.bucketTypeAll) { // ignore bucket type: all
					const label = buckets[i].label;
					payload[label] = [];
					for (let j = 0; j < buckets[i].checkboxes.length; j++) {
						const val = buckets[i].checkboxes[j].selected;
						payload[label].push(new FormControl(val))
					}
				}
			}

			// form group
			this.form = new FormGroup(
				{ cb: new FormControl(payload) }
			);
		}
	}

	/**
	 * sum of all the available options
	 * @param checkboxes
	 */
	public sumTotalBucketValue(checkboxes: WFBucketCheckboxInterface[]): number {
		return checkboxes.reduce((a, b) => a + b.value, 0);
	}

	/**
	 * on select bucket from the list
	 * @param bucket
	 * @param index
	 */
	public onBucketSelect(bucket: WFBucketsInterface, index: number) {
		// select current bucket
		this.selectedIndex = index;
		this.selectedBucketType = bucket && bucket.id;

		// prepare bucket payload
		if (bucket) {
			const payload = this.prepareBucketPayload(bucket);

			// emit payload to parent component
			this.bucketSelect.emit(payload);
		}
	}

	/**
	 * on bucket checkbox change 
	 * @param bucket
	 */
	public onBucketCheckboxChange(bucket: WFBucketsInterface) {
		// prepare bucket payload
		const payload = this.prepareBucketPayload(bucket);

		// emit payload to parent component
		this.bucketSelect.emit(payload);
	}

	/**
	 * prepare payload for the parent component
	 * @param bucket
	 */
	public prepareBucketPayload(bucket: WFBucketsInterface): WFBucketsInterface {
		const payload = [];

		// push values to payload
		for (let i = 0; i < bucket.checkboxes.length; i++) {
			payload.push({
				key: bucket.checkboxes[i].key,
				value: bucket.checkboxes[i].value,
				selected: this.form.controls['cb'].value[bucket.label][i].value
			})
		}

		return {
			...bucket,
			checkboxes: payload
		};
	}

	/**
	 * on click button
	 * @param button
	 */
	public onButtonSelect(button: WFButtonsInterface) {
		// emit button to parent component
		this.buttonSelect.emit(button);
	}
}
