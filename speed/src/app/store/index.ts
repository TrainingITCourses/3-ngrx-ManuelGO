import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAgency from './agency/agency.reducer';
import * as fromStatus from './status/status.reducer';
import * as fromType from './type/type.reducer';
import * as fromLaunch from './launch/launch.reducer';

export interface State {

  agency: fromAgency.AgencyState;
  status: fromStatus.StatusState;
  type: fromType.TypeState;
  launch: fromLaunch.LaunchesState;

}

export const reducers: ActionReducerMap<State> = {

  agency: fromAgency.reducer,
  status: fromStatus.reducer,
  type: fromType.reducer,
  launch: fromLaunch.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
