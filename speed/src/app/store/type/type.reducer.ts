import { Action } from '@ngrx/store';
import {TypeActions, TypeActionTypes} from './type.actions';


export interface TypeState {
  types: any[];
}

export const initialState: TypeState = {
  types: []
};

export function reducer(state = initialState, action: TypeActions): TypeState {
  switch (action.type) {
    case TypeActionTypes.LoadTypes:
      return { ...state };
    case TypeActionTypes.TypesLoaded:
      return {  types: action.payload };
    default:
      return state;
  }
}
