import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'

import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSipnner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpiner = WithSpinner(CollectionPage)

const ShopPage = ({ match, isCollectionFetching, isCollectionLoaded, fetchCollectionStartAsync }) => {
    useEffect(() => {
        fetchCollectionStartAsync()
    }, [fetchCollectionStartAsync])
    return (
        <div>
            <Route exact path={`${match.path}`}
                render={props => <CollectionsOverviewWithSipnner isLoading={isCollectionFetching} {...props} />}></Route>
            <Route path={`${match.path}/:categoryId`}
                render={props => <CollectionPageWithSpiner isLoading={!isCollectionLoaded} {...props} />}>
            </Route>
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionLoaded
})
const mapDispatchToProps = dispatch => ({
    fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)