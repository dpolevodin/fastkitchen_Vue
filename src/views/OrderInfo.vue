<template>
  <div class="container">
      <h3>Thank you for the order!</h3>
      <h4>Order's information:</h4>
      <ul class="orders-information">
          <li>
              Delivery adress: {{getDeliferyInfo.deliveryAdress}}
          </li>
          <li>
              Delivery time: {{getDeliferyInfo.deliveryTime}}
          </li>
          <li>
              Order's amount: {{getDeliferyInfo.amount}} $
          </li>
          <li>
              <h4>Your order: </h4>
              <ul>
                  <li class="order-list-info" v-for="item, name in getOrderInfo" :key="item">
                      {{name}} - {{item.value}} pcs
                  </li>
              </ul>
          </li>
      </ul>

  </div>
</template>

<script>
export default {
    name: 'FkOrderInfo',
    computed: {
        getDeliferyInfo() {
            return this.$store.state.delivery.deliveries
        },
        getOrderInfo() {
            return this.$store.state.order
        }
    }
}
</script>

<style scoped>

ul {
    padding-left: 0;
}

li {
    margin-bottom: 10px;
    list-style-type: none
}
.container {
    display: block;
    width: auto;
    max-width: 400px;
    height: 200px;
    margin-top: 100px;
    margin-left: 360px;
    font-size: 30px;
}

</style>