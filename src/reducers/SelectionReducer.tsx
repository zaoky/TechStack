import { actionCreator, isType, Action } from '../actions/actionCreator';
import { selectLibrary } from '../actions';

export default (state:any = null, action: Action<any>): any => {   
    if (isType(action, selectLibrary)) { // type guard
    //    console.log("este es el state", JSON.stringify(state));
    //    console.log("este es el action", JSON.stringify(action));
       return action.payload;
        // return [...state, action.payload.libraryId] // action.payload is now {foo: string}
    } else {
        return state;
    }
}