<template>
  <div id="app">
    <p>
      <router-link to="/page1">Go to page1</router-link>
      &nbsp;
      <router-link to="/page2">Go to page2</router-link>
    </p>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>