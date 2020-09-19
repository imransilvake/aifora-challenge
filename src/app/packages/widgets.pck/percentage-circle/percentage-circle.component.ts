// angular
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
	selector: 'app-percentage-circle',
	templateUrl: './percentage-circle.component.html',
	styleUrls: ['./percentage-circle.component.scss']
})

export class PercentageCircleComponent implements OnInit, OnChanges {
	@Input() percentage: number = 0;
	@Input() stroke = 5;
	@Input() radius = 30;
	@Input() selected = false;

	public normalizedRadius = this.radius - this.stroke * 2;
	public circumference = this.normalizedRadius * 2 * Math.PI;
	public strokeOffset = this.circumference;
	public transition = false;

	ngOnChanges(changes: SimpleChanges) {
		// update stoke offset based on percentage
		// skip first time
		if (!changes['percentage']) {
			this.applyPercentage(!this.selected);
		}
	}

	ngOnInit() {
		// update stoke offset based on percentage
		this.applyPercentage(true);
	}

	/**
	 * update stoke offset based on percentage
	 * @param animate
	 */
	public applyPercentage(animate = false) {
		// add transition
		this.transition = animate;

		// animate
		if (this.percentage) {
			for (let i = 0; i < this.percentage; i++) {
				// update stroke offset
				setTimeout(() => this.strokeOffset = this.circumference * (1 - i / 100), i * 10);
			}
		}
	}
}
