<template>
<div class="bg">
  <div class="container">
      <p>
        We prepare fresh homemade sandwiches and send them directly to you without intermediaries
      </p>
      <div>
        <div class="group-food">
          <router-link :to="{name: 'orders'}">
            <img src="img/group.png" alt="group">
            <span class="btn-about">Go to the kitchen</span>
          </router-link> 
      </div>
      </div>
  </div>
</div>
  
</template>

<script>
export default {
    name: 'FkAbout'
}
</script>

<style scoped>
.container {
  display: inline-block;
  width: 300px;
  max-width: 400px;
  height: 200px;
  margin-top: 100px;
  margin-left: 400px;
  font-size: 30px;
}

.bg {
  height: 960px;
  font-family: 'Inter', sans-serif;
  background: url(/img/bg.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

span {
  display: block;
  position: relative;
  right: -40px;
}

img {
  position: relative;
  display: block;
  float: right;
  width: 200px;
  height: 200px;

}

p {
  display: inline-block;
  text-align: center;
  width: 1000px;
  font-size: 50px;
  position: absolute;
  margin-right: 400px;
  margin-bottom: 150px;
}

.group-food {
  display: block;
  position: absolute;
  margin-right: 700px;
  margin-bottom: 150px;
  filter: drop-shadow(3px 5px 5px rgb(82, 73, 73));
}


</style>