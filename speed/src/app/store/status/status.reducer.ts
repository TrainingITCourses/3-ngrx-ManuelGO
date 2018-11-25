import { StatusActionTypes, StatusActions } from './status.actions';

export interface StatusState {
  statuses: any[];
}

export const initialState: StatusState = {
  statuses: []
};

export function reducer(state = initialState, action: StatusActions): StatusState {
  switch (action.type) {
    case StatusActionTypes.LoadStatuses:
  return { ...state };
  case StatusActionTypes.StatusesLoaded:
    return {  statuses: action.payload };
  default:
    return state;
}
}
