import { produce } from "immer";

export const myCreateSlice = (config) => {
    const { name, initialState, reducers } = config;
    const actions = {};

    Object.keys(reducers).forEach((key) => actions[key] = (payload) => {
        return { type: `${name}/${key}`, payload };
    });

    const reducer = (originalState = initialState, action) => {
        return produce(originalState, (state) => {
            const caseReducer = reducers[action.type.split('/')[1]];
            caseReducer ? caseReducer(state, action) : state;
        });
    };

    return { actions, reducer };
};