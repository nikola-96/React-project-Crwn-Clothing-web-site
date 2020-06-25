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
export const selectCollection = collectionUrlParam =>
    createSelector(
        [slelctShopItems],
        collections => collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] //ako prosledimo mens izbacice nam broj 5
        )
    )