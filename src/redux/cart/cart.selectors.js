import { createSelector } from 'reselect'

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((value, item) => value + item.quantity, 0)
)
export const selectCartItemsTotalValue = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((value, item) => value + item.price * item.quantity, 0)
)