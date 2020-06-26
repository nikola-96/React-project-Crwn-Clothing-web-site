import React from 'react'
import { Route } from 'react-router-dom'

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const CollectionsOverviewWithSipnner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpiner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    };
    unsubricibeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collections)
            this.setState({ loading: false })

        },

        )
    }
    render() {
        const { match } = this.props
        return (
            <div>
                <Route exact path={`${match.path}`}
                    render={props => <CollectionsOverviewWithSipnner isLoading={this.state.loading} {...props} />}></Route>
                <Route path={`${match.path}/:categoryId`}
                    render={props => <CollectionPageWithSpiner isLoading={this.state.loading} {...props} />}>
                </Route>
            </div >
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})
export default connect(null, mapDispatchToProps)(ShopPage)