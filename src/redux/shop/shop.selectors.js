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
    collections => Object.keys(collections).map(key => collections[key])
)
export const selectCollection = collectionUrlParam =>
    createSelector(
        [slelctShopItems],
        collections => collections[collectionUrlParam] //ako prosledimo mens izbacice nam broj 5
    )
