import { INCREMENT, DECREMENT } from '../constants/actionTypes';

const INITIAL_STATE = { count: 0 };

function CountReducer(state = INITIAL_STATE, actions) {
    switch (actions.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state, count: state.count - 1
            };
        default: {
            return {
                ...state
            };
        }
    }
}

export default CountReducer;
