import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
}
const shopReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START_CALL:
            return {
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: actions.payload
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: actions.payload

            }
        default: return state
    }
}
export default shopReducer