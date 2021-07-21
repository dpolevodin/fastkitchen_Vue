const state = {
    deliveries: null,
    deliverySale: 0.2,
    pickUp: false,
    amount: 0
}

export const mutationTypes = {
    addDeliveryInfo: '[delivery] add delivery info',
    onPickUp: '[delivery] pickUp on',
    offPickUp: '[delivery] pickUp off'

}

const mutations = {
    [mutationTypes.addDeliveryInfo](state, payload) {
        state.deliveries = payload
    },
    [mutationTypes.onPickUp](state) {
        state.pickUp = true;
    },
    [mutationTypes.offPickUp](state) {
        state.pickUp = false;
    }
}

export default {
state,
mutations
}