<template>
  <div class="home">
    <fk-top-bar />
    <router-view />
  </div>
</template>

<script>
import FkTopBar from '@/components/TopBar'


export default {
  name: 'McvApp',
  components: {
    FkTopBar
  }
}
</script>
