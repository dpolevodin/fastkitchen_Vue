<template>
    <div class="container-order">
        <div class="product-image">
            <img src="@/assets/products/cheese.png">
        </div>
        <p>{{productName}} {{ price }}$</p>
        <div class="counter">
                <button v-on:click="countDown">-</button>
                <span>{{ count }}</span>
                <button v-on:click="countUp">+</button>
        </div>
    </div>
</template>

<script>    

export default {
    name: 'FcProductOrder',
    props: {
        productName: String,
    },
    // data() {
    //     return {
    //         productName: 'cheese',
    //         price: 2
    //     }
    //},
    methods: {
        countUp() {
            this.$store.commit('productToCart', this.productName);
            },
        countDown() {
            if (this.count > 0) {
                this.$store.commit('deleteProductFromCart', this.productName);
            }
            }
    },
    computed: {
        count() {
            return this.$store.state.order.cart[this.productName];
        },
        price() {
            return this.$store.state.order.price[this.productName];
        }
    }
}
</script>

<style>
p {
    margin-top: 0;
    font-size: 18px;
    margin-left: 65px;
}

span {
    display: inline-block;
    margin-right: 20px;
    font-size: 20px;
}
button {
    position: relative;
    top:0;
    width: 40px;
    height: 40px;
    background-color: #DDEBFF;
    border-radius: 10px;
    margin-right: 20px;
    border: 0;
}

.container-order {
    display: inline-block;
    background-color: #FFFFFF;
    width: 210px;
    height: 240px;
    margin-right: 20px;
    margin-bottom: 20px;
}

.product-image {
    position: relative;
    bottom: 27px;
    left: 50px;
    border-radius: 50%;
    background-color: #FFF8EA;
    width: 122px;
    height: 122px;
    margin-bottom: 5px;
    
}

.counter {
    display: inline-block;
    margin-top: 0;
    margin-left: 42px;
    margin-bottom: 20px;
}

.count {
    display: inline-block;
    margin-right: 20px;
}
</style>