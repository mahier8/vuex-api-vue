<template>
<h1>Made By Actions</h1>
  <div class="order-list">
    <!-- this is where i pass in the users array -->
    <div v-for='order in orders' :key='order.id'>
      <HelloOne :order="order" />  
    </div>
    
  </div>
</template>

<script setup>
import HelloOne from "../components/HelloOne.vue"
import { onMounted, computed } from 'vue';
//import the global store object from Vuex
import {useStore} from 'vuex'
// declare the store variable
const store = useStore();


// I get a computed ref here, but it is the users array
const orders = computed(() => {
  return store.state.orders
})

onMounted(() => {
// dispatch the fetchUsers action which commits a mutation to update the state
  store.dispatch("fetchUsers");
})
</script>
<style>
.order-list {
  display: flex;
  flex-wrap: wrap;
}
</style>