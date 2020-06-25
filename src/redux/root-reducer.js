import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user-reducer'
import cartReducer from './cart/cart-reducer'
import directortyReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

// import sessionStorage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directortyReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)