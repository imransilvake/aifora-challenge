// angular
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-percentage-circle',
	templateUrl: './percentage-circle.component.html',
	styleUrls: ['./percentage-circle.component.scss']
})

export class PercentageCircleComponent implements OnInit {
	@Input() percentage: number;
	@Input() strokeWidth: number;
	@Input() selected = false;

	public pi = 3.14;
	public radius = 139;
	public strokeDasharray: string;

	ngOnInit() {
		// calculate stroke dash array
		this.calculateStrokeDashArray();
	}

	/**
	 * calculate stroke dash array
	 */
	public calculateStrokeDashArray() {
		// circumference = 2πr; radius is 139
		// value: calc(0.5 * calc(6.28318531 * 139)) calc(6.28318531 * 139)
		const val1 = `calc(${this.percentage / 100} * calc(${this.pi * 2} * ${this.radius}))`;
		const val2 = `calc(${this.pi * 2} * ${this.radius})`;
		this.strokeDasharray = `${val1} ${val2}`;
	}
}
