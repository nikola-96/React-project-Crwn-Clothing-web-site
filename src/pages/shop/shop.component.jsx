import React from 'react'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { Route } from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({ match }) => {
    return (
        <div>
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route path={`${match.path}/:categoryId`} component={CollectionPage}></Route>
        </div>
    )
}
export default ShopPage