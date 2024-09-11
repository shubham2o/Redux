export const myCreateStore = (reducer) => {
    let state;
    const listeners = [];

    const store = {
        dispatch: (action) => {
            state = reducer(state, action);
            listeners.forEach((listener) => listener());
        },
        subscribe: (listener) => {
            listeners.push(listener);
            return () => {
                const listenerIndex = listeners.findIndex((registeredListeners) => registeredListeners === listener);
                listeners.splice(listenerIndex, 1);
            }
        },
        getState: () => state,
    }

    store.dispatch({ type: "@@INIT" });
    return store;
};