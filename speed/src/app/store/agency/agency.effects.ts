import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { CommonService } from 'src/app/common.service';
import { AgencyActionTypes, AgenciesLoaded } from './agency.actions';

@Injectable()
export class AgencyEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(AgencyActionTypes.LoadAgencies)
    .pipe(
      mergeMap(() =>
        this.commonService
          .getAgencies$()
          .pipe(map(agencies => new AgenciesLoaded(agencies)))
      )
    );

  constructor(private actions$: Actions, private commonService: CommonService) {}
}
