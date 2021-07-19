<template>
  <div class="order-list">
      <h1>
        <img src="img/cart.png" alt="cart image">
        <span>30$</span>
      </h1>
      <ul>
           <li v-for="(value, product) in products" :key="product" >
              {{product}}
              <div class="product-value">
                  <span class="marker">{{ value.value }}</span>
              </div>
              <div class="product-cost">
                  {{ value.price * value.value }} $
              </div>
          </li>
          <li>
              FINAL COST:
              <div class="product-cost">
                  {{productSumValue}} $
              </div>
          </li>
      </ul>
      <p>Phone</p>
      <fieldset class="form-group">
        <input type="text"
            class="form-control"
            size="46"
            placeholder="+7"
            v-model="phone"
            />
      </fieldset>

      <p>Delivery adress</p>
      <fieldset class="form-group">
        <input type="text" 
            class="form-control" 
            size="46"
            v-model="deliveryAdress"
            />
      </fieldset>
      
      <p>Delivery time</p>
      <fieldset class="form-group">
        <input type="text" 
            class="form-control"
            size="46"
            placeholder="Now"
            v-model="deliveryTime"
            />
      </fieldset>
      {{phone}}
      {{deliveryAdress}}
      {{deliveryTime}}

      <fk-button acceptOrder="acceptOrders"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FkButton from '@/components/Button'

export default {
    name: 'FkOrderList',
    components: {
        FkButton
    },
    data() {
        return {
            products: this.$store.state.order,
            phone: [],
            deliveryAdress: [],
            deliveryTime: [],
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
p {
    display: inline-block;
    margin: 0 15px;
    font-size: 14px;
}
ul {
    display: block;
    margin-top: 0;
    margin-left: 30px;
    padding: 0;

}
li {
    list-style-type: none;
    margin-bottom: 10px;
    padding-bottom: 10px ;
    border-bottom: 1px solid #DBE1E9;
}
li:last-child {
    margin-bottom: 50px;
    border-bottom: 0;
    font-weight: bold;
}

img {
    margin-right: 20px;
    position: relative;
    top: 5px;
}

span {
    display: inline-block;
    
}
h1 {
    display: inline-block;
    margin: 30px;
    font-size: 20px;
}
.form-group {
    border: 0;
    margin-bottom: 30px;
}
.form-control {
    height: 50px;
}
.form-control[placeholder] {
    font-size: 14px;
}


.order-list {
    display: block;
    position: absolute;
    right: 0px;
    width: 415px;
    height: 90%;
    background-color: white;
    
}
.product-value {
    display: inline-block;
    position: relative;
    float: right;
    top: -5px;
    margin-right: 196px;
    width: 29px;
    height: 29px;
    background-color: #DDEBFF;
    border-radius: 30%;
}

.product-cost {
    display: inline-block;
    position: absolute;
    right: 30px;
}

.marker {
    margin-left: 8px;
    margin-top: 3px;
}

</style>