import { createReducer, on } from '@ngrx/store';
import { getAppName } from './app.actions';
import { AppState } from './app.state';
 
export const initialState: AppState = {
    title: "NEION"
};
 
const _appReducer = createReducer(initialState,
  on(getAppName, state => state),
);
 
export function appReducer(state, action) {
  return _appReducer(state, action);
}