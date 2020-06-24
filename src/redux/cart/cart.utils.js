export const addItemToCart = (cartItems, itemToAdd) => {
    const existInItems = cartItems.find(item => item.id === itemToAdd.id)

    if (existInItems) {
        return cartItems.map((item) =>
            item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } //ukoliko se vec isti nalazi, samo povecamo njegov broj
                : item)
    }
    return [...cartItems, { ...itemToAdd, quantity: 1 }] // ukoliko se ne nalazi samo mi dodamu novu promenjivu i njoj dodajemo verdnost

}