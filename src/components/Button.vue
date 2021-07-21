<template>
      <button @click="acceptOrder">
          <span>Order now</span>
          <div class="btn-order">
              <span id="total">{{productSumValue}} $</span>
          </div>
      </button>

</template>

<script>
import {mapGetters} from 'vuex'
import {mutationTypes as deliveryMutationTypes} from '@/store/modules/delivery'


export default {
    name: 'FkButton',
    props: {
        payload: Object
    },
    methods: {
        acceptOrder() {
            this.$store.commit(deliveryMutationTypes.addDeliveryInfo, this.payload);
            this.$router.push({name: 'orderInfo'})
        }
    },
    computed: {
        ...mapGetters([
            'productSumValue'
        ])
    }
}
</script>

<style scoped>
button {
    display: inline-block;
    width: 355px;
    height: 58px;
    border-radius: 5px;
    background: linear-gradient(#99E061, #7AC93B);
    margin-top: 0;
    margin-left: 30px;
    margin-right: 0;
    padding: 0;
    font-size: 20px;
}

span {
    display: inline-block;
    color: #FFFFFF;
    margin-top: 10px;
    margin-right: 0;
}

.btn-order {
    display: inline-block;
    position: relative;
    top: -2px;
    left: 90px;
    text-align: center;
    width: 59px;
    height: 38px;
    border-radius: 5px;
    background-color: #FFFFFF;
    
}

#total {
    display: block;
    color: black;
    margin-top: 7px
}
</style>