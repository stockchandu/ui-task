<template>
  <div>
    <div>{{ $store.state.count }}</div>
    <div class="square__number">
      {{ $store.state.count }}
      <sup>2</sup> =
      {{ $store.getters.squareNumbered }}
    </div>
    <button @click="$store.commit('increment')">Increment</button>
    <button @click="$store.dispatch('increaseCounter')">Decrement</button>
  </div>
</template>

<script>
// import { store } from "@/store/store.js";
export default {
  name: "CounterApp",
};
</script>

<style>
</style>