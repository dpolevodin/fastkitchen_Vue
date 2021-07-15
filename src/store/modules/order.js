const state = {
    cart: {
        cheese: 0,
        cucumber: 0,
        bread: 0,
        salami: 0
    },
    price: {
        cheese: 3,
        cucumber: 2,
        bread: 1,
        salami: 4
    }
}

const mutations = {
    productToCart(state, product) {
        state.cart.[product]++;
    },
    deleteProductFromCart(state, product) {
        state.cart.[product]--;
    }
}

export default {
    state,
    mutations
}