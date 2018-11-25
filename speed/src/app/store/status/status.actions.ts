import { Action } from '@ngrx/store';

export enum StatusActionTypes {
  LoadStatuses = '[Status] Load Statuses',
  StatusesLoaded = '[Status] Statuses loaded'
}

export class LoadStatuses implements Action {
  readonly type = StatusActionTypes.LoadStatuses;
}

export class StatusesLoaded implements Action {
  readonly type = StatusActionTypes.StatusesLoaded;
  constructor(readonly payload: any[]) {}
}

export type StatusActions = LoadStatuses | StatusesLoaded;
