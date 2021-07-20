<template>
<div class="container-switch">
  <label class="switch">
    <input type="checkbox" @click="applySale">
    <span class="slider round"></span>
  </label>
    <span class="pick-up-info">
        Pick-up
        <span class="sale-info">
            -{{ getDeliverySale }} %
        </span>
    </span>
</div>
</template>

<script>
import {mutationTypes as deliveryMutationTypes} from '@/store/modules/delivery'

export default {
    name: 'FkSlider',
    computed: {
        getDeliverySale() {
            return this.$store.state.delivery.deliverySale * 100
        }
    },
    methods: {
        applySale() {
            this.$store.commit(deliveryMutationTypes.changeDeliveryType);
        }
    }
}
</script>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 75px;
  height: 34px;
  margin-left: 30px;
  margin-bottom: 30px
}

/* Hide default HTML checkbox */
.switch input {display:none;}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #7AC93B;
}

input:focus + .slider {
  box-shadow: 0 0 1px #99E061;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.pick-up-info {
    display: inline-block;
    position: relative;
    text-align: center;
    vertical-align: top;
    margin-top: 6px
}

.container-switch {
    display: inline-block;
}

.sale-info {
    color: maroon;
    font-weight: bold;
    margin-left: 10px
}
</style>