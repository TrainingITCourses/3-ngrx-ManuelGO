import { AgencyActionTypes, AgencyActions } from './agency.actions';

export interface AgencyState {
  agencies: any[];
}

export const initialState: AgencyState = {
  agencies: []
};

export function reducer(state = initialState, action: AgencyActions): AgencyState {
  switch (action.type) {
      case AgencyActionTypes.LoadAgencies:
    return { ...state };
    case AgencyActionTypes.AgenciesLoaded:
      return {  agencies: action.payload };
    default:
      return state;
  }
}
