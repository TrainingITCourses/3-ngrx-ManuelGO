import { Action } from '@ngrx/store';

export enum AgencyActionTypes {
  LoadAgencies = '[Agency] Load Agencies',
  AgenciesLoaded = '[Agency] Agencies loaded'
}

export class LoadAgencies implements Action {
  readonly type = AgencyActionTypes.LoadAgencies;
}
export class AgenciesLoaded implements Action {
  readonly type = AgencyActionTypes.AgenciesLoaded;
  constructor(readonly payload: any[]) {}
}

export type AgencyActions = LoadAgencies | AgenciesLoaded;
