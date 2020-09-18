// angular
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

// app
import { WorkflowCheckboxInterface, WorkflowItemsInterface } from '../../modules.pck/home.interface';

// for unique id
let componentId = 0;

@Component({
	selector: 'app-work-flow',
	templateUrl: './work-flow.component.html',
	styleUrls: ['./work-flow.component.scss']
})

export class WorkFlowComponent implements OnInit {
	@Input() data: WorkflowItemsInterface[];
	@Output() payloadChange: EventEmitter<WorkflowItemsInterface> = new EventEmitter<WorkflowItemsInterface>();

	public selectedIndex = -1;
	public form: FormGroup;
	public componentId = ++componentId;

	ngOnInit() {
		// fill form with checkboxes data 
		if (this.data && this.data.length) {
			const payload = [];
			for (let i = 0; i < this.data.length; i++) {
				if (!this.data[i].all) { // ignore: all
					const label = this.data[i].label;
					payload[label] = [];
					for (let j = 0; j < this.data[i].checkboxes.length; j++) {
						const val = this.data[i].checkboxes[j].selected;
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
	public sumTotalBucketValue(checkboxes: WorkflowCheckboxInterface[]): number {
		return checkboxes.reduce((a, b) => a + b.value, 0);
	}

	/**
	 * on select item from the list
	 * @param item
	 * @param index
	 */
	public onClickSelectItem(item: WorkflowItemsInterface, index: number) {
		// select current item
		this.selectedIndex = index;

		// prepare payload
		const payload = this.preparePayload(item);

		// emit payload to parent component
		this.payloadChange.emit(payload);
	}

	/**
	 * on checkbox toggle 
	 * @param item
	 */
	public onChangeCheckbox(item: WorkflowItemsInterface) {
		// prepare payload
		const payload = this.preparePayload(item);

		// emit payload to parent component
		this.payloadChange.emit(payload);
	}

	/**
	 * prepare payload for the parent component
	 * @param item
	 */
	public preparePayload(item: WorkflowItemsInterface): WorkflowItemsInterface {
		const payload = [];

		// push values to payload
		for (let i = 0; i < item.checkboxes.length; i++) {
			payload.push({
				key: item.checkboxes[i].key,
				value: item.checkboxes[i].value,
				selected: this.form.controls['cb'].value[item.label][i].value
			})
		}

		return {
			...item,
			checkboxes: payload
		};
	}
}
