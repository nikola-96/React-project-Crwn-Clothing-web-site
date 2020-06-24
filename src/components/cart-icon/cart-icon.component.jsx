import React from 'react'
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden }) => (
    <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden} />
        <span className="item-count">0</span>
    </div>
)
const mapDipatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(null, mapDipatchToProps)(CartIcon)