import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { slelctShopItems } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...collection }) => (
                <CollectionPreview key={id} {...collection} />
            ))
        }

    </div>
)
const mapStateToProps = createStructuredSelector({
    collections: slelctShopItems
}
)

export default connect(mapStateToProps)(CollectionsOverview) 