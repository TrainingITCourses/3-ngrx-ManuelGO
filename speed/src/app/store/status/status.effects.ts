import { CommonService } from './../../common.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { StatusActionTypes, StatusesLoaded } from './status.actions';

@Injectable()
export class StatusEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(StatusActionTypes.LoadStatuses)
    .pipe(
      mergeMap(() =>
        this.commonService
          .getStatusTypes$()
          .pipe(map(statuses => new StatusesLoaded(statuses)))
      )
    );

  constructor(private actions$: Actions, private commonService: CommonService) {}
}
