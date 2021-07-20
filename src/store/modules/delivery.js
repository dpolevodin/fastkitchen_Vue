const state = {
    deliveries: null,
    deliverySale: 0.2,
    pickUp: false,
    amount: 0
}

export const mutationTypes = {
    addDeliveryInfo: '[delivery] add delivery info',
    changeDeliveryType: '[delivery] change delivery type',
    addAmount: '[delivery] add Amount'
}

const mutations = {
    [mutationTypes.addDeliveryInfo](state, payload) {
        state.deliveries = payload
    },
    [mutationTypes.changeDeliveryType](state) {
        state.pickUp = true;
        state.deliveries.amount -= state.deliveries.amount * state.deliverySale
    },
    [mutationTypes.addAmount](state) {
        state.amount++
    }
}

export default {
state,
mutations
}