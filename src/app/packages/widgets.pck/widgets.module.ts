// angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// app
import { WorkFlowComponent } from '../widgets.pck/work-flow/work-flow.component';
import { PercentageCircleComponent } from './percentage-circle/percentage-circle.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        WorkFlowComponent,
        PercentageCircleComponent
    ],
    exports: [
        WorkFlowComponent,
        PercentageCircleComponent
    ]
})

export class WidgetsModule {
}
