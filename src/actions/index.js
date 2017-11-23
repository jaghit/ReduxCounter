import { INCREMENT, DECREMENT } from '../constants/actionTypes';

function increment() {
    return {
        type: INCREMENT
    };
}

function decrement() {
    return {
        type: DECREMENT
    };
}

export { increment, decrement };
