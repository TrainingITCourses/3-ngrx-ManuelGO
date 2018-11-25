import { CommonService } from './../../common.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { TypeActionTypes, TypesLoaded } from './type.actions';

@Injectable()
export class TypeEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(TypeActionTypes.LoadTypes)
    .pipe(
      mergeMap(() =>
        this.commonService
          .getMissionTypes$()
          .pipe(map(types => new TypesLoaded(types)))
      )
    );

  constructor(private actions$: Actions, private commonService: CommonService) {}
}
