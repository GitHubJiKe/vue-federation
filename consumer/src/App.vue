<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <OtherComp />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const OtherComp = defineAsyncComponent(() => import("host/HelloWorld"));
@Component({
  components: {
    HelloWorld,
    OtherComp
  },
})
export default class App extends Vue { }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
