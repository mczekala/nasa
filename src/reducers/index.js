import { combineReducers} from 'redux';
import { items,video } from './items';

export default combineReducers({items,video});


// export const rootReducer =( state ='', action = {} ) => {
//     return {
//         items: items(state.items,action),
//         filtered: filtered(state.items,action)
//     }
// }