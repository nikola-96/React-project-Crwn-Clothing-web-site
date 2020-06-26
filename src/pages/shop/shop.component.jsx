import React from 'react'
import { Route } from 'react-router-dom'

import CollectionPage from '../collection/collection.component'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'

class ShopPage extends React.Component {
    unsubricibeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(async snapshot => {
            const collections = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collections,)
        }

        )
    }
    render() {
        const { match } = this.props
        return (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
                <Route path={`${match.path}/:categoryId`} component={CollectionPage}></Route>
            </div >
        )
    }
}
const mapDispatchToProps = dispatch => ({
    updateCollections: collections => dispatch(updateCollections(collections))
})
export default connect(null, mapDispatchToProps)(ShopPage)