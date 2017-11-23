import { INCREMENT, DECREMENT } from '../constants/actionTypes';

const INITIAL_STATE = { count: 0 };

export default (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case INCREMENT:
            return {
                ...state, count: count + 1
            };
        case DECREMENT:
            return {
                ...state, count: count - 1
            };
        default: {
            return {
                ...state
            };
        }
    }
};
