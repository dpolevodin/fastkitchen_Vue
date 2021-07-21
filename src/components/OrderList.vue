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
                  {{calcTotalSum}} $
              </div>
          </li>
      </ul>

      <fk-slider />

      <p class="delivery-info">Phone</p>
      <fieldset class="form-group">
        <input type="text"
            class="form-control"
            size="46"
            placeholder=" +7(XXX)XXX-XX-XX"
            v-model="deliveryInfo.phone"
            />
      </fieldset>
      
      <p class="delivery-info">Delivery adress</p>
      <fieldset class="form-group">
        <input type="text" 
            class="form-control"
            size="46"
            placeholder=" 8 Birch Road Waterford Park, 56, f.224"
            v-model="deliveryInfo.deliveryAdress"
            />
        </fieldset>
        
        <p class="delivery-info">Delivery time</p>
      <fieldset class="form-group">
        <select class="form-control-dp" v-model="deliveryInfo.deliveryTime">
          <option v-for="time in getTimer" :key="time">
              {{ time }}
          </option>
      </select>
      </fieldset>

      <fk-button :payload="deliveryInfo" :totalSum="calcTotalSum" />
      
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FkButton from '@/components/Button'
import FkSlider from '@/components/Slider'


export default {
    name: 'FkOrderList',
    components: {
        FkButton,
        FkSlider
    },
    data() {
        return {
            products: this.$store.state.order
        }
    },
    computed: {
        ...mapGetters({
            totalSumFromCart: 'productSumValue'
        }),
        deliveryInfo() {
            return {
                phone: this.phone,
                deliveryAdress: this.deliveryAdress,
                deliveryTime: this.deliveryTime,
                amount: this.calcTotalSum
                }
        },
        calcTotalSum() {
            if (this.$store.state.delivery.pickUp) {
                const sum = this.totalSumFromCart
                return sum - (sum * this.$store.state.delivery.deliverySale)
            }
            return this.totalSumFromCart
        },
        getTimer() {
            let timeArr = []
            for (let i = 0; i < 25; i++) {
                timeArr.push('' + i + ':00')
            }
            return timeArr
        }
        
    }
    }


</script>

<style scoped>
p {
    display: inline-block;
    margin: 0 15px;
    font-size: 16px;
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
    margin-bottom: 30px;
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

.form-control-dp {
    width: 100px;
    height: 40px;
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

.delivery-info {
    display: block;
}

</style>