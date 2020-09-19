// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// app
import { WorkflowItemsInterface } from './home.interface';

@Injectable({ providedIn: 'root' })
export class HomeService {
	constructor(private _http: HttpClient) {
	}

	/**
	 * fetch mock data
	 */
	public fetchWorkFlowData(): Observable<WorkflowItemsInterface[]> {
		return this._http.get<WorkflowItemsInterface[]>('./../../assets/mocks/mock-data.json');
	}
}
