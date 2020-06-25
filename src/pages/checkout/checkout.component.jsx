import React from 'react'
import './checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartItemsCount, selectCartItemsTotalValue } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'


const Checkout = ({ itemCount, totalvalue, items }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity-{itemCount}</span>
            </div>
            <div className="header-block">
                <span>Price </span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            items.map((item) => < CheckoutItem item={item} />
            )
        }
        <div className="total">
            TOTAL:${totalvalue}
        </div>
    </div>
)
const mapStateToProps = createStructuredSelector({
    items: selectCartItems,
    itemCount: selectCartItemsCount,
    totalvalue: selectCartItemsTotalValue,
})

export default connect(mapStateToProps)(Checkout)