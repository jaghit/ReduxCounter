import { INCREMENT, DECREMENT } from '../constants/actionTypes';

function incFunc() {
    return {
        type: INCREMENT
    };
}

function decFunc() {
    return {
        type: DECREMENT
    };
}

export { incFunc, decFunc };
