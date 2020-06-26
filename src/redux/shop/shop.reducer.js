import SHOP_DATA from '../../pages/shop/shop.data'
import ShopActionTypes from './shop.types'

const INITIAL_STATE = {
    collections: SHOP_DATA
}
const shopReducer = (state = INITIAL_STATE, actions) => {
    switch (actions.type) {
        case (ShopActionTypes.UPDATE_COLLECTIONS):
            return {
                ...state,
                SHOP_DATA: actions.payload
            }
        default: return state
    }
}
export default shopReducer