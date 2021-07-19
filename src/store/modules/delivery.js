const state = {
    deliveries: null
}

export const mutationTypes = {
    addDeliveryInfo: '[delivery] add delivery info'
}

const mutations = {
    [mutationTypes.addDeliveryInfo](state, payload) {
        state.deliveries = payload
    }
}

export default {
state,
mutations
}