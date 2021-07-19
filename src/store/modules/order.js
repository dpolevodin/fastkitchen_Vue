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

export const mutationTypes = {
    productToCart: '[order] product to cart',
    deleteProductFromCart: '[order] delete product from cart'
}

const mutations = {
    [mutationTypes.productToCart](state, product) {
        state.[product].value++;
    },
    [mutationTypes.deleteProductFromCart](state, product) {
        state.[product].value--;
    }
}

const getters = {
    productSumValue: state => {
        let total = 0
        for (let i = 0; i < 4; i++) {
            let objForCalculate = Object.values(state)
            let products = Object.values(objForCalculate[i])
            total += products.reduce((a, b) => a * b);
        }
        return total; 
    }
}

export default {
    state,
    mutations,
    getters
}