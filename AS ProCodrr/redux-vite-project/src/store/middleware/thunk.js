// THUNK MIDDLEWARE (Default Middleware)
export const thunk = ({ dispatch, getState }) => (next) => (action) => {
    (typeof action === 'function') && action(dispatch, getState);
    return next(action);
}  