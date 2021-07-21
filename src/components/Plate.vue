<template>
  <div class="main-plate">
      <img src="img/plate.png" alt="fast kitchen">
      <div class="cheese">
        <div class="cheese-value">X {{productsValue.cheese.value}}</div>
        <img src="img/cheese_plate.png" alt="cheese">
      </div>
      <div class="cucumber">
        <div class="cucumber-value">X {{productsValue.cucumber.value}}</div>
        <img src="img/cucumber_plate.png" alt="cucumber">
      </div>
      <div class="bread">
        <div class="bread-value">X {{productsValue.bread.value}}</div>
        <img src="img/bread_plate.png" alt="bread">
      </div>
      <div class="salami">
        <div class="salami-value">X {{productsValue.salami.value}}</div>
        <img src="img/salami_plate.png" alt="salami">
      </div>
  </div>
</template>

<script>
export default {
    name: 'FkPlate',
    computed: {
      productsValue() {
        return this.$store.state.order
      }
    }
}
</script>

<style>
.main-plate {
  position: absolute;
  display: inline-block;
  top: 180px;
  left: 600px;
  filter: drop-shadow(3px 5px 5px rgb(82, 73, 73));
}

.cheese {
  position: absolute;
  right: 280px;
  bottom: 350px;
}

.che-value{
  position: relative;
  display: inline-block;
  right: -150px;
  margin: 0;
  
}

.cucumber {
  display: inline-block;
  position: absolute;
  right: 180px;
  bottom: 420px;
}

.cuc-value{
  position: relative;
  display: inline-block;
  margin: 0;
}

.bread {
  position: absolute;
  right: 300px;
  bottom: 150px;
}

.br-value {
  position: relative;
  display: inline-block;
  margin: 0;
}

.salami {
  position: absolute;
  right: 100px;
  bottom: 200px;
}

.sal-value {
  position: relative;
  display: inline-block;
  margin: 0;
}
</style>