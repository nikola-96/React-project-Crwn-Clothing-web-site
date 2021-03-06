import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    hats: 1,
    sneakers: 2,
    jackets: 3,
    womens: 4,
    mens: 5
}

export const shopSelector = state => state.shop;

export const slelctShopItems = createSelector(
    [shopSelector],
    shop => shop.collections
)
export const selectCollectionForPreview = createSelector(
    [slelctShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectCollection = collectionUrlParam =>
    createSelector(
        [slelctShopItems],
        collections => (collections ? collections[collectionUrlParam] : null) //ako prosledimo mens izbacice nam broj 5
    )

export const selectIsCollectionFetching = createSelector(
    [shopSelector],
    shop => shop.isFetching
)
export const selectIsCollectionLoaded = createSelector(
    [shopSelector],
    shop => !!shop.collections
)