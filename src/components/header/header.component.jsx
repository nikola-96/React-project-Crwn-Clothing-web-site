import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { connect } from 'react-redux'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from '../../redux/user/users.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'

import './header-style.scss'

const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className='logo-container' to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className="option" onClick={() => auth.signOut()}  >SING OUT</div>
                    : <Link to="/signin">SIGN IN</Link>
            }
            <CartIcon />
        </div >
        {
            hidden ? null
                : < CartDropdown />
        }
    </div >
)
const mapeStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapeStateToProps)(Header) 
