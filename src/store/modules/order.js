const state = {
        cheese: {
            value: 0,
            price: 3
        },
        cucumber: {
            value: 0,
            price: 2
        },
        bread: {
            value: 0,
            price: 1
        },
        salami: {
            value: 0,
            price: 4
        }
}

const mutations = {
    productToCart(state, product) {
        state.[product].value++;
    },
    deleteProductFromCart(state, product) {
        state.[product].value--;
    }
}

export default {
    state,
    mutations
}