// angular
import { Component, Input, OnChanges } from '@angular/core';

@Component({
	selector: 'app-percentage-circle',
	templateUrl: './percentage-circle.component.html',
	styleUrls: ['./percentage-circle.component.scss']
})

export class PercentageCircleComponent implements OnChanges {
	@Input() percentage = 0;
	@Input() stroke = 5;
	@Input() radius = 30;
	@Input() selected = false;

	public normalizedRadius = this.radius - this.stroke * 2;
	public circumference = this.normalizedRadius * 2 * Math.PI;
	public strokeOffset = this.circumference;

	ngOnChanges() {
		// update stoke offset based on percentage
		setTimeout(() => this.strokeOffset = this.circumference * (1 - this.percentage / 100), 100)
	}
}
