<template>
  <div class="container">
      <img src="img/design.jpg">
      <h3>Dear Mr @esqeemocallboy</h3>
      <p class="parag">Thank you very much for your design in Figma :)</p>
  </div>
</template>

<script>
export default {
    name: 'FkAbout'
}
</script>

<style scoped>
.container {
  display: block;
  width: 800px;
  max-width: 800px;
  height: 200px;
  margin-top: 100px;
  margin-left: 360px;
  font-size: 30px;
  font-family: 'Inter', sans-serif;
}

.img {
  display: inline-block;
  width: 200px;
  height: auto;
}

.h3 {
  display: inline-block;
}

.parag {
  font-size: 30px;
  margin: 0;
}
</style>