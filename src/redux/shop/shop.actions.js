
import ShopActionTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => (
    {
        type: ShopActionTypes.FETCH_COLLECTIONS_START_CALL
    }
)
export const fetchCollectionSuccess = (collections) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collections
})
export const fetchCollectionFailure = (error) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: error
})


export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionStart());

        collectionRef.get().then(response => {
            const collections = convertCollectionsSnapshotToMap(response)
            dispatch(fetchCollectionSuccess(collections))
        }).catch(error => dispatch(fetchCollectionFailure(error.message)))
    }
}

        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-53ecf/databases/(default)/documents/collections')
        //     .then(response => response.json())
        //     .then(collections => console.log(collections))

