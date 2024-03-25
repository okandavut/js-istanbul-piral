<template>
  <button class="btn btn-success" @click="addToCart(params)">Buy {{item}} here 1</button>
</template>

<script>
export default {
  name: "buy-button",
  props: ["addToCart", "params"],
}
</script>

<style>

</style>