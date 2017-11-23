import { INCREMENT, DECREMENT } from '../constants/actionTypes';

const INITIAL_STORE = { count: 0 };

export default (state = INITIAL_STORE, actions) => {
    switch (actions.type) {
        case INCREMENT:
            return {
                ...state, count = count + 1
            };
        case DECREMENT:
            return {
                ...state, count = count - 1
            };
        default: {
            return {
                ...state
            }
        }
    }
};
