<template>
    <div class="main-page">
        <fk-order-list />
        <div class="container">
            <h1>Choose the ingredients</h1>
            <fk-product-order productName="cheese" imgSrc="img/cheese.png" />
            <fk-product-order productName="cucumber" imgSrc="img/cucumber.png" />
            <fk-product-order productName="bread" imgSrc="img/bread.png" />
            <fk-product-order productName="salami" imgSrc="img/salami.png" />
        </div>
        <fk-plate />
    </div>
        
</template>

<script>
import FkProductOrder from '@/components/ProductOrder'
import FkOrderList from '@/components/OrderList'
import FkPlate from '@/components/Plate'


export default {
    name: 'FcOrders',
    components: {
        FkProductOrder,
        FkOrderList,
        FkPlate
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
    width:auto;
    max-width: 480px;
    font-size: 36px;
}
</style>