export const fetchData = (payload) => ({ type: 'api/makeCall', payload });

export const apiMiddleware = ({ dispatch }) => (next) => ({ type, payload }) => {
    const BASE_URL = 'https://fakestoreapi.com';

    if (type === 'api/makeCall') {
        const { onLoading, url, onSuccess, onError } = payload;
        dispatch({ type: onLoading });

        fetch(`${BASE_URL}/${url}`)
            .then((res) => res.json())
            .then((data) => dispatch({ type: onSuccess, payload: data }))
            .catch(() => dispatch({ type: onError }));
    }

    else next({ type, payload });
}