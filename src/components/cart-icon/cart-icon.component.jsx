import React from 'react'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
        <span className="item-count">{itemCount}</span>
    </div>
)
const mapDipatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
export default connect(mapStateToProps, mapDipatchToProps)(CartIcon)