<template>
  <div class="singleOrderCard">
      <div class="singleOrderCardDiv">
          <!-- as soon as I add images I have a problem -->
          <!-- <img :src="require('../assets/' + order.image)" alt="{{order.title}}" class="singleOrderCardImage" /> -->
      </div>    
    <h3>{{order.title}}</h3> 
    <span>{{order.price}}</span>
  </div>
</template>

<script>
export default {
    name: "HelloOne",
    props: ["order"],
    setup() {
    },
}
</script>

<style>
.singleOrderCard {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center; 
}

.singleOrderCardDiv {
  width: 120px;
  height: 120px;
}

.singleOrderCardImage {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}



</style>