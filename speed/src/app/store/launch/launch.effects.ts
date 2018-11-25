import { CommonService } from './../../common.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { LaunchActionTypes, LaunchesLoaded } from './launch.actions';

@Injectable()
export class LaunchEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(LaunchActionTypes.LoadLaunches)
    .pipe(
      mergeMap(() =>
        this.commonService
          .getLaunches$()
          .pipe(map(launches => new LaunchesLoaded(launches)))
      )
    );

  constructor(private actions$: Actions, private commonService: CommonService) {}
}
