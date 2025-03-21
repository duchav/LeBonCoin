<script setup>
const props = defineProps({
  title: String,
  couleur: String,
})
const mycolor = `background-color : var(${props.couleur})`
console.log(mycolor)
</script>

<template>
  <button :style="mycolor"><font-awesome-icon :icon="['far', 'plus-square']" />{{ title }}</button>
</template>

<style scoped>
button {
  
  border: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
  height: 36px;
  font-weight: bold;
}
button > svg {
  margin-right: 5px;
}
</style>
