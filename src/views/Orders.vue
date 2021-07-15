<template>
  <div class="container">
      <h1>Choose the ingredients</h1>
      <fc-product-order productName="cheese" />
      <fc-product-order productName="cucumber" />
      <fc-product-order productName="bread" />
      <fc-product-order productName="salami" />
  </div>
</template>

<script>
import FcProductOrder from '@/components/ProductOrder'

export default {
    name: 'FcOrders',
    components: {
        FcProductOrder
    }
}
</script>

<style scoped>
h1 {
    font-size: 36px;
    color: #BCC4D1;
    margin-top: 0;
    margin-bottom: 35px;
}
.container {
    display: inline-block;
    margin-top: 130px;
    margin-left: 80px;
    width: 460px;
    font-size: 36px;
}
</style>