import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  items: () => {}
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.store = store;