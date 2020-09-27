// angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// app
import { WFInterface } from '../widgets.pck/work-flow/work-flow.interface';

@Injectable({ providedIn: 'root' })
export class HomeService {
	constructor(private _http: HttpClient) {
	}

	/**
	 * fetch mock data
	 */
	public fetchWorkFlowData(): Observable<WFInterface> {
		return this._http.get<WFInterface>('./../../assets/mocks/mock-data.json');
	}
}
