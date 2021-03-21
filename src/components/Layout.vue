<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot/>
    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
import x from '@assets/icons/label.svg'

export default {
  name: 'Layout'
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid green;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  border: 1px solid blue;
  overflow: auto;
  flex-grow: 1;
}
</style>