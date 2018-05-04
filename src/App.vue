<template>
  <div id="app">
    <product-list-one v-bind:products="products"></product-list-one>
    <product-list-two v-bind:products="products"></product-list-two>
  </div>
</template>

<script>
import ProductListOne from './components/ProductListOne.vue';
import ProductListTwo from './components/ProductListTwo.vue';


export default {
  components: {
    'product-list-one': ProductListOne,
    'product-list-two': ProductListTwo
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
body{
  font-family: Arial, Helvetica, sans-serif;
  color: #555;
}
</style>
