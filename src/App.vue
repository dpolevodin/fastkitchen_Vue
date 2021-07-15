<template>
  <div class="home">
    <fc-top-bar />
    <router-view />
  </div>
</template>

<script>
import FcTopBar from '@/components/TopBar'

export default {
  name: 'McvApp',
  components: {
    FcTopBar
  }
}
</script>