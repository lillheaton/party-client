
const initialState = { foo: 'bar', count: 0 };

// Action creator
export const incrementCounter = () => {
    return { type: 'increment' };
};

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case "increment":
            return {...state, count: state.count + 1 };
        default:
            return state;
    }

}