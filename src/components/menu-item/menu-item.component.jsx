import React from 'react'
import { withRouter } from "react-router-dom"

import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>{/*n
    na match url dobijmo trenutnu url gde se nalazim, onu ia parent klase i dodajemo link url koji smo prosledili */}
        <div
            className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subitle">SHOP NOW</span>
        </div>
    </div>

)

export default withRouter(MenuItem)