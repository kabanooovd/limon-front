import { applyMiddleware, combineReducers } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { itemsReducer } from "./items/items-reducer"
import { ordersReducer } from "./orders/orders-reducer"
import thunk from 'redux-thunk';

export type AppRootStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  itemsReducer,
  ordersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const store = ;

// @ts-ignore
window.store = store;