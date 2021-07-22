<template>
  <div class="main-plate">
      <img src="img/plate.png" alt="fast kitchen">
      <div class="cheese">
        <figure>
          <figcaption class="che-value">X {{productsValue.cheese.value}}</figcaption>
          <img src="img/cheese_plate.png" alt="cheese">
        </figure>
        <!-- <div class="cheese-value">X {{productsValue.cheese.value}}</div>
        <img src="img/cheese_plate.png" alt="cheese"> -->
      </div>
      <div class="cucumber">
        <figure>
          <img src="img/cucumber_plate.png" alt="cucumber">
          <figcaption class="cuc-value">X {{productsValue.cucumber.value}}</figcaption> 
        </figure>
      </div>
      <div class="bread">
        <figure>
          <img src="img/bread_plate.png" alt="bread">
          <figcaption class="br-value">X {{productsValue.bread.value}}</figcaption>
        </figure>
      </div>
      <div class="salami">
        <figure>
          <img src="img/salami_plate.png" alt="salami">
          <figcaption class="sal-value">X {{productsValue.salami.value}}</figcaption>
        </figure>
      </div>
      <div class="group-food">
          <img src="img/group.png" alt="group">
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
  left: 660px;
  filter: drop-shadow(3px 5px 5px rgb(82, 73, 73));
}

.cheese {
  position: absolute;
  font-size: 36px;
  color: #5b5e63;
  right: 280px;
  bottom: 350px;
}

.che-value{
  position: relative;
  display: inline-block;
  top: -200px;
  right: -30px;
  margin: 0;
  
}

.cucumber {
  display: inline-block;
  position: absolute;
  font-size: 36px;
  color: #5b5e63;
  right: 70px;
  bottom: 420px;
}

.cuc-value{
  position: relative;
  display: inline-block;
  margin: 0;
  top: -125px;
  left: 35px
}

.bread {
  position: absolute;
  font-size: 36px;
  color: #5b5e63;
  right: 300px;
  bottom: 90px;
}

.br-value {
  position: relative;
  display: inline-block;
  right: 255px;
  bottom: -25px;
  margin: 0;
}

.salami {
  position: absolute;
  font-size: 36px;
  color: #5b5e63;
  right: -20px;
  bottom: 130px;
}

.sal-value {
  position: relative;
  display: inline-block;
  right: 60px;
  bottom: -65px;
  margin: 0;
}

.group-food {
  position: absolute;
  font-size: 36px;
  color: #5b5e63;
  right: 180px;
  bottom: 210px;
}
</style>